"use client";

import { useState } from "react";

type DemoLink = {
  id: string;
  label: string;
  handle: string;
  glyph: string;
  start: number;
};

const SEED: DemoLink[] = [
  { id: "ig", label: "인스타그램", handle: "@mylink.daily", glyph: "◎", start: 1240 },
  { id: "yt", label: "유튜브", handle: "코딩하는 마이링크", glyph: "▶", start: 879 },
  { id: "bl", label: "블로그", handle: "mylink.log", glyph: "✎", start: 412 },
  { id: "pf", label: "포트폴리오", handle: "내 작업 모아보기", glyph: "❖", start: 326 },
];

export default function LinkPreview() {
  const [clicks, setClicks] = useState<Record<string, number>>(
    Object.fromEntries(SEED.map((l) => [l.id, l.start])),
  );

  const bump = (id: string) =>
    setClicks((prev) => ({ ...prev, [id]: prev[id] + 1 }));

  const total = Object.values(clicks).reduce((a, b) => a + b, 0);

  return (
    <div className="relative">
      {/* 떠 있는 종이 카드 */}
      <div className="relative w-[330px] rounded-[26px] border border-line bg-paper-card p-7 shadow-[14px_18px_0_rgba(28,24,19,0.12)]">
        {/* 프로필 */}
        <div className="flex flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-ink text-2xl font-black text-paper-card font-display">
            ML
          </div>
          <p className="mt-4 text-lg font-bold text-ink">@mylink</p>
          <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">
            흩어진 모든 링크를 한 곳에.
            <br />
            AI 코딩으로 만든 나만의 링크 페이지 ✦
          </p>
        </div>

        {/* 링크 버튼들 */}
        <div className="mt-6 flex flex-col gap-3">
          {SEED.map((l) => (
            <button
              key={l.id}
              onClick={() => bump(l.id)}
              className="group flex items-center gap-3 rounded-2xl border border-line bg-paper px-4 py-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-ink hover:shadow-[4px_5px_0_var(--color-tomato)] active:translate-y-0"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-ink text-paper-card transition-colors group-hover:bg-tomato">
                {l.glyph}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold text-ink">
                  {l.label}
                </span>
                <span className="block truncate text-xs text-ink-soft">
                  {l.handle}
                </span>
              </span>
              <span className="shrink-0 font-display text-xs tabular-nums text-ink-soft">
                {clicks[l.id].toLocaleString()}
              </span>
            </button>
          ))}
        </div>

        <p className="mt-5 text-center text-[11px] text-ink-soft">
          버튼을 눌러보세요 · 총 클릭{" "}
          <span className="font-bold text-tomato tabular-nums">
            {total.toLocaleString()}
          </span>
        </p>
      </div>

      {/* 장식 배지 */}
      <div className="absolute -right-5 -top-5 rotate-12 rounded-full border border-ink bg-tomato px-3 py-1 font-display text-xs font-semibold text-paper-card shadow">
        LIVE
      </div>
    </div>
  );
}
