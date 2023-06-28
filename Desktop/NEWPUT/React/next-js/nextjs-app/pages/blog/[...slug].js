import { useRouter } from "next/router"

export default function BlogPostspage() {
  const router = useRouter();
  console.log("pathname: ", router.pathname);
  console.log("Query: ", router.query);
  // result = {slug: Array(3)} slug: (3)  ['2', '3', '5']
  console.log("particular Query: ", router.query.slug[1]);

  return (
    <div>The blog posts</div>
  )
}
