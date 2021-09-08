import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HomePage from "./Pages/Homepage";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
