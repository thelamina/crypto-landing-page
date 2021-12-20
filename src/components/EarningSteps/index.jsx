import React, { useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Link } from 'react-router-dom';

export const EarningSteps = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);
	return (
		<div className='container mx-auto my-8'>
			<motion.div
				ref={ref}
				animate={controls}
				initial='hidden'
				variants={{
					visible: {
						opacity: 1,
						transition: {
							duration: 0.2,
							delay: 0.5,
							type: 'tween',
						},
					},
					hidden: {
						opacity: 0,
					},
				}}
				className='p-16 text-white flex rounded-xl relative overflow-hidden bg-gradient-radial from-gray-900 via-gray-900 to-black'
			>
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
								delay: 1.5,
								type: 'tween',
							},
						},
						hidden: { y: '-10px', opacity: 0 },
					}}
					className='flex flex-col items-start justify-between  w-1/3'
				>
					<h4 className='text-3xl font-semibold mb-4'>
						Start Earning* <br />
						in 5 Simple Steps
					</h4>
					<h4 className='text-sm font-normal mb-24'>
						*Not Just Saving
					</h4>
					<Link
						to='/'
						className='hover:-translate-y-2  capitalize py-2 px-4 inline font-medium border-2 border-transparent text-white text-md bg-red-500 hover:bg-red-600  transition duration-300 ease-in-out rounded-md'
					>
						Get started
					</Link>
				</motion.div>
				<div className='flex gap-6 w-2/3'>
					<div className=' w-full grid grid-rows-3 gap-8 '>
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
										delay: 2.0,
										type: 'tween',
									},
								},
								hidden: {
									opacity: 0,
									y: '-10px',
								},
							}}
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.5, type: 'tween' },
							}}
							className='rounded-lg border relative border-gray-600 p-4'
						>
							<span className='absolute flex items-center justify-center right-4 w-8 text-lg text-red-500 h-8 bg-red-500 bg-opacity-40 rounded-md'>
								1
							</span>
							<h4 className='text-xl font-semibold mb-4'>
								Register
							</h4>
							<p className='text-md text-gray-400 '>
								Web App, IOS, and Android.
							</p>
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
										duration: 0.4,
										delay: 2.2,
										type: 'tween',
									},
								},
								hidden: {
									opacity: 0,
									y: '-10px',
								},
							}}
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.5, type: 'tween' },
							}}
							className='rounded-lg border relative border-gray-600 p-4'
						>
							<span className='absolute flex items-center justify-center right-4 w-8 text-lg text-red-500 h-8 bg-red-500 bg-opacity-40 rounded-md'>
								2
							</span>
							<h4 className='text-xl font-semibold mb-4'>
								Verify Yourself
							</h4>
							<p className='text-md text-gray-400 '>
								To start using Turney.
							</p>
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
										duration: 0.4,
										delay: 2.4,
										type: 'tween',
									},
								},
								hidden: {
									opacity: 0,
									y: '-10px',
								},
							}}
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.5, type: 'tween' },
							}}
							className='rounded-lg border relative border-gray-600 p-4'
						>
							<span className='absolute flex items-center justify-center right-4 w-8 text-lg text-red-500 h-8 bg-red-500 bg-opacity-40 rounded-md'>
								3
							</span>
							<h4 className='text-xl font-semibold mb-4'>
								First Transaction
							</h4>
							<p className='text-md text-gray-400 '>
								Buy or transfer digital assets
							</p>
						</motion.div>
					</div>
					<div className='w-full grid grid-rows-2 grid-cols-1 items-center gap-6 '>
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
										delay: 2.6,
										type: 'tween',
									},
								},
								hidden: {
									opacity: 0,
									y: '-10px',
								},
							}}
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.5, type: 'tween' },
							}}
							className='rounded-lg border relative border-gray-600 p-4'
						>
							<span className='absolute flex items-center justify-center right-4 w-8 text-lg text-red-500 h-8 bg-red-500 bg-opacity-40 rounded-md'>
								4
							</span>
							<h4 className='text-xl font-semibold mb-4'>
								High Yield Deposit
							</h4>
							<p className='text-md text-gray-400 '>
								Account to earn returns.
							</p>
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
										duration: 0.4,
										delay: 2.8,
										type: 'tween',
									},
								},
								hidden: {
									opacity: 0,
									y: '-10px',
								},
							}}
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.5, type: 'tween' },
							}}
							className='rounded-lg border relative border-gray-600 p-4'
						>
							<span className='absolute flex items-center justify-center right-4 w-8 text-lg text-red-500 h-8 bg-red-500 bg-opacity-40 rounded-md'>
								5
							</span>
							<h4 className='text-xl font-semibold mb-4'>
								Earn yours!
							</h4>
							<p className='text-md text-gray-400 '>
								Recieve $40 free bonus
							</p>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};
