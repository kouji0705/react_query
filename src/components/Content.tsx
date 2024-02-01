import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Content = () => {
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
      {/* ここでsearchQueryに基づいたコンテンツを表示 */}
      <p>検索クエリ: {searchQuery}</p>
    </div>
  );
};

export default Content;
