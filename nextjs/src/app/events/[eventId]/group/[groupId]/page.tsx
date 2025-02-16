import { display } from "@/app/_lib/display";
const Group = async ({
	params,
}: {
	params: Promise<{ eventId: string; groupId: number | number }>;
}) => {
	const { eventId, groupId } = await params;
	if (groupId > 1000) {
		// notFound();
		// redirect(`/events/${eventId}`);
		throw new Error("Group id greater than 1000");
	}
	return (
		<div>
			<h1>Event {eventId}</h1>
			<h1>group {groupId}</h1>
			{display()}
		</div>
	);
};

export default Group;
