import { FileUserIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

import { USER } from "@/features/profile/data/user";
import { decodeEmail } from "@/utils/string";

const email = decodeEmail(USER.email);

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">
        <div className="screen-line-before screen-line-after border-y border-edge px-4 py-5 text-center">
          <p className="font-mono text-sm text-balance text-muted-foreground">
            A strong fit for backend-heavy full-stack work involving internal
            tools, admin systems, and API-driven products from Davao,
            Philippines.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground">
            <a
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              href="https://github.com/Elliee13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="size-3.5" />
              GitHub
            </a>

            <a
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              href="https://www.linkedin.com/in/john-ellemeleck-p-austria-6b2a85302/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="size-3.5" />
              LinkedIn
            </a>

            <a
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              href={`mailto:${email}`}
            >
              <MailIcon className="size-3.5" />
              Email
            </a>

            <a
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              href="/resume/John_Austria_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileUserIcon className="size-3.5" />
              View Resume
            </a>
          </div>

          <p className="mt-4 font-mono text-xs text-muted-foreground">
            (c) 2026 {USER.displayName}
          </p>
        </div>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}
