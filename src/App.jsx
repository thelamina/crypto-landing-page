import { BrowserRouter } from 'react-router-dom';

import {
	Header,
	Features,
	Safety,
	EarningSteps,
	Footer,
	Testimonials,
	CTA,
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
				<CTA />
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
