import { useState } from "react";
import { motion } from "motion/react";
import { Intro } from "./components/Intro";
import { Limits } from "./components/Limits";
import { Modal } from "./components/Modal";
import { Slider } from "./components/Slider";
import { Animate } from "./components/Animate";
import { Drag } from "./components/Drag";
import { Variants } from "./components/Variants";
import "./App.css";

function App() {
	const [activeComponent, setActiveComponent] = useState<number>(0);
	const buttonsList = [
		"Intro",
		"Animate",
		"Variants",
		"Modal",
		"Slider",
		"Drag",
		"Limits",
	];

	const renderComponent = () => {
		switch (activeComponent) {
			case 0:
				return <Intro />;
			case 1:
				return <Animate />;
			case 2:
				return <Variants />;
			case 3:
				return <Modal />;
			case 4:
				return <Slider />;
			case 5:
				return <Drag />;
			case 6:
				return <Limits />;
			default:
				return null;
		}
	};

	return (
		<>
			<div className="buttons">
				{buttonsList.map((button, index) => (
					<motion.button
						key={button}
						onClick={() => setActiveComponent(index)}
						type="button"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						{button}
					</motion.button>
				))}
			</div>
			<div className="content">
				<motion.div
					key={activeComponent}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<div className="rendered-component">{renderComponent()}</div>
				</motion.div>
			</div>
		</>
	);
}

export default App;
