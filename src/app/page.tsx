import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Hello, World!</h1>
        <Link href={"/home"}>Home</Link>
        <Link href={"/docs"}>Docs</Link>
      </main>
    </div>
  );
}
