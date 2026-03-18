"use client";

import { useEffect, useMemo, useState } from "react";

export function useTypewriter(text: string, opts?: { speedMs?: number; pauseMs?: number }) {
  const speedMs = opts?.speedMs ?? 35;
  const pauseMs = opts?.pauseMs ?? 900;

  const chars = useMemo(() => Array.from(text), [text]);
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setIdx(0);
    setPaused(false);
  }, [text]);

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => setPaused(false), pauseMs);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setIdx((i) => {
        if (i >= chars.length) {
          setPaused(true);
          return i;
        }
        return i + 1;
      });
    }, speedMs);
    return () => clearTimeout(t);
  }, [chars.length, paused, pauseMs, speedMs]);

  const value = chars.slice(0, idx).join("");
  const done = idx >= chars.length;

  return { value, done };
}

