import { useRouter } from "next/router"

export default function ClientProjectPage() {
    const router = useRouter();
    console.log("query: ", router.query);

    const loadProjectHandler = () => {
        //load data
        // router.push(`/clients/max/projecta`);
        // router.replace(`/clients/max/projecta`);
        router.push({
          pathname: `/clients/[id]/[clientProjectId]`,
          query: {id: 1, clientProjectId: "projectA"}
        })
    }

  return (
    <>
    <div>The projects of a given clients</div>
    <button onClick={loadProjectHandler}>Load project A</button>
    </>
  )
}
