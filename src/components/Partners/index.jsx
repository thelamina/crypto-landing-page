import React, { useEffect } from 'react';
import Company from '../../assets/company.svg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export const Partners = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);
	return (
		<div>
			<motion.div
				ref={ref}
				whileInView='visible'
				animate={controls}
				initial='hidden'
				variants={{
					visible: {
						opacity: 1,
						// y: '0px',
						transition: {
							duration: 0.4,
							delay: 0.4,
							type: 'tween',
						},
					},
					hidden: {
						opacity: 0,
						// y: '-20px',
					},
				}}
				className='mt-8 py-16'
			>
				<div className='container text-black mx-auto'>
					{/* <div className='flex items-center flex-wrap justify-between py-6'> */}
					<div className='flex flex-wrap justify-between items-center'>
						<div className='capitalize text-black font-semibold text-xl '>
							<span>We Partner with the best</span>
							<div
								className='absolute w-7 mt-2 bg-red-800'
								style={{ height: '1px' }}
							/>
						</div>

						{/* <div className='block'> */}
						<motion.div
							ref={ref}
							whileInView='visible'
							animate={controls}
							initial='hidden'
							variants={{
								visible: {
									opacity: 1,
									x: '0px',
									transition: {
										duration: 1.0,
										delay: 0.6,
										type: 'tween',
									},
								},
								hidden: {
									opacity: 0,
									x: '-35px',
								},
							}}
							className='opacity-75 flex items-center space-x-4'
						>
							<Link
								to='/'
								className='text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-normal'
							>
								<img
									src={Company}
									alt='company'
									className='h-6 opacity-75'
								/>
							</Link>
							<Link
								to='/'
								className='text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-normal'
							>
								<img
									src={Company}
									alt='company'
									className='h-6 opacity-75'
								/>
							</Link>
							<Link
								to='/'
								className='text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-normal'
							>
								<img
									src={Company}
									alt='company'
									className='h-6 opacity-75'
								/>
							</Link>
							<Link
								to='/'
								className='text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-normal'
							>
								<img
									src={Company}
									alt='company'
									className='h-6 opacity-75'
								/>
							</Link>
							<Link
								to='/'
								className='text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-normal'
							>
								<img
									src={Company}
									alt='company'
									className='h-6 opacity-75'
								/>
							</Link>
							<Link
								to='/'
								className='text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-normal'
							>
								<img
									src={Company}
									alt='company'
									className='h-6 opacity-75'
								/>
							</Link>
						</motion.div>
						{/* </div> */}
					</div>
					{/* </div> */}
				</div>
			</motion.div>
		</div>
	);
};
