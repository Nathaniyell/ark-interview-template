"use client";
import Link from "next/link";
import Image from "next/image";

// Import social media icon PNGs
import facebookIcon from "../assets/footer/facebook-icon-24px-ht.png";
import instagramIcon from "../assets/footer/instagram-icon-24px-ht.png";
import linkedinIcon from "../assets/footer/linkedin-icon-24px-ht.png";
import mediumIcon from "../assets/footer/medium-icon-24px-ht.png";
import pinterestIcon from "../assets/footer/pinterest-icon-24px-ht.png";
import tiktokIcon from "../assets/footer/tiktok-icon-24px-ht.png";
import xIcon from "../assets/footer/x-icon-24px-ht.png";
import youtubeIcon from "../assets/footer/youtube-icon-24px-ht.png";

const Footer = () => {
  return (
    <footer
      className="border-t border-white/10 pt-16 pb-5 px-4"
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
              <span>© ARK 2025</span>
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
              className="flex items-center gap-4"
              style={{ color: "#D9D9D9", fontSize: "0.85rem" }}
            >
              <div className="flex items-center ">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="opacity-70"
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
                className="hover:text-[#4de209] transition-opacity"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={xIcon}
                  alt="X (Twitter)"
                  height={16}
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </Link>
              {/* TikTok */}
              <Link
                href="https://www.tiktok.com/@faithdrivenmarketplace"
                target="_blank"
                className="hover:text-[#4de209] transition-opacity -mx-[6px]"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={tiktokIcon}
                  alt="TikTok"
                  height={16}
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </Link>
              {/* YouTube */}
              <Link
                href="https://www.youtube.com/@FaithDrivenMarketplace"
                target="_blank"
                className="hover:text-[#4de209] transition-opacity"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={youtubeIcon}
                  alt="YouTube"
                  height={16}
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </Link>
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/followark/"
                target="_blank"
                className="hover:text-[#4de209] transition-opacity"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={instagramIcon}
                  alt="Instagram"
                  height={16}
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </Link>
              {/* Medium */}
              <Link
                href="https://medium.com/@FaithDrivenMarketplace"
                target="_blank"
                className="hover:text-[#4de209] transition-opacity"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={mediumIcon}
                  alt="Medium"
                  height={16}
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </Link>
              {/* Facebook */}
              <Link
                href="https://www.facebook.com/FaithDrivenMarketplace/"
                target="_blank"
                className="hover:text-[#4de209] transition-opacity"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={facebookIcon}
                  alt="Facebook"
                  height={16}
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </Link>
              {/* Pinterest */}
              <Link
                href="https://www.pinterest.com/FaithDrivenMarketplace/"
                target="_blank"
                className="hover:text-[#4de209] transition-opacity -mx-[6px] "
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={pinterestIcon}
                  alt="Pinterest"
                  height={16}
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </Link>
              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/company/faithdrivenmarketplace/"
                target="_blank"
                className="hover:text-[#4de209] transition-opacity"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={linkedinIcon}
                  alt="LinkedIn"
                  height={16}
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
