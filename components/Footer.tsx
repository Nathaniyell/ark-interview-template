import Link from "next/link";

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
                className="hover:text-white transition-colors"
                style={{ color: "#D9D9D9" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.604 25.622L7.693 41.498M37.924 6.502L25.554 21.07M6.61 6.5l27.44 35h7.56l-27.439-35z"
                    strokeWidth="1"
                  />
                </svg>
              </Link>
              {/* TikTok */}
              <Link
                href="https://www.tiktok.com/@faithdrivenmarketplace"
                target="_blank"
                className="hover:text-white transition-colors"
                style={{ color: "#D9D9D9" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M224 74a50.06 50.06 0 0 1-50-50a6 6 0 0 0-6-6h-40a6 6 0 0 0-6 6v132a22 22 0 1 1-31.43-19.89a6 6 0 0 0 3.43-5.42V88a6 6 0 0 0-7-5.91C52.2 88.28 26 120.05 26 156a74 74 0 0 0 148 0v-43.07A101.3 101.3 0 0 0 224 126a6 6 0 0 0 6-6V80a6 6 0 0 0-6-6m-6 39.8a89.13 89.13 0 0 1-46.5-16.69A6 6 0 0 0 162 102v54a62 62 0 0 1-124 0c0-27.72 18.47-52.48 44-60.38v31.53A34 34 0 1 0 134 156V30h28.29A62.09 62.09 0 0 0 218 85.71Z"
                  ></path>
                </svg>
              </Link>
              {/* YouTube */}
              <Link
                href="https://www.youtube.com/@FaithDrivenMarketplace"
                target="_blank"
                className="hover:text-white transition-colors"
                style={{ color: "#D9D9D9" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                    <path d="M10.386 8.357A.75.75 0 0 0 9.25 9v6a.75.75 0 0 0 1.136.643l5-3a.75.75 0 0 0 0-1.286zM13.542 12l-2.792 1.675v-3.35z"></path>
                    <path d="M17.03 4.641a64.5 64.5 0 0 0-10.06 0l-2.241.176a2.975 2.975 0 0 0-2.703 2.475a28.6 28.6 0 0 0 0 9.416a2.975 2.975 0 0 0 2.703 2.475l2.24.176c3.349.262 6.713.262 10.062 0l2.24-.176a2.975 2.975 0 0 0 2.703-2.475c.52-3.117.52-6.299 0-9.416a2.975 2.975 0 0 0-2.703-2.475zM7.087 6.137a63 63 0 0 1 9.828 0l2.24.175c.676.053 1.229.56 1.34 1.228a27 27 0 0 1 0 8.92a1.475 1.475 0 0 1-1.34 1.228l-2.24.175a63 63 0 0 1-9.828 0l-2.24-.175a1.475 1.475 0 0 1-1.34-1.228a27 27 0 0 1 0-8.92a1.475 1.475 0 0 1 1.34-1.228z"></path>
                  </g>
                </svg>
              </Link>
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/followark/"
                target="_blank"
                className="hover:text-white transition-colors"
                style={{ color: "#D9D9D9" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                  />
                </svg>
              </Link>
              {/* Medium */}
              <Link
                href="https://medium.com/@FaithDrivenMarketplace"
                target="_blank"
                className="hover:text-white transition-colors"
                style={{ color: "#D9D9D9" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    d="M8.5 14.5v-8M11 10l5 7.88m0-.001L22.5 6.5M8.5 21l-7-3.5V3l7 3.5L11 10l4.5-7l7 3.5V21l-14-6.75z"
                    strokeWidth={1}
                  ></path>
                </svg>
              </Link>
              {/* Facebook */}
              <Link
                href="https://www.facebook.com/FaithDrivenMarketplace/"
                target="_blank"
                className="hover:text-white transition-colors"
                style={{ color: "#D9D9D9" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669c1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </Link>
              {/* Pinterest */}
              <Link
                href="https://www.pinterest.com/FaithDrivenMarketplace/"
                target="_blank"
                className="hover:text-white transition-colors"
                style={{ color: "#D9D9D9" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 50.141 50.141"
                >
                  <g>
                    <path d="M44.092,12.485c-0.76-2.567-1.98-4.728-3.732-6.606c-1.713-1.837-3.684-3.23-6.026-4.259   c-2.668-1.169-5.761-1.737-8.716-1.6c-1.078,0.049-2.131,0.106-3.163,0.255c-2.908,0.416-5.469,1.283-7.828,2.65   C11.616,4.673,9.265,7.049,7.64,9.989c-0.844,1.53-1.675,4.228-2.028,5.99c-0.418,2.078-0.05,5.681,0.789,7.713   c1.048,2.533,1.91,3.656,4.013,5.223c0.013,0.009,1.313,0.945,2.179,0.931c1.577-0.03,1.891-1.539,2.041-2.264   c0.028-0.137,0.056-0.272,0.089-0.399c0.029-0.112,0.067-0.232,0.106-0.357c0.223-0.72,0.526-1.706,0.023-2.58   c-0.189-0.328-0.413-0.583-0.61-0.807c-0.107-0.122-0.215-0.24-0.302-0.37c-0.748-1.111-1.127-2.501-1.127-4.131   c0-2.139,0.484-4.077,1.481-5.923c1.808-3.349,4.808-5.462,8.677-6.114c2.202-0.369,4.768-0.214,6.693,0.402   c1.759,0.564,3.256,1.561,4.33,2.886c1.137,1.402,1.787,3.18,1.931,5.286c0.094,1.344-0.028,2.698-0.129,3.597   c-0.389,3.461-1.396,6.247-2.994,8.282c-1.309,1.67-2.72,2.507-4.315,2.561c-1.027,0.04-1.795-0.17-2.489-0.667   c-0.655-0.467-1.045-1.043-1.229-1.81c-0.208-0.876,0.043-1.784,0.31-2.746l0.043-0.154c0.233-0.846,0.477-1.619,0.716-2.38   c0.376-1.199,0.766-2.438,1.087-3.876c0.363-1.623,0.411-2.934,0.148-4.005c-0.324-1.33-1.039-2.326-2.125-2.962   c-1.149-0.67-2.777-0.799-4.144-0.329c-2.037,0.695-3.591,2.545-4.264,5.075c-0.341,1.285-0.44,2.634-0.293,4.006   c0.113,1.076,0.354,2.054,0.799,3.235c-0.015,0.051-0.031,0.105-0.047,0.157c-0.032,0.105-0.061,0.207-0.083,0.294   c-0.479,2-0.945,3.972-1.41,5.94c-0.441,1.869-0.883,3.735-1.334,5.62l-0.102,0.422c-0.462,1.92-0.938,3.906-1.049,6.277   l-0.05,0.99c-0.098,1.842-0.197,3.747,0.05,5.509c0.049,0.344,0.157,1.115,0.916,1.384c0.227,0.17,0.445,0.242,0.657,0.242   c0.635,0,1.2-0.645,1.681-1.192c1.569-1.784,2.903-4.037,4.079-6.885c0.526-1.274,0.875-2.645,1.212-3.971l0.203-0.79   c0.246-0.944,0.487-1.901,0.726-2.848l0.016-0.063c0.443,0.388,0.955,0.738,1.548,1.063c1.255,0.695,2.671,1.1,4.207,1.203   c1.44,0.098,2.956-0.087,4.629-0.567c1.271-0.362,2.487-0.913,3.617-1.636c4.054-2.596,6.817-7.137,7.781-12.786   c0.289-1.688,0.412-3.045,0.412-4.537C44.703,15.41,44.498,13.846,44.092,12.485z M42.32,21.332   c-0.869,5.088-3.315,9.15-6.889,11.438c-0.966,0.619-2.005,1.088-3.09,1.398c-1.446,0.416-2.738,0.577-3.942,0.495   c-1.261-0.085-2.364-0.398-3.379-0.96c-1.015-0.555-1.673-1.158-2.135-1.955l-1.226-2.118l-1.105,4.337   c-0.237,0.941-0.477,1.893-0.722,2.832l-0.205,0.802c-0.335,1.315-0.65,2.558-1.123,3.7c-1.053,2.552-2.229,4.571-3.589,6.163   c-0.106-1.355-0.026-2.875,0.052-4.352l0.051-1.002c0.101-2.182,0.556-4.073,0.995-5.902l0.103-0.425   c0.451-1.886,0.893-3.755,1.335-5.625c0.465-1.967,0.93-3.937,1.408-5.932c0.014-0.056,0.034-0.122,0.055-0.191   c0.12-0.403,0.245-0.82,0.076-1.243c-0.429-1.099-0.655-1.976-0.756-2.932c-0.12-1.13-0.041-2.234,0.238-3.282   c0.498-1.873,1.583-3.22,2.979-3.696c0.346-0.119,0.708-0.169,1.056-0.169c0.567,0,1.093,0.136,1.431,0.333   c0.607,0.356,0.997,0.914,1.19,1.71c0.185,0.756,0.133,1.797-0.156,3.094c-0.304,1.355-0.663,2.5-1.044,3.713   c-0.246,0.782-0.495,1.576-0.735,2.446l-0.042,0.152c-0.308,1.109-0.656,2.366-0.328,3.744c0.298,1.248,0.956,2.22,2.011,2.974   c1.048,0.749,2.278,1.084,3.72,1.039c2.191-0.074,4.149-1.193,5.821-3.325c1.831-2.332,2.978-5.458,3.409-9.295   c0.108-0.978,0.241-2.452,0.137-3.957c-0.174-2.524-0.972-4.68-2.373-6.408c-1.319-1.627-3.143-2.848-5.273-3.531   c-2.211-0.709-5.137-0.891-7.635-0.471c-4.5,0.758-7.994,3.225-10.106,7.136c-1.158,2.146-1.721,4.394-1.721,6.873   c0,2.036,0.493,3.801,1.467,5.247c0.134,0.2,0.294,0.386,0.46,0.574c0.149,0.17,0.29,0.33,0.376,0.479   c0.061,0.163-0.113,0.727-0.197,0.998c-0.047,0.153-0.092,0.3-0.128,0.437c-0.042,0.16-0.078,0.331-0.114,0.503   c-0.039,0.188-0.099,0.479-0.162,0.639c-0.237-0.093-0.67-0.331-0.904-0.504c-1.797-1.338-2.456-2.199-3.358-4.382   c-0.677-1.641-1.013-4.888-0.677-6.556c0.375-1.869,1.174-4.248,1.818-5.417c1.447-2.619,3.546-4.739,6.239-6.301   c2.133-1.236,4.457-2.022,7.109-2.401c0.943-0.137,1.943-0.19,2.971-0.237c2.65-0.125,5.429,0.385,7.819,1.433   c2.088,0.917,3.844,2.157,5.367,3.792c1.536,1.646,2.607,3.546,3.277,5.81c0.351,1.177,0.528,2.55,0.528,4.078   C42.703,18.505,42.588,19.761,42.32,21.332z" />
                  </g>
                </svg>
              </Link>
              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/company/faithdrivenmarketplace/"
                target="_blank"
                className="hover:text-white transition-colors"
                style={{ color: "#D9D9D9" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.5 9h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5M7 21H4V10h3zM18 9c-1.085 0-2.14.358-3 1.019V9.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V16a1.5 1.5 0 1 1 3 0v5.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V14a5.006 5.006 0 0 0-5-5m4 12h-3v-5a2.5 2.5 0 1 0-5 0v5h-3V10h3v1.203a.5.5 0 0 0 .89.313A3.983 3.983 0 0 1 22 14zM5.868 2.002A3 3 0 0 0 5.515 2a2.74 2.74 0 0 0-2.926 2.729a2.71 2.71 0 0 0 2.869 2.728h.028a2.734 2.734 0 1 0 .382-5.455M5.833 6.46q-.173.016-.347-.003h-.028A1.736 1.736 0 1 1 5.515 3a1.737 1.737 0 0 1 .318 3.46"
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
