import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={'/blog'}>
        <h1>Blog page</h1>
      </Link>
    </>
  );
}
