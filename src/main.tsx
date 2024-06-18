import { RouterProvider, createRouter } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import "./index.css";

// Import the generated route tree
import { AuthProvider } from "./context/auth-context";
import { ThemeProvider } from "./context/theme-context";
import { useAuth } from "./hooks/use-auth-context";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree, context: undefined! });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function InnerApp() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ authContext: auth }} />;
}

function App() {
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  );
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
  );
}
