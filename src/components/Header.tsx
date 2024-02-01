import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

export const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate(); // useNavigateフックを使用

  const handleSearch = () => {
    navigate(`?search=${encodeURIComponent(query)}`);
  };

  return (
    <Button onClick={handleSearch}>
      <TextField
        label="検索"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </Button>
  );
};
