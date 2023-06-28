import Link from "next/link";
import { useRouter } from "next/router";

export default function ClientPage() {
  const router = useRouter();
  console.log("Query: ", router.query);
  //dynamic routes array
  const clients = [
    { id: 2, name: "max" },
    { id: 3, name: "min" },
    { id: 5, name: "median" },
  ];

  return (
    <>
      <div>ClientPage</div>
      <div>
        <li>
          <Link href="/clients/max">Max</Link>
        </li>
        <li>
          <Link href="/clients/manual">manual</Link>
        </li>
        {/* dynamic routing: basic way */}
        <ol>
          {clients &&
            clients.map((client) => (
              <li key={client.id}>
                <Link href={`/clients/${client.id}`}>{client.name}</Link>
              </li>
            ))}
        </ol>
        {/* Next js way */}
        <div>
          <b>Next js way</b>
          {clients &&
            clients.map((client) => (
              <li key={client.id}>
                <Link
                  href={{
                    pathname: `/clients/[id]`,
                    query: { id: client.id },
                  }}
                >
                  {client.name}
                </Link>
              </li>
            ))}
        </div>
      </div>
    </>
  );
}
