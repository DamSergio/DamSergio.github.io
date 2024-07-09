import { motion } from 'framer-motion';

const Photo = () => {
	return (
		<div className="relative h-full w-full">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 0.5, duration: 0.4, ease: 'easeIn' },
				}}
			>
				<motion.div className="absolute h-[298px] w-[298px] mix-blend-difference lg:h-[498px] lg:w-[498px]">
					<img
						src="/assets/foto.png"
						alt="foto"
						className="rounded-full object-contain"
					/>
				</motion.div>

				<motion.svg
					className="h-[300px] w-[300px] lg:h-[506px] lg:w-[506px]"
					fill="transparent"
					viewBox="0 0 506 506"
					xmlns="http://www.w3.org/2000/svg"
				>
					<motion.circle
						cx="253"
						cy="253"
						r="250"
						stroke="#9233EA"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
						initial={{ strokeDasharray: '24 10 0 0' }}
						animate={{
							strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
							rotate: [120, 360],
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					/>
				</motion.svg>
			</motion.div>
		</div>
	);
};

export default Photo;
