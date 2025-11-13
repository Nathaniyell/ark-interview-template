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
  image: "/images/news/faithx-stage.jpg",
};

const placeholderImage =
  "https://images.unsplash.com/photo-1526289035000-8afb0c7b7e0a?auto=format&fit=crop&w=600&q=80";

export const HighlightsGrid = () => {
  return (
    <div className="grid gap-4 lg:gap-[40px] grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_minmax(0,1fr)]">
      <div className="rounded-[15px] border-2 border-[#272829] bg-transparent text-white overflow-hidden">
        <div className="bg-[#3a3b3d] px-6 py-4">
          <h3 className="text-lg font-semibold">Reminders &amp; Actions Needed</h3>
        </div>
        <div className="divide-y divide-[#272829]">
          {reminders.map((item) => (
            <div key={item.id} className="flex items-center gap-4 px-6 py-4">
              <div className="w-12 h-12 rounded-[12px] bg-[#272829] border border-[#272829] flex items-center justify-center">
                <item.icon size={24} className="text-white/70" />
              </div>
              <span className="w-8 h-8 rounded-full bg-[#272829] border border-[#4de209]/40 text-[#4de209] font-bold text-sm grid place-items-center">
                {item.count}
              </span>
              <p className="text-sm text-white/70 flex-1">{item.message}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[15px] border-2 border-[#272829] bg-transparent text-white overflow-hidden">
        <div className="bg-[#3a3b3d] px-6 py-4">
          <h3 className="text-lg font-semibold">ARK Products &amp; Stores Spotlight</h3>
        </div>
        <div className="flex flex-col gap-[40px] px-6 py-6">
          {spotlights.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row md:items-center gap-4 rounded-[15px] border-2 border-[#272829]"
            >
              <div
                className="relative w-full md:w-40 h-32 md:h-24 rounded-[12px] overflow-hidden flex-shrink-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image || placeholderImage})` }}
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

      <div className="rounded-[15px] border-2 border-[#272829] bg-transparent text-white overflow-hidden">
        <div className="bg-[#3a3b3d] px-6 py-4">
          <h3 className="text-lg font-semibold">ARK News &amp; Events</h3>
        </div>
        <div className="px-6 py-6 flex flex-col gap-4">
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
            <button className="text-white/50 text-xl leading-none">×</button>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">{news.message}</p>
          <div
            className="relative w-full h-52 rounded-[16px] overflow-hidden border border-[#272829] bg-cover bg-center"
            style={{ backgroundImage: `url(${news.image || placeholderImage})` }}
          >
            <span className="sr-only">FAITHx Vancouver 2026 stage</span>
          </div>
        </div>
      </div>
    </div>
  );
};

