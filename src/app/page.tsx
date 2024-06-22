"use client"
import Image from "next/image";
import { useState } from "react";
import Header from "./components/Header";

export default function Home() {
  const [hardMode, setHardMode] = useState(false);

  function changeMode() {
    setHardMode(!hardMode);
  }

  return (
    <main className="flex flex-col items-center justify-between p-2 gradient-circle">
      <Header advanced={hardMode} score={0} />

      <footer className="w-full flex justify-between py-1 px-5 fixed bottom-7">
        <button onClick={changeMode} className="footer-btns">
          {hardMode ? "Advanced" : "Normal"} Mode
        </button>

          <button className="footer-btns">Rules</button>

      </footer>

    </main>
  );
}
