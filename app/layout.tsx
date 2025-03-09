import type { Metadata } from "next"
import { Noto_Sans_SC, Playfair_Display, Noto_Serif_SC } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type React from "react"
import Script from "next/script"
import { siteConfig } from "@/config/site"

// 导入思源宋体 (Noto Serif SC) - 优雅的中文衬线字体
const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-sc",
})

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  generator: siteConfig.creator
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* 使用Script标签设置window对象，用onReady确保客户端执行 */}
        <Script id="debug-script" strategy="afterInteractive" src="/debug.js" />
        <Script id="init-images" strategy="afterInteractive">
          {`
            window.images = window.images || [];
            window.siteConfig = ${JSON.stringify(siteConfig)};
          `}
        </Script>
      </head>
      <body 
        className={`${notoSansSC.variable} ${playfair.variable} ${notoSerifSC.variable} font-sans antialiased`} 
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}