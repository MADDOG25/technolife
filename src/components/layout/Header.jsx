import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Inicio", href: "/inicio" },
  { name: "Servicios", href: "/servicios" },
  { name: "Testimonios", href: "/testimonios" },
  { name: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-blue absolute inset-x-0 top-0 z-50 drop-shadow-2xl">
        <nav
          aria-label="Global"
          className="flex items-center justify-between py-8 px-8"
        >
          <div className="flex lg:flex-1">
            <a href="/inicio" className="-m-0 -p-1">
              <div className="flex items-center">
                <img
                  alt="logo de technolife"
                  src="/logo.svg"
                  height="40px"
                  width="auto"
                  className="h-10 w-auto"
                />
              </div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-8 w-8" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-semibold text-pink"
                    : "text-lg font-semibold text-white hover:text-pink"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive
                  ? "rounded-xl bg-white px-8 py-2 text-md font-semibold text-pink"
                  : "rounded-xl bg-pink px-8 py-2 text-md font-semibold text-white hover:bg-white hover:text-pink"
              }
            >
              Contacto
            </NavLink>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blue px-6 py-8 sm:max-w-sm sm:ring-1 sm:ring-white">
            <div className="flex items-center justify-between">
              <a href="/inicio" className="-m-1.5 p-1.5">
                <div className="flex items-center">
                  <img
                    alt="logo technolife"
                    src="/logo.svg"
                    className="h-10 w-auto"
                  />
                  <p className="text-xl font-semibold text-white">TechnoLife</p>
                </div>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-8 w-8" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) =>
                        isActive
                          ? "-mx-3 block rounded-lg px-3 py-2 text-md font-semibold text-pink bg-white"
                          : "-mx-3 block rounded-lg px-3 py-2 text-md font-semibold text-white hover:bg-pink"
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className="py-6">
                  <NavLink
                    to="/contacto"
                    className={({ isActive }) =>
                      isActive
                        ? "-mx-3 block rounded-lg px-3 py-2.5 text-md font-semibold text-pink bg-white"
                        : "-mx-3 block rounded-lg px-3 py-2.5 text-md font-semibold text-white hover:bg-pink"
                    }
                  >
                    Contacto
                  </NavLink>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
