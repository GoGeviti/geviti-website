import { homeData } from '@/constant/data';

import DiscoverGeviti from '../DiscoverGeviti';

const ProductsSection: React.FC = () => {
	return (
		<DiscoverGeviti
			title={ homeData.products.title }
			description={ homeData.products.description }
			titleMobile={ homeData.products.title }
			descriptionMobile={ homeData.products.description }
			viewAll={ homeData.products.viewAll }
		/>
	);
};

export default ProductsSection;
