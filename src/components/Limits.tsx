import { motion } from "motion/react";

export function Limits() {
	return (
		<div style={{ display: "flex", gap: "72px" }}>
			<motion.div
				className="box"
				animate={{
					scale: [1, 1.2, 1],
				}}
				transition={{
					duration: 1,
					repeat: Number.POSITIVE_INFINITY,
					ease: "linear",
				}}
			>
				<span>BOX</span>
			</motion.div>
			<div className="box test">
				<span>BOX</span>
			</div>
		</div>
	);
}
