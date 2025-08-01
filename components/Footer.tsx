import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-white/10 pt-16 pb-5 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Support Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Verification
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  ARKcovenant
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Prayer line
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Peace with God
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Report a concern
                </Link>
              </li>
            </ul>
          </div>

          {/* FAITHx Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">FAITHx</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Ministry
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Scriptures
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAITHx Vancouver 2026
                </Link>
              </li>
            </ul>
          </div>

          {/* Selling Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Selling</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  ARK your business
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  ARKcovenant for sellers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  ARK Fulfillment
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Explore seller resources
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Visit our Ekklesia forum
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  How to sell responsibly
                </Link>
              </li>
            </ul>
          </div>

          {/* ARK Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">ARK</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Learn about new features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Letter from our founder
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Faith Driven Investors
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Left Side - Copyright and Links */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-muted-foreground text-sm">
              <span>© ARK 2025</span>
              <div className="flex items-center gap-4">
                <span className="text-green-400">Jesus is Lord</span>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Sitemap
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy
                </Link>
              </div>
            </div>

            {/* Center - Language and Currency */}
            <div className="flex items-center gap-4 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>English (US)</span>
              </div>
              <span>$USD</span>
            </div>

            {/* Right Side - Social Icons */}
            <div className="flex items-center gap-4">
              {/* Twitter */}
              <Link
                href="#"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              {/* TikTok */}
              <Link
                href="#"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </Link>
              {/* YouTube */}
              <Link
                href="#"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
              {/* Instagram */}
              <Link
                href="#"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.036.388a5.918 5.918 0 0 0-2.14 1.392 5.918 5.918 0 0 0-1.392 2.14C1.32 4.404 1.198 4.978 1.164 5.925.129 6.873.116 7.28.116 10.901c0 3.621.013 4.028.048 4.976.034.947.156 1.521.34 2.005a5.918 5.918 0 0 0 1.392 2.14 5.918 5.918 0 0 0 2.14 1.392c.484.184 1.058.306 2.005.34.948.035 1.355.048 4.976.048 3.621 0 4.028-.013 4.976-.048.947-.034 1.521-.156 2.005-.34a5.918 5.918 0 0 0 2.14-1.392 5.918 5.918 0 0 0 1.392-2.14c.184-.484.306-1.058.34-2.005.035-.948.048-1.355.048-4.976 0-3.621-.013-4.028-.048-4.976-.034-.947-.156-1.521-.34-2.005a5.918 5.918 0 0 0-1.392-2.14A5.918 5.918 0 0 0 19.063.388C18.579.204 18.005.082 17.058.048 16.11.013 15.703 0 12.082 0h-.065zm-.086 5.865a6.135 6.135 0 1 1 0 12.27 6.135 6.135 0 0 1 0-12.27zm0 10.109a3.974 3.974 0 1 0 0-7.948 3.974 3.974 0 0 0 0 7.948zm7.741-10.29a1.434 1.434 0 1 1-2.868 0 1.434 1.434 0 0 1 2.868 0z" />
                </svg>
              </Link>
              {/* More social icons */}
              <Link
                href="#"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
