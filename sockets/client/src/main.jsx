import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "./context/useAuth.jsx";
import { SocketProvider } from "./context/useSocket.jsx";
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<QueryClientProvider client={new QueryClient()}>
			<UserProvider>
				<SocketProvider>
					<App />
				</SocketProvider>
			</UserProvider>
		</QueryClientProvider>
	</StrictMode>
);
