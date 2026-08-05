"use client";

import { useEffect, useLayoutEffect } from "react";

/**
 * `useLayoutEffect` on the client, `useEffect` on the server.
 *
 * React warns when `useLayoutEffect` runs during SSR. The reveal and scroll
 * effects need to write styles before the browser paints — otherwise elements
 * flash in at full opacity and then jump to their hidden start state — so they
 * genuinely want the layout variant once mounted.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
