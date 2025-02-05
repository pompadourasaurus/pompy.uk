import type React from "react"

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center">
      <div className="w-full min-h-[110px] lg:hidden" />
      {children}
      <div className="w-full min-h-[110px] lg:hidden" />
    </div>
  )
}
