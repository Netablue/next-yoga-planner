import Link from 'next/link';

export default function LandingPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Our App</h1>
      <p>Find out more about what we do!</p>

      <div>

        <Link href="/auth/signin">
          <button
            className="mx-5 my-3 bg-gray-500 hover:text-black text-white px-4 py-3 rounded hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </Link>

        <Link href="/auth/signup">
          <button
            className="mx-5 my-3 bg-gray-500 hover:text-black text-white px-4 py-3 rounded hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </Link>

        <Link href="/home">
          <button
            className="mx-5 my-3 bg-gray-500 hover:text-black text-white px-4 py-3 rounded hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Home
          </button>
        </Link>

      </div>
    </div>
  );
}
