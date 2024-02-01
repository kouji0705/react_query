import React from 'react';
import { Result } from './hooks';
type Props = {
  data: Result[];
};

export const Content = (data: Props) => {
  return (
    <div>
      {data.data?.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.email}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};
