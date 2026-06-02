'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import type { PortfolioProject } from '@/lib/constants';

const TABS = [
  { label: 'All', value: 'all' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Residential', value: 'residential' },
] as const;

type Tab = (typeof TABS)[number]['value'];

export default function PortfolioGrid({
  projects,
}: {
  projects: readonly PortfolioProject[];
}) {
  const [active, setActive] = useState<Tab>('all');

  const filtered =
    active === 'all'
      ? projects
      : projects.filter((project) => project.type === active);

  const getCount = (tab: Tab) =>
    tab === 'all' ? projects.length : projects.filter((project) => project.type === tab).length;

  return (
    <>
      <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Filter project type
          </p>
          <h2
            className="text-3xl font-bold leading-tight md:text-4xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Finished client spaces
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {TABS.map((tab) => {
            const isActive = active === tab.value;

            return (
              <button
                key={tab.value}
                onClick={() => setActive(tab.value)}
                className={`min-h-11 rounded-md px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition-colors ${
                  isActive
                    ? 'bg-accent text-white'
                    : 'border border-border bg-background text-muted hover:border-accent hover:text-accent'
                }`}
              >
                {tab.label}
                <span className="ml-2 opacity-70">{getCount(tab.value)}</span>
              </button>
            );
          })}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block h-full overflow-hidden rounded-lg border border-border bg-background transition-shadow duration-300 hover:shadow-[0_22px_70px_rgba(0,0,0,0.12)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/12 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-md bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                    {project.type}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                      {project.category}
                    </p>
                    <h3
                      className="mt-2 text-2xl font-bold leading-tight text-white"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/68">{project.location}</p>
                  </div>
                </div>

                <div className="space-y-4 p-5">
                  <p className="min-h-24 leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.slice(0, 2).map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-md bg-surface px-3 py-1 text-xs font-medium text-muted"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
