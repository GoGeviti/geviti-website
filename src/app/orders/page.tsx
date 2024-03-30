import { redirect } from 'next/navigation';

import { OrderComponent } from '@/components';
import { IProducts } from '@/interfaces';
import { getProductById } from '@/services/products';

type OrdersPageProps = {
	searchParams?: {
		product?: string;
		package?: string;
	};
};

const OrdersPage = async({ searchParams }: OrdersPageProps) => {
	if (!searchParams?.product && !searchParams?.package) {
		redirect('/onboarding');
	}

	let product: IProducts.ProductItem | null = null;

	if (searchParams?.product) {
		const resProduct = await getProductById(searchParams?.product);
		product = {
			id: resProduct?.id,
			name: resProduct?.name,
			price: resProduct?.price,
			description: resProduct?.description,
			category: resProduct?.category.title,
			shopify_variant_id: resProduct?.shopify_variant_id
		};
	}

	return (
		<div className='container-center w-full pt-[100px] lg:pt-[156px] pb-20 lg:pb-[435px]'>
			<OrderComponent.Hero />

			<OrderComponent.Content product={ product } />
		</div>
	);
};

export default OrdersPage;
