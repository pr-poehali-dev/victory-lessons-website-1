
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  textClass?: string;
  iconOnly?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', textClass = '', iconOnly = false }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="flex-shrink-0 relative">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="#B71C1C" />
          <path d="M20 7L23.5267 14.1459L31.7553 15.3344L25.8777 20.9541L27.0534 29.1656L20 25.3L12.9466 29.1656L14.1223 20.9541L8.24472 15.3344L16.4733 14.1459L20 7Z" fill="#FFECB3" />
          <path d="M17 18H23V28H20.6379V20.1897H19.3621V28H17V18Z" fill="#FFECB3" />
          <path d="M23 16.5C23 17.8807 21.8807 19 20.5 19C19.1193 19 18 17.8807 18 16.5C18 15.1193 19.1193 14 20.5 14C21.8807 14 23 15.1193 23 16.5Z" fill="#FFECB3" />
        </svg>
      </div>
      
      {!iconOnly && (
        <div className={`font-montserrat font-bold leading-tight ${textClass}`}>
          <div className="text-lg text-primary">Уроки Победы</div>
          <div className="text-xs text-gray-600">К 80-летию Великой Победы</div>
        </div>
      )}
    </Link>
  );
};

export default Logo;
