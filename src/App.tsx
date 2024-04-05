import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import "./App.css";

import "./fonts/Arenq.otf";
import "./fonts/Beckman-FREE.otf";
import "./fonts/Mova.otf";
import "./fonts/Mova.ttf";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
