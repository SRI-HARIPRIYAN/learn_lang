export default async function DashBoard({ params }: { params: Promise<{ userName: string }> }) {
	const { userName } = await params;
	return <h1>DashBoard user: {userName}</h1>;
}
