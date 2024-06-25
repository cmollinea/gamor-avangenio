# Gamor - Revolutionizing Game Streaming

Gamor is a cutting-edge game streaming platform designed to provide seamless streaming, interactive gameplay, and a vibrant community. This project leverages a modern tech stack to deliver an exceptional user experience.

![Gamor Screenshot](/public/example.png)


## Tech Stack

- **TanStack Router**: For type-safe routing, ensuring reliable and maintainable navigation within the app.
- **Supabase**: Handles authentication, providing secure and efficient user management.
- **React Query**: Manages server state, offering powerful data synchronization and caching capabilities.

## Video Example

<iframe width="400" height="300" src="/public/example.webm" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/gamor-avangenio.git
    cd gamor-avangenio
    ```

2. **Install dependencies**:

    ```bash
    pnpm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and add your Supabase credentials and other necessary configurations:

    ```bash
VITE_SUPABASE_URL= Your Supabase url;
VITE_SUPABASE_ANON_KEY= Your Supabase annon key;
VITE_RAPID_API_KEY= Your Rapid Api key;
VITE_BASE_GAMES_URL=  <https://free-to-play-games-database.p.rapidapi.com/api/games>;

   ```

1. **Run the development server**:

    ```bash
    pnpm dev
    ```

---
