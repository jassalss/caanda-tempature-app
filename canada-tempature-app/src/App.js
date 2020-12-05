import { useState, useEffect } from "react";
import Number from "./Number";
import "./app.css";
const App = () => {
  const [count, setSetCount] = useState(1);
  const [tempArray, setTemp_array] = useState([0, 0, 0]);
  const cityNames = [
    ["Vancouver", "Beautiful British Columbia"],
    ["Calgary", "Wild Rose Country"],
    ["Toronto ", "Your to Discover"],
  ];

  useEffect(() => {
    const inerval = setInterval(() => {
      setSetCount((count) => {
        if (count === 3) {
          return 1;
        }
        return count + 1;
      });
    }, 3000);
    return () => clearInterval(inerval);
  }, []);

  useEffect(() => {
    const apiCalls = async () => {
      const result2 = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=calgary,CA&units=metric&appid=6891acd2ed2945d4505946e137864e68"
      );
      const result = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=vancouver,CA&units=metric&appid=6891acd2ed2945d4505946e137864e68"
      );
      const result3 = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=toronto,CA&units=metric&appid=6891acd2ed2945d4505946e137864e68"
      );
      const temp = await result.json();
      const temp2 = await result2.json();
      const temp3 = await result3.json();
      await setTemp_array([temp.main.temp, temp2.main.temp, temp3.main.temp]);
    };
    apiCalls();
  }, []);
  const num = parseFloat(tempArray[`${count - 1}`]).toFixed(1);
  return (
    <div className="App">
      <div className={`image${count}`}>
        <div className={`innerbox${count}`}>
          <div className="upperHalf">
            <div className="firstHalf">
              <Number number={num} />
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
          <div className="bottomHalf">
            <div className="cityName">
              <div>{cityNames[`${count - 1}`][0]}</div>
              <div>{cityNames[`${count - 1}`][1]}</div>
            </div>
            <div className="myLink">
              View More{" "}
              <span
                class="iconify"
                data-icon="fa-solid:external-link-alt"
                data-inline="false"
              ></span>
            </div>
          </div>
          <div className="bottom">
            <span
              class="iconify size"
              data-icon="carbon:auto-scroll"
              data-inline="false"
            ></span>
            <div className="bottomText">
              scroll down
              <br />
              to explore
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
