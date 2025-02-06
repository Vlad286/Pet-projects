import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EventsProvider} from "./entities/Event/model/EventsContext.jsx";
import App from "./app/providers/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EventsProvider>
      <App />
    </EventsProvider>
  </StrictMode>
);
