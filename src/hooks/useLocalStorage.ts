
import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  // Состояние для хранения наших значений
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Получаем значение из localStorage по ключу
      const item = window.localStorage.getItem(key);
      // Если значение найдено, возвращаем его, иначе используем initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Если произошла ошибка, возвращаем initialValue
      console.error('Error reading from localStorage:', error);
      return initialValue;
    }
  });

  // Возвращаем новое значение, если изменился ключ
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      setStoredValue(item ? JSON.parse(item) : initialValue);
    } catch (error) {
      console.error('Error reading from localStorage on key change:', error);
      setStoredValue(initialValue);
    }
  }, [key, initialValue]);

  // Функция для обновления значения в localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Если значение - функция, вызываем ее со старым значением
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Сохраняем значение в состоянии
      setStoredValue(valueToStore);
      // Сохраняем значение в localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
