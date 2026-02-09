'use client'
import { ReactNode } from "react"

interface Props {
  children: ReactNode,
  href: string,
  target?: "_blank" | "_self" | "" | undefined
  className?: string | undefined
}

export default function Link({
  children,
  href,
  target = "",
  className = ""
}: Props) {

  const additionalClasses: string = process.env.IS_HTML ? "text-blue-400 hover:underline cursor-pointer" : ""

  return (
    <a className={`${className} ${additionalClasses} `} target={target} href={href}>
      {children}
    </a>
  )
}
