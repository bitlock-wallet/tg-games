"use client";

import LumberjackGame from "@/src/components/LumberjackGame/index"; // use relative path to components

export default function LumberjackPage() {
  // The main page uses a flex layout to ensure consistent sizing
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <LumberjackGame />
    </div>
  );
}