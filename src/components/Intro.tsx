import { Reorder, useDragControls } from "motion/react";
import { useState } from "react";

const listOfStuff = [
	{ id: 1, test: "bob" },
	{ id: 2 },
	{ id: 3 },
	{ id: 4 },
	{ id: 5 },
	{ id: 6 },
	{ id: 7 },
	{ id: 8 },
	{ id: 9 },
	{ id: 10 },
	{ id: 11 },
	{ id: 12 },
	{ id: 13 },
	{ id: 14 },
	{ id: 15 },
	{ id: 16 },
];

export function Intro() {
	const [items, setItems] = useState(listOfStuff);
	const controls = useDragControls();
	return (
		<>
			<Reorder.Group
				axis="y"
				values={items}
				onReorder={setItems}
				layoutScroll
				style={{
					backgroundColor: "red",
					display: "grid",
					gridTemplateColumn: "1fr",
					gap: "10px",
					listStyleType: "none",
					padding: "0",
				}}
			>
				{items.map((item) => (
					<Reorder.Item key={item.id} value={item}>
						<div className="box">{item.id}</div>
					</Reorder.Item>
				))}
			</Reorder.Group>
		</>
	);
}
