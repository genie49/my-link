import LinkPreview from "./components/LinkPreview";

const FEATURES = [
  {
    no: "01",
    title: "프로필 페이지",
    desc: "이름, 소개글, 프로필 이미지를 담은 나만의 마이페이지. 모바일에서도 예쁜 반응형 디자인.",
  },
  {
    no: "02",
    title: "링크 관리 (CRUD)",
    desc: "링크를 추가하고, 보고, 수정하고, 삭제. 세상 거의 모든 서비스의 기본기를 직접 구현합니다.",
  },
  {
    no: "03",
    title: "클릭 통계",
    desc: "어떤 링크가 얼마나 눌렸는지 한눈에. 인기 링크는 맨 위로 끌어올려 노출을 극대화하세요.",
  },
  {
    no: "04",
    title: "원클릭 배포",
    desc: "전 세계 어디서든 접속 가능한 내 주소. 구글·네이버 검색에도 노출되어 친구에게 자랑할 수 있어요.",
  },
];

const STACK = [
  "Antigravity",
  "Next.js",
  "Gemini CLI",
  "Firebase",
  "Vercel",
  "TypeScript",
  "Tailwind CSS",
];

const GITHUB_URL = "https://github.com/genie49/my-link";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      {/* ── 헤더 ── */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7 sm:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight text-ink">
            My<span className="text-tomato">Link</span>
          </span>
          <span className="hidden text-xs text-ink-soft sm:inline">마이링크</span>
        </a>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <a href="#features" className="hidden text-ink-soft transition-colors hover:text-ink sm:inline">
            기능
          </a>
          <a href="#stack" className="hidden text-ink-soft transition-colors hover:text-ink sm:inline">
            기술 스택
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink px-4 py-2 text-ink transition-all hover:bg-ink hover:text-paper-card"
          >
            GitHub ↗
          </a>
        </nav>
      </header>

      {/* ── 히어로 ── */}
      <section
        id="top"
        className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-10 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:pt-16"
      >
        <div>
          <p
            className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-paper-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-tomato" /> Link in Bio
          </p>

          <h1 className="reveal font-serif-kr text-[clamp(2.6rem,6vw,4.6rem)] font-black leading-[1.05] tracking-tight text-ink" style={{ animationDelay: "0.12s" }}>
            흩어진 모든 링크를,
            <br />
            <span className="relative inline-block">
              <span className="text-tomato">하나의 주소</span>
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[6px] w-full origin-left bg-tomato/30"
                style={{ animation: "drawline 0.7s 0.9s both" }}
              />
            </span>
            로.
          </h1>

          <p className="reveal mt-7 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg" style={{ animationDelay: "0.22s" }}>
            인스타그램, 유튜브, 블로그, 포트폴리오까지. 프로필 하나에 모든 링크를
            모아 공유하세요.{" "}
            <span className="font-bold text-ink font-display">MyLink</span>는 AI
            코딩으로 직접 만든 나만의 링크트리입니다.
          </p>

          <div className="reveal mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.32s" }}>
            <a
              href="#features"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-paper-card transition-all hover:bg-tomato-deep hover:shadow-[5px_6px_0_rgba(28,24,19,0.18)]"
            >
              내 페이지 만들기
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink px-7 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-paper-card"
            >
              소스 코드 보기
            </a>
          </div>

          <dl className="reveal mt-12 flex gap-10 border-t border-line pt-7" style={{ animationDelay: "0.42s" }}>
            {[
              { k: "통합 링크", v: "∞" },
              { k: "비용", v: "₩0" },
              { k: "배포까지", v: "1클릭" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-3xl font-semibold text-ink">{s.v}</dt>
                <dd className="mt-1 text-xs text-ink-soft">{s.k}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 데모 카드 */}
        <div className="reveal flex justify-center lg:justify-end" style={{ animationDelay: "0.3s" }}>
          <div style={{ animation: "floaty 7s ease-in-out infinite" }}>
            <LinkPreview />
          </div>
        </div>
      </section>

      {/* ── 기술 스택 마키 ── */}
      <section id="stack" className="border-y border-line bg-ink py-5">
        <div className="flex overflow-hidden">
          <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
            {[...STACK, ...STACK].map((s, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-10 font-display text-xl font-medium text-paper-card/80"
              >
                {s}
                <span className="text-tomato">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 기능 ── */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-tomato">
            What's inside
          </p>
          <h2 className="font-serif-kr text-[clamp(2rem,4vw,3rem)] font-black leading-tight text-ink">
            링크트리가 하는 일을,
            <br />
            전부 직접 만듭니다.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
          {FEATURES.map((f) => (
            <article
              key={f.no}
              className="group relative bg-paper-card p-8 transition-colors hover:bg-paper sm:p-10"
            >
              <span className="font-display text-5xl font-semibold text-line transition-colors group-hover:text-tomato">
                {f.no}
              </span>
              <h3 className="mt-4 text-xl font-bold text-ink">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── 제작 스토리 ── */}
      <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
        <div className="rounded-3xl border border-ink bg-ink px-8 py-14 text-paper-card sm:px-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-tomato">
            How it's made
          </p>
          <blockquote className="font-serif-kr text-[clamp(1.5rem,3.2vw,2.4rem)] font-black leading-snug">
            “기획부터 구현, 배포까지 —<br className="hidden sm:block" /> AI와 함께
            만든 첫 번째 웹 서비스.”
          </blockquote>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-paper-card/70">
            Antigravity 에디터에서 Next.js 프로젝트를 만들고, Firebase로 데이터와
            회원 인증을 붙이고, Vercel로 전 세계에 배포했습니다. 코드를 쓰는 법이
            아니라 <span className="font-bold text-paper-card">문제를 정의하고,
            AI에게 정확히 요청하고, 결과를 검증하는</span> 과정을 담았습니다.
          </p>
        </div>
      </section>

      {/* ── CTA / 푸터 ── */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-14 sm:flex-row sm:items-center sm:px-10">
          <div>
            <p className="font-display text-3xl font-semibold text-ink">
              My<span className="text-tomato">Link</span>
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              흩어진 모든 링크를, 하나의 주소로.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 text-sm sm:items-end">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink underline-offset-4 hover:underline"
            >
              github.com/genie49/my-link ↗
            </a>
            <p className="text-xs text-ink-soft">
              © {new Date().getFullYear()} MyLink · AI 코딩 실습 프로젝트
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
