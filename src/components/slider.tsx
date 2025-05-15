import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function Slider() {
	const [count, setCount] = useState<number>(1);

	function handleCLick() {
		setCount((prev) => prev + 1);
	}
	return (
		<div className="slider-section">
			<p>Comptez les boites !</p>
			<div className="slider-boxes">
				<AnimatePresence initial={false}>
					<motion.div
						key={count}
						className="box slider"
						initial={{ x: 1000, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -1000, opacity: 0 }}
						transition={{ duration: 0.3, ease: "linear", type: "spring" }}
					>
						<span>BOX</span>
					</motion.div>
				</AnimatePresence>
			</div>
			<button type="button" onClick={handleCLick}>
				{count}
			</button>
		</div>
	);
}
