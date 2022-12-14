import React from 'react';
import ContentList from './ContentList';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../redux/reducers/contentSlice';

export default function CreateContent() {
  const content = useSelector((state) => state.content);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Create Content</h1>
      <textarea rows="8" cols="20" />
      <button
        type="button"
        onClick={() =>
          dispatch(
            addTodo({
              title: 'title of the content',
              text: 'text goes here lorem text text goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem text',
              language: 'kn-in',
            })
          )
        }
      >
        Save
      </button>
      <ContentList data={content} />
    </div>
  );
}
