import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { socket } from "./socket.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "./context/useAuth.jsx";
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<QueryClientProvider client={new QueryClient()}>
			<UserProvider>
				<App />
			</UserProvider>
		</QueryClientProvider>
	</StrictMode>
);
