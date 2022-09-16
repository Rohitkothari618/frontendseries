import Link from "next/link";

const Nav = ({ navData, header }) => {
  return (
    <nav className="flex items-center">
      <ul className="flex gap-[96px]">
        {navData.map((item, idx) => {
          const { name, href } = item;
          return (
            <li key={idx}>
              <Link href={href}>
                <a
                  className={`${
                    header ? "text-primary" : "text-black"
                  } cursour-pointer hover:text-accent-hover transition-all`}
                >
                  {name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
