
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

interface ProfileData {
  name: string;
  position: string;
  email: string;
  phone: string;
  location: string;
  about: string;
  photoUrl: string;
}

interface EditProfileDialogProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSave: (profile: ProfileData) => void;
}

const EditProfileDialog: React.FC<EditProfileDialogProps> = ({ 
  isOpen, 
  onClose, 
  profile, 
  onSave 
}) => {
  const [formData, setFormData] = useState<ProfileData>(profile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    toast({
      title: "Профиль обновлен",
      description: "Ваши изменения были успешно сохранены",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Редактирование профиля</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">ФИО</Label>
            <Input 
              id="name" 
              name="name"
              value={formData.name} 
              onChange={handleChange}
              placeholder="Введите ваше полное имя"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="position">Должность</Label>
            <Input 
              id="position" 
              name="position"
              value={formData.position} 
              onChange={handleChange}
              placeholder="Ваша должность"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email"
                type="email"
                value={formData.email} 
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input 
                id="phone" 
                name="phone"
                value={formData.phone} 
                onChange={handleChange}
                placeholder="+7 (XXX) XXX-XX-XX"
              />
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="location">Город</Label>
            <Input 
              id="location" 
              name="location"
              value={formData.location} 
              onChange={handleChange}
              placeholder="Ваш город"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="photoUrl">URL фотографии</Label>
            <Input 
              id="photoUrl" 
              name="photoUrl"
              value={formData.photoUrl} 
              onChange={handleChange}
              placeholder="https://example.com/photo.jpg"
            />
            <p className="text-xs text-gray-500">
              Вставьте ссылку на вашу фотографию (рекомендуемый размер 200x200 пикселей)
            </p>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="about">О себе</Label>
            <Textarea 
              id="about" 
              name="about"
              value={formData.about} 
              onChange={handleChange}
              placeholder="Расскажите о своем опыте и квалификации"
              rows={4}
            />
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Отмена
            </Button>
            <Button type="submit">Сохранить</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileDialog;
