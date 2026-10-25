import { useState, type FormEvent } from "react";

type LoginModalProps = {
  onClose: () => void;
};

type User = {
  id?: string | number;
  email: string;
  password: string;
};

function LoginModal({ onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const savedUsers = localStorage.getItem("instantmart-users");

      if (!savedUsers) {
        setError("Please sign up first.");
        return;
      }

      const users: User[] = JSON.parse(savedUsers);

      const user = users.find(
        (item) =>
          item.email.trim().toLowerCase() === email.trim().toLowerCase() &&
          item.password === password,
      );

      if (!user) {
        setError("Email or password is incorrect.");
        return;
      }

      localStorage.setItem(
        "instantmart-user",
        JSON.stringify({
          id: user.id,
          email: user.email,
        }),
      );

      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="relative h-[380px] w-[760px] max-w-full overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-3 text-3xl text-gray-500 hover:text-black"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-[#0F172B]">Login</h2>

        <p className="mb-6 mt-2 text-sm text-gray-500">
          Please enter your details to login.
        </p>

        {success ? (
          <div>
            <p className="mb-5 font-medium text-green-700">Login successful!</p>

            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
            >
              Continue
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
            />

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginModal;
