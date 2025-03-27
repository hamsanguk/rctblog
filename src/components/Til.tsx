import React, { useState, Suspense } from "react";
import routeComponents from "../routes"; // 동적으로 생성된 routes 불러오기
import { useNavigate } from "react-router-dom";

const BlogComponent: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>("16"); // 기본적으로 Day15를 선택
  const navigate = useNavigate();

  // 선택된 day에 맞는 동적 컴포넌트 찾기
  const SelectedComponent = routeComponents.find(
    (route) => route.day === selectedDay
  )?.component;

  // routeComponents를 day 값 기준으로 내림차순 정렬 (문자열을 숫자로 변환하여 정렬)
  const sortedRoutes = [...routeComponents].sort((a, b) => {
    return Number(b.day) - Number(a.day); // day 값을 숫자로 변환하여 내림차순 정렬
  });

  return (
    <div className="wrap">
      <h2>오늘의 학습 (Today I Learn)</h2>
      <div>
        <h3>Day {selectedDay} 내용</h3>
        <Suspense fallback={<p>Loading...</p>}>
          {SelectedComponent && <SelectedComponent />}
        </Suspense>
      </div>
      <ul>
        {sortedRoutes.map((route) => (
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
    </div>
  );
};

export default BlogComponent;
