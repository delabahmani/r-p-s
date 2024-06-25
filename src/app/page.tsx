"use client";
import Image from "next/image";
import { use, useState } from "react";
import Header from "./components/Header";
import Rules from "./components/Rules";
import Play from "./components/Play";

export default function Home() {
  const [hardMode, setHardMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(-1);

  function changeMode() {
    setHardMode(!hardMode);
  }

  return (
    <main className="gradient-circle flex flex-col items-center justify-between p-2">
      <Header advanced={hardMode} score={0} />

      <footer className="fixed bottom-7 flex w-full justify-between px-5 py-1">
        <button onClick={changeMode} className="footer-btns">
          {hardMode ? "Advanced" : "Normal"} Mode
        </button>

        <button className="footer-btns" onClick={() => setOpen(!open)}>
          Rules
        </button>
      </footer>
      {selected >= 0 ? (
        <div>
          <h1>Results</h1>
        </div>
      ) : (
        <Play setSelected={(value) => setSelected(value)} advanced={hardMode} />
      )}
      <Rules open={open} advanced={hardMode} setOpen={() => setOpen(!open)} />
    </main>
  );
}
