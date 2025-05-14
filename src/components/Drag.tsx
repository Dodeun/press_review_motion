import { useRef, useState } from "react";
import { motion } from "motion/react";

export function Drag() {
	const constraintRef = useRef<HTMLDivElement>(null);
	const [status, setStatus] = useState<boolean>(true);

	function handleDrag(event: PointerEvent) {
		const draggedEl = event.target as HTMLElement;
		draggedEl.style.pointerEvents = "none";

		const x = event.clientX;
		const y = event.clientY;

		const elementUnderCursor = document.elementFromPoint(x, y);
		draggedEl.style.pointerEvents = "auto";

		if (elementUnderCursor?.classList.contains("zone-on") && !status) {
			setStatus((prev) => !prev);
		} else if (elementUnderCursor?.classList.contains("zone-off") && status) {
			setStatus((prev) => !prev);
		}
	}

	return (
		<div className="constraint" ref={constraintRef}>
			<div className="zone-on">
				<span>ON</span>
			</div>
			<div className="zone-off">
				<span>OFF</span>
			</div>
			<motion.div
				drag
				dragConstraints={constraintRef}
				dragElastic={0.1}
				whileDrag={{ opacity: 0.8 }}
				className={`box draggable-box ${status ? "draggable-box-on" : "draggable-box-off"}`}
				onDrag={(event) => handleDrag(event as PointerEvent)}
			>
				<span>BOX</span>
			</motion.div>
		</div>
	);
}
