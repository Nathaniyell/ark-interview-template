"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className=" border-white/10 pt-16 pb-5 px-4"
      style={{ backgroundColor: "#202020" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 justify-items-center">
          {/* Support Column */}
          <div className="text-left">
            <h3 className="font-semibold mb-3">Support</h3>
            <ul
              className="space-y-2"
              style={{ color: "#D9D9D9", fontSize: "0.85rem" }}
            >
              <li>
                <Link
                  href="#"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  Verification
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  ARKcovenant
                </Link>
              </li>
              <li>
                <Link
                  href="https://billygrahamlibrary.org/continue-the-journey-from-home/need-prayer/"
                  target="_blank"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  Prayer Line
                </Link>
              </li>
              <li>
                <Link
                  href="https://peacewithgod.net/"
                  target="_blank"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  Peace with God
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  Report a Concern
                </Link>
              </li>
            </ul>
          </div>

          {/* FAITHx Column */}
          <div className="text-left">
            <h3 className="font-semibold mb-3">FAITHx</h3>
            <ul
              className="space-y-2"
              style={{ color: "#D9D9D9", fontSize: "0.85rem" }}
            >
              <li>
                <Link
                  href="https://faithx.events/"
                  target="_blank"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="https://faithx.events/about-faithx/"
                  target="_blank"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="https://faithx.events/faithx-ministry-and-outreach/"
                  target="_blank"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  Ministry
                </Link>
              </li>
              <li>
                <Link
                  href="https://faithx.events/faithx-sponsorship/"
                  target="_blank"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  Sponsorship
                </Link>
              </li>
              <li>
                <Link
                  href="https://faithx.events/contact-faithx/"
                  target="_blank"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.eventbrite.ca/e/faithx-vancouver-2026-a-night-of-hope-education-encouragement-tickets-363890154247"
                  target="_blank"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  FAITHx Vancouver 2026
                </Link>
              </li>
            </ul>
          </div>

          {/* Selling Column */}
          <div className="text-left">
            <h3 className="font-semibold mb-3">Selling</h3>
            <ul
              className="space-y-2"
              style={{ color: "#D9D9D9", fontSize: "0.85rem" }}
            >
              <li>
                <Link
                  href="#"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  ARK Your Business
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  ARKcovenant for Sellers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  ARK Shipping (FBA)
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  Explore Seller Resources
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  Visit Our Ekklesia Forum
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  How to Sell Responsibly
                </Link>
              </li>
            </ul>
          </div>

          {/* ARK Column */}
          <div className="text-left">
            <h3 className="font-semibold mb-3">ARK</h3>
            <ul
              className="space-y-2"
              style={{ color: "#D9D9D9", fontSize: "0.85rem" }}
            >
              <li>
                <Link
                  href="#"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  Newsroom
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  Learn About New Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  Letter From Our Founder
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="https://christiandiscovery.typeform.com/to/QieYJTT0"
                  target="_blank"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  Faith Driven Investors
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Left Side - Copyright and Links */}
            <div
              className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4"
              style={{ color: "#D9D9D9", fontSize: "0.85rem" }}
            >
              <span>© ARK 2026</span>
              <span style={{ color: "#D9D9D9" }}>•</span>
              <span style={{ color: "#BCC0C5" }}>Jesus is Lord</span>
              <span style={{ color: "#D9D9D9" }}>•</span>
              <div className="flex items-center gap-2 md:gap-4">
                <Link
                  href="#"
                  className="hover:text-[#4de209] text-[#D9D9D9] transition-colors"
                >
                  Terms
                </Link>
                <span style={{ color: "#D9D9D9" }}>•</span>
                <Link
                  href="#"
                  className="hover:text-[#4de209] text-[#D9D9D9] transition-colors"
                >
                  Sitemap
                </Link>
                <span style={{ color: "#D9D9D9" }}>•</span>
                <Link
                  href="#"
                  className="hover:text-[#4de209] text-[#D9D9D9] transition-colors"
                >
                  Privacy
                </Link>
              </div>
            </div>

            {/* Center - Language and Currency */}
            <div
              className="flex items-center "
              style={{ color: "#D9D9D9", fontSize: "0.85rem" }}
            >
              <div className="flex items-center ">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="opacity-70 mr-1"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                <Link
                  href="#"
                  className="hover:text-[#4DE209] text-[#d9d9d9] transition-colors"
                >
                  English (US)
                </Link>
              </div>
              <span className="ml-[-10px]">$USD</span>
            </div>

            {/* Right Side - Social Icons */}
            <div className="flex items-center gap-4">
              {/* X (Twitter) */}
              <Link
                href="https://x.com/FollowARKonX"
                target="_blank"
                className="text-[#BCC0C5] hover:text-[#4de209] transition-colors"
                onContextMenu={(e) => e.preventDefault()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                  ></path>
                </svg>
              </Link>

              {/* TikTok */}
              <Link
                href="https://www.tiktok.com/@faithdrivenmarketplace"
                target="_blank"
                className="text-[#BCC0C5] hover:text-[#4de209] transition-colors"
                onContextMenu={(e) => e.preventDefault()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  className="-mx-2"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M22 6v5q-4 0-6-2v7a7 7 0 1 1-5-6.7m0 6.7a2 2 0 1 0-2 2a2 2 0 0 0 2-2V1h5q2 5 6 5"
                  ></path>
                </svg>
              </Link>

              {/* YouTube */}
              <Link
                href="https://www.youtube.com/@FaithDrivenMarketplace"
                target="_blank"
                className="text-[#BCC0C5] hover:text-[#4de209] transition-colors"
                onContextMenu={(e) => e.preventDefault()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={29}
                  viewBox="0 0 512 512"
                >
                  <g fill="currentColor" fillRule="evenodd">
                    <path d="m239.078 106.761l28.77-.041l31.267.4l19.977.442l21.3.664l14.355.587l14.07.72l13.436.864c17.338 1.254 32.054 2.931 40.426 5.172c18.368 4.875 32.81 19.29 37.738 37.73c1.84 6.868 3.3 15.27 4.46 24.28l1.251 11.045c.372 3.74.701 7.518.992 11.274l1.068 16.563l.475 10.292l.582 20.51l.068 12.088l-.328 16.464l-.538 14.355l-.919 16.24a550 550 0 0 1-1.4 16.922l-1.251 11.065c-1.16 9.025-2.62 17.435-4.46 24.302c-4.928 18.442-19.37 32.856-37.738 37.731c-8.372 2.241-23.088 3.918-40.426 5.173l-13.436.864l-14.07.719l-21.53.836l-14.125.415l-37.451.708l-30.92.173l-28.322-.28l-25.721-.505l-16.942-.48l-23.079-.894l-17.848-.95l-11.27-.768l-10.514-.883q-2.517-.237-4.907-.488l-8.978-1.074c-5.578-.76-10.293-1.612-13.859-2.566c-18.346-4.875-32.81-19.29-37.717-37.73c-2.57-9.615-4.398-22.254-5.697-35.368l-.99-11.297l-.76-11.173l-.563-10.692l-.537-14.355l-.329-16.465v-6.904l.328-16.418l.537-14.317l.562-10.666l.761-11.148l.99-11.274c1.3-13.089 3.127-25.71 5.697-35.324c4.907-18.442 19.37-32.856 37.717-37.73c3.566-.955 8.281-1.806 13.86-2.567l8.977-1.073q2.39-.252 4.907-.488l10.515-.884l11.27-.767l17.847-.951l12.215-.512l27.806-.862l30.284-.568zm22.2 42.587H250.91l-22.01.189l-23.526.403l-24.141.646l-16.858.623l-22.461 1.148l-14.399 1.003l-8.26.721l-7.08.754q-1.615.19-3.07.386l-5.138.786c-1.483.264-2.731.53-3.73.798c-3.588.953-6.478 3.841-7.455 7.513c-2.218 8.297-3.913 20.75-5.123 35.077l-.92 12.685l-.687 13.283a786 786 0 0 0-.258 6.766l-.348 13.582l-.093 6.736v6.499l.084 6.404l.314 12.886l.511 12.777l.713 12.406l.919 11.778c1.193 13.273 2.817 24.734 4.901 32.532c.964 3.624 3.854 6.512 7.511 7.484l1.671.397l4.426.788l5.793.773l7.065.75l8.243.72l9.326.679l15.816.925l17.723.786l10.742.378l24.224.65l23.542.403l27.221.204l17.148-.096l25.7-.353c8.78-.164 17.71-.375 26.6-.641l19.285-.672l16.912-.787l15.065-.912l12.939-1.01l10.533-1.088l5.548-.755q1.231-.19 2.3-.384l3.604-.776c3.595-.955 6.485-3.842 7.471-7.536c2.38-8.882 4.16-22.563 5.386-38.255l.816-12.103q.179-3.099.331-6.253l.512-12.744l.314-12.846l.105-9.5l-.104-9.484l-.314-12.845l-.512-12.737l-.714-12.37c-1.224-18.151-3.145-34.193-5.827-44.204a10.66 10.66 0 0 0-7.551-7.53c-.963-.258-2.16-.515-3.577-.77l-4.9-.759l-6.14-.74l-7.296-.715l-8.369-.682l-14.381-.946l-10.685-.568l-17.466-.741a2124 2124 0 0 0-26.62-.8l-26.243-.491z"></path>
                    <path d="M212.352 319.061V192.938l111.531 62.956z"></path>
                  </g>
                </svg>
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/followark/"
                target="_blank"
                className="text-[#BCC0C5] hover:text-[#4de209] transition-colors"
                onContextMenu={(e) => e.preventDefault()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  viewBox="0 0 24 24"
                  className="-mx-2"
                >
                  <path
                    fill="currentColor"
                    d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"
                  ></path>
                </svg>
              </Link>

              {/* Medium */}
              <Link
                href="https://medium.com/@FaithDrivenMarketplace"
                target="_blank"
                className="text-[#BCC0C5] hover:text-[#4de209] transition-colors mr-[-4px]"
                onContextMenu={(e) => e.preventDefault()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={32}
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M8 6a6 6 0 1 1 0 12A6 6 0 0 1 8 6m9 1c1.5 0 2.5 2.239 2.5 5s-1 5-2.5 5s-2.5-2.239-2.5-5s1-5 2.5-5m4 .5c.38 0 .712.827.88 2.246l.047.443l.019.235l.03.494l.01.259l.012.541L22 12l-.002.282l-.012.541l-.01.26l-.03.493l-.02.235l-.045.443c-.169 1.42-.5 2.246-.881 2.246c-.38 0-.712-.827-.88-2.246l-.047-.443l-.019-.235l-.03-.494l-.01-.259l-.012-.541v-.564l.012-.541l.01-.26l.03-.493l.02-.235l.045-.443c.169-1.42.5-2.246.881-2.246M8 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8m8.956 1.403c-.363.8-.456 1.731-.456 2.597s.092 1.798.456 2.597c.018.038.07.038.088 0c.363-.8.456-1.731.456-2.597s-.092-1.798-.456-2.597a.048.048 0 0 0-.088 0"
                    ></path>
                  </g>
                </svg>
              </Link>

              {/* Facebook */}
              <Link
                href="https://www.facebook.com/FaithDrivenMarketplace/"
                target="_blank"
                className="text-[#BCC0C5] hover:text-[#4de209] transition-colors -ml-2 mr-[-10px]"
                onContextMenu={(e) => e.preventDefault()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={19}
                  className=" stroke-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 14h-3v8h-4v-8H7v-4h3V7a5 5 0 0 1 5-5h3v4h-3q-1 0-1 1v3h4Z"
                  ></path>
                </svg>
              </Link>

              {/* Pinterest */}
              <Link
                href="https://www.pinterest.com/FaithDrivenMarketplace/"
                target="_blank"
                className="text-[#BCC0C5] hover:text-[#4de209] transition-colors mr-[-8px]"
                onContextMenu={(e) => e.preventDefault()}
              >
                <svg
                  fill="currentColor"
                  height="19px"
                  viewBox="0 0 1920 1920"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1368.619 1166.432c-90.774 96.64-206.614 142.4-334.614 132.8-95.573-7.253-220.053-73.707-221.333-74.347l-63.787-34.24-13.76 71.04c-37.653 193.6-82.346 334.827-181.653 439.787-11.627-214.613 38.933-400.213 88-580.48 20.587-75.52 41.813-153.707 58.027-232.213l4.16-20.374-10.774-17.813c-50.88-84.267-35.946-233.6 31.254-313.387 25.28-30.186 53.44-45.12 85.226-45.12 14.614 0 29.974 3.2 46.187 9.494 68.587 26.773 62.187 92.8 9.813 265.173-34.88 114.773-70.933 233.387-18.986 320.213 27.093 45.227 74.133 74.774 139.946 87.787 146.56 28.693 276.054-39.573 355.307-188.16 98.987-185.387 101.973-486.827-51.307-640.107-168.32-168.106-443.733-199.04-670.08-75.306-201.706 110.293-298.56 308.586-252.906 517.44 20.16 91.946-16.64 136.533-41.28 155.306-58.56-45.973-62.187-170.24-58.347-277.013 11.84-321.6 295.253-525.76 556.16-554.453 320.427-35.414 669.12 103.253 715.627 436.586 32.106 230.294-34.88 472.64-170.88 617.387m276.48-632.107C1595.712 180.62 1245.312-41.14 812.139 6.432c-305.174 33.6-637.014 275.2-650.987 656.64-5.973 162.027 6.613 335.253 144.96 391.467l19.52 7.893 19.52-7.467c60.587-23.146 164.907-113.386 126.4-289.173-35.733-163.2 39.04-313.067 199.893-401.067 151.36-82.773 386.027-100.053 543.467 57.28 106.667 106.667 121.92 346.987 32.64 514.347-39.893 74.773-113.813 158.72-240.533 133.76-52.587-10.453-65.067-31.147-69.12-37.973-27.627-46.187 2.666-146.134 29.546-234.347 44.374-146.133 99.734-328.213-73.066-395.627-94.08-36.586-185.707-12.373-251.947 66.347-91.307 108.48-112.853 294.4-51.52 417.813-14.72 68.587-33.067 135.787-52.373 206.72-59.414 218.134-120.854 443.734-80.854 723.52l12.48 86.934 71.36-51.094c165.12-118.08 235.627-281.706 284.374-503.253 52.8 22.933 130.133 51.093 200 56.427 162.133 12.16 306.88-45.227 420.48-166.08 157.226-167.467 235.2-444.16 198.72-705.174"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/company/faithdrivenmarketplace/"
                target="_blank"
                className="text-[#BCC0C5] hover:text-[#4de209] transition-colors"
                onContextMenu={(e) => e.preventDefault()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={23}
                  viewBox="0 0 14 14"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.574 1.767a1.316 1.316 0 0 1-1.287 1.326A1.346 1.346 0 0 1 .99 1.767A1.326 1.326 0 0 1 2.287.5a1.316 1.316 0 0 1 1.287 1.267M1.129 5.449c0-.762.485-.643 1.158-.643s1.148-.119 1.148.643v7.424c0 .772-.485.614-1.148.614s-1.158.158-1.158-.614zm4.306.001c0-.426.158-.585.405-.634s1.1 0 1.396 0c.297 0 .416.485.406.851a2.49 2.49 0 0 1 2.217-.99a2.97 2.97 0 0 1 3.148 3.098v5.068c0 .772-.475.614-1.149.614s-1.148.158-1.148-.614V8.884A1.425 1.425 0 0 0 9.206 7.34A1.435 1.435 0 0 0 7.74 8.914v3.959c0 .772-.485.614-1.158.614s-1.148.158-1.148-.614z"
                    strokeWidth={1}
                  ></path>
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
