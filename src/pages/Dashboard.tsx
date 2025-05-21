
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Dashboard = () => {
  // Состояния для управления материалами
  const [materials, setMaterials] = useState([
    {
      id: 1,
      title: "Презентация «Ключевые битвы ВОВ»",
      type: "Презентация",
      date: "10 мая 2025"
    },
    {
      id: 2,
      title: "Методические указания для классных часов",
      type: "Документ",
      date: "5 мая 2025"
    },
    {
      id: 3,
      title: "Видеоролик «Воспоминания ветеранов»",
      type: "Видео",
      date: "2 мая 2025"
    }
  ]);
  
  // Состояния для управления занятиями
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Открытый урок «Дорога к Победе»",
      date: "15 июня 2025",
      status: "Готовится"
    },
    {
      id: 2,
      title: "Выставка военной техники",
      date: "22 июня 2025",
      status: "Подтверждено"
    },
    {
      id: 3,
      title: "Творческий конкурс «Память в наших сердцах»",
      date: "1 июля 2025",
      status: "Готовится"
    }
  ]);
  
  // Состояния для форм создания
  const [newMaterial, setNewMaterial] = useState({
    title: '',
    type: 'Документ',
    description: ''
  });
  
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    status: 'Готовится',
    location: ''
  });
  
  // Функции для добавления новых элементов
  const handleAddMaterial = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()} ${getMonthName(currentDate.getMonth())} ${currentDate.getFullYear()}`;
    
    setMaterials([...materials, {
      id: materials.length + 1,
      title: newMaterial.title,
      type: newMaterial.type,
      date: formattedDate
    }]);
    
    setNewMaterial({
      title: '',
      type: 'Документ',
      description: ''
    });
  };
  
  const handleAddEvent = () => {
    setEvents([...events, {
      id: events.length + 1,
      title: newEvent.title,
      date: newEvent.date,
      status: newEvent.status
    }]);
    
    setNewEvent({
      title: '',
      date: '',
      status: 'Готовится',
      location: ''
    });
  };
  
  // Вспомогательная функция для форматирования даты
  const getMonthName = (monthIndex) => {
    const months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
    return months[monthIndex];
  };
  
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
                    <CardTitle>Управление событиями</CardTitle>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline">
                          <Icon name="Plus" size={16} className="mr-2" />
                          Добавить
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Добавить новое событие</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="event-title">Название события</Label>
                            <Input 
                              id="event-title" 
                              value={newEvent.title}
                              onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                              placeholder="Введите название события"
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="event-date">Дата проведения</Label>
                            <Input 
                              id="event-date" 
                              value={newEvent.date}
                              onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                              placeholder="дд месяц гггг"
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="event-location">Место проведения</Label>
                            <Input 
                              id="event-location" 
                              value={newEvent.location}
                              onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                              placeholder="Введите место проведения"
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="event-status">Статус</Label>
                            <Select 
                              value={newEvent.status}
                              onValueChange={(value) => setNewEvent({...newEvent, status: value})}
                            >
                              <SelectTrigger id="event-status">
                                <SelectValue placeholder="Выберите статус" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Готовится">Готовится</SelectItem>
                                <SelectItem value="Подтверждено">Подтверждено</SelectItem>
                                <SelectItem value="Завершено">Завершено</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button 
                            type="submit" 
                            onClick={handleAddEvent}
                            disabled={!newEvent.title || !newEvent.date}
                          >
                            Сохранить
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {events.map((event) => (
                      <div key={event.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-all">
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
                              : event.status === 'Завершено'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {event.status}
                          </span>
                        </div>
                        <div className="flex mt-3 gap-2">
                          <Button size="sm" variant="ghost">Редактировать</Button>
                          <Button size="sm" variant="ghost">Детали</Button>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="text-red-500 hover:text-red-700"
                            onClick={() => setEvents(events.filter(e => e.id !== event.id))}
                          >
                            Удалить
                          </Button>
                        </div>
                      </div>
                    ))}
                    
                    {events.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        <Icon name="Calendar" size={48} className="mx-auto mb-3 opacity-50" />
                        <p>Нет событий. Добавьте новое событие, нажав на кнопку "Добавить".</p>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full text-center text-gray-500 text-sm">
                    Всего событий: {events.length}
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="materials">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Учебные материалы</CardTitle>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline">
                          <Icon name="Upload" size={16} className="mr-2" />
                          Загрузить
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Добавить новый материал</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="material-title">Название материала</Label>
                            <Input 
                              id="material-title" 
                              value={newMaterial.title}
                              onChange={(e) => setNewMaterial({...newMaterial, title: e.target.value})}
                              placeholder="Введите название материала"
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="material-type">Тип материала</Label>
                            <Select 
                              value={newMaterial.type}
                              onValueChange={(value) => setNewMaterial({...newMaterial, type: value})}
                            >
                              <SelectTrigger id="material-type">
                                <SelectValue placeholder="Выберите тип материала" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Документ">Документ</SelectItem>
                                <SelectItem value="Презентация">Презентация</SelectItem>
                                <SelectItem value="Видео">Видео</SelectItem>
                                <SelectItem value="Изображения">Изображения</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="material-description">Описание</Label>
                            <Textarea 
                              id="material-description" 
                              value={newMaterial.description}
                              onChange={(e) => setNewMaterial({...newMaterial, description: e.target.value})}
                              placeholder="Краткое описание материала"
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="material-file">Загрузить файл</Label>
                            <Input 
                              id="material-file" 
                              type="file"
                            />
                            <p className="text-xs text-gray-500">Поддерживаемые форматы: PDF, DOCX, PPTX, MP4, JPG, PNG</p>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button 
                            type="submit" 
                            onClick={handleAddMaterial}
                            disabled={!newMaterial.title}
                          >
                            Сохранить
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {materials.map((material) => (
                      <div key={material.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-all">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{material.title}</h3>
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                              <Icon name={
                                material.type === 'Презентация' ? 'FilePresentation' :
                                material.type === 'Видео' ? 'Video' : 
                                material.type === 'Изображения' ? 'Image' : 'FileText'
                              } size={14} />
                              {material.type}
                            </p>
                          </div>
                          <span className="text-xs text-gray-500">{material.date}</span>
                        </div>
                        <div className="flex mt-3 gap-2">
                          <Button size="sm" variant="ghost">Просмотр</Button>
                          <Button size="sm" variant="ghost">Редактировать</Button>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="text-red-500 hover:text-red-700"
                            onClick={() => setMaterials(materials.filter(m => m.id !== material.id))}
                          >
                            Удалить
                          </Button>
                        </div>
                      </div>
                    ))}
                    
                    {materials.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        <Icon name="FileText" size={48} className="mx-auto mb-3 opacity-50" />
                        <p>Нет учебных материалов. Добавьте новый материал, нажав на кнопку "Загрузить".</p>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full text-center text-gray-500 text-sm">
                    Всего материалов: {materials.length}
                  </div>
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
                        id: 1,
                        sender: "Иванова Мария",
                        text: "Добрый день! Подскажите, пожалуйста, нужно ли готовить презентацию к открытому уроку?",
                        time: "12:45",
                        unread: true
                      },
                      {
                        id: 2,
                        sender: "Петров Сергей",
                        text: "Антон Александрович, направляю вам отчет о проведенных мероприятиях за прошлую неделю.",
                        time: "Вчера",
                        unread: false
                      },
                      {
                        id: 3,
                        sender: "Организационный комитет",
                        text: "Приглашаем вас принять участие в совещании по подготовке к выставке военной техники.",
                        time: "25 апр",
                        unread: false
                      }
                    ].map((message) => (
                      <div key={message.id} className={`p-4 border rounded-lg transition-all ${message.unread ? 'bg-blue-50' : 'hover:bg-gray-50'}`}>
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
