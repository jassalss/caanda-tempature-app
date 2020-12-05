import { useState, useEffect } from "react";
import Number from "./Number";
import "./app.css";
const App = () => {
  const [count, setSetCount] = useState(1);

  useEffect(() => {
    const inerval = setInterval(() => {
      setSetCount((count) => {
        if (count == 3) {
          return 1;
        }
        return count + 1;
      });
    }, 3000);
    return () => clearInterval(inerval);
  }, []);
  return (
    <div className="App">
      <div className={`image${count}`}>
        <div className={`innerbox${count}`}>
          <div className="upperHalf">
            <div className="firstHalf">
              <Number number={34} />
            </div>
            <div className="secondHalf">
              <div className="text">
                <p>Real meteorologist</p>
                <p>based in Calgary </p>
              </div>
              <div className="navBar">
                <ul>
                  <li>
                    <a href="#home">Home/</a>
                  </li>
                  <li>
                    <a href="#pages">Pages</a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="#landing">Landing</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bottomHalf"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
