'use client';

import { useEffect, useState } from 'react';
import FadeContent from '@/components/FadeContent';
import SpringCheck from '@/components/SpringCheck';
import { checklistGroups, links } from '@/data/trip';

const STORAGE_KEY = 'escapada-checklist-v1';

const readStored = (): Record<string, boolean> => {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== 'object') return {};
    return parsed as Record<string, boolean>;
  } catch {
    return {};
  }
};

const Tips = () => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setChecked(readStored());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      // Ignore quota / private mode errors
    }
  }, [checked, hydrated]);

  const handleToggle = (key: string, value: boolean) => {
    setChecked((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section
      id="tips"
      className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24"
      aria-label="Consejos prácticos"
    >
      <FadeContent effect="develop" duration={1} once>
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-moss)]">
          Lista rápida
        </p>
        <h2 className="font-display mb-10 text-3xl text-[var(--color-ink)] md:text-4xl">
          Checklist del viaje
        </h2>

        <div className="mb-14 grid gap-8 md:grid-cols-2 md:gap-10">
          {checklistGroups.map((group) => (
            <div
              key={group.id}
              className="rounded-2xl border border-[var(--color-olive)]/10 bg-white/55 p-5 backdrop-blur-sm md:p-6"
            >
              <h3 className="font-display mb-1 text-xl text-[var(--color-ink)] md:text-2xl">
                {group.title}
              </h3>
              <p className="mb-5 text-sm text-[var(--color-ink-soft)]/70">{group.description}</p>

              <ul className="flex flex-col gap-3" aria-label={group.title}>
                {group.items.map((item) => {
                  const key = `${group.id}:${item.id}`;
                  const isDone = Boolean(checked[key]);
                  return (
                    <li key={key} data-done={isDone ? 'true' : 'false'}>
                      <SpringCheck
                        label={item.text}
                        checked={isDone}
                        onChange={(value) => handleToggle(key, value)}
                        color="var(--color-olive-deep)"
                        fillColor="var(--color-gold)"
                        checkColor="var(--color-olive-deep)"
                        boxSize={26}
                        boxRadius={8}
                        fontSize={15}
                        bounce={0.28}
                        strike="left"
                        doneOpacity={0.45}
                        ariaLabel={`${item.text}${isDone ? ', completado' : ', pendiente'}`}
                        className="w-full text-left text-[var(--color-ink-soft)]"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-[var(--color-olive-deep)] p-6 text-[var(--color-cream)] md:p-8">
          <h3 className="font-display mb-4 text-xl">Enlaces útiles</h3>
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--color-stone)] underline-offset-4 transition hover:text-[var(--color-gold)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]"
                  tabIndex={0}
                  aria-label={`${link.label} (se abre en una nueva pestaña)`}
                >
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </FadeContent>
    </section>
  );
};

export default Tips;
