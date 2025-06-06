import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="relative bg-white/60 px-4 py-8 rounded-3xl max-w-lg w-full flex flex-col items-center text-center backdrop-blur-md">
        <h1 className="text-[5rem] font-normal text-gray-900 tracking-tight mb-2 leading-none">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 text-base font-normal">
          Oops! The page you're looking for doesn't exist.
          <br />
          It might have been moved or deleted.
        </p>
        <Link href="/" passHref>
          <button className="bg-gray-900 text-white rounded-full px-8 py-3 text-base font-medium shadow-md hover:bg-gray-800 transition">
            Return to Home
          </button>
        </Link>
      </div>
    </main>
  );
}
