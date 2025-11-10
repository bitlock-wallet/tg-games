"use client";

import LumberjackGame from "@/src/components/LumberjackGame"; // use relative path to components

export default function LumberjackPage() {
  // The main page is now a client component, which is needed for the game logic.
  return (
    <main className="flex min-h-screen items-center justify-center p-4 bg-black">
      {/* The game component handles its own layout/styling */}
      <LumberjackGame />
    </main>
  );
}