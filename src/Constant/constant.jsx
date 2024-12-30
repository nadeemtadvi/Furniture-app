import imgStatic from "../assets/Images/product-1.png";
import imgStatic2 from "../assets/Images/product-2.png";
import imgStatic3 from "..//assets/Images/product-3.png";
import imgExp from "../assets/Images/why-choose-us-img 1.png";
import imageItem from "../assets/Images/product-1.png";
import imageItem2 from "../assets/Images/product-2.png";
import imageItem3 from "../assets/Images/product-3.png";
import { FiTruck } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { FiShoppingBag } from "react-icons/fi";
import { PiArrowsCounterClockwise } from "react-icons/pi";
import imageInt from "../assets/Images/img-grid-1 1.png";
import imageInt2 from "../assets/Images/img-grid-2 1.png";
import imageInt3 from "../assets/Images/img-grid-3 1.png";
import imgprofile from "../assets/Images/testimonial.jpg";
import imgBlog from "../assets/Images/post-1 1.png";
import imgBlog2 from "../assets/Images/post-2 1.png";
import imgBlog3 from "../assets/Images/post-3 1.png";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

export const HeaderConst = [ "Home",
  "About us",
  "Blog",
  "Contact us",
  "Services",]
  

export const IntroConst = {
  MODERN: "Modern Interior",
  STUDIO: "Design Studio",
  SHOPNOW: "Shop Now",
  EXPLORE: "Explore",
};
export const ExploreConst = {
  CRAFT: "Crafted with excellent material.",
  SUBTEXT:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quis possimus labore aliquid ratione rerum necessitatibus unde. Doloribus, atque porro.",
  EXPLORE: "Explore",
};
export const MultiChair = [
  { CHAIR: "Nordiac Chair", PRICE: "100$", IMAGE: imgStatic },
  { CHAIR: "Modern Chair", PRICE: "299$", IMAGE: imgStatic2 },
  { CHAIR: "Crystal Chair", PRICE: "120$", IMAGE: imgStatic3 },
];

export const ChooseConst = {
  IMAGE: imgExp,
  HEADING: "Why choose us",
  TITLE:
    "Lorem, ipsum dolor sit amet consec tetur adipi sicing elit. Volup tatum ipsa temp ore non sunt.",
};

export const MultiItems = [
  {
    ICON: <FiTruck className="text-[1.5rem] mb-2" />,
    TITLE: "Fast & free Shipping",
    SUBTEXT:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deleniti accusamus sit ducimus, laudantium similique.",
  },
  {
    ICON: <FiShoppingBag className="text-[1.5rem] mb-2" />,
    TITLE: "Fast & free Shipping",
    SUBTEXT:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deleniti accusamus sit ducimus, laudantium similique.",
  },
  {
    ICON: <HiOutlineSupport className="text-[1.5rem] mb-2" />,
    TITLE: "Fast & free Shipping",
    SUBTEXT:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deleniti accusamus sit ducimus, laudantium similique.",
  },
  {
    ICON: <PiArrowsCounterClockwise className="text-[1.5rem] mb-2" />,
    TITLE: "Fast & free Shipping",
    SUBTEXT:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deleniti accusamus sit ducimus, laudantium similique.",
  },
];

export const InteriorConst = {
  TITLE: "We help you make ",
  BREAKTITLE:"Modern Interior Design",
  SUBTITLE:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quis possimus labore aliquid ratione rerum necessitatibus unde. Doloribus, atque porro.",
  IMAGE1: imageInt,
  IMAGE2: imageInt2,
  IMAGE3: imageInt3,
  EXPLORE: "Explore",
};

export const MultiInterior = [
  { TEXT: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { TEXT: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { TEXT: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { TEXT: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
];

export const MultiNordiac = [
  {
    IMG: imageItem,
    CHAIR: "Nordiac Chair",
    TEXT: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    READ: "Read more",
  },
  {
    IMG: imageItem2,
    CHAIR: "Modern Chair",
    TEXT: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    READ: "Read more",
  },
  {
    IMG: imageItem3,
    CHAIR: "Crystal Chair",
    TEXT: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    READ: "Read more",
  },
];
export const TestimonialConst = {
  TITLE: "Testimonial",
};
export const MultiTestimonial = [
  {
    IMAGE: imgprofile,
    NAME: "Michelle Anna",
    PROFILE: "Ceo and Co-Founder, XYZ..",
    TEXT: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quis possimus labore aliquid ratione rerum necessitatibus unde. Doloribus, atque porro. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, natus. Lorem ipsum dolor sit amet.",
  },
  {
    IMAGE: imgprofile,
    NAME: "Michelle Anna",
    PROFILE: "Ceo and Co-Founder, XYZ..",
    TEXT: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quis possimus labore aliquid ratione rerum necessitatibus unde. Doloribus, atque porro. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, natus. Lorem ipsum dolor sit amet.",
  },
  {
    IMAGE: imgprofile,
    NAME: "Michelle Anna",
    PROFILE: "Ceo and Co-Founder, XYZ..",
    TEXT: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quis possimus labore aliquid ratione rerum necessitatibus unde. Doloribus, atque porro. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, natus. Lorem ipsum dolor sit amet.",
  },
];
export const RecentBlogConst = {
  TITLE: "Recent Blog",
  VIEW: "view all posts",
};
export const MultiRecentBlog = [
  {
    IMAGE: imgBlog,
    TITLE: "First Time Home Owne Ideas",
    WRITER: "Nana Ama on ",
    DATE: "Nov 18th 2024",
  },
  {
    IMAGE: imgBlog2,
    TITLE: "First Time Home Owne Ideas",
    TEXT: "by Nana Ama on Nov 18th 2024",
    WRITER: "Nana Ama on ",
    DATE: "Nov 18th 2024",
  },
  {
    IMAGE: imgBlog3,
    TITLE: "First Time Home Owne Ideas",
    TEXT: "by Nana Ama on Nov 18th 2024",
    WRITER: "Nana Ama on ",
    DATE: "Nov 18th 2024",
  },
];
export const NewsletterConst = {
  TITLE: "Subscribe to Newsletter",
  INPUTNAME: "Enter your name",
  INPUTEMAIL: "Enter your email",
};
export const FooterConst = {
  TEXT: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, placeat beatae! Error ab totam adipisci nam porro. Nemo quisquam quos cupiditate vero quae perspiciatis repudiandae.",
  ABOUT: ["About us", "Services", "Blog", "Contact us"],
  CONTACT: ["Support", "Knowledge base", "Live chat"],
  JOB: ["Jobs", "Our team", "Leadership", "Privacy Policy"],
  CHAIR: ["Nordiac Chair", "Kruzo Aero", "Ergonomic"],
  SOCIALICON:[<FaFacebookF/>, <IoLogoInstagram/>, <FaTwitter/>, <FaLinkedinIn/>]
};
export const CopyrightConst = {
  COPYRIGHT: "Copyright 2024 nadeeemtadvi1@gmail.com All Rights Reserved",
  TERMS: "Terms & Conditions",
  PRIVACY: "Privacy Policy",
};
