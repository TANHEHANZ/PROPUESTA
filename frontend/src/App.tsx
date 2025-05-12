import { BrowserRouter as Router } from "react-router-dom";

import { RouterPrivate } from "./precentacion/pages/private/private.routes";
import { RouterPublic } from "./precentacion/pages/public/public.routes";

export function App() {
  return (
    <Router>
      <RouterPrivate />
      <RouterPublic />
    </Router>
  );
}
export default App;
