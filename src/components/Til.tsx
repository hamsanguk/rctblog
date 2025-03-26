import React, { useState } from "react";
import routeComponents from "../routes"; // 동적으로 생성된 routes 불러오기
import { Suspense } from "react";
import { useNavigate } from "react-router-dom";

const BlogComponent: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>("15"); // 기본적으로 Day13을 선택
  const navigate = useNavigate();

  // 선택된 day에 맞는 동적 컴포넌트 찾기
  const SelectedComponent = routeComponents.find(
    (route) => route.day === selectedDay
  )?.component;

  return (
    <div>
      <h2>오늘의 학습 (TIL)</h2>
      <ul>
        {routeComponents.map((route) => (
          <li key={route.day}>
            <button
              onClick={() => {
                setSelectedDay(route.day);
                navigate(route.path); // 라우팅 이동
              }}
            >
              Day {route.day}
            </button>
          </li>
        ))}
      </ul>

      <div>
        <h3>Day {selectedDay} 내용</h3>
        <Suspense fallback={<p>Loading...</p>}>
          {SelectedComponent && <SelectedComponent />}
        </Suspense>
      </div>
    </div>
  );
};

export default BlogComponent;
