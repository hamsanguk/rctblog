import React, { Suspense, lazy } from "react";


const generateTilRoutes = (start: number, end: number) => {
    const route = [];
    for (let day = start; day <= end; day++) { // start 대신 day를 증가시킴
        route.push({
            path: `/til/day-${day}`,
            day: String(day),
        });
    }
    return route; 
};

const routes = generateTilRoutes(1, 17); // 추가될때마다 오른쪽 숫자++ 수동으로변경

const loadComponent = (day: string) => {
    return lazy(() => import(`./til/Day${day}`)); // 동적으로 컴포넌트 로딩
};

// routes 배열을 매핑 각 경로와 동적 컴포넌트를 포함한 routeComponents 배열 생성
const routeComponents = routes.map((route) => {
    return {
        path: route.path,
        component: loadComponent(route.day), // 동적 로딩된 컴포넌트
        day: route.day, // day 속성 추가
    };
});

export default routeComponents;
