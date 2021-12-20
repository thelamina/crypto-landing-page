import React, { useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export const Footer = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);
	return (
		<div>
			<motion.nav
				ref={ref}
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
				className='bg-gray-900'
			>
				<div className='container mx-auto'>
					<div className='flex items-center flex-wrap justify-between py-6'>
						<div className=' flex flex-wrap items-center'>
							<a className='flex-shrink-0' href='/'>
								<div className='w-32 uppercase text-white font-semibold text-2xl '>
									<span>Crypto</span>
								</div>
							</a>
							<div className='block'>
								<motion.div
									ref={ref}
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
											x: '-5px',
										},
									}}
									className='ml-10 flex items-baseline space-x-4'
								>
									<Link
										to='/'
										className='text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-normal'
									>
										Careers
									</Link>
									<Link
										to='/'
										className='text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-normal'
									>
										Gallery
									</Link>
									<Link
										to='/'
										className='text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-normal'
									>
										Content
									</Link>
									<Link
										to='/'
										className='text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-normal'
									>
										Contact
									</Link>
								</motion.div>
							</div>
						</div>
						<div className='block'>
							<div className='ml-4 flex items-center md:ml-6'>
								<div className='ml-3 relative'>
									<motion.div
										ref={ref}
										animate={controls}
										initial='hidden'
										variants={{
											visible: {
												opacity: 1,
												x: '0px',
												transition: {
													duration: 0.5,
													delay: 1.0,
													type: 'tween',
												},
											},
											hidden: {
												opacity: 0,
												x: '-20px',
											},
										}}
										className='relative inline-block text-left'
									>
										<Link
											to='/'
											className='capitalize py-1 px-6 inline font-medium border-2 border-transparent text-white text-sm bg-red-500 hover:bg-red-600  transition duration-300 ease-in-out rounded-md'
											type='button'
											id='options-menu'
										>
											Signup
										</Link>
									</motion.div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.nav>
		</div>
	);
};
