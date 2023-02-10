export default function PostCard({ title, description }) {
  // console.log('postcard', title, description);
  return (
    <div className="postCard">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
