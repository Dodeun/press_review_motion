import { motion } from "motion/react";
import { useState } from "react";

export function Animate() {
	const [scale, setScale] = useState(1);

	return (
		<div>
			<button
				onClick={() => {
					scale === 1 ? setScale(1.5) : setScale(1);
				}}
				type="button"
				style={{ marginBottom: "120px" }}
			>
				Scale
			</button>
			<motion.div className="box" animate={{ scale: scale }}>
				<span>BOX</span>
			</motion.div>
		</div>
	);
}
