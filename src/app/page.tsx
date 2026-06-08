import {
  ArrowUpRight,
  ExternalLink,
  GitBranch,
  Mail,
  MapPin,
  MoveRight,
} from "lucide-react";

import { CanvasAtlas } from "@/components/canvas-atlas";
import { contactLinks, profile, projects } from "@/data/portfolio";

const featuredProjects = projects.filter((project) => project.featured);
const archiveProjects = projects.filter((project) => !project.featured);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4efe4] text-[#16130f]">
      <section className="relative min-h-[92svh] overflow-hidden border-b border-[#16130f]/20">
        <CanvasAtlas />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,239,228,0.94)_0%,rgba(244,239,228,0.44)_45%,rgba(244,239,228,0.18)_100%)]" />

        <div className="relative z-10 flex min-h-[92svh] flex-col justify-between px-5 py-5 sm:px-8 lg:px-12">
          <header className="flex items-start justify-between gap-6 border-b border-[#16130f]/25 pb-4 text-[0.68rem] uppercase tracking-[0.28em] text-[#423d35]">
            <a href="#top" className="cursor-pointer transition-colors hover:text-[#b42318]">
              {profile.name}
            </a>
            <nav
              aria-label="Primary navigation"
              className="hidden items-center gap-7 sm:flex"
            >
              <a className="cursor-pointer transition-colors hover:text-[#b42318]" href="#work">
                Work
              </a>
              <a className="cursor-pointer transition-colors hover:text-[#b42318]" href="#about">
                About
              </a>
              <a className="cursor-pointer transition-colors hover:text-[#b42318]" href="#contact">
                Contact
              </a>
            </nav>
            <span className="text-right">{profile.availability}</span>
          </header>

          <div id="top" className="grid gap-10 py-12 lg:grid-cols-[1fr_0.46fr] lg:items-end">
            <div>
              <p className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-[#6f675c]">
                <span className="h-px w-12 bg-[#b42318]" />
                Portfolio Issue 01
              </p>
              <h1 className="font-display max-w-[11ch] text-[clamp(4.7rem,16vw,14rem)] font-medium uppercase leading-[0.78] tracking-normal">
                {profile.name}
              </h1>
            </div>

            <aside className="max-w-xl border-t border-[#16130f]/30 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="text-sm uppercase tracking-[0.26em] text-[#b42318]">
                {profile.role}
              </p>
              <p className="mt-5 text-balance text-xl leading-8 text-[#27231d] sm:text-2xl sm:leading-9">
                {profile.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-[8px] bg-[#16130f] px-4 text-sm font-semibold text-[#f4efe4] transition-colors hover:bg-[#b42318] focus:outline-none focus:ring-2 focus:ring-[#b42318] focus:ring-offset-2 focus:ring-offset-[#f4efe4]"
                >
                  <Mail size={16} aria-hidden="true" />
                  联系我
                </a>
                <a
                  href="#work"
                  className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-[8px] border border-[#16130f]/30 px-4 text-sm font-semibold text-[#16130f] transition-colors hover:border-[#b42318] hover:text-[#b42318] focus:outline-none focus:ring-2 focus:ring-[#b42318] focus:ring-offset-2 focus:ring-offset-[#f4efe4]"
                >
                  查看作品
                  <MoveRight size={16} aria-hidden="true" />
                </a>
              </div>
            </aside>
          </div>

          <div className="grid gap-4 border-t border-[#16130f]/25 pt-4 text-xs uppercase tracking-[0.22em] text-[#5f574d] sm:grid-cols-3">
            <p className="flex items-center gap-2">
              <MapPin size={14} aria-hidden="true" />
              {profile.location}
            </p>
            <p>Canvas / Editorial / Product</p>
            <p className="sm:text-right">Scroll for selected works</p>
          </div>
        </div>
      </section>

      <section id="work" className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mb-12 grid gap-8 border-b border-[#16130f]/25 pb-8 lg:grid-cols-[0.6fr_1fr]">
          <p className="text-xs uppercase tracking-[0.34em] text-[#b42318]">
            Selected Work
          </p>
          <h2 className="font-display text-balance text-5xl font-medium leading-[0.95] tracking-normal sm:text-7xl lg:text-8xl">
            A working archive of interfaces, systems and visual experiments.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group cursor-pointer border-t border-[#16130f]/35 pt-5 transition-colors hover:border-[#b42318]"
            >
              <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.26em] text-[#6f675c]">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-display mt-6 text-5xl font-medium leading-none tracking-normal sm:text-6xl">
                {project.title}
              </h3>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#423d35]">
                {project.summary}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-[6px] border border-[#16130f]/25 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#423d35]"
                  >
                    {item}
                  </span>
                ))}
                <span className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-[#b42318]">
                  Open
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 border-y border-[#16130f]/25">
          {archiveProjects.map((project, index) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group grid cursor-pointer gap-5 border-b border-[#16130f]/20 py-6 transition-colors last:border-b-0 hover:text-[#b42318] md:grid-cols-[0.12fr_0.28fr_1fr_0.18fr]"
            >
              <span className="text-xs uppercase tracking-[0.26em] text-[#6f675c]">
                {String(index + featuredProjects.length + 1).padStart(2, "0")}
              </span>
              <span className="text-sm uppercase tracking-[0.2em] text-[#6f675c]">
                {project.category}
              </span>
              <span className="font-display text-3xl leading-none tracking-normal sm:text-4xl">
                {project.title}
              </span>
              <span className="flex items-center justify-between gap-4 text-sm uppercase tracking-[0.18em] text-[#6f675c] md:justify-end">
                {project.year}
                <ExternalLink
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="grid border-y border-[#16130f]/25 bg-[#17130f] text-[#f4efe4] lg:grid-cols-[0.42fr_1fr]"
      >
        <div className="border-b border-[#f4efe4]/20 px-5 py-10 sm:px-8 lg:border-b-0 lg:border-r lg:px-12 lg:py-16">
          <p className="text-xs uppercase tracking-[0.34em] text-[#d8cbbb]">
            Method
          </p>
        </div>
        <div className="px-5 py-10 sm:px-8 lg:px-12 lg:py-16">
          <p className="font-display max-w-5xl text-balance text-4xl font-medium leading-[1.02] tracking-normal sm:text-6xl">
            I shape placeholder ideas into launchable surfaces: structured
            content, precise front-end systems, and expressive motion that still
            respects performance.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {["Strategy", "Interface", "Delivery"].map((item, index) => (
              <div key={item} className="border-t border-[#f4efe4]/25 pt-5">
                <span className="text-xs uppercase tracking-[0.28em] text-[#bcae9e]">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{item}</h3>
                <p className="mt-3 leading-7 text-[#d8cbbb]">
                  {index === 0 &&
                    "先明确页面服务的目标、受众和叙事节奏，再决定信息顺序。"}
                  {index === 1 &&
                    "用排版、细线、留白和交互状态建立有辨识度的视觉系统。"}
                  {index === 2 &&
                    "把体验落实为可构建、可部署、可替换内容的数据结构。"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.52fr] lg:items-end">
          <h2 className="font-display text-balance text-6xl font-medium uppercase leading-[0.88] tracking-normal sm:text-8xl lg:text-9xl">
            Let&apos;s build the next issue.
          </h2>
          <div>
            <p className="text-xl leading-8 text-[#423d35]">
              这是一版可上线的占位作品集。把真实姓名、项目链接和简介替换到数据文件后，
              页面结构和动效可以继续沿用。
            </p>
            <div className="mt-8 grid gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex min-h-12 cursor-pointer items-center justify-between rounded-[8px] border border-[#16130f]/25 px-4 py-3 font-semibold transition-colors hover:border-[#b42318] hover:text-[#b42318] focus:outline-none focus:ring-2 focus:ring-[#b42318] focus:ring-offset-2 focus:ring-offset-[#f4efe4]"
                >
                  <span className="inline-flex items-center gap-2">
                    {link.label === "GitHub" ? (
                      <GitBranch size={17} aria-hidden="true" />
                    ) : (
                      <Mail size={17} aria-hidden="true" />
                    )}
                    {link.label}
                  </span>
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
