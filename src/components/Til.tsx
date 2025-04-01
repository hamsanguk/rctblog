import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routeComponents from '../routes';
import '../css/Til.css';

const Til = () => {
    const [openDay, setOpenDay] = useState<string | null>(null);

    const handleDayClick = (day: string) => {
        setOpenDay(openDay === day ? null : day);
    };

    return (
        <>
            <div>
              
                <div className="til-container">
                    {routeComponents.slice().reverse().map(({ day, component: Component })=> (
                        <div key={day} className="til-item">
                            <button 
                                className={`til-button ${openDay === day ? 'active' : ''}`}
                                onClick={() => handleDayClick(day)}
                            >
                                Day {day}
                            </button>
                            {openDay === day && (
                                <div className="til-content">
                                    <Component />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link 
                        to="/" 
                        className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                        홈으로 돌아가기
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Til;