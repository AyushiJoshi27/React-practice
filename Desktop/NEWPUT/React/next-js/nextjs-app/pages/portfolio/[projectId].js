import { useRouter } from "next/router";

export default function projectId() {
  const router = useRouter();
  console.log("pathname: ", router.pathname);
  console.log("query: ", router.query);
  console.log("queryID: ", router.query.projectId);

  return <div>projectId</div>;
}
