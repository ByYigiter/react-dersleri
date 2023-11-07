import React from "react";
import "./product-card.scss";

const ProductCard = (props) => {
	return (
		<div className="product-card">
			<h2>{props.name}</h2>
			{props.children}
		</div>
	);
};

export default ProductCard;
