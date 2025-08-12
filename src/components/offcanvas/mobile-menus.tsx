import React from "react";
import Image from "next/image";
import Link from "next/link";
import { mobile_menu_data } from "@/data/menu-data";

export default function MobileMenus() {
  const [navTitle, setNavTitle] = React.useState<string>("");

  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  return (
    <>
      <nav className="tp-main-menu-content">
        <ul>
          {mobile_menu_data.map((menu) => (
            <li
              key={menu.id}
              className={`has-dropdown ${
                menu.dropdown_menus && menu.dropdown_menus.length > 0
                  ? "has-dropdown"
                  : ""
              }`}
            >
              {menu.dropdown_menus && menu.dropdown_menus.length > 0 ? (
                <>
                  <a className="pointer" onClick={() => openMobileMenu(menu.title)}>
                    {menu.title}
                    <button className="dropdown-toggle-btn">
                      <i className="fa-light fa-plus"></i>
                    </button>
                  </a>
                  <ul className="tp-submenu submenu" style={{ display: navTitle === menu.title ? "block" : "none"}}>
                    {menu.dropdown_menus.map((mm, i) => (
                      <li key={i}>
                        <Link href={mm.link}>{mm.title}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={menu.link}>
                  {menu.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
