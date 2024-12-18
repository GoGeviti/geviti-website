import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { PaginatedDocs, PostCategory } from '@/payload/payload-types';
import { getAllPost, getAllPostCategories } from '@/services/products';

type AllCategory = Omit<PostCategory, 'id'> & { id: 0 };
type CategoryResponse = PaginatedDocs<PostCategory>;

export const useCategories = () => {
	return useQuery<CategoryResponse, Error, (PostCategory | AllCategory)[]>({
		queryKey: ['categories'],
		queryFn: () => getAllPostCategories(),
		staleTime: 1000 * 60 * 5, // 5 minutes
		select: (data: CategoryResponse) => {
			const allCategory: AllCategory = {
				title: 'All',
				id: 0,
				description: '',
				updatedAt: '',
				createdAt: ''
			};
			return [allCategory, ...data.docs];
		}
	});
};

export const usePosts = (categoryId?: number | string) => {
	return useInfiniteQuery({
		queryKey: ['posts', categoryId],
		queryFn: ({ pageParam = 1 }) => getAllPost(6, pageParam, categoryId?.toString()).then(data => ({
			...data,
			page: data.page ?? 1
		})),
		getNextPageParam: lastPage => lastPage.hasNextPage ? lastPage.page + 1 : undefined,
		initialPageParam: 1,
		staleTime: 1000 * 60 * 5
	});
};