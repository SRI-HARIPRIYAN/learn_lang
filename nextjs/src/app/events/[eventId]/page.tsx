import React from "react";

const Event = async ({ params }: { params: Promise<{ eventId: string }> }) => {
	const eventId = (await params).eventId;

	return <div>Event page {eventId + " "}</div>;
};

export default Event;
