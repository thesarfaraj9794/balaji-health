"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";

import { useTheme } from "../app/providers/ThemeProvider";

// =====================================================
// NAVIGATION ITEMS
// =====================================================

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blood Test",
    href: "/services/blood-test",
  },
  {
    label: "Hospicash",
    href: "/services/hospicase",
  },
  {
    label: "Online Medicine",
    href: "/services/online-medicine",
  },
  {
    label: "Online Doctor Consultation",
    href: "/services/online-doctor-consultation",
  },
  {
    label: "Personal Accident Covered",
    href: "/services/personal-accident-covered",
  },
  {
    label: "Certification",
    href: "/services/certificate",
  },
  {
    label: "Contact Us",
    href: "/services/contact-us",
  },
  
];

// =====================================================
// NAVBAR COMPONENT
// =====================================================

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const darkMode = theme === "dark";

  // =====================================================
  // HYDRATION FIX
  // =====================================================

  useEffect(() => {
    setMounted(true);
  }, []);

  // =====================================================
  // ACTIVE PAGE
  // =====================================================

  const isActivePage = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  // =====================================================
  // PREVENT BODY SCROLL
  // =====================================================

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // =====================================================
  // CLOSE DRAWER ON DESKTOP
  // =====================================================

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // =====================================================
  // CLOSE MOBILE MENU
  // =====================================================

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* =================================================
          HEADER
      ================================================= */}

      <header
        className="
          sticky
          top-0
          z-50
          w-full
          border-b
          border-[#E5E7EB]
          bg-white
          shadow-[0_2px_12px_rgba(0,0,0,0.04)]
          transition-all
          duration-300
          dark:border-[#27303D]
          dark:bg-[#111827]
        "
      >
        {/* =================================================
            MAIN NAVBAR CONTAINER
        ================================================= */}

        <div
          className="
            mx-auto
            flex
            h-[108px]
            w-full
            max-w-[1920px]
            items-center
            px-4
            sm:h-[114px]
            sm:px-6
            lg:h-[120px]
            lg:px-5
            xl:h-[124px]
            xl:px-8
            2xl:h-[132px]
            2xl:px-12
          "
        >
          {/* ===============================================
              LOGO AREA
          =============================================== */}

          <div
            className="
              flex
              h-full
              shrink-0
              flex-col
              items-center
              justify-center
              pb-3
              pt-2
              lg:w-[155px]
              xl:w-[190px]
              2xl:w-[240px]
            "
          >
            <Image
              src="/logo2.png"
              alt="Restore Health Services Logo"
              width={280}
              height={104}
              priority
              className="
                h-[56px]
                w-auto
                object-contain
                sm:h-[62px]
                lg:h-[58px]
                xl:h-[66px]
                2xl:h-[78px]
              "
            />

            <p
              className="
                mt-2
                whitespace-nowrap
                text-center
                font-bold
                leading-tight
                tracking-wide
                text-[#1B4D03]
                text-[10px]
                sm:text-[11px]
                lg:text-[9px]
                xl:text-[11px]
                2xl:text-sm
                dark:text-[#D4A300]
              "
            >
              Restore Health Services (OPC) Pvt.Ltd.
            </p>
          </div>

          {/* ===============================================
              DESKTOP NAVIGATION
          =============================================== */}

          <nav
            className="
              ml-6
              hidden
              min-w-0
              flex-1
              items-center
              lg:flex
              xl:ml-8
              2xl:ml-10
            "
          >
            {/* =============================================
                NAV LINKS
            ============================================= */}

            <div
              className="
                flex
                min-w-0
                flex-1
                items-center
                justify-between
              "
            >
              {navItems.map((item) => {
                const active = isActivePage(item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`
                      group
                      relative
                      shrink-0
                      whitespace-nowrap
                      text-center
                      transition-all
                      duration-300

                      lg:text-[13px]
                      xl:text-[14px]
                      2xl:text-[16px]

                      ${
                        active
                          ? `
                            font-bold
                            text-[#1B4D03]
                            dark:text-[#D4A300]
                          `
                          : `
                            font-semibold
                            text-[#1B4D03]
                            hover:text-[#B88600]
                            dark:text-gray-200
                            dark:hover:text-[#D4A300]
                          `
                      }
                    `}
                  >
                    {item.label}

                    {/* ACTIVE / HOVER LINE */}

                    <span
                      className={`
                        absolute
                        left-1/2
                        -bottom-[18px]
                        h-[3px]
                        -translate-x-1/2
                        rounded-full
                        bg-gradient-to-r
                        from-[#1B4D03]
                        via-[#246B1C]
                        to-[#B88600]
                        transition-all
                        duration-300
                        ease-out
                        ${
                          active
                            ? "w-full opacity-100"
                            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                        }
                      `}
                    />

                    {/* ACTIVE DOT */}

                    {active && (
                      <span
                        className="
                          absolute
                          left-1/2
                          -bottom-[23px]
                          h-[4px]
                          w-[4px]
                          -translate-x-1/2
                          rounded-full
                          bg-[#B88600]
                          shadow-[0_0_8px_rgba(184,134,0,0.65)]
                        "
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* =============================================
                THEME AREA
            ============================================= */}

            <div
              className="
                ml-4
                flex
                shrink-0
                items-center
                xl:ml-5
              "
            >
              {/* SEPARATOR */}

              <div
                className="
                  mr-4
                  h-8
                  w-px
                  bg-[#E3E7EB]
                  dark:bg-[#374151]
                "
              />

              {/* THEME BUTTON */}

              {mounted && (
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={
                    darkMode
                      ? "Switch to light mode"
                      : "Switch to dark mode"
                  }
                  className="
                    relative
                    flex
                    h-8
                    w-[58px]
                    shrink-0
                    items-center
                    rounded-full
                    border
                    border-[#D8E6CC]
                    bg-[#F4F9F0]
                    p-1
                    transition-all
                    duration-300
                    xl:w-16
                    dark:border-[#36574F]
                    dark:bg-[#182C28]
                  "
                >
                  <span
                    className={`
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-[#1B4D03]
                      shadow-md
                      transition-transform
                      duration-300
                      dark:bg-[#253C37]
                      dark:text-[#D4A300]
                      ${
                        darkMode
                          ? "translate-x-[26px] xl:translate-x-8"
                          : "translate-x-0"
                      }
                    `}
                  >
                    {darkMode ? (
                      <Moon size={14} strokeWidth={2.5} />
                    ) : (
                      <Sun size={14} strokeWidth={2.5} />
                    )}
                  </span>
                </button>
              )}
            </div>
          </nav>

          {/* ===============================================
              MOBILE / TABLET CONTROLS
              BELOW 1024px
          =============================================== */}

          <div
            className="
              ml-auto
              flex
              shrink-0
              items-center
              gap-3
              lg:hidden
            "
          >
            {/* THEME BUTTON */}

            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D8E6CC]
                  bg-[#F4F9F0]
                  text-[#1B4D03]
                  transition-all
                  duration-200
                  hover:scale-105
                  hover:border-[#B88600]
                  dark:border-[#36574F]
                  dark:bg-[#182C28]
                  dark:text-[#D4A300]
                "
              >
                {darkMode ? (
                  <Moon size={18} />
                ) : (
                  <Sun size={18} />
                )}
              </button>
            )}

            {/* HAMBURGER */}

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-[#F4F9F0]
                text-[#1B4D03]
                transition-all
                duration-200
                hover:scale-105
                hover:bg-[#EAF3E4]
                dark:bg-[#12382F]
                dark:text-[#D4A300]
              "
            >
              {mobileOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>

        {/* =================================================
            MOBILE / TABLET DRAWER
        ================================================= */}

        <div
          className={`
            overflow-hidden
            border-t
            border-gray-100
            bg-white
            transition-all
            duration-300
            ease-in-out
            dark:border-gray-700
            dark:bg-[#111827]
            lg:hidden
            ${
              mobileOpen
                ? "max-h-[calc(100vh-108px)] opacity-100"
                : "max-h-0 border-t-0 opacity-0"
            }
          `}
        >
          <div
            className="
              max-h-[calc(100vh-108px)]
              overflow-y-auto
              px-5
              py-5
              sm:px-8
            "
          >
            <div className="flex flex-col">
              {navItems.map((item) => {
                const active = isActivePage(item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`
                      relative
                      border-b
                      border-gray-100
                      py-4
                      text-[16px]
                      transition-all
                      duration-300
                      dark:border-gray-700
                      ${
                        active
                          ? `
                            bg-[#F4F9F0]
                            pl-5
                            font-bold
                            text-[#1B4D03]
                            dark:bg-[#18382C]
                            dark:text-[#D4A300]
                          `
                          : `
                            font-medium
                            text-[#1B4D03]
                            hover:bg-[#F8FBF6]
                            hover:text-[#B88600]
                            dark:text-gray-200
                            dark:hover:text-[#D4A300]
                          `
                      }
                    `}
                  >
                    {active && (
                      <span
                        className="
                          absolute
                          left-0
                          top-1/2
                          h-8
                          w-1
                          -translate-y-1/2
                          rounded-r-full
                          bg-gradient-to-b
                          from-[#1B4D03]
                          via-[#246B1C]
                          to-[#B88600]
                        "
                      />
                    )}

                    {active && (
                      <span
                        className="
                          absolute
                          right-3
                          top-1/2
                          h-2
                          w-2
                          -translate-y-1/2
                          rounded-full
                          bg-[#B88600]
                          shadow-[0_0_10px_rgba(184,134,0,0.55)]
                        "
                      />
                    )}

                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* =================================================
          MOBILE / TABLET BACKDROP
      ================================================= */}

      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMobileMenu}
          className="
            fixed
            inset-0
            z-40
            bg-black/20
            backdrop-blur-[1px]
            lg:hidden
          "
        />
      )}
    </>
  );
}