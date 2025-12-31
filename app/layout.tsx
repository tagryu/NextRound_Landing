import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

// 폰트 설정 (한글 폰트 최적화)
const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "Next Round M&A | 실전 M&A 실무 교육",
  description: "벤처스퀘어, 아일럼인베스트, 팩트시트가 함께하는 5주간의 실전 M&A 및 기업 매각 마스터 클래스. AI 딜룸 분석과 전문가 네트워킹을 경험하세요.",
  metadataBase: new URL("https://mna.factsheet.kr"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Next Round M&A | 실전 M&A 실무 교육",
    description: "벤처스퀘어, 아일럼인베스트, 팩트시트가 함께하는 5주간의 실전 M&A 및 기업 매각 마스터 클래스",
    url: "https://mna.factsheet.kr",
    siteName: "Next Round M&A",
    images: [
      {
        url: "https://mna.factsheet.kr/assets/og-image.jpg",
        width: 1920,
        height: 1200,
        alt: "Next Round M&A - 실전 M&A 실무 교육",
      },
    ],
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Round M&A | 실전 M&A 실무 교육",
    description: "벤처스퀘어, 아일럼인베스트, 팩트시트가 함께하는 5주간의 실전 M&A 및 기업 매각 마스터 클래스",
    images: ["https://mna.factsheet.kr/assets/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.className} antialiased bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
