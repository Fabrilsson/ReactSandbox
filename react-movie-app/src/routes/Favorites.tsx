import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Favorites")({
  component: Favorites,
});

function Favorites() {
  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Star adding movies to your favorites and they will appear here.</p>
    </div>
  );
}

export default Favorites;
