
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="ribbon h-2 w-full"></div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-gray-600">
              Образовательный проект, посвященный 80-летию Победы в Великой Отечественной войне.
            </p>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors">О проекте</Link></li>
              <li><Link to="/events" className="text-gray-600 hover:text-primary transition-colors">События</Link></li>
              <li><Link to="/materials" className="text-gray-600 hover:text-primary transition-colors">Материалы</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Ресурсы</h3>
            <ul className="space-y-2">
              <li><Link to="/gallery" className="text-gray-600 hover:text-primary transition-colors">Галерея</Link></li>
              <li><Link to="/veterans" className="text-gray-600 hover:text-primary transition-colors">Ветераны</Link></li>
              <li><Link to="/timeline" className="text-gray-600 hover:text-primary transition-colors">Хронология</Link></li>
              <li><Link to="/documents" className="text-gray-600 hover:text-primary transition-colors">Документы</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Контакты</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-gray-600">
                <Icon name="Mail" size={16} />
                <span>info@urokipobedy.ru</span>
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </p>
              <div className="flex items-center gap-3 mt-3">
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <Icon name="Telegram" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t text-center text-sm text-gray-500">
          <p>© 2025 Уроки Победы. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
