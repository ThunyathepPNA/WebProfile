import * as Avatar from "@radix-ui/react-avatar";

export function Hero() {
  return (
    <section className="mt-8 flex flex-col items-start gap-6 md:flex-row md:items-center">
      <Avatar.Root className="h-28 w-28 shrink-0 overflow-hidden rounded-full border border-slate-700 bg-slate-900">
        <Avatar.Image
          src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t51.75761-15/464940797_18467834698027684_5788556196143162700_n.jpg?stp=dst-jpegr_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ITKGH-vMrKsQ7kNvwHeIoYt&_nc_oc=AdkiMCwstBQo0KokBP8NKd8QcVxoDMFGZXs3uo75e_wgvQDvUVR3uJs4hgSpb6_n2sED3FL1xfvFqrlLmAaBURQN&_nc_zt=23&se=-1&_nc_ht=scontent.fbkk29-8.fna&_nc_gid=4VHAWX4evJIbgcTOYUCKZw&oh=00_AfhAsNkDmUZhaZMWdBenwV51E17LxDkfErbBrPr9JYV7HQ&oe=692F7EFC"
          alt="Profile"
          className="h-full w-full object-cover"
        />
        <Avatar.Fallback className="flex h-full w-full items-center justify-center bg-slate-800 text-3xl font-semibold">
          T
        </Avatar.Fallback>
      </Avatar.Root>

      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-yellow-400">
          Frontend Developer · Computer Engineering Student
        </p>
        <h2 className="text-3xl font-semibold md:text-4xl">
          Hi, I&apos;m <span className="text-purple-400">Thunyathep</span>.
        </h2>
        <p className="max-w-xl text-sm text-slate-300 md:text-base">
          I&apos;m a Computer Engineering student who loves building web apps,
          designing UI with Figma, and working on embedded projects like smart
          classroom clocks and IoT devices.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#projects"
            className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-medium text-slate-950 shadow hover:bg-yellow-300 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-purple-500 px-4 py-2 text-sm text-slate-200 hover:border-yellow-400 hover:text-yellow-300 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
