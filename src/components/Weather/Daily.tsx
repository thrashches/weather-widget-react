import React, { useContext, useEffect, useState } from "react";
import { transform } from "typescript";
import { getDaily } from "../../api/requests";
import { LocationContext } from "../../context/LocationContext";
import "./Daily.scss";
import { ReactComponent as WindDirectionIcon } from "./wind-direction.svg";
import { ReactComponent as WindIcon } from "./wind.svg";
import { ReactComponent as PressureIcon } from "./pressure.svg";
import { ReactComponent as HumidityIcon } from "./humidity.svg";

/**
 * Компонент для отображения погоды на текущий день
 */
export default function Daily() {
  const [weather, setWeather] = useState();
  const { location } = useContext(LocationContext);
  useEffect(() => {
    if (location) {
      getDaily(location, 1)
        .then((response) => {
          // console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [location]);

  return (
    <div className="daily-wrapper">
      <div className="daily-header">
        <h4>12 февраля, Воскресенье</h4>
      </div>
      <div className="summary-wrapper">
        <div className="daily__main-wrapper">
          <div className="daily__condition">
            <div className="daily__condition__data">
              <img
                src="http://openweathermap.org/img/wn/10d@4x.png"
                width="100px"
                height="100px"
                alt=""
              />
              <p className="text-center">дождь</p>
            </div>
            <div className="daily__condition__data">
              <p>
                <WindIcon width={20} height={20} /> 3 м/с
                <WindDirectionIcon
                  className="wind-direction"
                  style={{ transform: "rotate(200deg)" }}
                />
              </p>
              <p>
                <PressureIcon width={20} height={20} /> 750 мм р.с.
              </p>
              <p>
                <HumidityIcon width={20} height={20} /> 80%
              </p>
            </div>
          </div>
        </div>
        <div className="daily__secondary-wrapper">
          <div className="daily__temp">12&deg;</div>
          <div className="daily__temp__secondary">Мин: 10&deg;</div>
          <div className="daily__temp__secondary">Макс: 14&deg;</div>
          <div className="daily__temp__secondary">Ощущается как: 14&deg;</div>
        </div>
      </div>
      <div className="hourly-wrapper">
        <div className="hourly__card">
          <div className="hourly__time">0:00</div>
          <div className="hourly__temp">12&deg;</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            width="50px"
            height="50px"
            alt=""
          />
          <div className="hourly__wind">2 м/с</div>
        </div>
        <div className="hourly__card">
          <div className="hourly__time">2:00</div>
          <div className="hourly__temp">12&deg;</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            width="50px"
            height="50px"
            alt=""
          />
          <div className="hourly__wind">2 м/с</div>
        </div>
        <div className="hourly__card">
          <div className="hourly__time">4:00</div>
          <div className="hourly__temp">12&deg;</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            width="50px"
            height="50px"
            alt=""
          />
          <div className="hourly__wind">2 м/с</div>
        </div>
        <div className="hourly__card">
          <div className="hourly__time">6:00</div>
          <div className="hourly__temp">12&deg;</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            width="50px"
            height="50px"
            alt=""
          />
          <div className="hourly__wind">2 м/с</div>
        </div>
        <div className="hourly__card">
          <div className="hourly__time">8:00</div>
          <div className="hourly__temp">12&deg;</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            width="50px"
            height="50px"
            alt=""
          />
          <div className="hourly__wind">2 м/с</div>
        </div>
        <div className="hourly__card">
          <div className="hourly__time">10:00</div>
          <div className="hourly__temp">12&deg;</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            width="50px"
            height="50px"
            alt=""
          />
          <div className="hourly__wind">2 м/с</div>
        </div>
        <div className="hourly__card">
          <div className="hourly__time">12:00</div>
          <div className="hourly__temp">12&deg;</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            width="50px"
            height="50px"
            alt=""
          />
          <div className="hourly__wind">2 м/с</div>
        </div>
        <div className="hourly__card">
          <div className="hourly__time">14:00</div>
          <div className="hourly__temp">12&deg;</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            width="50px"
            height="50px"
            alt=""
          />
          <div className="hourly__wind">2 м/с</div>
        </div>
        <div className="hourly__card">
          <div className="hourly__time">16:00</div>
          <div className="hourly__temp">12&deg;</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            width="50px"
            height="50px"
            alt=""
          />
          <div className="hourly__wind">2 м/с</div>
        </div>
        <div className="hourly__card">
          <div className="hourly__time">18:00</div>
          <div className="hourly__temp">12&deg;</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            width="50px"
            height="50px"
            alt=""
          />
          <div className="hourly__wind">2 м/с</div>
        </div>
        <div className="hourly__card">
          <div className="hourly__time">20:00</div>
          <div className="hourly__temp">12&deg;</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            width="50px"
            height="50px"
            alt=""
          />
          <div className="hourly__wind">2 м/с</div>
        </div>
        <div className="hourly__card">
          <div className="hourly__time">22:00</div>
          <div className="hourly__temp">12&deg;</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            width="50px"
            height="50px"
            alt=""
          />
          <div className="hourly__wind">2 м/с</div>
        </div>
      </div>
    </div>
  );
}
