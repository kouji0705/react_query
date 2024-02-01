import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface Result {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const useSearchQuery = () => {
  const [data, setData] = useState<Result | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      // URLSearchParamsを使用してクエリパラメータを解析
      const queryParams = new URLSearchParams(location.search);
      const search = queryParams.get('search') || ''; // クエリがない場合はデフォルト値（空文字）を使用

      try {
        // クエリパラメータがある場合とない場合で、リクエストURLを調整
        const apiUrl = search
          ? `https://jsonplaceholder.typicode.com/comments?_limit=5&search=${encodeURIComponent(
              search
            )}`
          : 'https://jsonplaceholder.typicode.com/comments?_limit=5';
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        setError('データの取得中にエラーが発生しました');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [location.search]);

  return { data, isLoading, error };
};
