import PostCard from "../components/posts/PostCard";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

const recent = ({ posts }) => {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
};

export default recent;
