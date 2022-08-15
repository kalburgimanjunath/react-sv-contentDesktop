import React from 'react';
import ContentList from './ContentList';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../redux/reducers/contentSlice';

export default function CreateContent() {
  const count = useSelector((state) => state);
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Create Content</h1>
      <form>
        <textarea rows="8" cols="20" />
        <button
          type="submit"
          onClick={() =>
            dispatch(
              addTodo({
                id: 3,
                title: 'title of the content',
                text: 'text goes here lorem text text goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem texttext goes here lorem text',
                language: 'kn-in',
                created_at: '2022-08-15',
              })
            )
          }
        >
          Save
        </button>
      </form>
      <ContentList />
    </div>
  );
}
