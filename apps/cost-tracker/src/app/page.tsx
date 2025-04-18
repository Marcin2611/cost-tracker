import Link from 'next/link';

export default function Index() {
  return (
    <div className="h-full w-full bg-gray-200 rounded-sm">
      <h1 className="h-full">
        <span> Hello there, </span>
        Welcome cost-tracker 👋
      </h1>
      <div className="container">
        <Link href="/users" className="underline mr-2">
          Users
        </Link>
        <Link href="/categories">Categories</Link>
      </div>
    </div>
  );
}
