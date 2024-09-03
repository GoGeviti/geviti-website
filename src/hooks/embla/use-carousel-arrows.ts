import { useCallback, useEffect, useState } from 'react';
import type { EmblaCarouselType } from 'embla-carousel';

import type { UseCarouselArrowsReturn } from './types';

const useCarouselArrows = (
	mainApi?: EmblaCarouselType
): UseCarouselArrowsReturn => {
	const [disabledPrev, setDisabledPrevBtn] = useState(true);

	const [disabledNext, setDisabledNextBtn] = useState(true);

	const onClickPrev = useCallback(() => {
		if (!mainApi) return;
		mainApi.scrollPrev();
	}, [mainApi]);

	const onClickNext = useCallback(() => {
		if (!mainApi) return;
		mainApi.scrollNext();
	}, [mainApi]);

	const onSelect = useCallback((_mainApi: EmblaCarouselType) => {
		setDisabledPrevBtn(!_mainApi.canScrollPrev());
		setDisabledNextBtn(!_mainApi.canScrollNext());
	}, []);

	useEffect(() => {
		if (!mainApi) return;

		onSelect(mainApi);
		mainApi.on('reInit', onSelect);
		mainApi.on('select', onSelect);
	}, [mainApi, onSelect]);

	return {
		disabledPrev,
		disabledNext,
		onClickPrev,
		onClickNext,
	};
};

export default useCarouselArrows;
