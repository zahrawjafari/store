import { Link } from "react-router";

function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-amber-50 px-4 text-center">
      <p className="text-7xl font-extrabold text-green-700">404</p>

      <h1 className="mt-4 text-2xl font-bold text-gray-900">Page Not Found</h1>

      <p className="mt-3 text-gray-500">
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
      >
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;
