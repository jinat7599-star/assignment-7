import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

 
const SOCIAL_PLATFORMS = [
  { id: 1, icon: <FaInstagram />, path: "#" },
  { id: 2, icon: <FaFacebookF />, path: "#" },
  { id: 3, icon: <FaXTwitter />, path: "#" },
];

const LEGAL_LINKS = ["Privacy Policy", "Terms of Service", "Cookies"];

const Footer = () => {
  const currentYear = 2026;

  return (
    <footer className="mt-16 bg-green-950 text-white">
      <section className="mx-auto max-w-7xl px-4 py-16 text-center">
         
        <header>
          <h2 className="mb-4 text-5xl font-bold tracking-tight">KeenKeeper</h2>
          <p className="mx-auto mb-8 max-w-3xl text-slate-300">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
        </header>

        <h3 className="mb-4 text-2xl font-semibold">Social Links</h3>

         
        <div className="mb-8 flex justify-center gap-4 text-2xl">
          {SOCIAL_PLATFORMS.map((platform) => (
            <a 
              key={platform.id} 
              href={platform.path} 
              className="rounded-full bg-white p-4 text-slate-900 transition-transform hover:scale-110"
              aria-label="Social Link"
            >
              {platform.icon}
            </a>
          ))}
        </div>

     
        <div className="flex flex-col items-center justify-between gap-4 border-t border-green-900 pt-6 text-slate-300 md:flex-row">
          <p>© {currentYear} KeenKeeper. All rights reserved.</p>
          
          <nav className="flex gap-6 justify-center">
            {LEGAL_LINKS.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </section>
    </footer>
  );
};

export default Footer;