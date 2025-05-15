import { useState } from "react";
import { motion, scale } from "motion/react";
import { Intro } from "./components/Intro";
import { Limits } from "./components/Limits";
import { Modal } from "./components/Modal";
import { Slider } from "./components/Slider";
import { Keyframes } from "./components/Keyframes";
import { Drag } from "./components/Drag";
import "./App.css";

function App() {
	const [activeComponent, setActiveComponent] = useState<number>(0);
	const buttonsList = [
		"Intro",
		"Keyframes",
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
				return <Keyframes />;
			case 2:
				return <Modal />;
			case 3:
				return <Slider />;
			case 4:
				return <Drag />;
			case 5:
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
						whileHover={{ scale: 1.05 }}
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
					transition={{ duration: 0.3 }}
				>
					<div className="rendered-component">{renderComponent()}</div>
				</motion.div>
			</div>
		</>
	);
}

export default App;
