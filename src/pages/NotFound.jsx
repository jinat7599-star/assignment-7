import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="max-w-md text-center">
        
        <h1 className="mb-4 text-7xl font-bold text-green-500 md:text-9xl">
          404
        </h1>       
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Page Not Found
        </h2>
        
        <p className="mx-auto mb-8 text-slate-400">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          to="/"
          className="inline-block rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-green-600 active:scale-95"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;