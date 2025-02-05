import type { Metadata, Viewport } from "next"
import type * as React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/config/site"
import { fontVariableClassNames, inter } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import "@/styles/globals.css"

export const viewport = {
  themeColor: siteConfig.themeColor,
  colorScheme: "dark light",
} satisfies Viewport

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  icons: {
    icon: ["/icon/favicon.svg", "/icon/favicon.ico", "/icon/favicon-16x16.png", "/icon/favicon-32x32.png"],
    shortcut: ["/icon/favicon-16x16.png", "/icon/favicon-32x32.png"],
    apple: "/icon/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/icon/safari-pinned-tab.svg",
        color: "#dc68e8",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en-GB",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.openGraphImage }],
  },
} satisfies Metadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body className={cn(fontVariableClassNames, inter.className, "antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
