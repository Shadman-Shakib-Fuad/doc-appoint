export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-5">
      <div className="bg-white w-full max-w-lg p-10 rounded-3xl shadow-lg">
        <h1 className="text-5xl font-bold text-center mb-10">
          Register
        </h1>

        <form className="space-y-5">
          <div>
            <label className="font-medium">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full mt-2"
            />
          </div>

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
              Photo URL
            </label>

            <input
              type="text"
              placeholder="Enter photo url"
              className="input input-bordered w-full mt-2"
            />
          </div>

          <div>
            <label className="font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full mt-2"
            />
          </div>

          <button className="btn btn-primary w-full">
            Register
          </button>

          <button className="btn w-full">
            Continue With Google
          </button>

          <p className="text-center">
            Already have an account?
            <span className="text-blue-600 cursor-pointer ml-2">
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}