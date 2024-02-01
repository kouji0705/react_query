import { Content } from './Content';
import { SearchBar } from './Header';
import { useSearchQuery } from './hooks';

export const Sample = () => {
  const { data, error } = useSearchQuery();
  if (!data) return <div>loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <SearchBar />
      <Content data={data} />
    </div>
  );
};
