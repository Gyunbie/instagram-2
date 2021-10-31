import Post from "./Post";

const DUMMY_DATA = [
  {
    id: "123",
    username: "ogulcaanx",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "ASDFGHJKL",
  },
  {
    id: "123",
    username: "ogulcaanx",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "ASDFGHJKL",
  },
];

function Posts() {
  return (
    <div>
      {DUMMY_DATA.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
