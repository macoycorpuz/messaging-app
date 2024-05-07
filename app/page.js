export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm">
        <h1 className="py-4 text-center text-2xl uppercase">
          Choose your name
        </h1>
        <form className="flex flex-col p-4" action="#" method="POST">
          <label htmlFor="username">Username</label>
          <div className="mt-2">
            <input
              id="username"
              name="username"
              required
              className="w-full rounded-md p-2 shadow-sm ring-1 ring-inset"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-sky-500 p-2.5 text-white hover:bg-sky-700"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}
