'use client'
import { ReactNode } from "react"
interface Props {
  children?: ReactNode,
  title: string,
  date?: string,
  position?: string
}
export default function DetailItem({
  children,
  title,
  date = "",
  position = ""
}: Props) {

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between" >
        <h2 className="text-md font-bold">
          {title}
          <span className="text-sm text-black/40 pl-2">
            {position}
          </span>
        </h2>
        <span className="text-black/40">
          {date}
        </span>
      </div>
      <div className="pt-2 pl-2">
        {children}
      </div>
    </div>
  )


}
