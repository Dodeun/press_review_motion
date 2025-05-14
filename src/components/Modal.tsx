import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function Modal() {
	const [toggle, setToggle] = useState<boolean>(false);
	return (
		<>
			<button onClick={() => setToggle((prev) => !prev)} type="button">
				Open Modal
			</button>
			<AnimatePresence>
				{toggle && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className="modal">
							<p>This is a modal!</p>
							<button onClick={() => setToggle((prev) => !prev)} type="button">
								Close
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
