import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "./NavLinks";

function MobileMenu({ open, setOpen }) {
  return (
    <AnimatePresence>

      {open && (

        <>

          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          />

          {/* Menu */}

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed top-0 right-0 w-[85%] max-w-sm h-screen bg-[#020617] border-l border-white/10 z-50 p-8 flex flex-col"
          >

            <div className="flex justify-between items-center mb-14">

              <h2 className="text-3xl font-black">

                Aman

                <span className="text-blue-500">

                  .

                </span>

              </h2>

              <button
                onClick={() => setOpen(false)}
              >

                <X size={30} />

              </button>

            </div>

            <div className="flex flex-col gap-8 text-xl font-medium">

              <NavLinks
                mobile
                onClick={() => setOpen(false)}
              />

            </div>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-auto bg-blue-600 hover:bg-blue-700 py-4 rounded-2xl text-center font-bold duration-300"
            >

              Hire Me

            </a>

          </motion.div>

        </>

      )}

    </AnimatePresence>
  );
}

export default MobileMenu;