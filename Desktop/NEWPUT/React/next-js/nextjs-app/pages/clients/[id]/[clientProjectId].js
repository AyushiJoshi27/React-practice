import { useRouter } from "next/router"

export default function SelectedClientProjectPage() {
  const router = useRouter()
  console.log("pathname: ", router.pathname)
  console.log("query: ", router.query.clientProjectId)

  return (
    <div>Selected Client Project Page</div>
  )
}
