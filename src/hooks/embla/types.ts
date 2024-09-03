import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import type { UseEmblaCarouselType } from 'embla-carousel-react';

/**
 * Dot Buttons
 */
export type UseCarouselDotsReturn = {
  dotCount: number;
  selectedIndex: number;
  scrollSnaps: number[];
  onClickDot: (index: number) => void; // eslint-disable-line no-unused-vars
};

/**
 * Prev & Next Buttons
 */
export type UseCarouselArrowsReturn = {
  disabledPrev: boolean;
  disabledNext: boolean;
  onClickPrev: () => void;
  onClickNext: () => void;
};

/**
 * Slide
 */
export type CarouselSlideProps = {
  options?: Partial<CarouselOptions>;
};

/**
 * Carousel
 */

export type CarouselOptions = EmblaOptionsType;

export type UseCarouselReturn = {
  pluginNames?: string[];
  options?: CarouselOptions;
  mainRef: UseEmblaCarouselType[0];
  mainApi?: EmblaCarouselType;
  dots: UseCarouselDotsReturn;
  arrows: UseCarouselArrowsReturn;
};
