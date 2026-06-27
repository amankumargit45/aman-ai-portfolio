function NavLinks({ mobile = false, onClick }) {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={onClick}
          className={`${
            mobile
              ? "text-2xl py-3 border-b border-white/10"
              : "hover:text-blue-500 duration-300"
          }`}
        >
          {link.name}
        </a>
      ))}
    </>
  );
}

export default NavLinks;