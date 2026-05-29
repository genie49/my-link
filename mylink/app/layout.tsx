import type { Metadata } from "next";
import { Fraunces, Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const notoSans = Noto_Sans_KR({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerif = Noto_Serif_KR({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "마이링크 · MyLink — 흩어진 모든 링크를 하나의 주소로",
  description:
    "인스타그램, 유튜브, 블로그, 포트폴리오까지. 프로필 하나에 모든 링크를 모아 공유하는 링크 인 바이오 서비스. AI 코딩으로 만든 마이링크.",
  openGraph: {
    title: "마이링크 · MyLink",
    description: "흩어진 모든 링크를, 하나의 주소로.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${fraunces.variable} ${notoSans.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
