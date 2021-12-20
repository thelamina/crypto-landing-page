import React, { useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ManImage from '../../assets/man.jpg';
import { ReactComponent as RocketIcon } from '../../assets/rocket.svg';
import { Link } from 'react-router-dom';

export const Safety = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);
	return (
		<div className='container mx-auto mt-8 py-16'>
			<div className='flex space-x-12'>
				<div className='overflow-hidden rounded-lg relative mb-6 w-1/2 h-1/2 '>
					<motion.div
						ref={ref}
						animate={controls}
						initial='hidden'
						variants={{
							visible: {
								opacity: 1,
								x: '0px',
								transition: {
									duration: 0.4,
									delay: 0,
									type: 'tween',
								},
							},
							hidden: {
								opacity: 0,
								x: '-10px',
							},
						}}
						className='w-80 h-full rounded-lg'
					>
						<motion.img
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.5, type: 'tween' },
							}}
							className='w-80 h-full object-cover'
							alt='eggs'
							src={ManImage}
						/>
					</motion.div>
					<div className='absolute w-2/4 z-20 p-6 rounded-lg border bg-gray-300 before:blur-lg bg-opacity-50 backdrop-blur-sm text-black right-0 bottom-24 top-24'>
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
										delay: 1.0,
										type: 'tween',
									},
								},
								hidden: {
									opacity: 0,
									y: '-16px',
								},
							}}
							className='bg-gray-800 rounded-md'
						>
							<p className='text-gray-200 p-4 font-semibold text-md flex items-center'>
								<svg
									width={10}
									height={10}
									fill='currentColor'
									className='h-8 w-8 mr-2'
									viewBox='0 0 1792 1792'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z'></path>
								</svg>
								Your Investment Secured
							</p>
							<div className='rounded-b-md p-4 bg-white'>
								<p className='text-gray-700 font-semibold pb-2'>
									Encrypted Address
								</p>
								<p className='text-gray-400'>
									0xa49dkadxc58bxzn****
								</p>
							</div>
						</motion.div>
						<motion.div
							ref={ref}
							animate={controls}
							initial='hidden'
							variants={{
								visible: {
									opacity: 1,

									transition: {
										duration: 0.4,
										delay: 0.2,
										type: 'tween',
									},
								},
								hidden: {
									opacity: 0.5,
								},
							}}
							className='rounded-md bg-white mt-4'
						>
							<p className='text-gray-500 px-4 py-3 font-semibold text-md flex items-center'>
								<svg
									width={10}
									height={10}
									fill='currentColor'
									className='h-4 w-4 mr-2'
									viewBox='0 0 1792 1792'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z'></path>
								</svg>
								Level 1 Updated
								<RocketIcon className='h-8 w-8 mr-2 absolute right-2' />
							</p>
						</motion.div>
						<motion.div
							ref={ref}
							animate={controls}
							initial='hidden'
							variants={{
								visible: {
									opacity: 1,

									transition: {
										duration: 0.4,
										delay: 0.2,
										type: 'tween',
									},
								},
								hidden: {
									opacity: 0.5,
								},
							}}
							className='rounded-md bg-white mt-4'
						>
							<p className='text-gray-500 px-4 py-3 font-semibold text-md flex items-center'>
								<svg
									width={10}
									height={10}
									fill='currentColor'
									className='h-4 w-4 mr-2'
									viewBox='0 0 1792 1792'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z'></path>
								</svg>
								Level 2 Updated
								<RocketIcon className='h-8 w-8 mr-2 absolute right-2' />
							</p>
						</motion.div>
					</div>
				</div>
				<div className=' flex flex-col items-start justify-between  p-4 max-w-md'>
					<div className='flex items-center text-lg mt-8 font-semibold'>
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
										delay: 0.1,
										type: 'tween',
									},
								},
								hidden: {
									opacity: 0,
									y: '-5px',
								},
							}}
						>
							Safety Priority
						</motion.p>
						<div
							className='ml-4 w-10 bg-red-800'
							style={{ height: '1px' }}
						/>
					</div>

					<motion.h4
						ref={ref}
						animate={controls}
						initial='hidden'
						variants={{
							visible: {
								opacity: 1,
								y: '0px',
								transition: {
									// duration: 0.4,
									// delay: 0.1,
									// type: 'tween',
								},
							},
							hidden: {
								opacity: 0,
								y: '-10px',
							},
						}}
						className='text-4xl font-semibold leading-snug max-w-xs'
					>
						Our Commitment to Your Security
					</motion.h4>

					<motion.p
						ref={ref}
						animate={controls}
						initial='hidden'
						variants={{
							visible: {
								opacity: 1,
								y: '0px',
								transition: {
									duration: 1,
									delay: 0.2,
									type: 'tween',
								},
							},
							hidden: {
								opacity: 0,
								y: '-5px',
							},
						}}
						className='text-gray-500 text-md'
					>
						Turney has extensive experience with DeFi and blockchain
						technologies. This includes the security processes
						required to keep funds safe. We are serious about the
						risk and have worked extensively to protect your
						investment.
					</motion.p>
					<motion.div
						ref={ref}
						animate={controls}
						initial='hidden'
						variants={{
							visible: {
								opacity: 1,
								y: '0px',
								transition: {
									duration: 0.2,
									delay: 0.1,
									type: 'tween',
								},
							},
							hidden: {
								opacity: 0,
								y: '-20px',
							},
						}}
						className='flex'
					>
						<Link
							to='/'
							className='hover:-translate-y-2 capitalize py-2 px-4 inline font-medium border-2 border-transparent text-white text-md bg-red-500 hover:bg-red-600  transition duration-300 ease-in-out rounded-md'
						>
							Learn More
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	);
};
