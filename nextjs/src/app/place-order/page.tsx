"use client";
import { useRouter } from "next/navigation";

export default function PlaceOrder() {
	const router = useRouter();
	const handleClick = () => {
		console.log("order placed");
		router.replace("/");
	};
	return (
		<>
			<h1>Order details</h1>
			<button onClick={handleClick}>Place order</button>
		</>
	);
}
