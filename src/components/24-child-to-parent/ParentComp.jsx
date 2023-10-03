import React, { useState } from "react";
import ChildComp from "./ChildComp";

const ParentComp = () => {
	const [counter, setcounter] = useState(0);
	const handleCounter = (val) => {
		setcounter((prev) => prev + val);
	};
	return (
		<div>
			Counter:{counter}
			<ChildComp handleCounter={handleCounter} />
		</div>
	);
};

export default ParentComp;
