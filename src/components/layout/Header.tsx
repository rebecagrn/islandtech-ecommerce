import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Island Tech
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link
              href="/produtos"
              className="text-gray-600 hover:text-gray-900"
            >
              Produtos
            </Link>
            <Link href="/sobre" className="text-gray-600 hover:text-gray-900">
              Sobre
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
