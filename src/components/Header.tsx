
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="bg-white border-b shadow-sm py-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-primary transition-colors">Главная</Link>
          <Link to="/about" className="font-medium hover:text-primary transition-colors">О проекте</Link>
          <Link to="/events" className="font-medium hover:text-primary transition-colors">События</Link>
          <Link to="/materials" className="font-medium hover:text-primary transition-colors">Материалы</Link>
          <Link to="/contacts" className="font-medium hover:text-primary transition-colors">Контакты</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link to="/dashboard">
            <Button variant="outline" className="flex items-center gap-2">
              <Icon name="User" size={18} /> 
              <span className="hidden sm:inline">Личный кабинет</span>
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
