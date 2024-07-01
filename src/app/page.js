import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Welcome to home page</h2>
      <Link href="/blog">blog</Link> <br />
      <Link href="/products">products</Link>
    </main>
  );
}
