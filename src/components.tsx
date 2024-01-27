import React from 'react';
import { useNavigate } from 'react-router-dom';

const SetQueryParamComponent: React.FC = () => {
  const navigate = useNavigate();

  const setQueryParam = () => {
    const searchParams = new URLSearchParams();
    searchParams.set('yourParam', 'value'); // ここでクエリパラメータを設定します
    navigate({ search: `?${searchParams.toString()}` });
  };

  return (
    <div>
      aaaa
      <button onClick={setQueryParam}>Set Query Param</button>
    </div>
  );
};

export default SetQueryParamComponent;
