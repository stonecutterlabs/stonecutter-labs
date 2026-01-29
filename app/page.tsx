"use client";

import Image from "next/image";
import { Mail, Github, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // const projects = [
  //   {
  //     name: 'Project Alpha',
  //     description: 'A productivity tool for focused work',
  //     status: 'Live',
  //   },
  //   {
  //     name: 'Project Beta',
  //     description: 'Analytics dashboard for creators',
  //     status: 'In Development',
  //   },
  //   {
  //     name: 'Project Gamma',
  //     description: 'API monitoring service',
  //     status: 'Planning',
  //   },
  // ]

  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="mx-auto max-w-4xl px-6">
        {/* Logo */}
        <div
          className={`mb-6 flex justify-center transition-all duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
          <Image
            src="/stonecutter-logo.png"
            alt="Stonecutter Labs"
            width={400}
            height={200}
            className="h-auto w-full max-w-sm dark:hidden"
            priority
          />
          <Image
            src="/stonecutter-logo-dark.png"
            alt="Stonecutter Labs"
            width={400}
            height={200}
            className="hidden h-auto w-full max-w-sm dark:block"
            priority
          />
        </div>

        {/* Contact */}
        <section
          className={`flex flex-col items-center transition-all delay-200 duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:hello@stonecutterlabs.com"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/stonecutterlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          </div>
        </section>

        {/* Projects */}
        {/* <section
          className={`transition-all delay-500 duration-1000 ${
            mounted ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
        >
          <h2 className="mb-8 text-balance text-center text-2xl font-semibold tracking-tight">
            Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className={`border-b border-border pb-6 transition-all last:border-0 ${
                  mounted
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: `${700 + index * 100}ms`,
                  transitionDuration: '1000ms',
                }}
              >
                <div className="mb-1 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-medium">{project.name}</h3>
                  <span className="text-sm text-muted-foreground">
                    {project.status}
                  </span>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        </section> */}
      </div>
    </main>
  );
}
