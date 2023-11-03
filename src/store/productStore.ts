/* eslint-disable no-unused-vars */
import { create } from 'zustand';

// import { productListData } from '@/constant/data';

export type FilterValue = {
	id: string;
	name: string;
	options: {
		value: string | boolean;
		label: string;
		checked: boolean;
	}[];
};

type State = {
	filterValues: FilterValue[];
	tempFilterValues: FilterValue[];
	query: string;
	openSheet: boolean;
};

type Action = {
	setFilterValues: (value: FilterValue[]) => void;
	setTempFilterValues: (value: FilterValue[]) => void;
	setQuery: (value: string) => void;
	toogleOpenSheet: (value: boolean) => void;
};

export const useProductStore = create<State & Action>(set => ({
	filterValues: [],
	tempFilterValues: [],
	query: '',
	openSheet: false,
	setFilterValues: value => set(() => ({ filterValues: value })),
	setTempFilterValues: value => set(() => ({ tempFilterValues: value })),
	setQuery: value => set(() => ({ query: value })),
	toogleOpenSheet: value => set(() => ({ openSheet: value })),
}));
