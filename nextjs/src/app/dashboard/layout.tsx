export default function DashboardLayout({
	children,
	attendance,
	likedevents,
	profile,
}: {
	children: React.ReactNode;
	attendance: React.ReactNode;
	likedevents: React.ReactNode;
	profile: React.ReactNode;
}) {
	return (
		<>
			{children}
			<div>{attendance}</div>
			<div>{likedevents}</div>
			<div>{profile}</div>
		</>
	);
}
