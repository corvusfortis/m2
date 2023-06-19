import React, { useState, useEffect, useCallback } from 'react';

const BigComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(); // Выполнение побочного эффекта загрузки данных при монтировании компонента
  }, [fetchData]);

  const fetchData = async () => {
    try {
      // Логика загрузки данных с сервера
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error('Ошибка при загрузке данных', error);
    }
  };

  const renderData = useCallback(() => {
    if (loading) {
      return <p>Загрузка данных...</p>;
    }

    if (data.length === 0) {
      return <p>Нет данных для отображения.</p>;
    }

    return (
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }, [loading, data]);

  return (
    <div>
      <h1>Большой компонент</h1>
      {renderData()}
    </div>
  );
};

export default React.memo(BigComponent);