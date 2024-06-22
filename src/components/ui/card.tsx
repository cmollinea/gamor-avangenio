import { cn } from "../../lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  title?: string;
};

const Card = ({ children, className, title }: Props) => {
  return (
    <div
      title={title && title}
      className={cn(
        "flex flex-col overflow-hidden rounded-xl bg-card-background py-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className }: Props) => {
  return (
    <div className={cn("flex items-center px-10 py-4", className)}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, className }: Props) => {
  return <h4 className={cn("text-xl font-semibold", className)}>{children}</h4>;
};

const CardContent = ({ children, className }: Props) => {
  return <div className={cn("flex flex-col p-6", className)}>{children}</div>;
};

const CardFooter = ({ children, className }: Props) => {
  return (
    <div className={cn("flex flex-col p-2 px-6", className)}>{children}</div>
  );
};

export { Card, CardContent, CardFooter, CardHeader, CardTitle };
