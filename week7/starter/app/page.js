import { cards } from "../data/cards";

export default function Home() {
  return (
    <main className="page">
      <h1>Card Collection</h1>
      <p>{cards.length} cards in data/cards.js</p>
    </main>
  );
}
