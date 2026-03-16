export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-xl font-bold">
          Sushi Roll To Go
        </h1>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#menu" className="hover:text-red-500">
            Menu
          </a>

          <a href="#sucursales" className="hover:text-red-500">
            Sucursales
          </a>

          <a href="#contacto" className="hover:text-red-500">
            Contacto
          </a>

          <button className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600">
            Pedir ahora
          </button>
        </div>

      </div>
    </nav>
  )
}