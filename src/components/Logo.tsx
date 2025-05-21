
import React from 'react';

const Logo = () => {
  return (
    <div className="logo-container relative inline-flex items-center">
      <div className="flex items-center gap-2">
        <div className="relative">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 5L30.8778 20.4549H47.5528L34.3376 30.0902L40.2153 45.5451L25 35.9098L9.78467 45.5451L15.6624 30.0902L2.44718 20.4549H19.1222L25 5Z" fill="#b71c1c"/>
            <circle cx="25" cy="25" r="20" fill="none" stroke="#fff" strokeWidth="2"/>
            <text x="25" y="29" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="Montserrat">80</text>
          </svg>
          <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        </div>
        <div className="font-montserrat font-bold tracking-tight">
          <div className="text-xl leading-tight">УРОКИ</div>
          <div className="text-2xl text-victory-red leading-tight">ПОБЕДЫ</div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
