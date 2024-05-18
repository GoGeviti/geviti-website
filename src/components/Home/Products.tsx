import { homeData } from '@/constant/data';

import DiscoverGeviti from '../DiscoverGeviti';

type ProductsSectionProps = {
	withBg?: boolean;
};

const ProductsSection: React.FC<ProductsSectionProps> = async({
	withBg = false,
}) => {
	return (
		<DiscoverGeviti
			title={ homeData.products.title }
			description={ homeData.products.description }
			withBg={ withBg }
		/>
	);
};

export default ProductsSection;
