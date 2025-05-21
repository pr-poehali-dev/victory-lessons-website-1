import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteCarousel from "@/components/QuoteCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const resources = [
    {
      title: "Материалы для уроков",
      icon: "FileText",
      description:
        "Методические рекомендации, презентации и материалы для проведения уроков",
    },
    {
      title: "Исторические документы",
      icon: "FileText",
      description: "Архивные документы, приказы, сводки Совинформбюро",
    },
    {
      title: "Галерея",
      icon: "Image",
      description: "Фото- и видеоматериалы времен Великой Отечественной войны",
    },
    {
      title: "Хронология событий",
      icon: "Calendar",
      description: "Интерактивная хронология основных событий 1941-1945 годов",
    },
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
                  Образовательный проект «Уроки Победы» посвящен сохранению
                  памяти о подвиге нашего народа в Великой Отечественной войне.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100"
                  >
                    О проекте
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
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

        {/* О проекте - Новая секция */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold font-montserrat mb-4">
                  О проекте
                </h2>
                <div className="inline-block h-1.5 w-20 bg-primary rounded-full mb-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Calendar" className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Создан</h3>
                  <p className="text-gray-700">6 марта 2025 года</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Award" className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Посвящен</h3>
                  <p className="text-gray-700">
                    80-летию Победы в Великой Отечественной войне
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Flag" className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">2025 год</h3>
                  <p className="text-gray-700">Год защитника отечества</p>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                <p className="text-lg text-center">
                  Проект «Уроки Победы» создан для сохранения исторической
                  памяти и передачи знаний о событиях Великой Отечественной
                  войны молодому поколению. В год 80-летия Победы и Год
                  защитника отечества мы отдаем дань уважения подвигу наших
                  предков и продолжаем традиции патриотического воспитания.
                </p>
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

        {/* Resources Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-montserrat mb-3">
                Образовательные ресурсы
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Доступные материалы для проведения уроков и мероприятий,
                посвященных Великой Отечественной войне
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="glory-card">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-secondary/10 text-secondary w-12 h-12 flex items-center justify-center mb-4">
                      <Icon name={resource.icon} size={20} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <Button variant="outline" className="w-full">
                      Перейти
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-montserrat mb-6">
              Станьте частью проекта «Уроки Победы»
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Присоединяйтесь к нашей инициативе по сохранению памяти о подвиге
              нашего народа и патриотическому воспитанию молодежи
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Подать заявку
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
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
