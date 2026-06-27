import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 duration-300 ${
          scrolled
            ? "bg-[#020617]/90 backdrop-blur-xl border-b border-white/10 shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

          {/* Logo */}

          <a
            href="#home"
            className="text-3xl font-black tracking-wide"
          >
            Aman
            <span className="text-blue-500">
              .
            </span>
          </a>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-10">

            <NavLinks />

          </div>

          {/* Desktop Button */}

         <a
  href="#contact"
  className="hidden md:block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold duration-300"
>
  Hire Me
</a>
          {/* Mobile Button */}

          <button
            onClick={() => setOpen(true)}
            className="md:hidden"
          >

            <Menu size={30} />

          </button>

        </div>
      </nav>

      {/* Mobile Menu */}

      <MobileMenu
        open={open}
        setOpen={setOpen}
      />

    </>
  );
}

export default Navbar;