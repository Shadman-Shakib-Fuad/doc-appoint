export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-5">
      <div className="bg-white w-full max-w-lg p-10 rounded-3xl shadow-lg">
        <h1 className="text-5xl font-bold text-center mb-10">
          Login
        </h1>

        <form className="space-y-5">
          <div>
            <label className="font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full mt-2"
            />
          </div>

          <div>
            <label className="font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full mt-2"
            />
          </div>

          <button className="btn btn-primary w-full">
            Login
          </button>

          <button className="btn w-full">
            Continue With Google
          </button>

          <p className="text-center">
            Don’t have an account?
            <span className="text-blue-600 cursor-pointer ml-2">
              Register
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}