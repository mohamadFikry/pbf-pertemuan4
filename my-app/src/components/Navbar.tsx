'use client';
import { usePathname } from 'next/navigation';

type NavItemProps = {
  title: string;
  url: string;
  isSelected: boolean;
};

function NavItem({ title, url, isSelected }: NavItemProps) {
  return (
    <li>
      <a
        className={`block px-3 py-2 hover:text-teal-500 transition ${
          isSelected ? 'text-teal-500' : ''
        }`}
        href={url}
      >
        {title}
      </a>
    </li>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex justify-center h-16 pt-6">
      <nav>
        <ul className="flex rounded-full bg-white/90 px-3 shadow ring-1 backdrop-blur text-sm font-medium text-zinc-800">
          <NavItem title="Tentang Saya" url="/" isSelected={pathname === '/'} />
          <NavItem title="Proyek" url="/projects" isSelected={pathname === '/projects'} />
          <NavItem title="Esai" url="/essays" isSelected={pathname === '/essays'} />
        </ul>
      </nav>
    </div>
  );
}
