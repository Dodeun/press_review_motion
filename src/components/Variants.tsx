import { motion } from "motion/react";

const variants = {
	static: { scale: 1, backgroundColor: "rgb(0, 59, 114)", rotate: 0 },
	hover: {
		scale: 1.2,
		backgroundColor: "rgb(0, 96, 185)",
		rotate: 360,
		transition: {
			backgroundColor: { duration: 0.5, ease: "easeInOut" },
			rotate: {
				duration: 6,
				repeat: Number.POSITIVE_INFINITY,
				ease: "linear",
			},
		},
	},
};

export function Variants() {
	return (
		<div>
			<motion.div
				className="box"
				variants={variants}
				initial="static"
				animate="static"
				whileHover="hover"
				transition={{ type: "tween" }}
			>
				<span>BOX</span>
			</motion.div>
		</div>
	);
}
