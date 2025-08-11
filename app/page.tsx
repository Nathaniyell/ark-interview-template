"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import grid1 from "../assets/grid-img-1.svg";
import grid2 from "../assets/grid-img-2.svg";
import grid3 from "../assets/grid-img-3.svg";
import group from "../assets/group-svg.jpg";
import questions from "../assets/ark-questions.png";
import { Button } from "@/components/ui/button";

const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b border-white/20">
    <button
      onClick={onToggle}
      className="w-full py-5 text-left flex justify-between items-center text-white hover:text-gray-300 transition-colors"
    >
      <span className="text-lg font-medium text-white">{question}</span>
      <svg
        className={`w-6 h-6 transition-transform ${isOpen ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    {isOpen && (
      <div className="pb-6">
        <div className="text-[#bcc0c5] leading-snug tracking-tight">
          {answer.split("\n\n").map((section, index) => {
            const lines = section.split("\n");
            const sectionTitle = lines[0];
            const sectionContent = lines.slice(1);

            // Check if this is a section with a title (ends with colon)
            if (sectionTitle.endsWith(":")) {
              return (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold text-[#bcc0c5] mb-2">
                    {sectionTitle}
                  </h4>
                  {sectionContent.map((line, lineIndex) => {
                    // Check for numbered items (1., 2., 3., etc.)
                    const numberedMatch = line.match(/^(\d+)\.\s*(.*)$/);
                    if (numberedMatch) {
                      return (
                        <div
                          key={lineIndex}
                          className="ml-4 mb-2 flex items-start"
                        >
                          <span className="text-[#bcc0c5] mr-2 mt-0 font-medium min-w-[1.5rem]">
                            {numberedMatch[1]}.
                          </span>
                          <span className="flex-1">{numberedMatch[2]}</span>
                        </div>
                      );
                    } else if (
                      line.startsWith("•") ||
                      line.startsWith("$") ||
                      line.match(/^\d+%/) ||
                      line.startsWith("Warehouse") ||
                      line.match(/^\d+(st|nd|rd|th) through/) ||
                      line.match(/^\d+(st|nd|rd|th) of Every Month/)
                    ) {
                      return (
                        <div
                          key={lineIndex}
                          className="ml-4 mb-2 flex items-start"
                        >
                          <span className="text-[#bcc0c5] mr-2 mt-[3px] text-sm leading-none">
                            •
                          </span>
                          <span className="flex-1">
                            {line.replace(/^[•$]\s*/, "")}
                          </span>
                        </div>
                      );
                    } else if (line.trim()) {
                      return (
                        <p key={lineIndex} className="mb-2">
                          {line}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              );
            } else {
              // Regular paragraph content
              return (
                <div key={index} className="mb-4">
                  {lines.map((line, lineIndex) => {
                    // Check for numbered items (1., 2., 3., etc.)
                    const numberedMatch = line.match(/^(\d+)\.\s*(.*)$/);
                    if (numberedMatch) {
                      return (
                        <div
                          key={lineIndex}
                          className="ml-4 mb-2 flex items-start"
                        >
                          <span className="text-[#bcc0c5] mr-2 mt-0 font-medium min-w-[1.5rem]">
                            {numberedMatch[1]}.
                          </span>
                          <span className="flex-1">{numberedMatch[2]}</span>
                        </div>
                      );
                    } else if (
                      line.startsWith("•") ||
                      line.match(/^\d+%/) ||
                      line.startsWith("Warehouse") ||
                      line.match(/^\d+(st|nd|rd|th) through/) ||
                      line.match(/^\d+(st|nd|rd|th) of Every Month/)
                    ) {
                      return (
                        <div
                          key={lineIndex}
                          className="ml-4 mb-2 flex items-start"
                        >
                          <span className="text-[#bcc0c5] mr-2 mt-[3px] text-sm leading-none">
                            •
                          </span>
                          <span className="flex-1">
                            {line.replace(/^•\s*/, "")}
                          </span>
                        </div>
                      );
                    } else if (line.trim()) {
                      // Check if the line contains bold text with **text**
                      const boldRegex = /\*\*(.*?)\*\*/g;
                      if (boldRegex.test(line)) {
                        const parts = line.split(/(\*\*.*?\*\*)/g);
                        return (
                          <p key={lineIndex} className="mb-2">
                            {parts.map((part, partIndex) => {
                              if (
                                part.startsWith("**") &&
                                part.endsWith("**")
                              ) {
                                return (
                                  <strong key={partIndex} className="font-bold">
                                    {part.slice(2, -2)}
                                  </strong>
                                );
                              }
                              return part;
                            })}
                          </p>
                        );
                      } else {
                        return (
                          <p key={lineIndex} className="mb-2">
                            {line}
                          </p>
                        );
                      }
                    }
                    return null;
                  })}
                </div>
              );
            }
          })}
        </div>
      </div>
    )}
  </div>
);

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Clare O.",
      shop: `Praise & Bloom`,
      location: "Northwich, UK",
      quote:
        "How do we set up a store with you please? This is so exciting we cannot wait to get started!!",
      avatar: "CO",
      images: [
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=200&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      ],
    },
    {
      id: 2,
      name: "Sarah M.",
      shop: `Faith & Crafts`,
      location: "Austin, TX",
      quote:
        "ARK has transformed our business! The support and platform are amazing for Christian entrepreneurs.",
      avatar: "SM",
      images: [
        "https://images.unsplash.com/photo-1494790108755-2616b9138421?w=200&h=200&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <div className="relative rounded-3xl  md:max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-medium text-white mb-2">
          Visit Anointed ARK Stores Worldwide
        </h2>
      </div>

      <div className=" rounded-2xl py-14 md:px-20 px-4  bg-accent backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-between border-b-2 pb-2 border-white  mb-6">
          <div>
            <p className="text-[#bcc0c5] text-sm mb-2">
              Ekklesia Comments, Praises &amp; Testimonies
            </p>
            <h3 className="text-3xl font-semibold text-white">
              {currentTestimonial.shop}
            </h3>
          </div>

          <div className="flex items-center gap-4 md:my-0 my-5">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <span className="text-[#bcc0c5] text-sm">
              {String(currentSlide + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-7 gap-8 items-center">
          <div className="md:col-span-3">
            <div className="mb-6">
              <svg
                className="w-12 h-12 text-white/30 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
              <p className="text-white text-lg leading-relaxed">
                {currentTestimonial.quote}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center text-black font-semibold">
                {currentTestimonial.avatar}
              </div>
              <div>
                <p className="text-white font-medium">
                  {currentTestimonial.name}
                </p>
                <p className="text-[#bcc0c5] text-sm">
                  Shop{" "}
                  <span className="text-[#4de209]">
                    {currentTestimonial.shop}
                  </span>{" "}
                  - {currentTestimonial.location}
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="grid grid-cols-2 gap-x-5 ">
              {currentTestimonial.images.map((image, index) => (
                <div
                  key={index}
                  className="  aspect-square bg-gradient-to-br from-pink-200 to-purple-300 rounded-lg flex items-center justify-center text-gray-600 text-sm"
                >
                  Product {index + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-0.5 bg-white mt-8"></div>
      </div>
    </div>
  );
};

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: `What are ARK's seller fees?`,
      answer:
        "ARK Store Fees:\n$$30 Monthly Store Fee (Amazon and Shopify's $40 Monthly Store Fee is 25% More Expensive)\n\nARK Velocity Fees:\n$$104.25 Annual Velocity Membership Fee (Amazon's Prime $139 Annual Membership Fee is 33% More Expensive)\n$$139 for Monthly Velocity Membership Fee (Amazon's Prime $179.88 Monthly Membership Fee is 29% More Expensive)\n\nARK Transaction Fees:\n20% Transaction Fee on Total Order Price When Seller Ships (FBS)\n37% Transaction Fee on Total Order Price When ARK Ships (FBA)\n\nARK Shipping Fees (FBA):\nWarehouse rates vary from $0.78 – $4.28 per cubic foot depending on product size and time of year (peak vs. off-peak). Learn more here.",
    },
    {
      question: "When and how do I get paid as a seller?",
      answer:
        "As an ARK Seller you are paid monthly until you have established an ARK Seller Rating of 99%+ for a minimum of 90 consecutive days or 300 purchases, whichever comes first. After having established said ARK Seller Rating over 90 consecutive days, you will be paid every two weeks.\n\nSales Periods Are:\n1st through 15th\n16th through End of Month\n\nPay Periods Are:\n22nd of Every Month (for all total orders from the 1st through 15th)\n7th of Every Month (for all total orders from the 16th through End of Month)\n\nHow You Are Paid:\n1. ARK will pays sellers electronically through their bank account on Pay Periods (provided all items sold during previous Sales Period have reached ARK buyers successfully and/or there are no reports of poor quality, damaged items, potential fraud, etc).\n2. Funds are transferred from the customer's payment method to ARK at time of purchase (shoppers choose their preferred payment method: credit card, digital wallets, PayPal, etc during initial ARK registration or during the check-out process of first ARK purchase).\n3. ARK then transfers total sales revenue from the previous Sales Period to the Seller's bank account, minus all ARK seller fees, on designated Pay Periods (if you use FBA, warehouse fees will be deducted as well).",
    },
    {
      question: "What kind of products can I sell on ARK?",
      answer:
        "ARK has four main channels of selling with thousands of sub-categories:\n• Christian\n• Mainstream\n• Food & Drink\n• Services\n\nARK does not allow sales of:\n• Anything that would deny that Jesus is The Christ.\n• Anything that promotes sin in any way, shape or form.\n• Anything that promotes Islam, LGBTQ, Trans, Atheism, etc.\n• Fake brands.\n• Sexual content.\n• Dangerous goods.\n• Drug paraphernalia.\n• Cigarettes and vaping.",
    },
    {
      question: "How does ARK fulfill shipping for me?",
      answer:
        "ARK sellers can choose 'Fulfilled by ARK' (FBA) for all their shipping needs.\n\nThrough our Velocity Membership, ARK handles:\n• Packaging\n• Labeling\n• Shipping\n• Tracking\n• One-click Returns\n\n**How do I get my products shipped for me?**\n\n• As an ARK seller you will be directed to send all your products to one or more of our warehouses and fulfillment centers in the US, Canada, UK, EU and other countries.\n• Once they arrive at our fulfillment centers, ARK takes it from there and you are good to go!",
    },
    {
      question: "Is ID verification required of all sellers?",
      answer:
        "Yes. All sellers undergo our comprehensive verification process to ensure a God-honoring marketplace of integrity for Faith Driven Consumers. This includes submitting your passport from your country of residence to ARK's verification partner. Turn-around time is usually 24 to 72 hours. While you're waiting for final verification approval to begin selling, you can begin uploading products and creating your listings. You'll be notified by email when you have been fully verified.",
    },
  ];

  return (
    <div>
      <div className="md:max-w-5xl md:mt-14 mt-6 mx-auto">
        <div className="flex justify-end items-end md:mr-0 mr-3 ">
          <div className=" gap-4 flex md:flex-row  flex-col-reverse items-center">
            <Link className=" md:text-[14px] font-bold text-sm" href="#">
              {" "}
              Ready to open your store?
            </Link>
            <button
              className="bg-secondary flex items-center justify-center pl-2 pr-4 hover:text-[#4de209] text-primary rounded-md h-12 cursor-pointer tracking-wide  font-bold"
              style={{
                background:
                  "linear-gradient(0deg, rgba(18, 18, 18, 0.12) 0%, rgba(255, 255, 255, 0.12) 100%)",
                backgroundColor: "#202020",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.5 18.573a6.46 6.46 0 0 1-4.596-1.903C5.677 15.442 5 13.81 5 12.073s.677-3.369 1.904-4.597A.999.999 0 1 1 8.318 8.89C7.468 9.741 7 10.871 7 12.073s.468 2.333 1.318 3.183s1.979 1.317 3.182 1.317s2.332-.468 3.182-1.317c.851-.85 1.318-1.98 1.318-3.183s-.468-2.333-1.318-3.183a.999.999 0 1 1 1.414-1.414C17.323 8.705 18 10.337 18 12.073s-.677 3.369-1.904 4.597a6.46 6.46 0 0 1-4.596 1.903m0-7.573a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1"
                ></path>
              </svg>
              <span className="-ml-[2px]">ARK Retailer Setup</span>
            </button>
          </div>
        </div>
        <div className="md:mt-24 mt-20 ">
          <div className="text-center md:text-[40px] text-4xl  font-google-medium">
            <h1>ARK Provides Reach, Shipping &amp; Profits</h1>
          </div>

          <div className=" grid md:grid-cols-3 gap-x-4 md:gap-y-0 gap-y-6 mt-10">
            <div>
              <div className="mx-4 md:mx-0 ">
                <Image
                  src={grid1}
                  alt="Reach 468 Million Faith Driven Consumers"
                  className="w-full md:rounded-none rounded-3xl"
                />
              </div>
              <div className="md:px-3 px-4">
                <p className=" text-sm mt-6 font-medium">
                  Reach 468 Million Faith Driven Consumers
                </p>
                <p className="text-sm mt-1 leading-6 text-[#bcc0c5]">
                  Why do Faith Driven Entrepreneurs, startups, brands and
                  Fortune 500&apos;s want to sell on ARK? To reach a potential
                  468 million FDC who are blessed with an annual purchasing
                  power of US$10 trillion in the global marketplace, plus an
                  additional 2.132 billion Christian shoppers in the US, EU and
                  worldwide!
                </p>
              </div>
            </div>

            <div>
              <div className="mx-4 md:mx-0 ">
                <Image
                  src={grid2}
                  alt="Shipping Worldwide"
                  className="w-full md:rounded-none rounded-3xl"
                />
              </div>

              <div className="md:px-3 px-4">
                <p className=" text-sm mt-6 font-medium">Shipping Worldwide</p>

                <p className="text-sm mt-1 leading-6 text-[#bcc0c5] text-justify">
                  As a valued Faith Driven Retailer you&apos;ve got two options
                  for fulfillment. Fulfillment by ARK which includes packaging,
                  labeling, shipping, tracking packages, delivery confirmation,
                  and 1-click returns, or, you can choose to package and ship
                  your products and save with lower transaction fees. It&apos;s
                  up to you!
                </p>
              </div>
            </div>
            <div>
              <div className="mx-4 md:mx-0 ">
                <Image
                  src={grid3}
                  alt="Keep More Profits"
                  className="w-full md:rounded-none rounded-3xl"
                />
              </div>
              <div className="md:px-3 px-4">
                <p className=" text-sm mt-6 font-medium">Keep More Profits</p>

                <p className="text-sm mt-1 leading-6 text-[#bcc0c5] text-left">
                  At ARK, our focus is to empower all Sellers in their retail
                  ministries to experience God&apos;s favor and prosperity
                  according to Deut 8:18 while respecting their bottom line. We
                  offer industry-best store and transaction fees, Christian
                  categories and engagement tools to lead you into the fullness
                  of your destiny!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:mt-24 mt-20 ">
          <div className="text-center md:text-[40px] text-3xl  font-medium">
            <h1>Get Started Seamlessly with ARK Setup</h1>
          </div>

          <div className="mt-16">
            <Image
              src={group}
              alt="Get Started Seamlessly with ARK Setup"
              className="w-full "
            />
          </div>

          <div className=" grid md:grid-cols-3 gap-x-4 md:gap-y-0 gap-y-6 mt-10">
            <div>
              <div className="md:px-3 px-4">
                <p className=" text-sm mt-6 font-medium">
                  Register &amp; Begin Selling in 3... 2... 1...
                </p>
                <p className="text-sm mt-1 leading-6 text-[#bcc0c5]">
                  Retailers can open an account, get verified efficiently
                  through our registeration process and begin listing your
                  products immediately.
                </p>
              </div>
            </div>
            <div>
              <div className="md:px-3 px-4">
                <p className=" text-sm mt-6 font-medium">
                  God Wants to Bless &amp; Prosper You
                </p>
                <p className="text-sm mt-1 leading-6 text-[#bcc0c5]">
                  We&apos;re going to educate you in the scriptures to the truth
                  that obedience will bring you favor in the marketplace and
                  lead you to a life of victory.
                </p>
              </div>
            </div>
            <div>
              <div className="md:px-2 px-4">
                <p className=" text-sm mt-6 font-medium">
                  Specialized Seller Support From ARK
                </p>
                <p className="text-sm mt-1 leading-6 text-[#bcc0c5]">
                  New and current Faith Driven Retailers &amp; Sellers can
                  access our Ekklesia support who can help with account issues,
                  questions, billing and more.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:mt-24 mt-20 ">
          <div className="text-center md:text-[40px] text-3xl font-google-bold">
            <h1>
              <span className="text-[#4de303]">ark</span>convenant
            </h1>
            <p className=" text-center !text-base text-primary/90  leading-5">
              for sellers
            </p>
          </div>

          <div className=" mt-10">
            <div className="text-center md:text-[40px] text-3xl font-medium mb-16">
              <h1 className="text-white">ARK It with Commanded Blessings</h1>
            </div>

            {/* Comparison Table */}
            <div className="max-w-4xl mx-auto px-4">
              <div className="bg-background rounded-lg overflow-hidden">
                {/* Header */}
                <div className="py-5 border-b-2 border-white">
                  <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-3"></div>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-white">ARK</h3>
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-white">
                        Competitors
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  {/* Shopper Identity Verification */}
                  <div className="py-5 border-b-2 border-white">
                    <div className="grid grid-cols-5 gap-4 items-center">
                      <div className="col-span-3 pr-8">
                        <h4 className="font-semibold text-white mb-2 text-lg">
                          ARKai Ad Spends
                        </h4>
                        <p className="text-sm text-[#bcc0c5] leading-relaxed">
                          ARKai Ads enpower Faith Driven retailers to reach
                          Christian shoppers <br /> with AI-driven campaigns
                          boosting visibility, engagement and sales using
                          comprehensive buyer data from your top selling
                          products!
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-4 h-4 bg-[#4de209] rounded-full"></div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-4 h-4 bg-[#cc0000] rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* 2-Day Shipping */}
                  <div className="py-5 border-b-2 border-white">
                    <div className="grid grid-cols-5 gap-4 items-center">
                      <div className="col-span-3 pr-8">
                        <h4 className="font-semibold text-white mb-2 text-lg">
                          2-Day Shipping
                        </h4>
                        <p className="text-sm text-[#bcc0c5] leading-relaxed">
                          ARK offers two-day shipping fulfillment for all our
                          Faith Driven Retailers and Sellers via our Velocity®
                          Membership. Post-sale we package, print label, pay
                          postage and ship out for you!
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-4 h-4 bg-[#4de209] rounded-full"></div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-4 h-4 bg-[#cc0000] rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* iOS & Android Apps */}
                  <div className="py-5 border-b-2 border-white">
                    <div className="grid grid-cols-5 gap-4 items-center">
                      <div className="col-span-3 pr-8">
                        <h4 className="font-semibold text-white mb-2 text-lg">
                          iOS &amp; Android Apps
                        </h4>
                        <p className="text-sm text-[#bcc0c5] leading-relaxed">
                          ARK offers our Faith Driven Consumers mobility with
                          our iOS &amp; Android apps for shopping on the go. You
                          can browse and order products, receive shipping
                          notifications &amp; more!
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-4 h-4 bg-[#4de209] rounded-full"></div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-4 h-4 bg-[#cc0000] rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Seller Engagement Tools */}
                  <div className="py-5 border-b-2 border-white">
                    <div className="grid grid-cols-5 gap-4 items-center">
                      <div className="col-span-3 pr-8">
                        <h4 className="font-semibold text-white mb-2 text-lg">
                          Seller Engagement Tools
                        </h4>
                        <p className="text-sm text-[#bcc0c5] leading-relaxed">
                          ARK offers our Faith Driven Retailers the ability to
                          engage with faith driven consumers and Christian
                          shoppers worldwide via discounts, coupons offers, and
                          RSS feeds to accelerate sales!
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-4 h-4 bg-[#4de209] rounded-full"></div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-4 h-4 bg-[#cc0000] rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Promotions */}
                  <div className="py-5 border-b-2 border-white">
                    <div className="grid grid-cols-5 gap-4 items-center">
                      <div className="col-span-3 pr-8">
                        <h4 className="font-semibold text-white mb-2 text-lg">
                          Social Media Promotions
                        </h4>
                        <p className="text-sm text-[#bcc0c5] leading-relaxed">
                          ARK offers our Faith Driven Retailers greater viral
                          reach through social media as a portion of your
                          listings are promoted on ARK&apos;s &amp; our partners
                          social profiles to Christian shoppers worldwide!
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-4 h-4 bg-[#4de209] rounded-full"></div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-4 h-4 bg-[#cc0000] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* New Section with Content and FAQ */}
      <div className=" bg-secondary md:px-0 px-4">
        <div className="md:mt-24 mt-20 md:max-w-[68rem] mx-auto py-20">
          <div className="grid md:grid-cols-7 md:gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8 col-span-3">
              <div>
                <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                  Christian shopping just got a huge upgrade. 🥳
                </h2>
                <p className="text-[#bcc0c5] leading-relaxed text-base text-justify">
                  ARK&apos;s consumer-focused engagement platform and mobile
                  apps offer strategic retail and product placement
                  opportunities providing Faith Driven Consumers with unique
                  Christian products, gifts &amp; content. ARK offers ARKcoupons
                  and blessed savings from anointed sellers in an accelerating
                  and emerging US$15 billion dollar global Christian retail
                  market.
                </p>
              </div>

              <div className="flex  items-center gap-4">
                <span className="text-white text-[14px] font-bold">
                  Ready to open your store?
                </span>
                <button
                  className="bg-secondary flex items-center justify-center pl-2 pr-4 hover:text-[#4de209] text-primary rounded-md h-12 cursor-pointer tracking-wide  font-bold"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(18, 18, 18, 0.3) 0%, rgba(255, 255, 255, 0.12) 100%)",
                    backgroundColor: "#121212",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M11.5 18.573a6.46 6.46 0 0 1-4.596-1.903C5.677 15.442 5 13.81 5 12.073s.677-3.369 1.904-4.597A.999.999 0 1 1 8.318 8.89C7.468 9.741 7 10.871 7 12.073s.468 2.333 1.318 3.183s1.979 1.317 3.182 1.317s2.332-.468 3.182-1.317c.851-.85 1.318-1.98 1.318-3.183s-.468-2.333-1.318-3.183a.999.999 0 1 1 1.414-1.414C17.323 8.705 18 10.337 18 12.073s-.677 3.369-1.904 4.597a6.46 6.46 0 0 1-4.596 1.903m0-7.573a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1"
                    ></path>
                  </svg>
                  <span className="-ml-[2px]">ARK Retailer Setup</span>
                </button>
                {/* <button
                  className="bg-background flex items-center justify-center text-primary hover:bg-secondary/80 h-11 cursor-pointer tracking-wide gap-1 rounded-md font-bold"
                  style={{
             
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M11.5 18.573a6.46 6.46 0 0 1-4.596-1.903C5.677 15.442 5 13.81 5 12.073s.677-3.369 1.904-4.597A.999.999 0 1 1 8.318 8.89C7.468 9.741 7 10.871 7 12.073s.468 2.333 1.318 3.183s1.979 1.317 3.182 1.317s2.332-.468 3.182-1.317c.851-.85 1.318-1.98 1.318-3.183s-.468-2.333-1.318-3.183a.999.999 0 1 1 1.414-1.414C17.323 8.705 18 10.337 18 12.073s-.677 3.369-1.904 4.597a6.46 6.46 0 0 1-4.596 1.903m0-7.573a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1"
                    ></path>
                  </svg>
                  ARK Retailer Setup
                </button> */}
              </div>
            </div>

            {/* Right FAQ Section */}
            <div className="space-y-8 col-span-4">
              <div className="space-y-2 mt-[-1rem]">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFAQ === index}
                    onToggle={() =>
                      setOpenFAQ(openFAQ === index ? null : index)
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 relative flex items-center justify-center ">
            <Image src={questions} alt="Still have questions?" />
            <Button className="mt-20 ml-[12%] absolute bg-transparent border-1  hover:bg-transparent rounded-[8px] border-white text-white hover:text-[#4DE209] hover:border-[#4DE209]">
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>

      {/* Testimonial Carousel Section */}
      <div className="py-16 ">
        <TestimonialCarousel />
      </div>
    </div>
  );
}
