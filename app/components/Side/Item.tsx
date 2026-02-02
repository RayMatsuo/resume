'use client'
import { ReactNode } from "react"

interface Props {
  children: ReactNode,
  title: string
}

export default function SideItem({
  children,
  title
}: Props) {

  return (
    <div>
      <h2 className="text-lg bg-orange-300 font-bold pl-2 pr-2 pt-0.5 pb-0.5  border-l-3 w-fit">{title}</h2>
      <div >
        {children}
      </div>
    </div>
  )
}
