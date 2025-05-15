import { motion } from "motion/react";

export function Intro() {
	return (
		<>
			<motion.div
				className="box"
				initial={{
					rotate: "0deg",
				}}
				animate={{
					rotate: "360deg",
				}}
				transition={{
					duration: 10,
					repeat: Number.POSITIVE_INFINITY,
					ease: "linear",
				}}
			>
				<span>BOX</span>
			</motion.div>
		</>
	);
}
