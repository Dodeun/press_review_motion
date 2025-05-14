import { useState } from "react";
import { motion } from "motion/react";
import { Intro } from "./components/Intro";
import { Limits } from "./components/Limits";
import { Modal } from "./components/Modal";
import { Slider } from "./components/slider";
import { Keyframes } from "./components/keyframes";
import { Drag } from "./components/drag";
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
					<button
						key={button}
						onClick={() => setActiveComponent(index)}
						type="button"
					>
						{button}
					</button>
				))}
			</div>
			<div className="content">
				<motion.div
					key={activeComponent}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<div className="rendered-component">{renderComponent()}</div>
				</motion.div>
			</div>
		</>
	);
}

export default App;
