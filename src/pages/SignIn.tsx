import { useState, type FormEvent } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router";

type User = {
  id?: number | string;
  email: string;
  password: string;
};

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      const savedUsers = localStorage.getItem("instantmart-users");
      const users: User[] = savedUsers ? JSON.parse(savedUsers) : [];

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

      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-white px-6">
      <div className="mx-auto w-full max-w-[400px]">
        <div className="mb-8">
          <h1 className="m-0 text-[28px] font-bold text-[#0F172B]">Login</h1>

          <p className="mt-2 text-sm text-[#64748B]">
            Please enter your details to login.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-[#0F172B]"
            >
              Email
            </label>

            <div className="relative">
              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
              />

              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="box-border h-12 w-full rounded-lg border-2 border-gray-300 bg-white pl-12 pr-4 text-sm text-[#0F172B] outline-none focus:border-[#00A63E]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-[#0F172B]"
            >
              Password
            </label>

            <div className="relative">
              <Lock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
              />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="box-border h-12 w-full rounded-lg border-2 border-gray-300 bg-white pl-12 pr-12 text-sm text-[#0F172B] outline-none focus:border-[#00A63E]"
              />

              <button
                type="button"
                onClick={() => setShowPassword((previous) => !previous)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-[#64748B]"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && (
            <p
              role="alert"
              className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="h-12 w-full rounded-lg border-2 border-[#00A63E] bg-[#00A63E] text-sm font-semibold text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-[#64748B]">
            Don't have an account?{" "}
            <Link
              to="/"
              className="cursor-pointer text-sm font-semibold text-[#00A63E] hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
