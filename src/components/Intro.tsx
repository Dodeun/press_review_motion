import { motion } from "motion/react";

export function Intro() {
	return (
		<>
			<motion.div
				className="box"
				animate={{
					scale: 2,
				}}
			>
				<span>BOX</span>
			</motion.div>
		</>
	);
}
