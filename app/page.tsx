"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import grid1 from "../assets/grid-img-1.svg";
import grid2 from "../assets/grid-img-2.svg";
import grid3 from "../assets/grid-img-3.svg";
import group from "../assets/14.png";
import questions from "../assets/ark-questions.png";
import argilosLogo from "../assets/carousel/argilos-logo.png";
import praiseBloomLogo from "../assets/carousel/praise-and-bloom-logo.png";
import argilos1 from "../assets/carousel/argilos-1.jpg";
import argilos2 from "../assets/carousel/argilos-2.jpg";
import greetingCard1 from "../assets/carousel/greeting-card-1a.jpg";
import greetingCard2 from "../assets/carousel/greeting-card-2a.jpg";
import giftBabbleLogo from "../assets/carousel/gift-babble-logo.png";
import giftBabbleProduct1 from "../assets/carousel/gift-babble-product-1.jpg";
import giftBabbleProduct2 from "../assets/carousel/gift-babble-product-2.jpg";
import holyLocustLogo from "../assets/carousel/holy-locust-logo.png";
import holyLocustProduct1 from "../assets/carousel/holy-locust-product-1.jpg";
import holyLocustProduct2 from "../assets/carousel/holy-locust-product-2.jpg";
import honeycombProverbsLogo from "../assets/carousel/honeycomb-proverbs-logo.png";
import honeycombProverbsProduct1 from "../assets/carousel/honeycomb-proverbs-product-1.jpg";
import honeycombProverbsProduct2 from "../assets/carousel/honeycomb-proverbs-product-2.jpg";
import madApparelLogo from "../assets/carousel/mad-apparel-logo.png";
import madApparelProductOne from "../assets/carousel/mad-apparel-product-1.jpg";
import madApparelProductTwo from "../assets/carousel/mad-apparel-product-2.jpg";
import templetonOliveOilLogo from "../assets/carousel/templeton-olive-oil-logo.png";
import templetonOliveOilProduct1 from "../assets/carousel/templeton-olive-oil-product-1.jpg";
import templetonOliveOilProduct2 from "../assets/carousel/templeton-olive-oil-product-2.jpg";
import tennesseePeanutLogo from "../assets/carousel/tennessee-peanut-company-logo.png";
import tennesseePeanutProduct1 from "../assets/carousel/tennessee-peanut-company-product-1.jpg";
import tennesseePeanutProduct2 from "../assets/carousel/tennessee-peanut-company-product-2.jpg";
import littleYellowHouseLogo from "../assets/carousel/the-little-yellow-house-logo.png";
import littleYellowHouseProduct1 from "../assets/carousel/the-little-yellow-house-product-1.jpg";
import littleYellowHouseProduct2 from "../assets/carousel/the-little-yellow-house-product-2.jpg";
import tholiOilLogo from "../assets/carousel/tholi-oil-logo.png";
import tholiOilProduct1 from "../assets/carousel/tholi-oil-product-1.jpg";
import tholiOilProduct2 from "../assets/carousel/tholi-oil-product-2.jpg";
import yeovanyLogo from "../assets/carousel/yeovany-logo-white.png";
import yeovanyProduct1 from "../assets/carousel/yeovany-product-1.jpg";
import yeovanyProduct2 from "../assets/carousel/yeovany-product-2.jpg";
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
        <div className="text-[#bcc0c5]  text-justify leading-snug tracking-tight mr-6">
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
      name: "Noelle H.",
      shop: `Honeycomb Proverbs`,
      location: "San Antonio, United States",
      quote:
        "I would love more info on how to register to become a seller. What a great platform!",
      avatar: honeycombProverbsLogo,
      images: [honeycombProverbsProduct1, honeycombProverbsProduct2],
    },
    {
      id: 2,
      name: "Dror T.",
      shop: `Holy Locust`,
      location: "Ma'anit, Israel",
      quote:
        "Holy Locust is the world's first Biblical snack, a restored Biblical tradition and intended to be consumed and to strengthen your body.",
      avatar: holyLocustLogo,
      images: [holyLocustProduct1, holyLocustProduct2],
    },
    {
      id: 3,
      name: "Destini A.",
      shop: `Yeovany`,
      location: "Tyler, United States",
      quote:
        "Adorned with Luke 12:40, this watch serves as a constant reminder to stay prepared and live with purpose. It's a statement of wisdom, faith, and style.",
      avatar: yeovanyLogo,
      images: [yeovanyProduct1, yeovanyProduct2],
    },
    {
      id: 4,
      name: "Heather P.",
      shop: `GiftBabble`,
      location: "Wisconsin, United States",
      quote:
        "As a Christian, I love to serve and share my faith and talents with people. I wanted a business that would make my family proud, which is what powered GiftBabble.",
      avatar: giftBabbleLogo,
      images: [giftBabbleProduct1, giftBabbleProduct2],
    },
    {
      id: 5,
      name: "Via S.",
      shop: `Templeton Olive Oil`,
      location: "Templeton, United States",
      quote:
        "We are the Rohde Family and have grown olives since 2008. There are seemingly endless and delicious benefits of freshly harvested Extra Virgin Olive Oil. We hope you enjoy!",
      avatar: templetonOliveOilLogo,
      images: [templetonOliveOilProduct1, templetonOliveOilProduct2],
    },
    {
      id: 6,
      name: "Krista B.",
      shop: `Tholi Oil`,
      location: "Omaha, United States",
      quote:
        "Our purpose is to consecrate and restore God’s people. Our blend of oil is God-breathed. Pure, high quality, and uses ingredients from Scripture.",
      avatar: tholiOilLogo,
      images: [tholiOilProduct1, tholiOilProduct2],
    },
    {
      id: 7,
      name: "Tami A.",
      shop: `MAD Apparel`,
      location: "London, United Kingdom",
      quote: `ARK Registered!!! Thank you I absolutely love this!! Will spread the word.👌🙏💯 `,
      avatar: madApparelLogo,
      images: [madApparelProductOne, madApparelProductTwo],
    },
    {
      id: 8,
      name: "Jay B.",
      shop: `Tennessee Peanut Company`,
      location: "Tennessee, United States",
      quote:
        "We believe God made them to remind us that something as little as a peanut can impact the world in such special ways, to His Glory!",
      avatar: tennesseePeanutLogo,
      images: [tennesseePeanutProduct1, tennesseePeanutProduct2],
    },
    {
      id: 9,
      name: "Danniell H.",
      shop: `The Little Yellow House`,
      location: "Vancouver, Canada",
      quote:
        "Welcome to our little corner of natural living where family, faith, and a love for clean, honest ingredients come together to create something truly meaningful.",
      avatar: littleYellowHouseLogo,
      images: [littleYellowHouseProduct1, littleYellowHouseProduct2],
    },
    {
      id: 10,
      name: "Clare O.",
      shop: `Praise & Bloom`,
      location: "Northwich, UK",
      quote:
        "How do we set up a store with you please? This is so exciting we cannot wait to get started!",
      avatar: praiseBloomLogo,
      images: [greetingCard1, greetingCard2],
    },
    // {
    //   id: 2,
    //   name: "Giannis M.",
    //   shop: `Argilos`,
    //   location: "Boston, United States",
    //   quote:
    //     "ARK has transformed our business! The support and platform are amazing for Christian entrepreneurs.",
    //   avatar: argilosLogo,
    //   images: [argilos1, argilos2],
    // },
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
    <div className="relative rounded-3xl  md:max-w-[66rem] mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-medium text-white mb-2">
          Visit Anointed Christian Stores & Retailers Worldwide
        </h2>
      </div>

      <div className=" rounded-2xl py-14 md:px-20 px-4  bg-[#202020] ">
        <div className="flex flex-wrap items-center justify-between border-b pb-2 border-[#bcc0c5]  mb-6">
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
              className="p-2 rounded-full border border-white/30 text-[#bcc0c5] hover:bg-white/10 transition-colors"
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
              className="p-2 rounded-full border border-white/30 text-[#bcc0c5] hover:bg-white/10 transition-colors"
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
                className="w-12 h-12 text-[#bcc0c5] mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
              <p className="text-[#bcc0c5] text-lg text-justify h-[7rem] leading-relaxed">
                {currentTestimonial.quote}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src={currentTestimonial.avatar}
                  alt={`${currentTestimonial.shop} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-medium">
                  {currentTestimonial.name}
                </p>
                <p className="text-[#bcc0c5] text-sm">
                  Shop{" "}
                  <a
                    href="www.church-gold.vercel.app"
                    target="_blank"
                    className="text-[#4de209]"
                  >
                    {currentTestimonial.shop}
                  </a>{" "}
                </p>
                <p className=" text-[0.9rem] text-[#bcc0c5] text-justify">
                  {currentTestimonial.location}
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="grid grid-cols-2 gap-x-5 ">
              {currentTestimonial.images.map((imageSrc, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden"
                >
                  <Image
                    src={imageSrc}
                    alt={`${currentTestimonial.shop} product ${index + 1}`}
                    className="w-full h-full  object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-[#bcc0c5] mt-8"></div>
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
        "As an ARK Seller you are paid monthly until you have established an ARK Seller Rating of 99%+ for a minimum of 90 consecutive days or 300 purchases, whichever comes first. After having established said ARK Seller Rating over 90 consecutive days, you will be paid every two weeks.\n\nSales Periods Are:\n1st through 15th\n16th through End of Month\n\nPay Periods Are:\n22nd of Every Month (for all total orders from the 1st through 15th)\n7th of Every Month (for all total orders from the 16th through End of Month)\n\nHow You Are Paid:\n1. ARK will pay sellers electronically through their bank account on Pay Periods (provided all items sold during previous Sales Period have reached ARK buyers successfully and/or there are no reports of poor quality, damaged items, potential fraud, etc).\n2. Funds are transferred from the buyer's payment method to ARK at time of purchase (shoppers choose their preferred payment from their ARK Wallet: debit card, credit card, ARK Gift Card or ARK Credit Balance, during initial ARK registration or during the check-out process of first ARK purchase).\n3. ARK then transfers total sales revenue from the previous Sales Period to the Seller's bank account, minus all ARK seller fees, on designated Pay Periods (if you use FBA, warehouse fees will be deducted as well).",
    },
    {
      question: "What kind of products can I sell on ARK?",
      answer:
        "ARK has four main channels of selling with thousands of sub-categories:\n• Christian\n• Mainstream\n• Food & Drink\n• Services\n\nARK does not allow sales of:\n• Anything that would deny that Jesus is The Christ.\n• Anything that promotes sin in any way, shape or form.\n• Anything that promotes Islam, Hamas, LGBTQ, Trans, Atheism, ANTIFA, BLM, etc.\n• Fake brands.\n• Sexual content.\n• Dangerous goods.\n• Drug paraphernalia.\n• Cigarettes and vaping.",
    },
    {
      question: "How does ARK fulfill shipping for me?",
      answer:
        "ARK sellers can choose 'Fulfillment by ARK' (FBA) for all their shipping needs.\n\nThrough our Velocity Membership, ARK handles:\n• Packaging\n• Labeling\n• Shipping\n• Tracking\n• One-click Returns\n\n**How do I get my products shipped for me?**\n\n• As an ARK seller you will be directed to send all your products to one or more of our warehouses and fulfillment centers in the US, Canada, UK, EU and other countries.\n• Once they arrive at our Fulfillment centers, ARK takes it from there and you are good to go!",
    },
    {
      question: "Is ID verification required of all sellers?",
      answer:
        "Yes. All sellers undergo our comprehensive verification process to ensure a God-honoring marketplace of integrity for Faith Driven Consumers. This includes submitting your passport or driver's license from your country or state/province of residence to ARK's verification partner. Turn-around time is usually 24 to 72 hours. While you're waiting for final verification approval to begin selling, you can begin uploading products and creating your listings. You'll be notified by email when you have been fully verified.",
    },
  ];

  return (
    <div>
      <div className="md:max-w-5xl md:mt-14 mt-6 mx-auto">
        <div className="flex justify-end items-end md:mr-0 mr-3 ">
          <div className=" gap-4 flex md:flex-row  flex-col-reverse items-center">
            <Link className=" md:text-[15px] font-bold text-sm" href="#">
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
                <p className=" text-[17px] mt-6 font-medium">
                  Reach 468M Faith Driven Consumers
                </p>
                <p className="text-[0.9rem] mt-1 leading-6 text-[#bcc0c5] text-justify">
                  Why do Faith Driven Entrepreneurs, startups, brands and
                  Fortune 500&apos;s want to sell on ARK? To reach a potential
                  468 Million FDC who are blessed with an annual purchasing
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
                <p className=" text-[17px] mt-6 font-medium">
                  Shipping Worldwide
                </p>

                <p className="text-[0.9rem] mt-1 leading-6 text-[#bcc0c5] text-justify">
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
                <p className=" text-[17px] mt-6 font-medium">
                  Keep More Profits
                </p>

                <p className="text-[0.9rem] mt-1 leading-6 text-[#bcc0c5] text-justify">
                  At ARK, our focus is to empower all Sellers in their retail
                  ministries to experience God&apos;s favor and prosperity
                  according to Deut 8:18 while respecting their bottom line. ARK
                  offers industry-leading lowest total retailer fees, Christian
                  categories and engagement tools to lead you into the fullness
                  of your destiny!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:mt-24 mt-20 ">
          <div className="text-center md:text-[40px] text-3xl  font-medium">
            <h1>Experience a Seamless Launch with ARK Genesis</h1>
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
                <p className=" text-[17px] mt-6 font-medium">
                  Register &amp; Begin Selling in 3... 2... 1...
                </p>
                <p className="text-[0.9rem] mt-1 leading-6 text-[#bcc0c5] text-justify">
                  ARK Genesis onboarding is designed to enable retailers to open
                  an account, get verified, and begin listing your products with
                  acceleration.
                </p>
              </div>
            </div>
            <div>
              <div className="md:px-3 px-4">
                <p className=" text-[17px] mt-6 font-medium">
                  God Wants to Bless &amp; Prosper You
                </p>
                <p className="text-[0.9rem] mt-1 leading-6 text-[#bcc0c5] text-justify">
                  We&apos;re going to educate you in the scriptures to the truth
                  that obedience will bring you favor in the marketplace and
                  lead you to a life of victory.
                </p>
              </div>
            </div>
            <div>
              <div className="md:px-2 px-4">
                <p className=" text-[17px] mt-6 font-medium">
                  Specialized Seller Support From ARK
                </p>
                <p className="text-[0.9rem] mt-1 leading-6 text-[#bcc0c5] text-justify">
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
            <p className=" text-center font-bold !text-base text-primary/90  leading-2">
              For Sellers
            </p>
          </div>

          <div className=" mt-10">
            <div className="text-center md:text-[40px] text-3xl font-medium mb-9">
              <h1 className="text-white">The Commanded Blessing is Upon You</h1>
            </div>

            {/* Comparison Table */}
            <div className="max-w-4xl mx-auto px-4">
              <div className="bg-background  overflow-hidden">
                {/* Header */}
                <div className="py-5 border-b-1 border-white">
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
                  <div className="py-5 border-b-1  border-white">
                    <div className="grid grid-cols-5 gap-4 items-center">
                      <div className="col-span-3 pr-8">
                        <h4 className="font-semibold text-white mb-2 text-[17px]">
                          ARKai Ads
                        </h4>
                        <p className="text-[0.9rem] text-[#bcc0c5] text-justify leading-relaxed">
                          ARKai Ads enpower Faith Driven retailers to reach
                          Christian shoppers with AI-driven campaigns boosting
                          visibility, engagement and sales using comprehensive
                          buyer data from your top selling products!
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
                  <div className="py-5 border-b-1 border-white">
                    <div className="grid grid-cols-5 gap-4 items-center">
                      <div className="col-span-3 pr-8">
                        <h4 className="font-semibold text-white mb-2 text-[17px]">
                          2-Day Shipping
                        </h4>
                        <p className="text-[0.9rem] text-[#bcc0c5] text-justify leading-relaxed">
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
                  <div className="py-5 border-b-1 border-white">
                    <div className="grid grid-cols-5 gap-4 items-center">
                      <div className="col-span-3 pr-8">
                        <h4 className="font-semibold text-white mb-2 text-[17px]">
                          iOS &amp; Android Apps
                        </h4>
                        <p className="text-[0.9rem] text-[#bcc0c5] text-justify leading-relaxed ">
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
                  <div className="py-5 border-b-1 border-white">
                    <div className="grid grid-cols-5 gap-4 items-center">
                      <div className="col-span-3 pr-8">
                        <h4 className="font-semibold text-white mb-2 text-[17px]">
                          Seller Engagement Tools
                        </h4>
                        <p className="text-[0.9rem] text-[#bcc0c5] text-justify leading-relaxed text-justify">
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
                  <div className="py-5 border-b-1 border-white">
                    <div className="grid grid-cols-5 gap-4 items-center">
                      <div className="col-span-3 pr-8">
                        <h4 className="font-semibold text-white mb-2 text-[17px]">
                          Social Media Promotions
                        </h4>
                        <p className="text-[0.9rem] text-[#bcc0c5] text-justify leading-relaxed text-justify">
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
      <div className=" bg-[#202020] md:px-0 px-4">
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
                <span className="text-white text-[15px] font-bold">
                  Ready to open your store?
                </span>
                <button
                  className=" flex items-center justify-center pl-2 pr-4 hover:text-[#4de209] text-primary rounded-md h-12 cursor-pointer tracking-wide  font-bold"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(18, 18, 18, 0.3) 0%, rgba(255, 255, 255, 0.12) 100%)",
                    backgroundColor: "#101010",
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
