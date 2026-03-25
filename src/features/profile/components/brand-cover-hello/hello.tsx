"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const phrases = [
  "Backend-first full-stack developer",
  "I build internal tools, admin systems, and APIs",
  "Strongest in workflow-driven product work",
] as const;

const TYPE_DELAY_MS = 90;
const DELETE_DELAY_MS = 55;
const HOLD_DELAY_MS = 1200;
const NEXT_PHRASE_DELAY_MS = 350;

export function Hello() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting && visibleText === currentPhrase) {
      const timeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, HOLD_DELAY_MS);

      return () => window.clearTimeout(timeout);
    }

    if (isDeleting && visibleText === "") {
      const timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((currentIndex) => (currentIndex + 1) % phrases.length);
      }, NEXT_PHRASE_DELAY_MS);

      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(
      () => {
        setVisibleText(
          isDeleting
            ? currentPhrase.slice(0, visibleText.length - 1)
            : currentPhrase.slice(0, visibleText.length + 1)
        );
      },
      isDeleting ? DELETE_DELAY_MS : TYPE_DELAY_MS
    );

    return () => window.clearTimeout(timeout);
  }, [isDeleting, phraseIndex, visibleText]);

  return (
    <div className="flex size-full items-center justify-center px-6">
      <motion.div
        id="js-cover-mark"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="flex items-center justify-center text-center"
      >
        <p className="font-mono text-xl tracking-tight text-black sm:text-3xl dark:text-white">
          {visibleText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            className="ml-0.5 inline-block"
            aria-hidden
          >
            |
          </motion.span>
        </p>
      </motion.div>
    </div>
  );
}
