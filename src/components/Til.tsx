import React, { Suspense, JSX } from "react";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import routeComponents from '../routes';
import '../css/Til.css'


const Til = (): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = (day: number) => {
    navigate(`/til/day-${day}`);  // 클릭 시 해당 페이지로 이동
  };

  return (
    <div className="btnWrap">
      <ul>
        {routeComponents.map((route, i) => (
          <li key={i}>
            <h4 onClick={() => handleClick(Number(route.day))}>
              Day{route.day}
            </h4>
          </li>
        ))}
      </ul>
      <Suspense fallback={<h2>...loading</h2>}>
        <Routes>
          {routeComponents.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default Til;
