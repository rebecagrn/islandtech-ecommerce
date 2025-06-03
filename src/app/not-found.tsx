import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-letsplay-red/20 to-transparent rounded-full transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-letsplay-red/20 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-md mx-auto px-4 py-8 text-center relative z-10">
        <div className="relative">
          <h1 className="text-8xl font-bold text-letsplay-red mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted.
          </p>
          <Link href="/">
            <Button className="bg-letsplay-red hover:bg-letsplay-red/90 text-white px-8 py-6 text-lg">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
