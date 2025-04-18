import Link from 'next/link';

const Titlebar = () => (
  <div className="sticky top-0 bg-linear-to-r from-emerald-400 via-emerald-200 to-gray-300 py-8 shadow-md">
    <div className="container flex items-baseline mx-auto">
      <h1 className="text-3xl font-bold font-stretch-expanded xl:w-1/4">
        Cost tracker
      </h1>
      <div className="ml-10 flex gap-x-10 text-lg font-semibold">
        <Link href="/users" className="hover:text-gray-500">
          Users
        </Link>
        <Link href="/costs" className="hover:text-gray-500">
          Costs
        </Link>
        <Link href="/categories" className="hover:text-gray-500">
          Categories
        </Link>
      </div>
    </div>
  </div>
);

export default Titlebar;
