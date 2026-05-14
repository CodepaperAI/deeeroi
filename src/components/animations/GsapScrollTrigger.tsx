'use client';

import { useEffect, useState } from 'react';

type GsapInstance = typeof import('gsap').default;
type ScrollTriggerPlugin = typeof import('gsap/ScrollTrigger').default;

interface GsapContext {
  gsap: GsapInstance;
  ScrollTrigger: ScrollTriggerPlugin;
}

/**
 * Hook that dynamically imports GSAP and ScrollTrigger (SSR-safe).
 * Returns `{ gsap, ScrollTrigger }` once loaded, or `null` while loading.
 *
 * Usage:
 * ```tsx
 * const ctx = useGsap();
 * useEffect(() => {
 *   if (!ctx) return;
 *   const { gsap, ScrollTrigger } = ctx;
 *   // build your animation...
 * }, [ctx]);
 * ```
 */
export function useGsap(): GsapContext | null {
  const [ctx, setCtx] = useState<GsapContext | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);

      gsap.registerPlugin(ScrollTrigger);

      if (!cancelled) {
        setCtx({ gsap, ScrollTrigger });
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return ctx;
}

/**
 * Wrapper component that provides GSAP + ScrollTrigger to children
 * via a render-prop pattern.
 *
 * Usage:
 * ```tsx
 * <GsapScrollTrigger>
 *   {({ gsap, ScrollTrigger }) => (
 *     <YourAnimatedSection gsap={gsap} ScrollTrigger={ScrollTrigger} />
 *   )}
 * </GsapScrollTrigger>
 * ```
 */
export default function GsapScrollTrigger({
  children,
  fallback = null,
}: {
  children: (ctx: GsapContext) => React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const ctx = useGsap();

  if (!ctx) return <>{fallback}</>;

  return <>{children(ctx)}</>;
}
