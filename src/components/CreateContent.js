import React from 'react';
import ContentList from './ContentList';
export default function CreateContent() {
  return (
    <div>
      <h1>Create Content</h1>
      <form>
        <textarea rows="8" cols="20" />
        <button type="submit">Save</button>
      </form>
      <ContentList />
    </div>
  );
}
