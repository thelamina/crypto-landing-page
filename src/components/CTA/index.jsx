import React, { useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export const CTA = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);
	return (
		<div className='container mx-auto py-16'>
			<div className='bg-white rounded-lg bg-gradient-radial from-gray-900 via-gray-900 to-black py-16'>
				<div className='text-center w-full mx-auto py-6 px-4 sm:px-6 lg:py-6 lg:px-8 z-20'>
					<div
						className='bg-red-800 w-12 mx-auto mb-6'
						style={{ height: '1px' }}
					/>
					<motion.h2
						ref={ref}
						animate={controls}
						initial='hidden'
						variants={{
							visible: {
								opacity: 1,
								y: '0px',
								transition: {
									duration: 0.4,
									delay: 0.2,
									type: 'tween',
								},
							},
							hidden: {
								opacity: 0,
								y: '-20px',
							},
						}}
						className='text-3xl font-semibold text-white sm:text-3xl inline-block max-w-sm leading-loose mx-auto'
					>
						Sign up today and recieve your $40 earning bonus
					</motion.h2>
					<div className='lg:mt-0 lg:flex-shrink-0'>
						<motion.div
							ref={ref}
							animate={controls}
							initial='hidden'
							variants={{
								visible: {
									opacity: 1,
									y: '0px',
									transition: {
										duration: 0.5,
										delay: 0.8,
										type: 'tween',
									},
								},
								hidden: {
									opacity: 0,
									y: '-20px',
								},
							}}
							className='mt-12 inline-flex rounded-md shadow'
						>
							<Link
								to='/'
								type='button'
								className='hover:-translate-y-2 capitalize py-2 px-4 inline font-medium border-2 border-transparent text-white text-md bg-red-500 hover:bg-red-600  transition duration-300 ease-in-out rounded-md'
							>
								Get started
							</Link>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};
