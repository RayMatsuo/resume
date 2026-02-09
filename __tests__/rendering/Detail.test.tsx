import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Detail from '@/app/components/Detail/Index'
import DetailItem from '@/app/components/Detail/Item'

describe("Detail menu", () => {
  it("Can render detail menu correctly", () => {
    const detailText = "Detail"
    const titleText = "Title"
    const positionText = "Position"
    const dateText = "Date"
    render(
      <Detail title={detailText}>
        <DetailItem title={titleText} position={positionText} date={dateText}>
          Contents
        </DetailItem>
      </Detail>
    );
    
    expect(screen.getByText(detailText)).toBeInTheDocument()
    expect(screen.getByText(titleText)).toBeInTheDocument()
    expect(screen.getByText(positionText)).toBeInTheDocument()
    expect(screen.getByText(dateText)).toBeInTheDocument()
  })
})
