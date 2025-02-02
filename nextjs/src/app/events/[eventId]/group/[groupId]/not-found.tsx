"use client";
import React from "react";
import { usePathname } from "next/navigation";
const NotFound = () => {
	const path = usePathname();
	const eventId = path.split("/")[2];
	const groupId = path.split("/")[4];

	return (
		<div>
			NotFound the group {groupId} for {eventId}
		</div>
	);
};

export default NotFound;
