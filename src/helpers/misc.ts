export const splitList = (list: string[], size = 3) => {
	return [...Array(Math.ceil(list.length / size))].map((_, i) => list.slice(i * size, i * size + size));
};