const Group = async ({
	params,
}: {
	params: Promise<{ eventId: string; groupId: string }>;
}) => {
	const { eventId, groupId } = await params;
	return (
		<div>
			<h1>Event {eventId}</h1>
			<h1>group {groupId}</h1>
		</div>
	);
};

export default Group;
