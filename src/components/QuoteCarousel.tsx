
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Icon from '@/components/ui/icon';

const QuoteCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const quotes = [
    {
      text: "Искусство войны - это искусство подавлять волю и боевой дух противника, а не уничтожать его физически.",
      author: "Георгий Константинович Жуков",
      role: "Маршал Советского Союза"
    },
    {
      text: "Кто к нам с мечом придёт, тот от меча и погибнет. На том стоит и стоять будет русская земля!",
      author: "Александр Невский",
      role: "Князь Новгородский"
    },
    {
      text: "Для нас, людей моего поколения, нет ничего дороже, чем мир на нашей земле.",
      author: "Василий Иванович Чуйков",
      role: "Маршал Советского Союза"
    },
    {
      text: "Война есть не что иное, как продолжение политики другими средствами.",
      author: "Карл фон Клаузевиц",
      role: "Военный теоретик"
    },
    {
      text: "Мы не видим памятников полководцам, выигравшим сражения, но при этом потерявшим армию.",
      author: "Константин Константинович Рокоссовский",
      role: "Маршал Советского Союза"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % quotes.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="relative py-8">
      <Carousel className="w-full" 
        value={currentSlide} 
        onValueChange={(value) => setCurrentSlide(value)}>
        <CarouselContent>
          {quotes.map((quote, index) => (
            <CarouselItem key={index}>
              <Card className="border-none shadow-none">
                <CardContent className="flex flex-col items-center p-0">
                  <div className="text-primary mb-4">
                    <Icon name="Quote" size={36} />
                  </div>
                  <blockquote className="text-xl md:text-2xl font-medium italic text-center mb-6">
                    {quote.text}
                  </blockquote>
                  <footer className="text-center">
                    <cite className="font-medium text-gray-800 block not-italic">
                      {quote.author}
                    </cite>
                    <span className="text-sm text-gray-500">{quote.role}</span>
                  </footer>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      <div className="flex justify-center mt-6 gap-2">
        {quotes.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentSlide ? 'bg-primary scale-110' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Перейти к цитате ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default QuoteCarousel;
