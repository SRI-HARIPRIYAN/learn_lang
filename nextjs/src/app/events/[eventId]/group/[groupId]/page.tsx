import { notFound } from "next/navigation";

const Group = async ({
	params,
}: {
	params: Promise<{ eventId: string; groupId: number | number }>;
}) => {
	const { eventId, groupId } = await params;
	if (groupId > 1000) notFound();
	return (
		<div>
			<h1>Event {eventId}</h1>
			<h1>group {groupId}</h1>
		</div>
	);
};

export default Group;
