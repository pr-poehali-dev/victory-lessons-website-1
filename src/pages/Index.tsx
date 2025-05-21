
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteCarousel from '@/components/QuoteCarousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const upcomingEvents = [
    {
      title: "Открытый урок «Дорога к Победе»",
      date: "15 июня 2025",
      location: "Центральный музей Вооруженных Сил"
    },
    {
      title: "Выставка военной техники",
      date: "22 июня 2025",
      location: "Парк Победы на Поклонной горе"
    },
    {
      title: "Творческий конкурс «Память в наших сердцах»",
      date: "1 июля 2025",
      location: "Онлайн"
    }
  ];

  const resources = [
    {
      title: "Материалы для уроков",
      icon: "FileText",
      description: "Методические рекомендации, презентации и материалы для проведения уроков"
    },
    {
      title: "Исторические документы",
      icon: "FileText",
      description: "Архивные документы, приказы, сводки Совинформбюро"
    },
    {
      title: "Галерея",
      icon: "Image",
      description: "Фото- и видеоматериалы времен Великой Отечественной войны"
    },
    {
      title: "Хронология событий",
      icon: "Calendar",
      description: "Интерактивная хронология основных событий 1941-1945 годов"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-gradient text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
                  80 лет Великой Победы
                </h1>
                <p className="text-lg mb-8">
                  Образовательный проект «Уроки Победы» посвящен сохранению памяти 
                  о подвиге нашего народа в Великой Отечественной войне.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                    О проекте
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Присоединиться
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1591889935400-630196edcda9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Вечный огонь" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Quote Carousel Section */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <QuoteCarousel />
            </div>
          </div>
        </section>
        
        {/* Events Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-montserrat mb-3">Предстоящие события</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Присоединяйтесь к нашим образовательным мероприятиям, посвященным 80-летию Победы
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="glory-card">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-primary/10 text-primary w-12 h-12 flex items-center justify-center mb-4">
                      <Icon name="Calendar" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <div className="text-gray-500 mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="Calendar" size={16} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="MapPin" size={16} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button variant="default" size="lg" className="gap-2">
                <span>Все события</span>
                <Icon name="ArrowRight" size={16} />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Resources Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-montserrat mb-3">Образовательные ресурсы</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Доступные материалы для проведения уроков и мероприятий, посвященных Великой Отечественной войне
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="glory-card">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-secondary/10 text-secondary w-12 h-12 flex items-center justify-center mb-4">
                      <Icon name={resource.icon} size={20} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <Button variant="outline" className="w-full">Перейти</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-montserrat mb-6">Станьте частью проекта «Уроки Победы»</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Присоединяйтесь к нашей инициативе по сохранению памяти о подвиге нашего народа и патриотическому воспитанию молодежи
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Подать заявку
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Узнать больше
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
