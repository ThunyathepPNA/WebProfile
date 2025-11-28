import * as Tabs from "@radix-ui/react-tabs";
import {
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaNodeJs,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiEspressif } from "react-icons/si";

export function Skills() {
  return (
    <section id="skills" className="mt-12">
      <h3 className="text-lg font-semibold mb-4">Skills</h3>

      <Tabs.Root
        defaultValue="frontend"
        className="flex flex-col gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-4"
      >
        <Tabs.List className="flex gap-2 rounded-lg bg-slate-900 p-1 text-xs md:text-sm">
          <Tabs.Trigger
            value="frontend"
            className="flex-1 rounded-md px-3 py-2
      data-[state=active]:bg-yellow-400
      data-[state=active]:text-slate-950
      data-[state=active]:shadow
      transition-colors"
          >
            Frontend
          </Tabs.Trigger>
          <Tabs.Trigger
            value="backend"
            className="flex-1 rounded-md px-3 py-2
      data-[state=active]:bg-yellow-400
      data-[state=active]:text-slate-950
      data-[state=active]:shadow
      transition-colors"
          >
            Backend & Tools
          </Tabs.Trigger>
          <Tabs.Trigger
            value="hardware"
            className="flex-1 rounded-md px-3 py-2
      data-[state=active]:bg-yellow-400
      data-[state=active]:text-slate-950
      data-[state=active]:shadow
      transition-colors"
          >
            Hardware & Others
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="frontend" className="mt-2 space-y-3 text-sm">
          <p className="text-slate-300">
            Modern frontend stack with component-based design and responsive UI.
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            <SkillItem icon={<FaReact />} label="React" />
            <SkillItem icon={<SiTypescript />} label="TypeScript" />
            <SkillItem icon={<FaJsSquare />} label="JavaScript (ES6+)" />
            <SkillItem icon={<SiTailwindcss />} label="Tailwind CSS" />
            <SkillItem icon={<FaCss3Alt />} label="CSS / Flex / Grid" />
            <SkillItem icon={<FaFigma />} label="Figma (UI/UX)" />
          </div>
        </Tabs.Content>

        <Tabs.Content value="backend" className="mt-2 space-y-3 text-sm">
          <p className="text-slate-300">
            Basic backend and tooling experience for full-stack projects.
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            <SkillItem icon={<FaNodeJs />} label="Node.js (basic)" />
            <SkillItem icon={<FaGithub />} label="Git / GitHub" />
            <SkillItem icon={<FaReact />} label="Vite / SPA" />
          </div>
        </Tabs.Content>

        <Tabs.Content value="hardware" className="mt-2 space-y-3 text-sm">
          <p className="text-slate-300">
            Embedded systems and IoT projects combining hardware and software.
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            <SkillItem icon={<SiEspressif />} label="ESP32 / Arduino" />
            <SkillItem icon={<FaReact />} label="Smart Classroom Clock" />
            <SkillItem icon={<FaReact />} label="Automatic Dog Feeder" />
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </section>
  );
}

interface SkillItemProps {
  icon: React.ReactNode;
  label: string;
}

function SkillItem({ icon, label }: SkillItemProps) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-purple-600/60 bg-slate-900/60 px-2 py-2 text-sm">
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
