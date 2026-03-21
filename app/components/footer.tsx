export default function Footer() {
  return (
    <footer className="w-full bg-gray-700 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-6">
        <a
          className="text-gray-300 text-sm hover:text-white transition-colors"
        >
          sushirolltogo10@gmail.com
        </a>
        <a
          href="https://www.instagram.com/sushiroll_to_go/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
          aria-label="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </div>
      <p className="mt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Sushi Roll To Go. Todos los derechos reservados.
      </p>
    </footer>
  );
}
