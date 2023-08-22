import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const clsxm = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export default clsxm;