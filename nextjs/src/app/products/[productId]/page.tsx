import { Metadata } from "next";
type Props = {
	params: Promise<{ productId: string }>;
};

export async function generateMetadata({ params }: Props) {
	const productId = (await params).productId;
	const id = await new Promise((resolve) => {
		setTimeout(() => {
			resolve(`Product ${productId}`);
		});
	});
	return {
		title: id,
	};
}
export default async function ProductIdPage({ params }: Props) {
	const productId = (await params).productId;
	return (
		<>
			<h2>Product details for product: {productId}</h2>
		</>
	);
}
