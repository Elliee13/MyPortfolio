"use client";

import { XIcon } from "lucide-react";
import Image from "next/image";
import * as React from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ProjectScreenshot = {
  src: string;
  alt: string;
  caption?: string;
};

export function ProjectScreenshots({
  screenshots,
  viewerSize = "default",
}: {
  screenshots: ProjectScreenshot[];
  viewerSize?: "default" | "large";
}) {
  const dialogSizeClass =
    viewerSize === "large"
      ? "w-[min(99vw,1700px)] max-w-[min(99vw,1700px)]"
      : "w-[min(98vw,1500px)] max-w-[min(98vw,1500px)]";

  const imageHeightClass =
    viewerSize === "large" ? "max-h-[92vh]" : "max-h-[88vh]";

  return (
    <div
      className={`grid gap-3 ${screenshots.length > 1 ? "sm:grid-cols-3" : "max-w-xl"}`}
    >
      {screenshots.map((screenshot) => (
        <Dialog key={screenshot.src}>
          <figure className="space-y-2 rounded-xl border border-edge bg-muted/10 p-2">
            <DialogTrigger asChild>
              <button
                type="button"
                className="block cursor-zoom-in rounded-lg focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden"
                aria-label={`View ${screenshot.alt}`}
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={1200}
                  height={900}
                  className="h-48 w-full rounded-lg border border-edge/60 bg-background object-contain"
                />
              </button>
            </DialogTrigger>

            {screenshot.caption ? (
              <figcaption className="text-xs text-muted-foreground">
                {screenshot.caption}
              </figcaption>
            ) : null}
          </figure>

          <DialogContent
            className={`${dialogSizeClass} border-edge p-2 sm:p-3 [&>button:last-child]:hidden`}
          >
            <DialogHeader className="sr-only">
              <DialogTitle>{screenshot.alt}</DialogTitle>
              <DialogDescription>
                {screenshot.caption ?? screenshot.alt}
              </DialogDescription>
            </DialogHeader>

            <DialogClose className="absolute top-3 right-3 z-10 inline-flex size-10 items-center justify-center rounded-full border border-edge bg-background/95 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-accent">
              <XIcon className="size-4" />
              <span className="sr-only">Close image viewer</span>
            </DialogClose>

            <div className="flex min-h-[70vh] items-center justify-center overflow-hidden rounded-xl border border-edge/60 bg-background p-2 sm:min-h-[78vh] sm:p-3">
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={1600}
                height={1200}
                className={`h-auto ${imageHeightClass} w-full object-contain`}
                priority={false}
              />
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
