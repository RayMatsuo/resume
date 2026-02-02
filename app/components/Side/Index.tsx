'use client'
import { ReactNode } from "react"
interface Props {
  children: ReactNode
}
export default function Side({
  children
}: Props) {


  return (
    <div className="h-auto w-60 border-r bg-orange-50 p-4">
      <div className="flex flex-col gap-4">
        {children}
      </div>
    </div>
  )

}

