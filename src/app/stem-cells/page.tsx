import Blog from '@/components/StemCells/Blog';
import Features from '@/components/StemCells/Features';
import FooterStemCells from '@/components/StemCells/Footer';
import Hero from '@/components/StemCells/Hero';
import InnovativeProcess from '@/components/StemCells/InnovativeProcess';
import MobileTherapy from '@/components/StemCells/MobileTherapy';
import OverviewDefinition from '@/components/StemCells/OverviewDefinition';
import Research from '@/components/StemCells/Research';
import Treatment from '@/components/StemCells/Treatment';

const StemCellsPage = () => {
	return (
		<>
			<Hero />
			<OverviewDefinition />
			<div className='relative overflow-hidden'>
				<Features />
				<Treatment />
			</div>
			<InnovativeProcess />
			<MobileTherapy />
			<Research />
			<Blog />
			<FooterStemCells />
		</>
	);
};

export default StemCellsPage;
