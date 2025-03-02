import Link from "next/link";

const Home = () => {
	return (
		<div>
			<p>HOME</p>
			<div className="flex flex-col">
				<Link href="/products" className="block">
					Products
				</Link>
				<Link href="/dashboard" className="block">
					Dashboard
				</Link>
			</div>
		</div>
	);
};

export default Home;
