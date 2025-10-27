import React from "react";

function Navbar() {
  const links = [
    {
      title: "Guide",
      href: "#",
    },

    {
      title: "Pricing",
      href: "#",
    },

    {
      title: "Login",
      href: "#",
    },
  ];

  return (
    <div className="navbar-root">
      <div className="logo">Fapster</div>
      <div className="links">
        {links.map((link, index) => {
          return (
            <a className="link-items" key={index} href={link.href}>
              {link.title}
            </a>
          );
        })}

        <button className="btn">Start free trial</button>
      </div>
    </div>
  );
}

export default Navbar;
