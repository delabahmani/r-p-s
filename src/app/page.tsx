"use client";
import { useState } from "react";
import Header from "./components/Header";
import Rules from "./components/Rules";
import Play from "./components/Play";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [score, setScore] = useState(0);
  const [winner, setWinner] = useState("");

  const handlePlayAgain = () => {
    setSelected(-1);
    if (winner === "You Win!!") setScore(score + 1);
  }

  return (
    <main className="gradient-circle items-center p-2">
      <Header score={score} />

      <footer className="fixed bottom-7 justify-end flex w-full px-5 py-1">

        <button className="footer-btns " onClick={() => setOpen(!open)}>
          Rules
        </button>
      </footer>
      {selected >= 0 ? (
        <div>
          <h1>{winner}</h1>
          <button onClick={handlePlayAgain} className="mt-4 bg-white rounded-lg text-dark">Play Again</button>
        </div>
      ) : (
        <Play setSelected={setSelected} setWinner={setWinner} />
      )}
      <Rules open={open} setOpen={() => setOpen(!open)} />
    </main>
  );
}
