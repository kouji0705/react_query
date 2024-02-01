import React, { useEffect, useState } from 'react';
type Props = {
  data: any;
};

export const Content = (data: Props) => {
  console.log('data: ', data);

  return (
    <div>
      {/* ここでsearchQueryに基づいたコンテンツを表示 */}
      <p>検索クエリ: </p>
    </div>
  );
};

export default Content;
