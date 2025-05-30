import React, { useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import JSicon from '../icons/js-icon'
import ReactIcon from '../icons/react-icon'
import PHPicon from '../icons/php-icon'
import NextJSicon from '../icons/next-icon'
import Autoplay from 'embla-carousel-autoplay'

type PropType = {
  options?: EmblaOptionsType
}

const data = [
    {
        icon: <JSicon className=""/>,
        name: 'JavaScript',
    },
    {
        icon: <ReactIcon />,
        name: 'React',
    },
    {
        icon: <NextJSicon />,
        name: 'NextJS',
    },
    {
        icon: <PHPicon />,
        name: 'PHP',
    },
]

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)


  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data.map((item, index) => (
            <div className={`embla__slide ` + (index === selectedIndex ? "embla__slide__selected" : "")}  key={index}>
                <div className="embla__slide__icon">
                    {item.icon}
                </div>
                <div className="embla__slide__name">
                    {item.name}
                </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={() => {onPrevButtonClick(); }} disabled={prevBtnDisabled} />
          <NextButton onClick={() => {onNextButtonClick(); }} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
