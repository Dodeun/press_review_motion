import { motion } from "motion/react";

export function Intro() {
	return (
		<>
			<motion.div
				className="box"
				animate={{
					rotate: 360,
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
