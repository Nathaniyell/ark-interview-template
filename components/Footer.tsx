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
            <h3
              className="font-semibold mb-3"
              style={{ color: "#D9D9D9", fontSize: "0.8rem" }}
            >
              Support
            </h3>
            <ul
              className="space-y-2"
              style={{ color: "#D9D9D9", fontSize: "0.8rem" }}
            >
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  Verification
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  ARKcovenant
                </Link>
              </li>
              <li>
                <Link
                  href="https://billygrahamlibrary.org/continue-the-journey-from-home/need-prayer/"
                  target="_blank"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  Prayer Line
                </Link>
              </li>
              <li>
                <Link
                  href="https://peacewithgod.net/"
                  target="_blank"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  Peace with God
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  Report a Concern
                </Link>
              </li>
            </ul>
          </div>

          {/* FAITHx Column */}
          <div className="text-left">
            <h3
              className="font-semibold mb-3"
              style={{ color: "#D9D9D9", fontSize: "0.8rem" }}
            >
              FAITHx
            </h3>
            <ul
              className="space-y-2"
              style={{ color: "#D9D9D9", fontSize: "0.8rem" }}
            >
              <li>
                <Link
                  href="https://faithx.events/"
                  target="_blank"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="https://faithx.events/about-faithx/"
                  target="_blank"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="https://faithx.events/faithx-ministry-and-outreach/"
                  target="_blank"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  Ministry
                </Link>
              </li>
              <li>
                <Link
                  href="https://faithx.events/faithx-sponsorship/"
                  target="_blank"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  Sponsorship
                </Link>
              </li>
              <li>
                <Link
                  href="https://faithx.events/contact-faithx/"
                  target="_blank"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.eventbrite.ca/e/faithx-vancouver-2026-a-night-of-hope-education-encouragement-tickets-363890154247"
                  target="_blank"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  FAITHx Vancouver 2026
                </Link>
              </li>
            </ul>
          </div>

          {/* Selling Column */}
          <div className="text-left">
            <h3
              className="font-semibold mb-3"
              style={{ color: "#D9D9D9", fontSize: "0.8rem" }}
            >
              Selling
            </h3>
            <ul
              className="space-y-2"
              style={{ color: "#D9D9D9", fontSize: "0.8rem" }}
            >
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  ARK Your Business
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  ARKcovenant for Sellers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  ARK Shipping (FBA)
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  Explore Seller Resources
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  Visit Our Ekklesia Forum
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  How to Sell Responsibly
                </Link>
              </li>
            </ul>
          </div>

          {/* ARK Column */}
          <div className="text-left">
            <h3
              className="font-semibold mb-3"
              style={{ color: "#D9D9D9", fontSize: "0.8rem" }}
            >
              ARK
            </h3>
            <ul
              className="space-y-2"
              style={{ color: "#D9D9D9", fontSize: "0.8rem" }}
            >
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  Newsroom
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  Learn About New Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  Letter From Our Founder
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="https://christiandiscovery.typeform.com/to/QieYJTT0"
                  target="_blank"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  Faith Driven Investors
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
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
              className="flex flex-col md:flex-row items-start md:items-center gap-4"
              style={{ color: "#D9D9D9", fontSize: "0.8rem" }}
            >
              <span>© ARK 2026</span>
              <span style={{ color: "#D9D9D9" }}>•</span>
              <span style={{ color: "#D9D9D9" }}>Jesus is Lord</span>
              <span style={{ color: "#D9D9D9" }}>•</span>
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  Terms
                </Link>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  Sitemap
                </Link>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  Privacy
                </Link>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  English (US)
                </Link>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: "#D9D9D9" }}
                >
                  $USD
                </Link>
              </div>
            </div>

            {/* Right Side - Social Icons */}
            <div className="flex items-center gap-4">
              {/* X (Twitter) */}
              <Link
                href="https://x.com/FollowARKonX"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={xIcon}
                  alt="X (Twitter)"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </Link>
              {/* TikTok */}
              <Link
                href="https://www.tiktok.com/@faithdrivenmarketplace"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={tiktokIcon}
                  alt="TikTok"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </Link>
              {/* YouTube */}
              <Link
                href="https://www.youtube.com/@FaithDrivenMarketplace"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={youtubeIcon}
                  alt="YouTube"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </Link>
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/followark/"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={instagramIcon}
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </Link>
              {/* Medium */}
              <Link
                href="https://medium.com/@FaithDrivenMarketplace"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={mediumIcon}
                  alt="Medium"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </Link>
              {/* Facebook */}
              <Link
                href="https://www.facebook.com/FaithDrivenMarketplace/"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={facebookIcon}
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </Link>
              {/* Pinterest */}
              <Link
                href="https://www.pinterest.com/FaithDrivenMarketplace/"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={pinterestIcon}
                  alt="Pinterest"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </Link>
              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/company/faithdrivenmarketplace/"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={linkedinIcon}
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="w-6 h-6"
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
