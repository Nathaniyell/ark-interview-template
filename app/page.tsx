"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import grid1 from "../assets/grid-img-1.svg";
import grid2 from "../assets/grid-img-2.svg";
import grid3 from "../assets/grid-img-3.svg";
import group from "../assets/group-svg.svg";
import questions from "../assets/questions.svg";

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
      className="w-full py-6 text-left flex justify-between items-center text-white hover:text-gray-300 transition-colors"
    >
      <span className="text-lg font-medium">{question}</span>
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
        <p className="text-muted-foreground leading-relaxed">{answer}</p>
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
      shop: "Praise & Bloom",
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
      shop: "Faith & Crafts",
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
            <p className="text-muted-foreground text-sm mb-2">
              Ekklesia Comments, Praises & Testimonies
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

            <span className="text-muted-foreground text-sm">
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
                <p className="text-muted-foreground text-sm">
                  Shop{" "}
                  <span className="text-green-400">
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
      question: "What are ARK&apos;s seller fees?",
      answer:
        "ARK offers competitive seller fees designed to maximize your profits while providing excellent service. Contact us for detailed pricing information.",
    },
    {
      question: "When and how do I get paid as a seller?",
      answer:
        "Sellers receive payments on a regular schedule after successful transactions. We offer multiple payment methods for your convenience.",
    },
    {
      question: "What kind of products can I sell on ARK?",
      answer:
        "ARK welcomes faith-driven products including books, apparel, home goods, gifts, and other Christian-focused merchandise that align with our values.",
    },
    {
      question: "How does ARK fulfill shipping for me?",
      answer:
        "Through our Velocity® Membership, we handle packaging, labeling, shipping, and tracking. You can also choose to fulfill orders yourself for lower fees.",
    },
    {
      question: "Is ID verification required of all sellers?",
      answer:
        "Yes, all sellers undergo our comprehensive verification process to ensure a trusted marketplace for Faith Driven Consumers.",
    },
  ];

  return (
    <div>
      <div className="md:max-w-5xl md:mt-16 mt-6 mx-auto">
        <div className="flex justify-end items-end md:mr-0 mr-3 ">
          <div className=" gap-4 flex md:flex-row  flex-col-reverse items-center">
            <Link className=" md:text-base text-sm" href="#">
              {" "}
              Ready to open your store?
            </Link>
            <Button className=" bg-secondary text-primary  hover:bg-secondary/80 h-11 px-3 cursor-pointer  tracking-wide gap-3">
              <svg
                width="25"
                height="27"
                viewBox="0 0 25 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="25" height="27" fill="url(#pattern0_1_188)" />
                <defs>
                  <pattern
                    id="pattern0_1_188"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_1_188"
                      transform="scale(0.04 0.037037)"
                    />
                  </pattern>
                  <image
                    id="image0_1_188"
                    width="25"
                    height="27"
                    preserveAspectRatio="none"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAbCAMAAAC+/9RaAAAAAXNSR0IB2cksfwAAAV9QTFRF////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////KD66oAAAAHV0Uk5TAAaX+5QFPf87TUtKSQcJCFDh5ERF5eJRWfetAfg875IExMINDL8DbMgTEMoLvfA3NTQ/86N223OpYon0GRz6iJngFeaVFuqWeiT8flVfZVov8sDBMJ39Y2f+oUjs+UKbRsuTLg4xmMUqzJ8lF7GqAlva8ccPrjZiEwAAAZNJREFUeJxt0tsrhEEYBvDnyaGcNoVWu+QYpXVIytqSTYgIJYciXCgulH9EyQUXLiRq48JeIJLQoiSnNluLKIdoXRBCyto1s+vz+WQuppn5zdvM+84QP42yfahTVcLFmO//SYQPCHn7T6K8QNjLH4nhsyo6Pv1IrDj6XpF4Mbn7lkQ+II43QTH675Hg9QQkWW5JvFRiUsSq3n8tJJW3gJHnimTyCjCEnRLZF0Aa3UDkJxD6CuTwDEg9oYmnyKZTHFcgNOdQDArpQpafMvPcPXlDo4HcCSRhPpS1KjnQ5Bdo+kcZaNlHEbe0UipizbRuw+Jxa6VcbC1hxSZ0uWtaqaQDVlavozhqSSs1XEUF61aAqnmt1C8D1WzkImrtWmlagCmNaJ5DA2d+QxvtaLIR7T47mo+cKsgKt3BSVKBrGigzTCgQbXEA1mX5CpVJNsDbRYcoZA95LCrUveEOvFwfx0XfsFs02+fIk5fJtI58v3Y/x37foNclMw/+kAFyVFnP16cPA+qvyvC0Pm12THUO6XoGgytf4P5xPTR6W00AAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
              ARK Retailer Setup
            </Button>
          </div>
        </div>
        <div className="md:mt-24 mt-20 ">
          <div className="text-center md:text-[40px] text-3xl  font-medium">
            <h1>ARK Provides Reach, Shipping & Profits</h1>
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
                <p className="text-sm mt-1 leading-6 text-primary/70">
                  Why do Faith Driven Entrepreneurs, startups, brands and
                  Fortune 500’s want to sell on ARK? To reach a potential 468
                  million FDC who are blessed with an annual purchasing power of
                  US$10 trillion in the global marketplace, plus an additional
                  2.132 billion Christian shoppers in the US, EU and worldwide!
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

                <p className="text-sm mt-1 leading-6 text-primary/70 text-justify">
                  As a valued Faith Driven Retailer you’ve got two options for
                  fulfillment. Fulfillment by ARK which includes packaging,
                  labeling, shipping, tracking packages, delivery confirmation,
                  and 1-click returns, or, you can choose to package and ship
                  your products and save with lower transaction fees. It’s up to
                  you!
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

                <p className="text-sm mt-1 leading-6 text-primary/70 text-left">
                  At ARK, our focus is to empower all Sellers in their retail
                  ministries to experience God’s favor and prosperity according
                  to Deut 8:18 while respecting their bottom line. We offer
                  industry-best store and transaction fees, Christian categories
                  and engagement tools to lead you into the fullness of your
                  destiny!
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
            <Image src={group} alt="Get Started Seamlessly with ARK Setup" className="w-full " />
          </div>

          <div className=" grid md:grid-cols-3 gap-x-4 md:gap-y-0 gap-y-6 mt-10">
            <div>
              <div className="md:px-3 px-4">
                <p className=" text-sm mt-6 font-medium">
                  Register & Begin Selling in 3... 2... 1...
                </p>
                <p className="text-sm mt-1 leading-6 text-primary/70">
                  Retailers can open an account, get verified efficiently
                  through our registeration process and begin listing your
                  products immediately
                </p>
              </div>
            </div>
            <div>
              <div className="md:px-3 px-4">
                <p className=" text-sm mt-6 font-medium">
                  God Wants to Bless & Prosper You
                </p>
                <p className="text-sm mt-1 leading-6 text-primary/70">
                  We&apos;re going to educate you in the scriptures to the truth that
                  obedience will bring you favor in the marketplace and lead you
                  to a life of victory
                </p>
              </div>
            </div>
            <div>
              <div className="md:px-2 px-4">
                <p className=" text-sm mt-6 font-medium">
                  Specialized Seller Support From ARK
                </p>
                <p className="text-sm mt-1 leading-6 text-primary/70">
                  New and current Faith Driven Retailers & Sellers can access
                  our Ekklesia support who can help with account issues,
                  questions, billing and more
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:mt-24 mt-20 ">
          <div className="text-center md:text-[40px] text-3xl  font-medium">
            <h1>
              <span className="text-[#4de303]">ark</span>convenant
            </h1>
            <p className=" text-center !text-base text-primary/90  leading-5">
              for sellers
            </p>
          </div>

          <div className=" mt-10">
            <div className="text-center md:text-[40px] text-3xl font-medium mb-16">
              <h1 className="text-white">
                ARK It with Top-to-Bottom Blessings
              </h1>
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
                        <h4 className="font-semibold text-white mb-2">
                          Shopper Identity Verification
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Our comprehensive verification partner checks details
                          such as name, address, government ID and more to
                          confirm the identity of Faith Driven Consumers who
                          shop and buy on ARK!
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* 2-Day Shipping */}
                  <div className="py-5 border-b-2 border-white">
                    <div className="grid grid-cols-5 gap-4 items-center">
                      <div className="col-span-3 pr-8">
                        <h4 className="font-semibold text-white mb-2">
                          2-Day Shipping
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          ARK offers two-day shipping fulfillment for all our
                          Faith Driven Retailers and Sellers via our Velocity®
                          Membership. Post-sale we package, print label, pay
                          postage and ship out for you!
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* iOS & Android Apps */}
                  <div className="py-5 border-b-2 border-white">
                    <div className="grid grid-cols-5 gap-4 items-center">
                      <div className="col-span-3 pr-8">
                        <h4 className="font-semibold text-white mb-2">
                          iOS & Android Apps
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          ARK offers our Faith Driven Consumers mobility with
                          our iOS & Android apps for shopping on the go. You can
                          browse and order products, receive shipping
                          notifications & more!
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Seller Engagement Tools */}
                  <div className="py-5 border-b-2 border-white">
                    <div className="grid grid-cols-5 gap-4 items-center">
                      <div className="col-span-3 pr-8">
                        <h4 className="font-semibold text-white mb-2">
                          Seller Engagement Tools
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          ARK offers our Faith Driven Retailers the ability to
                          engage with faith driven consumers and Christian
                          shoppers worldwide via discounts, coupons offers, and
                          RSS feeds to accelerate sales!
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Promotions */}
                  <div className="py-5 border-b-2 border-white">
                    <div className="grid grid-cols-5 gap-4 items-center">
                      <div className="col-span-3 pr-8">
                        <h4 className="font-semibold text-white mb-2">
                          Social Media Promotions
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          ARK offers our Faith Driven Retailers greater viral
                          reach through social media as a portion of your
                          listings are promoted on ARK&apos;s & our partners social
                          profiles to Christian shoppers worldwide!
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
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
        <div className="md:mt-24 mt-20 md:max-w-5xl mx-auto py-20">
          <div className="grid md:grid-cols-7 md:gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8 col-span-3">
              <div>
                <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                  Christian shopping just got a huge upgrade. 🤩
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base text-justify">
                  ARK&apos;s consumer-focused engagement platform and mobile apps
                  offer strategic retail and product placement opportunities
                  providing Faith Driven Consumers with unique Christian
                  products, gifts & content. ARK offers ARKcoupons and blessed
                  savings from anointed sellers in an accelerating and emerging
                  US$15 billion dollar global Christian retail market.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <span className="text-white">Ready to open your store?</span>
                <Button className=" bg-background text-primary hover:bg-secondary/80 h-11 px-4 cursor-pointer tracking-wide gap-3">
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 25 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="25" height="27" fill="url(#pattern0_1_188)" />
                    <defs>
                      <pattern
                        id="pattern0_1_188"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_1_188"
                          transform="scale(0.04 0.037037)"
                        />
                      </pattern>
                      <image
                        id="image0_1_188"
                        width="25"
                        height="27"
                        preserveAspectRatio="none"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAbCAMAAAC+/9RaAAAAAXNSR0IB2cksfwAAAV9QTFRF////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////KD66oAAAAHV0Uk5TAAaX+5QFPf87TUtKSQcJCFDh5ERF5eJRWfetAfg875IExMINDL8DbMgTEMoLvfA3NTQ/86N223OpYon0GRz6iJngFeaVFuqWeiT8flVfZVov8sDBMJ39Y2f+oUjs+UKbRsuTLg4xmMUqzJ8lF7GqAlva8ccPrjZiEwAAAZNJREFUeJxt0tsrhEEYBvDnyaGcNoVWu+QYpXVIytqSTYgIJYciXCgulH9EyQUXLiRq48JeIJLQoiSnNluLKIdoXRBCyto1s+vz+WQuppn5zdvM+84QP42yfahTVcLFmO//SYQPCHn7T6K8QNjLH4nhsyo6Pv1IrDj6XpF4Mbn7lkQ+II43QTH675Hg9QQkWW5JvFRiUsSq3n8tJJW3gJHnimTyCjCEnRLZF0Aa3UDkJxD6CuTwDEg9oYmnyKZTHFcgNOdQDArpQpafMvPcPXlDo4HcCSRhPpS1KjnQ5Bdo+kcZaNlHEbe0UipizbRuw+Jxa6VcbC1hxSZ0uWtaqaQDVlavozhqSSs1XEUF61aAqnmt1C8D1WzkImrtWmlagCmNaJ5DA2d+QxvtaLIR7T47mo+cKsgKt3BSVKBrGigzTCgQbXEA1mX5CpVJNsDbRYcoZA95LCrUveEOvFwfx0XfsFs02+fIk5fJtI58v3Y/x37foNclMw/+kAFyVFnP16cPA+qvyvC0Pm12THUO6XoGgytf4P5xPTR6W00AAAAASUVORK5CYII="
                      />
                    </defs>
                  </svg>
                  ARK Retailer Setup
                </Button>
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

          <div className="mt-20">
            <Image src={questions} alt="Still have questions?" />
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
