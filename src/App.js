import {BrowserRouter as Router,Route } from "react-router-dom";

import Calculator from "./Calculator";
function App() {
  return (
    <Router>
      <Route path="/"><Calculator/></Route>
    </Router>
  );
}

export default App;
