import { useEffect, useState } from 'react';
import Content from './Content';
import { SearchBar } from './Header';
import { useLocation } from 'react-router-dom';

export const Sample = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // URLSearchParamsを使用してクエリパラメータを解析
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get('search');

    if (search) {
      setSearchQuery(search);
      // ここで検索クエリに基づいて何らかの処理を実行、例えばAPIからデータをフェッチする
      console.log(`検索クエリ: ${search}`);
    }
  }, [location.search]);

  return (
    <div>
      <SearchBar />
      <Content />
    </div>
  );
};
