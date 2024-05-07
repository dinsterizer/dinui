import { Card, CardContent } from '@dinui/react/card'
import Carousel from '@dinui/react/carousel'

export default function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <Carousel.Content>
        {Array.from({ length: 5 }).map((_, index) => (
          <Carousel.Content.Item key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </Carousel.Content.Item>
        ))}
      </Carousel.Content>
      <Carousel.Previous />
      <Carousel.Next />
    </Carousel>
  )
}