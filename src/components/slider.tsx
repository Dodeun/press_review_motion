import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function Slider() {
	const [toggle, setToggle] = useState<boolean>(false);
	return (
		<>
			<AnimatePresence>
				<motion.div
					className="box"
					initial={{ x: 1000, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: -1000, opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					<span>BOX</span>
				</motion.div>
			</AnimatePresence>
		</>
	);
}
