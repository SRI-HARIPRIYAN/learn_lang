import Link from "next/link";

export default function Docs() {
	const docs = [
		{
			title: "installation",
			framework: "nextjs",
		},
		{
			title: "deployment",
			framework: "aws",
		},
		{
			title: "api",
			framework: "spring",
		},
	];
	return (
		<div>
			{docs.map((doc, i) => (
				<Link key={i} href={`/docs/${doc.title}?framework=${doc.framework}`}>
					{doc.framework}
				</Link>
			))}
		</div>
	);
}
