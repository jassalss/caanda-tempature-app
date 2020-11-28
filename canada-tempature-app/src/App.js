import { useState, useEffect } from "react";
import "./app.css";
const App = () => {
  const [count, setSetCount] = useState(2);

  // useEffect(() => {
  //   const inerval = setInterval(() => {
  //     setSetCount((count) => {
  //       if (count > 2) {
  //         return 0;
  //       }
  //       return count + 1;
  //     });
  //   }, 1000);
  //   return () => clearInterval(inerval);
  // }, []);
  return (
    <div className="App">
      <div className={`image${count}`}></div>
    </div>
  );
};

export default App;
