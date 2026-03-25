import { ArrowUpRightIcon, InfinityIcon, LinkIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Icons } from "@/components/icons";
import { Markdown } from "@/components/markdown";
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { Tag } from "@/components/ui/tag";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { Prose } from "@/components/ui/typography";
import { UTM_PARAMS } from "@/config/site";
import { addQueryParams } from "@/utils/url";

import type { Project } from "../../types/projects";
import { ProjectScreenshots } from "./project-screenshots";

export function ProjectItem({
  className,
  project,
}: {
  className?: string;
  project: Project;
}) {
  const { start, end } = project.period;
  const isOngoing = !end;
  const primaryLink = project.links?.[0]?.href ?? project.link;

  return (
    <CollapsibleWithContext defaultOpen={project.isExpanded} asChild>
      <div className={className}>
        <div className="flex items-center hover:bg-accent2">
          {project.logo ? (
            <Image
              src={project.logo}
              alt={project.title}
              width={32}
              height={32}
              quality={100}
              className="mx-4 flex size-6 shrink-0 select-none"
              unoptimized
              aria-hidden="true"
            />
          ) : (
            <div
              className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background select-none"
              aria-hidden="true"
            >
              <Icons.project className="size-4" />
            </div>
          )}

          <div className="flex flex-1 items-center border-l border-dashed border-edge">
            <CollapsibleTrigger className="flex min-w-0 flex-1 items-center gap-4 p-4 pr-2 text-left select-none">
              <div className="min-w-0 flex-1">
                <h3 className="mb-1 leading-snug font-medium text-balance">
                  {project.title}
                </h3>

                <dl className="text-sm text-muted-foreground">
                  <dt className="sr-only">Period</dt>
                  <dd className="flex items-center gap-0.5">
                    <span>{start}</span>
                    <span className="font-mono">-</span>
                    {isOngoing ? (
                      <>
                        <InfinityIcon
                          className="size-4.5 translate-y-[0.5px]"
                          aria-hidden
                        />
                        <span className="sr-only">Present</span>
                      </>
                    ) : (
                      <span>{end}</span>
                    )}
                  </dd>
                </dl>
              </div>
            </CollapsibleTrigger>

            {project.links?.length ? (
              <div className="hidden shrink-0 items-center gap-1 pr-2 sm:flex">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={addQueryParams(link.href, UTM_PARAMS)}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1 rounded-md border border-edge px-2 py-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                    <ArrowUpRightIcon className="size-3" />
                  </a>
                ))}
              </div>
            ) : primaryLink ? (
              <div className="shrink-0 pr-2">
                <SimpleTooltip content="Open Project Link">
                  <a
                    className="relative flex size-6 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                    href={addQueryParams(primaryLink, UTM_PARAMS)}
                    target="_blank"
                    rel="noopener"
                  >
                    <LinkIcon className="pointer-events-none size-4" />
                    <span className="sr-only">Open Project Link</span>
                  </a>
                </SimpleTooltip>
              </div>
            ) : null}

            <div
              className="shrink-0 pr-2 text-muted-foreground [&_svg]:size-4"
              aria-hidden
            >
              <CollapsibleChevronsIcon />
            </div>
          </div>
        </div>

        <CollapsibleContent className="group overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="border-t border-edge shadow-inner">
            <div className="space-y-4 p-4 duration-300 group-data-[state=closed]:animate-fade-out group-data-[state=open]:animate-fade-in">
              {project.description && (
                <Prose>
                  <Markdown>{project.description}</Markdown>
                </Prose>
              )}

              {project.screenshots?.length ? (
                <ProjectScreenshots
                  screenshots={project.screenshots}
                  viewerSize={project.screenshotViewerSize}
                />
              ) : null}

              {project.skills.length > 0 && (
                <ul className="flex flex-wrap gap-1.5">
                  {project.skills.map((skill, index) => (
                    <li key={index} className="flex">
                      <Tag>{skill}</Tag>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </CollapsibleWithContext>
  );
}
