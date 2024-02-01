import { useEffect, useState } from 'react';
import Content from './Content';
import { SearchBar } from './Header';
import { useLocation } from 'react-router-dom';
import { useSearchQuery } from './hooks';

export const Sample = () => {
  const { data, isLoading, error } = useSearchQuery();

  //   if (isLoading) return <div>読み込み中...</div>
  if (error) return <div>{error}</div>;

  console.log('data: ', data);

  return (
    <div>
      <SearchBar />
      <Content />
    </div>
  );
};
