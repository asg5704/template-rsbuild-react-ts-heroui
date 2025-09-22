import { HeroUIProvider, Link } from "@heroui/react";
import "./App.css";

export default function App() {
  return (
    <HeroUIProvider>
      <main className="dark text-foreground min-h-screen flex justify-center items-center">
        <div className="text-center">
          <span className="text-5xl">🔥</span>
          <h1 className="text-5xl">Hero UI + Rsbuild + React + TypeScript</h1>
          <p className="text-lg mt-2">
            Start building amazing things with React, Hero UI, and RSBuild
          </p>
          <ul className="mt-4 flex justify-center gap-x-4">
            <li>
              <Link
                href="https://heroui.com"
                isExternal
                showAnchorIcon
                color="primary"
                underline="always"
              >
                HeroUI
              </Link>
            </li>
            <li>
              <Link
                href="https://rsbuild.rs"
                isExternal
                showAnchorIcon
                color="primary"
                underline="always"
              >
                RSBuild
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </HeroUIProvider>
  );
}
