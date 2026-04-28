import React, { useState } from "react";

export const App = () => {

	const [colorRed, setColorRed] = useState("redOff");
	const [colorOrange, setColorOrange] = useState("orangeOff");
	const [colorGreen, setColorGreen] = useState("greenOff");

	const clickRed = () => {
		if (colorRed === "redOff") {
			setColorRed("redOn");
			setColorOrange("orangeOff");
			setColorGreen("greenOff");
		} else if (colorRed === "redOn") {
			setColorRed("redOff");
		}
	}
	const clickOrange = () => {
		if (colorOrange === "orangeOff") {
			setColorOrange("orangeOn");
			setColorRed("redOff");
			setColorGreen("greenOff");
		} else if (colorOrange === "orangeOn") {
			setColorOrange("orangeOff");
		}
	}
	const clickGreen = () => {
		if (colorGreen === "greenOff") {
			setColorGreen("greenOn");
			setColorRed("redOff");
			setColorOrange("orangeOff");
		} else if (colorGreen === "greenOn") {
			setColorGreen("greenOff");
		}
	}
	const clickCambiarLuz = () => {
		if (colorRed === "redOff" && colorOrange === "orangeOff" && colorGreen === "greenOff") {
			setColorRed("redOn");
		} else if (colorRed === "redOn") {
			setColorRed("redOff");
			setColorOrange("orangeOn");
		} else if(colorOrange === "orangeOn") {
			setColorOrange("orangeOff");
			setColorGreen("greenOn");
		} else if(colorGreen === "greenOn") {
			setColorGreen("greenOff");
			setColorRed("redOn")
		}
	}

	return (
		<div className="text-center">
            <div className="SoporteSemaforo"></div>
			<div className="semaforo">
				<div className={colorRed} onClick={clickRed}></div>
				<div className={colorOrange} onClick={clickOrange}></div>
				<div className={colorGreen} onClick={clickGreen}></div>
			</div>
			<div>
				<button className="btn btn-warning mt-4" onClick={clickCambiarLuz}>Cambiar a la siguiente luz</button>
			</div>
		</div>
	);
};