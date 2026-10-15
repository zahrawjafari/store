import { useState, type FormEvent } from "react";
import { Link } from "react-router";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      "The sign-up form is ready. Connect your registration API to create an account.",
    );
  }

  return (
    <section className="flex min-h-[65vh] items-center justify-center bg-amber-50 px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl bg-white p-7 shadow-sm sm:p-9"
      >
        <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
        <p className="mt-2 text-sm text-gray-500">Join Fresh Market today.</p>

        <label className="mt-7 block text-sm font-semibold text-gray-700">
          Full Name
        </label>
        <input
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
          className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-600"
        />

        <label className="mt-5 block text-sm font-semibold text-gray-700">
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
          minLength={6}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="At least 6 characters"
          className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-600"
        />

        <button
          type="submit"
          className="mt-7 w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-700"
        >
          Create Account
        </button>

        {message && (
          <p role="status" className="mt-4 text-sm leading-6 text-amber-700">
            {message}
          </p>
        )}

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="font-semibold text-green-700">
            Sign In
          </Link>
        </p>
      </form>
    </section>
  );
}

export default SignUp;
