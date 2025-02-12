import { Metadata } from "next";
export const metadata: Metadata = {
	title: {
		default: "Nextjs - Shree",
		template: "%s | nextjs",
	},
	description: "This is nextjs practise home page",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
