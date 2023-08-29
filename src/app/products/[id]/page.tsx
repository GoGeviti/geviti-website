import { NextPage } from 'next';

import { HomeComponent } from '@/components';

const ProductDetailPage: NextPage = () => {
	return (
		<>
			<HomeComponent.Products />
		</>
	);
};

export default ProductDetailPage;
