
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold font-montserrat">Личный кабинет куратора</h1>
          <p className="text-gray-500">Добро пожаловать, Антон Александрович!</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Icon name="Settings" size={16} />
            <span>Настройки</span>
          </Button>
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <Icon name="LogOut" size={16} />
              <span>Выйти</span>
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card className="mb-6">
            <CardHeader className="pb-4">
              <CardTitle className="text-center">Профиль</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-4 border-4 border-white shadow-md">
                <Icon name="User" size={64} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold">Блинов Антон Александрович</h3>
              <p className="text-gray-500 mb-4">Куратор проекта</p>
              
              <div className="w-full space-y-3 mt-2">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-gray-500" />
                  <span>blinov.aa@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-gray-500" />
                  <span>+7 (905) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} className="text-gray-500" />
                  <span>Москва</span>
                </div>
              </div>
              
              <Button className="mt-6 w-full">Редактировать профиль</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Статистика</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Активные мероприятия</span>
                <span className="font-semibold">12</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Участники проекта</span>
                <span className="font-semibold">253</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Материалы</span>
                <span className="font-semibold">47</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Посещения</span>
                <span className="font-semibold">1,284</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-2">
          <Tabs defaultValue="events">
            <TabsList className="grid grid-cols-3 w-full mb-6">
              <TabsTrigger value="events">События</TabsTrigger>
              <TabsTrigger value="materials">Материалы</TabsTrigger>
              <TabsTrigger value="messages">Сообщения</TabsTrigger>
            </TabsList>
            
            <TabsContent value="events">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Предстоящие события</CardTitle>
                    <Button size="sm" variant="outline">
                      <Icon name="Plus" size={16} className="mr-2" />
                      Добавить
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Открытый урок «Дорога к Победе»",
                        date: "15 июня 2025",
                        status: "Готовится"
                      },
                      {
                        title: "Выставка военной техники",
                        date: "22 июня 2025",
                        status: "Подтверждено"
                      },
                      {
                        title: "Творческий конкурс «Память в наших сердцах»",
                        date: "1 июля 2025",
                        status: "Готовится"
                      }
                    ].map((event, index) => (
                      <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-all">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{event.title}</h3>
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                              <Icon name="Calendar" size={14} />
                              {event.date}
                            </p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded ${
                            event.status === 'Подтверждено' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {event.status}
                          </span>
                        </div>
                        <div className="flex mt-3 gap-2">
                          <Button size="sm" variant="ghost">Редактировать</Button>
                          <Button size="sm" variant="ghost">Детали</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Показать все события</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="materials">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Учебные материалы</CardTitle>
                    <Button size="sm" variant="outline">
                      <Icon name="Upload" size={16} className="mr-2" />
                      Загрузить
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Презентация «Ключевые битвы ВОВ»",
                        type: "Презентация",
                        date: "10 мая 2025"
                      },
                      {
                        title: "Методические указания для классных часов",
                        type: "Документ",
                        date: "5 мая 2025"
                      },
                      {
                        title: "Видеоролик «Воспоминания ветеранов»",
                        type: "Видео",
                        date: "2 мая 2025"
                      }
                    ].map((material, index) => (
                      <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-all">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{material.title}</h3>
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                              <Icon name={
                                material.type === 'Презентация' ? 'FilePresentation' :
                                material.type === 'Видео' ? 'Video' : 'FileText'
                              } size={14} />
                              {material.type}
                            </p>
                          </div>
                          <span className="text-xs text-gray-500">{material.date}</span>
                        </div>
                        <div className="flex mt-3 gap-2">
                          <Button size="sm" variant="ghost">Просмотр</Button>
                          <Button size="sm" variant="ghost">Скачать</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Показать все материалы</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="messages">
              <Card>
                <CardHeader>
                  <CardTitle>Сообщения</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        sender: "Иванова Мария",
                        text: "Добрый день! Подскажите, пожалуйста, нужно ли готовить презентацию к открытому уроку?",
                        time: "12:45",
                        unread: true
                      },
                      {
                        sender: "Петров Сергей",
                        text: "Антон Александрович, направляю вам отчет о проведенных мероприятиях за прошлую неделю.",
                        time: "Вчера",
                        unread: false
                      },
                      {
                        sender: "Организационный комитет",
                        text: "Приглашаем вас принять участие в совещании по подготовке к выставке военной техники.",
                        time: "25 апр",
                        unread: false
                      }
                    ].map((message, index) => (
                      <div key={index} className={`p-4 border rounded-lg transition-all ${message.unread ? 'bg-blue-50' : 'hover:bg-gray-50'}`}>
                        <div className="flex justify-between items-start">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <span className="text-gray-500 font-medium">{message.sender.charAt(0)}</span>
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold">{message.sender}</h3>
                                {message.unread && <span className="w-2 h-2 bg-primary rounded-full"></span>}
                              </div>
                              <p className="text-sm text-gray-600">{message.text}</p>
                            </div>
                          </div>
                          <span className="text-xs text-gray-500">{message.time}</span>
                        </div>
                        <div className="flex mt-3 gap-2 justify-end">
                          <Button size="sm" variant="ghost">Ответить</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Показать все сообщения</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
