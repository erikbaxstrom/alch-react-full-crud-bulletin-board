import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePost } from '../../hooks/usePost.js';

export default function EditPost() {
  const { id } = useParams();
  const { post } = usePost(id);
  console.log('posssstitle', post.title);
  const [titleInput, setTitleInput] = useState(post.title);
  const [descriptionInput, setDescriptionInput] = useState(post.description);

  console.log('got post', titleInput);
  const handleSubmit = async () => {
    console.log(titleInput, descriptionInput);
  };

  return (
    <>
      <h1>Post editor!!!</h1>
      <label>Title</label>
      <input type="text" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} />
      <label>Description</label>
      <input
        type="text"
        value={descriptionInput}
        onChange={(e) => setDescriptionInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
