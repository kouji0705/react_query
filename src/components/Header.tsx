import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // ユーザーの入力があるたびにURLのクエリパラメータを更新
    const params = new URLSearchParams();
    if (query) {
      params.append('id', query);
    } else {
      params.delete('id');
    }
    navigate(`?${params.toString()}`, { replace: true });
  }, [query, navigate]);

  return (
    <TextField
      label="検索"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};
