import Content from './Content';
import { SearchBar } from './Header';
import { useSearchQuery } from './hooks';

export const Sample = () => {
  const { data, error } = useSearchQuery();

  if (error) return <div>{error}</div>;

  console.log('data: ', data);

  return (
    <div>
      <SearchBar />
      <Content data={data} />
    </div>
  );
};
