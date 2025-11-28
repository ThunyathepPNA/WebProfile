import { FaGithub, FaFacebook } from "react-icons/fa";
import * as Tooltip from "@radix-ui/react-tooltip";

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 pb-4">
      <div className="flex flex-col">
        <span className="text-xs uppercase tracking-[0.2em] text-yellow-400">
          Portfolio
        </span>
        <h1 className="text-xl font-semibold">Thunyathep PNA</h1>
      </div>

      <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
        <a href="#about" className="hover:text-yellow-400 transition-colors">
          About
        </a>
        <a href="#skills" className="hover:text-yellow-400 transition-colors">
          Skills
        </a>
        <a
          href="#projects"
          className="hover:text-yellow-400 transition-colors"
        >
          Projects
        </a>
        <a href="#contact" className="hover:text-yellow-400 transition-colors">
          Contact
        </a>
      </nav>

      <Tooltip.Provider>
        <div className="flex gap-3 text-xl">
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <a
                href="https://github.com/ThunyathepPNA"
                target="_blank"
                className="hover:text-yellow-400 transition-colors"
              >
                <FaGithub />
              </a>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="rounded bg-slate-800 px-2 py-1 text-xs text-slate-100 shadow">
                GitHub
                <Tooltip.Arrow className="fill-purple-700" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>

          {/* <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="hover:text-yellow-400 transition-colors"
              >
                <FaLinkedin />
              </a>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="rounded bg-slate-800 px-2 py-1 text-xs text-slate-100 shadow">
                LinkedIn
                <Tooltip.Arrow className="fill-slate-800" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root> */}

          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <a
                href="https://www.facebook.com/Folk.Thunyato"
                target="_blank"
                className="hover:text-yellow-400 transition-colors"
              >
                <FaFacebook />
              </a>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="rounded bg-slate-800 px-2 py-1 text-xs text-slate-100 shadow">
                Facebook
                <Tooltip.Arrow className="fill-slate-800" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </div>
      </Tooltip.Provider>
    </header>
  );
}
