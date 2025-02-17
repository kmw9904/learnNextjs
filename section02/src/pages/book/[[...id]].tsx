import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const id = router.query.id;
  console.log(id);
  return <h1>Book {id}</h1>;
}
