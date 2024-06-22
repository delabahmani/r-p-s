"use client";
import Image from "next/image";
import { useState } from "react";
import Header from "./components/Header";
import Rules from "./components/Rules";

export default function Home() {
  const [hardMode, setHardMode] = useState(false);
  const [open, setOpen] = useState(false);

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
      <Rules open={open} advanced={hardMode} setOpen={() => setOpen(!open)} />
    </main>
  );
}
