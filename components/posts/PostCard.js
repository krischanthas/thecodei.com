import Link from "next/link";
import { format, parseISO } from "date-fns";

const PostCard = (post) => {
  return (
    <div className="my-4 py-8 border">
      <h2 className="text-xl">
        <Link href={post.url}>
          <a className="text-green-900 hover:text-green-900">{post.title}</a>
        </Link>
      </h2>

      <time dateTime={post.date} className="block text-sm text-slate-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
    </div>
  );
};

export default PostCard;
