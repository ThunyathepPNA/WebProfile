interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Smart Classroom Clock",
    description:
      "ระบบนาฬิกาห้องเรียนอัจฉริยะ ใช้ ESP32, LED Matrix P5, NTP/RTC และเว็บสำหรับตั้งเวลาและตารางเรียน",
    tech: ["ESP32", "LED Matrix", "React", "TypeScript"],
    link: "https://github.com/ThunyathepPNA/web-classroom-clock",
  },
  {
    title: "Automatic Dog Feeder",
    description:
      "เครื่องให้อาหารสุนัขอัตโนมัติ เชื่อมต่อ IoT มีระบบตั้งเวลา, กล้อง และตรวจสอบน้ำหนักอาหาร",
    tech: ["ESP32", "Load Cell", "OpenCV (ต่อยอด)", "MQTT"],
    link: "https://github.com/mrapiiwat/Feedio",
  },
  {
    title: "E-Library Web Application",
    description:
      "เว็บ E-Library สำหรับจัดการหนังสือออนไลน์ มีระบบค้นหา, ฟิลเตอร์ และ UI ที่ออกแบบด้วย Figma",
    tech: ["React", "Tailwind", "TypeScript", "Figma"],
    link: "https://github.com/ThunyathepPNA/E-Library",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mt-12">
      <h3 className="text-lg font-semibold mb-4">Projects</h3>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col justify-between rounded-xl border border-purple-700/60 bg-slate-900/50 p-4"
          >
            <div className="space-y-2">
              <h4 className="text-base font-semibold">{project.title}</h4>
              <p className="text-sm text-slate-300">{project.description}</p>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-purple-700/50 px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="text-yellow-300 hover:text-yellow-200"
                >
                  View
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
