import React from 'react';
import { motion } from 'framer-motion';
import { FaEthereum } from 'react-icons/fa';
import chart from '../../assets/chart.png';
import { BsCurrencyBitcoin } from 'react-icons/bs';

export const PriceChart = () => {
	return (
		<motion.div
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
				delay: 2.5,
				duration: 0.5,
			}}
			className='flex flex-wrap mt-16 text-white rounded-md border border-gray-700 bg-gray-700 bg-opacity-30 shadow-lg'
		>
			<div className='w-full lg:border-b-0 border-b md:w-1/2  transition md:border-r border-gray-700 lg:w-1/4 px-6 py-8'>
				<motion.div
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.5, type: 'tween' },
					}}
				>
					<div className='flex items-center justify-between mb-6'>
						<p className='font-normal text-md text-white'>
							Bitcoin
							<span className='text-md font-normal text-gray-500 ml-2'>
								BTC
							</span>
						</p>

						<span className='bg-gray-700 p-2 border-gray-200 rounded-full'>
							<BsCurrencyBitcoin />
						</span>
					</div>
					<div className='flex items-center justify-between mb-0'>
						<div>
							<p className='font-semibold text-lg'>$ 90,497.12</p>
							<p className='py-1 font-normal text-sm text-red-300'>
								- 4.90%
							</p>
						</div>
						<span className=''>
							<img
								src={chart}
								alt='chart'
								className='w-12 h-12 object-cover'
							/>
						</span>
					</div>
				</motion.div>
			</div>
			<div className='w-full lg:border-b-0 border-b md:w-1/2 lg:w-1/4 lg:border-r border-gray-700 p-8'>
				<motion.div
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.5, type: 'tween' },
					}}
				>
					<div className='flex items-center justify-between mb-6'>
						<p className='font-normal text-md text-white'>
							Etherium
							<span className='text-md font-normal text-gray-500 ml-2'>
								ETH
							</span>
						</p>

						<span className='bg-gray-700 p-2 border-gray-200 rounded-full'>
							<FaEthereum />
						</span>
					</div>
					<div className='flex items-center justify-between mb-0'>
						<div>
							<p className='font-semibold text-lg'>$ 5,897.12</p>
							<p className='py-1 font-normal text-sm text-green-300'>
								+ 1.89%
							</p>
						</div>
						<span className=''>
							<img
								src={chart}
								alt='chart'
								className='w-12 h-12 object-cover'
							/>
						</span>
					</div>
				</motion.div>
			</div>
			<div className='w-full border-b lg:border-b-0 md:w-1/2 md:border-r lg:w-1/4 lg:border-r-0 border-gray-700 p-8'>
				<motion.div
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.5, type: 'tween' },
					}}
				>
					<div className='flex items-center justify-between mb-6'>
						<p className='font-normal text-md text-white'>
							Solana
							<span className='text-md font-normal text-gray-500 ml-2'>
								SOL
							</span>
						</p>

						<span className='bg-gray-700 p-2 border-gray-200 rounded-full'>
							<svg
								width={16}
								height={16}
								viewBox='0 0 96 84'
								className='w-4 h-4'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g clipPath='url(#clip0)'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M17.368 64.052C17.669 63.7209 18.0359 63.4563 18.445 63.2752C18.8541 63.094 19.2966 63.0003 19.744 63L93.056 63.06C93.3682 63.0606 93.6735 63.1519 93.9349 63.3228C94.1962 63.4936 94.4023 63.7367 94.5281 64.0224C94.6539 64.3081 94.694 64.6242 94.6436 64.9323C94.5932 65.2404 94.4544 65.5273 94.244 65.758L78.632 82.948C78.3308 83.2793 77.9637 83.5441 77.5542 83.7252C77.1447 83.9064 76.7018 84 76.254 84L2.94405 83.94C2.63185 83.9394 2.32654 83.8481 2.06523 83.6772C1.80391 83.5064 1.59783 83.2634 1.47202 82.9776C1.3462 82.6919 1.30607 82.3758 1.35649 82.0677C1.40691 81.7596 1.54572 81.4727 1.75605 81.242L17.368 64.052ZM94.244 49.742C94.4544 49.9727 94.5932 50.2596 94.6436 50.5677C94.694 50.8758 94.6539 51.1919 94.5281 51.4776C94.4023 51.7634 94.1962 52.0064 93.9349 52.1772C93.6735 52.3481 93.3682 52.4394 93.056 52.44L19.746 52.5C19.2983 52.5 18.8554 52.4064 18.4459 52.2252C18.0364 52.0441 17.6693 51.7793 17.368 51.448L1.75605 34.248C1.54572 34.0173 1.40691 33.7304 1.35649 33.4223C1.30607 33.1142 1.3462 32.7981 1.47202 32.5124C1.59783 32.2266 1.80391 31.9836 2.06523 31.8128C2.32654 31.6419 2.63185 31.5506 2.94405 31.55L76.256 31.49C76.7035 31.4903 77.146 31.584 77.5551 31.7652C77.9642 31.9463 78.3311 32.2109 78.632 32.542L94.244 49.742ZM17.368 1.052C17.669 0.720916 18.0359 0.456328 18.445 0.275176C18.8541 0.0940234 19.2966 0.000298083 19.744 0L93.056 0.06C93.3682 0.0606347 93.6735 0.151917 93.9349 0.322758C94.1962 0.493599 94.4023 0.736647 94.5281 1.02238C94.6539 1.30811 94.694 1.62423 94.6436 1.93234C94.5932 2.24044 94.4544 2.52728 94.244 2.758L78.632 19.948C78.3308 20.2793 77.9637 20.5441 77.5542 20.7252C77.1447 20.9064 76.7018 21 76.254 21L2.94405 20.94C2.63185 20.9394 2.32654 20.8481 2.06523 20.6772C1.80391 20.5064 1.59783 20.2634 1.47202 19.9776C1.3462 19.6919 1.30607 19.3758 1.35649 19.0677C1.40691 18.7596 1.54572 18.4727 1.75605 18.242L17.368 1.052Z'
										fill='white'
									/>
								</g>
								<defs>
									<clipPath id='clip0'>
										<rect
											width={96}
											height={84}
											fill='white'
										/>
									</clipPath>
								</defs>
							</svg>
						</span>
					</div>
					<div className='flex items-center justify-between mb-0'>
						<div>
							<p className='font-semibold text-lg'>$ 297.12</p>
							<p className='py-1 font-normal text-sm text-red-300'>
								- 20.2%
							</p>
						</div>
						<span className=''>
							<img
								src={chart}
								alt='chart'
								className='w-12 h-12 object-cover'
							/>
						</span>
					</div>
				</motion.div>
			</div>
			<div className='w-full lg:border-b-0 md:w-1/2 lg:w-1/4 lg:border-l border-gray-700 p-8'>
				<motion.div
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.5, type: 'tween' },
					}}
				>
					<div className='flex items-center justify-between mb-6'>
						<p className='font-normal text-md text-white'>
							Cardano
							<span className='text-md font-normal text-gray-500 ml-2'>
								ADA
							</span>
						</p>

						<span className='bg-gray-700 p-2 border-gray-200 rounded-full'>
							<BsCurrencyBitcoin />
						</span>
					</div>
					<div className='flex items-center justify-between mb-0'>
						<div>
							<p className='font-semibold text-lg'>$ 1.12</p>
							<p className='py-1 font-normal text-sm text-green-300'>
								+ 105%
							</p>
						</div>
						<span className=''>
							<img
								src={chart}
								alt='chart'
								className='w-12 h-12 object-cover'
							/>
						</span>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};
