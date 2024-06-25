# Gamor - Revolutionizing Game Streaming

Gamor is a cutting-edge game streaming platform designed to provide seamless streaming, interactive gameplay, and a vibrant community. This project leverages a modern tech stack to deliver an exceptional user experience.

![Gamor Screenshot](/public/example.png)


## Tech Stack

- **TanStack Router**: For type-safe routing, ensuring reliable and maintainable navigation within the app.
- **Supabase**: Handles authentication, providing secure and efficient user management.
- **React Query**: Manages server state, offering powerful data synchronization and caching capabilities.

## Video Example

[Gamor in Action!](/public/example.webm)

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

To run this project, you will need to add the following environment variables to your `.env` file:

| Variable                | Description                                        |
|-------------------------|----------------------------------------------------|
| `VITE_SUPABASE_URL`     | The URL of your Supabase project.                  |
| `VITE_SUPABASE_ANON_KEY`| The anonymous key for your Supabase project.       |
| `VITE_RAPID_API_KEY`    | Your Rapid API key for accessing Rapid API services.|
| `VITE_BASE_GAMES_URL`   | <https://free-to-play-games-database.p.rapidapi.com/api/games>|

1. **Run the development server**:

    ```bash
    pnpm dev
    ```

---
