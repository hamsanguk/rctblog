import React, { Suspense, JSX } from "react";
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import routeComponents from '../routes';
import '../css/Til.css'

const Til = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로를 가져옵니다.

  const handleClick = (day: number) => {
    const targetPath = `/til/day-${day}`;
    
    // 현재 경로가 해당 targetPath와 같으면 /til로 돌아갑니다.
    if (location.pathname === targetPath) {
      navigate('/til');  // 현재 경로가 Day 페이지라면 /til로 이동
    } else {
      navigate(targetPath);  // 그렇지 않으면 해당 day 페이지로 이동
    }
  };

  // routeComponents를 day를 기준으로 내림차순 정렬
  const sortedRouteComponents = [...routeComponents].sort((a, b) => Number(b.day) - Number(a.day));

  return (
    <div className="btnWrap">
      <ul>
        {sortedRouteComponents.map((route, i) => (
          <li key={i}>
            <h4 onClick={() => handleClick(Number(route.day))}>
              Day{route.day}
            </h4>
          </li>
        ))}
      </ul>
      <Suspense fallback={<h2>...loading</h2>}>
        <Routes>
          {sortedRouteComponents.map((route, index) => (
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
