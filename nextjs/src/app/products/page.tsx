import React from "react";
import Link from "next/link";
const Products = () => {
	const product = "ipad";
	return (
		<div>
			<p>List of all products</p>
			<Link href={`/products/${product}`}>Product {product}</Link>
		</div>
	);
};

export default Products;
