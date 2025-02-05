import type * as React from "react"

import { cn } from "@/lib/utils"

type ServerErrorCodeSectionProps = {
  statusCode?: string
} & React.HTMLAttributes<HTMLDivElement>

function ServerErrorCodeSection({ statusCode, className, ...props }: ServerErrorCodeSectionProps) {
  if (statusCode == null) return null
  const sectionClassName = cn(
    className,
    "border-foreground/50",
    "pb-4 mb-5 border-b text-7xl",
    "lg:pb-0 lg:mb-0 lg:pr-5 lg:mr-5 lg:border-b-0 lg:border-r lg:text-5xl",
  )
  return (
    <section className={sectionClassName} {...props}>
      <h1 className="font-[family-name:var(--font-jetbrains-mono)] font-medium">{statusCode}</h1>
    </section>
  )
}

type ServerErrorMessageSectionProps = {
  message: string
} & React.HTMLAttributes<HTMLDivElement>

function ServerErrorMessageSection({ message, className, ...props }: ServerErrorMessageSectionProps) {
  return (
    <section className={cn(className, "content-center inline-block text-2xl")} {...props}>
      <h2 className="font-[family-name:var(--font-onest)] font-normal">{message}.</h2>
    </section>
  )
}

export type ServerErrorProps = {
  statusCode?: string
  message: string
} & React.HTMLAttributes<HTMLDivElement>

export function ServerError({ statusCode, message, className, ...props }: ServerErrorProps) {
  return (
    <div className={cn(className, "flex flex-col justify-center items-center")} {...props}>
      <div className="w-full min-h-[110px] lg:hidden" />
      <main className="flex flex-col lg:flex-row text-center lg:text-left justify-center">
        <ServerErrorCodeSection statusCode={statusCode} />
        <ServerErrorMessageSection message={message} />
      </main>
      <div className="w-full min-h-[110px] lg:hidden" />
    </div>
  )
}

export function ServerErrorPage({ className, ...props }: ServerErrorProps) {
  return <ServerError className={cn(className, "min-h-[100vh] m-auto mx-5")} {...props} />
}
