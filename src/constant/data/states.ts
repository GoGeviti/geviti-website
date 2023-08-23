import packagesData from './packages';

const stateOptions = packagesData.map(packageItem => packageItem.state);

const statesData = {
	label: 'Select state',
	options: stateOptions
};

export default statesData;
