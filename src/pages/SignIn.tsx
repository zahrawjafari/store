import { useState, type FormEvent } from "react";
import { Link } from "react-router";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      "The sign-in form is ready. Connect your authentication API to log in.",
    );
  }

  return (
    <section className="flex min-h-[65vh] items-center justify-center bg-amber-50 px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl bg-white p-7 shadow-sm sm:p-9"
      >
        <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
        <p className="mt-2 text-sm text-gray-500">
          Sign in to your Fresh Market account.
        </p>

        <label className="mt-7 block text-sm font-semibold text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-600"
        />

        <label className="mt-5 block text-sm font-semibold text-gray-700">
          Password
        </label>
        <input
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
          className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-600"
        />

        <button
          type="submit"
          className="mt-7 w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-700"
        >
          Sign In
        </button>

        {message && (
          <p role="status" className="mt-4 text-sm leading-6 text-amber-700">
            {message}
          </p>
        )}

        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="font-semibold text-green-700">
            Sign Up
          </Link>
        </p>
      </form>
    </section>
  );
}

export default SignIn;
