"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AuthLayout({ children }: { children: React.ReactNode }) {
	const layout = [
		{ name: "Register", href: "/register" },
		{ name: "Login", href: "/login" },
		{ name: "Forgot-password", href: "/forgot-password" },
	];
	const pathname = usePathname();
	console.log(pathname);

	return (
		<>
			<h1>Authentication pages</h1>
			{layout.map((route) => {
				const isActive =
					pathname === route.href || (pathname.startsWith(route.href) && route.href !== "/");
				return (
					<Link
						className={`${isActive ? "text-green-500 font-bold" : "text-blue-500"}`}
						href={route.href}
						key={route.name}
					>
						{route.name}
					</Link>
				);
			})}

			{children}
		</>
	);
}
