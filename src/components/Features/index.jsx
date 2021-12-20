import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Features = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	return (
		// <AnimatePresence>
		<div className='container mx-auto mt-16 pt-12'>
			<div className='flex grid-cols-3 gap-8 '>
				<motion.div
					ref={ref}
					animate={controls}
					initial='hidden'
					variants={{
						visible: {
							opacity: 1,
							transition: {
								duration: 1,
								delay: 0.5,
								type: 'tween',
							},
						},
						hidden: {
							opacity: 0,
						},
					}}
					transition={{
						type: 'tween',
						delay: 2.0,
						duration: 1.5,
					}}
					className='text-xl w-1/3 font-semibold p-4'
				>
					<h4 className='border-b inline-block pb-8 border-gray-300'>
						Our Feature
					</h4>
				</motion.div>
				<motion.h4
					ref={ref}
					animate={controls}
					initial='hidden'
					variants={{
						visible: {
							x: '0px',
							opacity: 1,
							transition: {
								duration: 1,
								delay: 0.5,
								type: 'tween',
							},
						},
						hidden: {
							x: '-30px',
							opacity: 0,
						},
					}}
					transition={{
						type: 'tween',
						delay: 2.0,
						duration: 1.5,
					}}
					className='text-3xl border-b border-gray-300 font-semibold py-6 pb-8 pr-8 w-2/3 max-w-md'
				>
					Get Ready for Seamless Online Investment, with Crypto
					Digital Currencies.
					<div
						className='w-16 bottom-0 absolute bg-red-800'
						style={{ height: '1px' }}
					/>
				</motion.h4>
			</div>

			<div className='grid grid-cols-3 gap-12 justify-center text-left py-8'>
				<motion.div
					ref={ref}
					animate={controls}
					initial='hidden'
					variants={{
						visible: {
							// y: '0px',
							opacity: 1,
							transition: {
								duration: 1.0,
								delay: 1.5,
								type: 'tween',
							},
						},
						hidden: {
							// y: '-20px',
							opacity: 0,
						},
					}}
					// transition={{
					// 	type: 'tween',
					// 	delay: 2.0,
					// 	duration: 1.5,
					// }}
					className='w-full p-6 bg-white mt-6 '
				>
					<motion.svg
						ref={ref}
						animate={controls}
						initial='hidden'
						variants={{
							visible: {
								opacity: 1,
							},
							hidden: {
								opacity: 0,
							},
						}}
						width={20}
						height={20}
						fill='currentColor'
						className='h-6 w-6'
						viewBox='0 0 1792 1792'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z' />
					</motion.svg>

					<motion.h3
						ref={ref}
						animate={controls}
						initial='hidden'
						variants={{
							visible: {
								y: '0px',
								opacity: 1,
								transition: {
									duration: 0.5,
									delay: 2.5,
									type: 'tween',
								},
							},
							hidden: {
								y: '-20px',
								opacity: 0,
							},
						}}
						// transition={{
						// 	type: 'tween',
						// 	delay: 2.0,
						// 	duration: 0.5,
						// }}
						className='text-2xl font-semibold pb-4 pt-8'
					>
						Smart Order Routing
					</motion.h3>
					<motion.p
						ref={ref}
						animate={controls}
						initial='hidden'
						variants={{
							visible: {
								y: '0px',
								opacity: 1,
								transition: {
									duration: 0.5,
									delay: 3.0,
									type: 'tween',
								},
							},
							hidden: {
								y: '-10px',
								opacity: 0,
							},
						}}
						// transition={{
						// 	type: 'tween',
						// 	delay: 2.5,
						// 	duration: 0.5,
						// }}
						className='text-md text-gray-400 py-2'
					>
						We provide the best proce and execution based on
						aggregated order book from multiple exchanges.
					</motion.p>
				</motion.div>
				<motion.div
					ref={ref}
					animate={controls}
					initial='hidden'
					variants={{
						visible: {
							// y: '0px',
							opacity: 1,
							transition: {
								duration: 1.0,
								delay: 3.5,
								type: 'tween',
							},
						},
						hidden: {
							// y: '-20px',
							opacity: 0,
						},
					}}
					// transition={{
					// 	type: 'tween',
					// 	delay: 2.0,
					// 	duration: 1.5,
					// }}
					className='w-full p-6 bg-white mt-6 '
				>
					<motion.svg
						ref={ref}
						animate={controls}
						initial='hidden'
						variants={{
							visible: {
								opacity: 1,
							},
							hidden: {
								opacity: 0,
							},
						}}
						width={20}
						height={20}
						fill='currentColor'
						className='h-6 w-6'
						viewBox='0 0 1792 1792'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z' />
					</motion.svg>

					<motion.h3
						ref={ref}
						animate={controls}
						initial='hidden'
						variants={{
							visible: {
								y: '0px',
								opacity: 1,
								transition: {
									duration: 0.5,
									delay: 3.5,
									type: 'tween',
								},
							},
							hidden: {
								y: '-20px',
								opacity: 0,
							},
						}}
						// transition={{
						// 	type: 'tween',
						// 	delay: 2.0,
						// 	duration: 0.5,
						// }}
						className='text-2xl font-semibold pb-4 pt-8'
					>
						One-Click Investing
					</motion.h3>
					<motion.p
						ref={ref}
						animate={controls}
						initial='hidden'
						variants={{
							visible: {
								y: '0px',
								opacity: 1,
								transition: {
									duration: 0.5,
									delay: 4.0,
									type: 'tween',
								},
							},
							hidden: {
								y: '-10px',
								opacity: 0,
							},
						}}
						className='text-md text-gray-400 py-2'
					>
						You can invest fiat or crypto to a High Yield Account
						with one click.
					</motion.p>
				</motion.div>
				<motion.div
					ref={ref}
					animate={controls}
					initial='hidden'
					variants={{
						visible: {
							// y: '0px',
							opacity: 1,
							transition: {
								duration: 1.0,
								delay: 4.0,
								type: 'tween',
							},
						},
						hidden: {
							// y: '-30px',
							opacity: 0,
						},
					}}
					transition={{
						type: 'tween',
						delay: 2.0,
						duration: 1.5,
					}}
					className='w-full p-6 bg-white mt-6 '
				>
					<motion.svg
						ref={ref}
						animate={controls}
						initial='hidden'
						variants={{
							visible: {
								opacity: 1,
							},
							hidden: {
								opacity: 0,
							},
						}}
						svg
						width={20}
						height={20}
						fill='currentColor'
						className='h-6 w-6'
						viewBox='0 0 1792 1792'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z' />
					</motion.svg>

					<motion.h3
						ref={ref}
						animate={controls}
						initial='hidden'
						variants={{
							visible: {
								y: '0px',
								opacity: 1,
								transition: {
									duration: 0.5,
									delay: 4.5,
									type: 'tween',
								},
							},
							hidden: {
								y: '-20px',
								opacity: 0,
							},
						}}
						className='text-2xl font-semibold pb-4 pt-8'
					>
						Market Neutral
					</motion.h3>
					<motion.p
						ref={ref}
						animate={controls}
						initial='hidden'
						variants={{
							visible: {
								y: '0px',
								opacity: 1,
								transition: {
									duration: 0.5,
									delay: 5.0,
									type: 'tween',
								},
							},
							hidden: {
								y: '-10px',
								opacity: 0,
							},
						}}
						className='text-md text-gray-400 py-2'
					>
						Our yields are based on protocol activity. We hedge
						exposure to the underlying asset and market volatility.
					</motion.p>
				</motion.div>
			</div>
		</div>
		// </AnimatePresence>
	);
};
