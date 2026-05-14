'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from './page';

const TABS = ['All', 'Commercial', 'Residential'] as const;
type Tab = (typeof TABS)[number];

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Tab>('All');

  const filtered =
    active === 'All'
      ? projects
      : projects.filter(
          (p) => p.type === active.toLowerCase(),
        );

  return (
    <>
      {/* ── Filter Tabs ── */}
      <div className="flex items-center gap-2 mb-12 flex-wrap">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`relative px-6 py-2.5 text-sm font-semibold uppercase tracking-widest rounded transition-colors ${
              active === tab
                ? 'bg-accent text-white'
                : 'bg-transparent text-muted hover:text-foreground border border-border hover:border-foreground/20'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── Bento Grid ── */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => {
            const isLarge = i === 0 || i === 3;
            return (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={isLarge ? 'md:col-span-2' : ''}
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group relative block overflow-hidden rounded-lg"
                >
                  <div
                    className={`relative w-full ${
                      isLarge ? 'aspect-[21/9]' : 'aspect-[3/2]'
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes={
                        isLarge
                          ? '(max-width: 768px) 100vw, 100vw'
                          : '(max-width: 768px) 100vw, 50vw'
                      }
                    />

                    {/* Default gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category badge — appears on hover */}
                    <span className="absolute top-5 left-5 text-xs uppercase tracking-widest text-white bg-accent/90 px-3 py-1 rounded opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {project.category}
                    </span>

                    {/* Title overlay */}
                    <div className="absolute bottom-6 left-6 right-6 z-10">
                      <span className="text-xs uppercase tracking-widest text-accent mb-2 block">
                        {project.type}
                      </span>
                      <h3
                        className="text-xl md:text-2xl font-bold text-white"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
