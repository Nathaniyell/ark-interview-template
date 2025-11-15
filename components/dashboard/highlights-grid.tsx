import Image from "next/image";
import {
  Bell,
  CreditCard,
  Send,
  Pencil,
  Ticket,
  RefreshCcw,
  Handshake,
} from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/app/logo.svg";

const reminders = [
  {
    id: "messages",
    icon: Bell,
    count: 12,
    message: "new messages are waiting to be read.",
  },
  {
    id: "shopping-bag",
    icon: CreditCard,
    count: 4,
    message: "items in your shopping bag need to be purchased.",
  },
  {
    id: "ship-item",
    icon: Send,
    count: 1,
    message: "item you sold needs to be shipped immediately.",
  },
  {
    id: "reviews",
    icon: Pencil,
    count: 7,
    message: "items you purchased need your rating & review.",
  },
  {
    id: "coupons",
    icon: Ticket,
    count: 3,
    message: "new ARKcoupons have been sent to you. Save big!",
  },
  {
    id: "ads",
    icon: RefreshCcw,
    count: 0,
    message: "ads you published need to be relisted.",
  },
  {
    id: "issues",
    icon: Handshake,
    count: 0,
    message: "issues need to be graciously resolved in Christ.",
  },
];

const spotlights = [
  {
    id: "leather-journal",
    title: "God is Good Leather Journal",
    shop: "GiftBabble",
    location: "Wisconsin, United States",
    image: "/dashboard-assets/god-is-good-journal.png",
    logo: "/dashboard-assets/gift-babble-logo.png",
  },
  {
    id: "beef-tallow",
    title: "Beef Tallow Lip Balm",
    shop: "The Little Yellow House",
    location: "Vancouver, Canada",
    image: "/dashboard-assets/the-little-yellow-house.png",
    logo: "/dashboard-assets/the-little-yellow-house-logo.png",
  },
  {
    id: "energy-bars",
    title: "Biblical Energy Bars",
    shop: "Holy Locust",
    location: "Ma'anit, Israel",
    image: "/dashboard-assets/the-holy-locust-snackbar.png",
    logo: "/dashboard-assets/holy-locust-logo.png",
  },
];

const news = {
  platform: "ARK",
  handle: "@ARKmarketplace",
  message:[
    "Join ARK for a Night of Hope, Education & Encouragement in Jesus at FAITHx Vancouver 2026!", 
    "Connect with <span style='color: #4de209'>@ARKmarketplace</span> this December 19, 2026 in Vancouver and enjoy music worship, moving media pieces & anointed speakers who will give inspirational FAITHx Talks!",
    "Info on where to purchase tickets online coming soon!",
  ],

  image: "/dashboard-assets/faithx-vancouver.png",
};

const brands = [
  "UPS", "FedEx", "ShipStation", "USPS", "DHL", "C A N A D A P O S T"
]

export const HighlightsGrid = () => {
  return (
    <>
      <div className="grid gap-4 lg:gap-[40px] grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-[24px] text-white">
          <h3 className="text-lg font-semibold bg-[#272829] h-[68px] text-center grid place-items-center rounded-[15px]">
            Reminders &amp; Actions Needed
          </h3>
          <div className="rounded-[15px] border-[#bfbfbf]/25 border bg-transparent overflow-hidden">
            {reminders.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center px- border-[#bfbfbf]/25 border last:border-b-0"
              >
                <div className="flex items-center gap-4 px-4 border-[#bfbfbf]/25 border-r h-[81px]">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <item.icon size={24} className="text-white/70" />
                  </div>
                </div>
                <div className="hover:bg-[#272829] flex items-center gap-2 h-[81px] px-2 w-full">
                  <span
                    className={cn(
                      "w-5 h-5 rounded-full border font-bold text-[12px] grid place-items-center",
                      index >= reminders.length - 2
                        ? "bg-white text-black border-white"
                        : "bg-[#4de209] text-black border-[#4de209]"
                    )}
                  >
                    {item.count}
                  </span>
                  <p className="text-sm text-white/70 flex-1 ">
                    {item.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[24px] text-white">
          <h3 className="text-lg font-semibold bg-[#272829] h-[68px] text-center grid place-items-center rounded-[15px]">
            ARK Products &amp; Stores Spotlight
          </h3>
          <div className="bg-transparent overflow-hidden flex flex-col gap-[38px]">
            {spotlights.map((item) => (
              <div
                key={item.id}
                className="rounded-[15px] border-[#bfbfbf]/25 border overflow-hidden w-full"
              >
                <div className="flex flex-col md:grid md:grid-cols-[minmax(0,200px)_1fr_auto] md:items-center gap-4 md:gap-6 h-full">
                  <div className="relative w-full h-40 md:h-full md:min-h-[164px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 220px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2 px-5 md:px-0 min-w-0">
                    <h4 className="text-base font-semibold truncate md:whitespace-normal">
                      {item.title}
                    </h4>
                    <p className="text-sm">
                      Shop <span className="text-[#4de209]">{item.shop}</span>{" "}
                    </p>
                    <span className="text-xs text-white/60">{item.location}</span>
                  </div>
                  <div className="flex justify-center md:justify-end pr-5 md:pr-6">
                    <div className="relative w-[90px] h-[90px] rounded-full border-[#bfbfbf]/25 border bg-[#272829] overflow-hidden flex-shrink-0">
                      <Image
                        src={item.logo}
                        alt={`${item.shop} logo`}
                        fill
                        sizes="90px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[24px] text-white">
          <h3 className="text-lg font-semibold bg-[#272829] h-[68px] text-center grid place-items-center rounded-[15px]">
            ARK News &amp; Events
          </h3>
          <div className="rounded-[15px] border-[#bfbfbf]/25 border bg-transparent overflow-hidden px-6 py-10 flex flex-col gap-6 h-[575px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-[56px] h-[56px] rounded-full bg-black grid place-items-center text-lg font-semibold">
              <Image src={logo} alt="ARK Logo" className="h-[30px]" />                 
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold leading-tight">
                    {news.platform}
                  </span>
                  <span className="text-sm text-[#4de209]">{news.handle}</span>
                </div>
              </div>
              <button className="text-white/50 leading-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="24"
                  viewBox="0 0 14 14"
                >
                  <g fill="none">
                    <g clipPath="url(#SVGG1Ot4cAD)">
                      <path
                        fill="currentColor"
                        d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                      />
                    </g>
                    <defs>
                      <clipPath id="SVGG1Ot4cAD">
                        <path fill="#fff" d="M0 0h14v14H0z" />
                      </clipPath>
                    </defs>
                  </g>
                </svg>
              </button>
            </div>
            <ul className="text-sm text-white/70 leading-relaxed flex flex-col gap-8">
              {news.message.map((message, index) => (
                <li
                  key={index}
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              ))}
            </ul>
            <div
              className="relative w-full h-72 rounded-[16px] overflow-hidden border-[#bfbfbf]/25 border bg-cover bg-center"
              style={{ backgroundImage: `url(${news.image})` }}
            >
              <span className="sr-only">FAITHx Vancouver 2026 stage</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <p className=" text-[#4de209] text-sm text-center">Advertisment</p>
        <p className="bg-[#272829] rounded-[15px] h-[68px] text-center font-bold grid place-items-center">
          Ship on your own or choose FBA. Visit our fullfilment center and get
          your shipping game on seamlessly!
        </p>
        <div className="border-[#bfbfbf]/25 border rounded-[15px] lg:h-[82px] p-4 sm:p-0 flex flex-col sm:flex-row sm:items-center justify-center gap-[80px] bg-transparent overflow-x-scroll">
          {brands.map((brand, index) => (
            <h4 className="font-black text-3xl text-[#b0b3b8]" key={index}>
              {brand}
            </h4>
          ))}
        </div>
      </div>
    </>
  );
};
