import { Link } from 'react-router-dom';
import { PriceChart } from '../PriceChart';
import { motion } from 'framer-motion';

const backgroundVariant = {
	hidden: {
		// opacity: 1,
		// visibility: 'hidden',
		// scale: 1,
		height: '120vh',
	},
	visible: {
		// opacity: 1,
		// scale: 1,
		// visibility: 'visible',
		height: '100%',
		transition: {
			delay: 0.0,
			duration: 2,
			type: 'tween',
		},
	},
	exit: {
		opacity: 0,
		transition: {
			ease: 'easeIn',
			type: 'tween',
		},
	},
};
const headerVariant = {
	hidden: {
		scale: 1,
		opacity: 0,
		visibility: 'hidden',
	},
	visible: {
		opacity: 1,
		scale: 1,
		visibility: 'visible',
		transition: {
			delay: 1.2,
			duration: 1.3,
			type: 'tween',
		},
	},
	exit: {
		opacity: 0,
		transition: {
			ease: 'easeInOut',
		},
	},
};
const authVariant = {
	hidden: {
		scale: 1,
		opacity: 0,
		visibility: 'hidden',
	},
	visible: {
		opacity: 1,
		scale: 1,
		visibility: 'visible',
		transition: {
			delay: 1.2,
			duration: 1.3,
			type: 'tween',
		},
	},
	exit: {
		opacity: 0,
		transition: {
			ease: 'easeInOut',
			type: 'tween',
		},
	},
};

export const Header = () => {
	return (
		<motion.main
			className=' bg-white relative overflow-hidden bg-gradient-radial from-gray-900 via-gray-900 to-black'
			variants={backgroundVariant}
			animate='visible'
			initial='hidden'
			exit='exit'
		>
			<motion.header
				variants={headerVariant}
				animate='visible'
				initial='hidden'
				exit='exit'
				className='h-24 sm:h-32 flex items-center z-30 w-full'
			>
				<div className='container mx-auto sm:px-0 px-6 flex lg:justify-start justify-between items-center w-full lg:border-b border-b-0 border-gray-700 pb-4'>
					<motion.div
						initial={{
							x: '-50px',
						}}
						animate={{
							x: '0px',
						}}
						transition={{
							type: 'tween',
							duration: 1.2,
						}}
						className='w-32 uppercase text-white font-semibold text-2xl mr-8'
					>
						<span>Crypto</span>
					</motion.div>
					<div className='items-center w-full'>
						<nav className='text-gray-800 dark:text-white capitalize text-sm lg:flex justify-between items-center hidden'>
							<motion.div
								initial={{
									y: '-2px',
									opacity: 0,
								}}
								animate={{
									y: '0px',
									opacity: 1,
								}}
								transition={{
									type: 'tween',
									delay: 1.3,
									duration: 0.4,
								}}
								className=' lg:flex'
							>
								<Link
									to='/'
									className='py-2 px-6 flex hover:text-gray-500 transition duration-300 ease-in-out items-center'
								>
									Earn
								</Link>
								<Link
									to='#'
									className='py-2 px-6 flex hover:text-gray-500  transition duration-300 ease-in-out items-center'
								>
									Trade
								</Link>

								<Link
									to='#'
									className='py-2 px-6 flex hover:text-gray-500 transition duration-300 ease-in-out items-center'
								>
									Learn
								</Link>
								<Link
									to='#'
									className='py-2 px-6 flex hover:text-gray-500 transition duration-300 ease-in-out items-center'
								>
									Blog
								</Link>
							</motion.div>

							<motion.div
								className='lg:flex'
								variants={authVariant}
								animate='visible'
								initial='hidden'
								exit='exit'
							>
								<Link
									to='#'
									className='py-2 px-6 flex hover:text-gray-500 transition duration-300 ease-in-out items-center'
								>
									Login
								</Link>
								<Link
									to='#'
									className='border border-gray-700 rounded-md py-2 px-6 flex hover:text-gray-800 hover:bg-gray-200 transition duration-300 ease-in-out items-center'
								>
									Join Now
								</Link>
							</motion.div>
						</nav>
						<button className='lg:hidden flex flex-col ml-4'>
							<span className='w-6 h-1 bg-gray-800 dark:bg-white mb-1'></span>
							<span className='w-6 h-1 bg-gray-800 dark:bg-white mb-1'></span>
							<span className='w-6 h-1 bg-gray-800 dark:bg-white mb-1'></span>
						</button>
					</div>
				</div>
			</motion.header>
			<div className='pt-6'>
				<div className='container mx-auto relative pt-8'>
					<div className='flex flex-col'>
						<motion.h1
							initial={{
								y: '-20px',
								opacity: 0,
							}}
							animate={{
								y: '0px',
								opacity: 1,
							}}
							transition={{
								type: 'tween',
								delay: 0.2,
								duration: 0.7,
							}}
							className='font-normal w-full capitalize text-center text-4xl sm:text-5xl text-white '
						>
							Don&apos;t Just Hold,{' '}
							<span className='font-semibold'>Earn.</span>
						</motion.h1>
						<motion.h2
							initial={{
								y: '-30px',
								opacity: 0,
							}}
							animate={{
								y: '0px',
								opacity: 1,
							}}
							transition={{
								type: 'tween',
								delay: 1.5,
								duration: 1,
							}}
							className='font-normal max-w-2xl mx-auto w-full text-md text-gray-500 text-center pt-4 pb-6'
						>
							Buy or deposit crypto with one click and start
							earning, not just saving.
						</motion.h2>
						<motion.div
							initial={{
								y: '-30px',
								opacity: 0,
							}}
							animate={{
								y: '0px',
								opacity: 1,
							}}
							transition={{
								type: 'tween',
								delay: 2.0,
								duration: 1,
							}}
							className='flex items-center justify-center mt-4'
						>
							<Link
								to='/'
								className='capitalize py-2 px-4 font-medium border-2 border-transparent text-white text-md bg-red-500 hover:bg-red-600 hover:-translate-y-2 transition duration-300 ease-in-out rounded-md'
							>
								Get started
							</Link>
						</motion.div>
					</div>
					<div className='block w-full mx-auto mt-6 md:mt-12 relative px-8'>
						<PriceChart />
					</div>
				</div>
			</div>
		</motion.main>
	);
};
