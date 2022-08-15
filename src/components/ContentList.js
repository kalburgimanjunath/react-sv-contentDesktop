import React from 'react';
import { data } from '../data/data.js';
export default function ContentList() {
  // console.log(data);
  return (
    <div>
      <h1>Content List</h1>
      <div>
        {data &&
          data.map((item) => {
            return (
              <div key={item.id}>
                {item.title}
                {item.id}
              </div>
            );
          })}
      </div>
    </div>
  );
}
