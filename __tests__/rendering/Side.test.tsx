import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Side from '@/app/components/Side/Index'
import SideItem from '@/app/components/Side/Item'

describe("Side menu", () => {
  it("Can render side menu correctly", () => {
    const titleText = "Title"
    render(
      <Side>
        <SideItem title={titleText}>
          Contents
        </SideItem>
      </Side>
    )
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument()
    expect(screen.getByText(titleText)).toBeInTheDocument()
  })

})
