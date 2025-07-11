const Navbar = () => (
  <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
    <h1 className="text-xl font-bold text-blue-600">delgadodevelops</h1>
    <ul className="flex gap-6 text-gray-700">
      <li><a href="/" className="hover:text-blue-600">Home</a></li>
      <li><a href="/projects" className="hover:text-blue-600">Projects</a></li>
      <li><a href="/about" className="hover:text-blue-600">About</a></li>
      <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
