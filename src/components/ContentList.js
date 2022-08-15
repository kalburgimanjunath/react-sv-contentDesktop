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
                <div>
                  Content:
                  {item.title}
                  {item.id}
                  <button type="button">Play</button>
                </div>
                <div>Language:{item.language}</div>
                <div>Created On:{item.created_at}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
