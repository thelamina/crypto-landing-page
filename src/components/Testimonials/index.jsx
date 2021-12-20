import React, { useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Profile from '../../assets/manpp.jpg';
import { ReactComponent as QuoteIcon } from '../../assets/quote.svg';

export const Testimonials = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);
	return (
		<div className=' bg-white relative overflow-hidden bg-gradient-radial from-gray-900 via-gray-900 to-black py-16 '>
			<motion.div
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
				className='container py-16 mx-auto text-white'
			>
				<div className='flex space-x-8'>
					<div className='w-1/4'>
						<div className='mb-6 flex items-center font-normal '>
							<p>Testimony</p>
							<div
								className='ml-4 w-10 bg-red-800'
								style={{ height: '1px' }}
							/>
						</div>
						<h4 className='text-3xl font-semibold mb-4 w-5/6'>
							Inspired by Investors. Built for the Future.
						</h4>
						<motion.p
							ref={ref}
							animate={controls}
							initial='hidden'
							variants={{
								visible: {
									opacity: 1,
									y: '0px',
									transition: {
										duration: 0.4,
										delay: 0.8,
										type: 'tween',
									},
								},
								hidden: {
									opacity: 0,
									y: '-30px',
								},
							}}
							className='text-sm font-medium py-8 text-gray-500'
						>
							Rated <span className='text-white'>4.3 / 5 </span>
							based on{' '}
							<span className='border-b border-red-800'>
								<span className='text-white'>96 </span>
								reviews.
							</span>
							<br />
							Showing our favourite reviews.
						</motion.p>
						<p className='text-sm font-medium py-0 text-gray-400'>
							Trustpilot
						</p>
					</div>

					<div className='w-3/4 flex items-end space-x-12'>
						<div className='w-64 mx-auto border p-3 rounded-md border-gray-800'>
							<div className='bg-white shadow-lg  rounded-md p-6'>
								<QuoteIcon className='w-8 h-8 my-2' />
								<p className='text-gray-800 font-semibold py-4 '>
									Every now and then, something comes along to
									make you realise how poorly designed
									everything is. Turney one of the most
									intentionally designed products I've seen.
								</p>
								<div className='flex space-x-4 items-center mt-4'>
									<Link to='/' className='block relative'>
										<img
											alt='profil'
											src={Profile}
											className='mx-auto object-cover rounded-full h-12 w-12 '
										/>
									</Link>
									<div className='flex flex-col ml-2 justify-between'>
										<span className='font-semibold text-gray-800 text-sm'>
											Javed N
										</span>
										<span className='text-gray-400 text-xs flex items-center'>
											BTC Holder
										</span>
									</div>
								</div>
							</div>
						</div>
						<motion.div
							ref={ref}
							animate={controls}
							initial='hidden'
							variants={{
								visible: {
									opacity: 1,
									y: '0px',
									transition: {
										duration: 0.4,
										delay: 0.8,
										type: 'tween',
									},
								},
								hidden: {
									opacity: 0,
									y: '-30px',
								},
							}}
							className='w-32 h-36 mx-auto border p-3 rounded-md border-gray-800'
						>
							<div className=' h-full rounded-md'>
								<img
									alt='profil'
									src={Profile}
									className='mx-auto object-cover h-full w-full rounded-md '
								/>
							</div>
						</motion.div>
						<motion.div
							ref={ref}
							animate={controls}
							initial='hidden'
							variants={{
								visible: {
									opacity: 1,
									y: '0px',
									transition: {
										duration: 1.0,
										delay: 0.6,
										type: 'tween',
									},
								},
								hidden: {
									opacity: 0,
									y: '-30px',
								},
							}}
							className='w-32 h-36 mx-auto border p-3 rounded-md border-gray-800'
						>
							<div className=' h-full rounded-md'>
								<img
									alt='profil'
									src={Profile}
									className='mx-auto object-cover h-full w-full rounded-md '
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};
