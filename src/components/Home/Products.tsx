import { homeData } from '@/constant/data';
import { getProducts } from '@/services/products';

import DiscoverGeviti from '../DiscoverGeviti';

type ProductsSectionProps = {
	withBg?: boolean;
};

const ProductsSection: React.FC<ProductsSectionProps> = async({
	withBg = false,
}) => {
	const products = await getProducts();

	return (
		<DiscoverGeviti
			title={ homeData.products.title }
			description={ homeData.products.description }
			viewAll={ homeData.products.viewAll }
			withBg={ withBg }
			products={ products.docs }
		/>
	);
};

export default ProductsSection;
