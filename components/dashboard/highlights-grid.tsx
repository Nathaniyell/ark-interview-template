import { Bell, CreditCard, Send, Pencil, Ticket, RefreshCcw, Handshake } from "lucide-react";

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
    image:
      "/dashboard-assets/god-is-good-journal.png",
    logo: "GB",
  },
  {
    id: "beef-tallow",
    title: "Beef Tallow Lip Balm",
    shop: "The Little Yellow House",
    location: "Vancouver, Canada",
    image:
      "/dashboard-assets/the-little-yellow-house.png",
    logo: "LY",
  },
  {
    id: "energy-bars",
    title: "Biblical Energy Bars",
    shop: "Holy Locust",
    location: "Ma'anit, Israel",
    image:
      "/dashboard-assets/the-holy-locust-snackbar.png",
    logo: "HL",
  },
];

const news = {
  platform: "ARK",
  handle: "@ARKmarketplace",
  message:
    "Join ARK for a Night of Hope, Education & Encouragement in Jesus at FAITHx Vancouver 2026! Connect with @ARKmarketplace this December 19, 2026 in Vancouver and enjoy music worship, moving media pieces & anointed speakers who will give inspirational FAITHx Talks! Info on where to purchase tickets online coming soon!",
  image: "/dashboard-assets/faithx-vancouver.png",
};


export const HighlightsGrid = () => {
  return (
    <div className="grid gap-4 lg:gap-[40px] grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)_minmax(0,1fr)]">
      <div className="flex flex-col gap-[24px] text-white">
        <h3 className="text-lg font-semibold bg-[#272829] h-[68px] text-center grid place-items-center rounded-[15px]">Reminders &amp; Actions Needed</h3>
        <div className="rounded-[15px] border-2 border-[#272829] bg-transparent overflow-hidden">
          {reminders.map((item) => (
            <div
              key={item.id}
              className="flex items-center px- border-b-2 border-[#272829] last:border-b-0"
            >
              <div className="flex items-center gap-4 px-4 border-r-2 border-[#272829] h-[81px]">
                <div className="w-12 h-12 flex items-center justify-center">
                  <item.icon size={24} className="text-white/70" />
                </div>
              </div>
              <div className="hover:bg-[#272829] flex items-center gap-2 h-[81px] px-2 w-full">

                <span className="w-5 h-5 rounded-full bg-[#4de209] border text-black font-bold text-[12px] grid place-items-center">
                  {item.count}
                </span>
              <p className="text-sm text-white/70 flex-1 ">{item.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-[24px] text-white">
        <h3 className="text-lg font-semibold bg-[#272829] h-[68px] text-center grid place-items-center rounded-[15px]">ARK Products &amp; Stores Spotlight</h3>
        <div className="bg-transparent overflow-hidden flex flex-col gap-[45px]">
          {spotlights.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row md:items-center gap-4 rounded-[15px] border-2 border-[#272829] h-[164px]"
            >
              <div
                className="relative w-full md:w-40 h-32 md:h-24 rounded-l-[15px] overflow-hidden flex-shrink-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="flex-1 flex flex-col">
                <h4 className="text-base font-semibold">{item.title}</h4>
                <p className="text-sm">Shop <span className="text-[#4de209]">{item.shop}</span> </p>
                <span className="text-xs text-white/60">{item.location}</span>
              </div>
              <div className="pr-6">

              <div className="w-16 h-16 rounded-full border border-[#272829] bg-[#272829] flex items-center justify-center text-lg font-semibold text-white/70 flex-shrink-0">
                {item.logo}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-[24px] text-white">
        <h3 className="text-lg font-semibold bg-[#272829] h-[68px] text-center grid place-items-center rounded-[15px]">ARK News &amp; Events</h3>
        <div className="rounded-[15px] border-2 border-[#272829] bg-transparent overflow-hidden px-6 py-10 flex flex-col gap-4 h-[575px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#272829] border border-[#272829] grid place-items-center text-lg font-semibold">
                {news.platform}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold leading-tight">{news.platform}</span>
                <span className="text-sm text-[#4de209]">{news.handle}</span>
              </div>
            </div>
            <button className="text-white/50 leading-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 14 14"><g fill="none"><g clip-path="url(#SVGG1Ot4cAD)"><path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"/></g><defs><clipPath id="SVGG1Ot4cAD"><path fill="#fff" d="M0 0h14v14H0z"/></clipPath></defs></g></svg></button>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">{news.message}</p>
          <div
            className="relative w-full h-52 rounded-[16px] overflow-hidden border border-[#272829] bg-cover bg-center"
            style={{ backgroundImage: `url(${news.image})` }}
          >
            <span className="sr-only">FAITHx Vancouver 2026 stage</span>
          </div>
        </div>
      </div>
    </div>
  );
};

