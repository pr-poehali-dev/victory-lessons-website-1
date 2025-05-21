
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const quotes = [
  {
    text: "Кто не помнит своего прошлого, обречен на то, чтобы пережить его вновь.",
    author: "Джордж Сантаяна",
  },
  {
    text: "Наше дело правое. Враг будет разбит. Победа будет за нами.",
    author: "В.М. Молотов",
  },
  {
    text: "Нельзя победить народ, который поет и улыбается, когда воюет.",
    author: "Александр Довженко",
  },
  {
    text: "За нами Москва. Отступать некуда.",
    author: "В.Г. Клочков",
  },
  {
    text: "Герой - это не тот, кто храбро воюет, а тот, кто помогает другим.",
    author: "Эрик Финнман",
  },
  {
    text: "Кто говорит, что умереть за Родину страшно, - не знает, о чем говорит.",
    author: "Эрнест Хемингуэй",
  }
];

const QuoteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setIsTransitioning(false);
      }, 1000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-lg border shadow-md bg-white/95">
      <div className="absolute top-0 left-0 w-full h-1 ribbon"></div>
      <div className="px-4 py-3 bg-secondary text-white font-montserrat font-medium">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <span>ТРАНСЛЯЦИЯ ЦИТАТ</span>
        </div>
      </div>
      <div className="p-5 h-56 relative">
        <div className={`transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <blockquote className="text-xl italic text-gray-800 mb-4">
            "{quotes[currentIndex].text}"
          </blockquote>
          <footer className="text-right text-gray-600">
            — <cite>{quotes[currentIndex].author}</cite>
          </footer>
        </div>
        <div className="absolute bottom-2 right-2 flex gap-1">
          {quotes.map((_, index) => (
            <div 
              key={index} 
              className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuoteCarousel;
