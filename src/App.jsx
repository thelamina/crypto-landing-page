import { BrowserRouter } from 'react-router-dom';

import {
	Header,
	Features,
	Safety,
	EarningSteps,
	Footer,
	Testimonials,
	CTA,
	Partners,
} from './components';

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Features />
				<EarningSteps />
				<Safety />
				<Testimonials />
				<Partners />
				<CTA />
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
