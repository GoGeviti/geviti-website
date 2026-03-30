import { create } from 'zustand';

type NavbarState = {
	isVisible: boolean;
	isScrolled: boolean;
	setIsVisible: (value: boolean) => void;
	setIsScrolled: (value: boolean) => void;
};

export const useNavbarStore = create<NavbarState>(set => ({
	isVisible: true,
	isScrolled: false,
	setIsVisible: value => set(() => ({ isVisible: value })),
	setIsScrolled: value => set(() => ({ isScrolled: value })),
}));