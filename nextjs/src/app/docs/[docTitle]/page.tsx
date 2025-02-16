"use client";
import { use } from "react";
export default function DocPage({
	params,
	searchParams,
}: {
	params: Promise<{ docTitle: string }>;
	searchParams: Promise<{ framework: string }>;
}) {
	const { docTitle } = use(params);
	const { framework } = use(searchParams);
	return (
		<div>
			<h1>docTitle {docTitle}</h1>
			<p>Framework: {framework}</p>
		</div>
	);
}
