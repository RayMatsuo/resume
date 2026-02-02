'use client'
import { ReactNode } from "react"
interface Props {
  children: ReactNode,
  title: string
}
export default function Detail({
  children,
  title
}: Props) {

  return (
    <div className="w-full">
      <div className="w-full border-b-2">
        <h2 className="text-xl pt-2 pb-2">{title}</h2>
      </div>
      <div className="pt-4 flex flex-col gap-4">
        {children}
      </div>
    </div>
  )


}
