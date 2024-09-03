import { useMemo } from 'react';
import type { EmblaPluginType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

import type { CarouselOptions, UseCarouselReturn } from './types';
import useCarouselArrows from './use-carousel-arrows';
import useCarouselDots from './use-carousel-dots';

// ----------------------------------------------------------------------

export const useCarousel = (
	options?: CarouselOptions,
	plugins?: EmblaPluginType[]
): UseCarouselReturn => {
	const [mainRef, mainApi] = useEmblaCarousel(options, plugins);

	const { disabledPrev, disabledNext, onClickPrev, onClickNext } =
    useCarouselArrows(mainApi);

	const pluginNames = plugins?.map(plugin => plugin.name);

	const _dots = useCarouselDots(mainApi);

	const controls = useMemo(() => {
		return {
			onClickPrev,
			onClickNext,
		};
	}, [onClickNext, onClickPrev, pluginNames]);

	return {
		options: {
			...options,
			...mainApi?.internalEngine().options,
		},
		pluginNames,
		mainRef,
		mainApi,
		// arrows
		arrows: {
			disabledPrev,
			disabledNext,
			onClickPrev: controls.onClickPrev,
			onClickNext: controls.onClickNext,
		},
		// dots
		dots: _dots,
	};
};
