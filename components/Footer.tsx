import Image from 'next/image';
import Link from 'next/link';

import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className="flex flex-col text-white mt-5 border-t border-gray-100 bg-black">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src="/logo.svg" alt="logo" width={118} height={18} className="object-contain" />
          <p className="text-base text-gray-100">
            Vitriny - 2024 <br /> Alguns direitos reservados &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <a key={item.title} href={item.url} target="_blank" rel="noopener noreferrer" className="text-gray-400">
                  {item.title}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-gray-400 items-center flex-wrap mt-10 border-t border-gray-900 sm:px-16 px-6 py-10">
        <p>@2024 Vitriny. Alguns direitos reservados</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-100">
            Politica de privacidade
          </Link>
          <Link href="/" className="text-gray-100">
            Termos de uso
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
