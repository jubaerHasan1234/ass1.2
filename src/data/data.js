"use state";

import Airbnb from "../Components/SvgComponents/Airbnb";
import Countries from "../Components/SvgComponents/Countries";
import Facebook from "../Components/SvgComponents/Facebook";
import GitHub from "../Components/SvgComponents/GitHub";
import Google from "../Components/SvgComponents/Google";
import Instagram from "../Components/SvgComponents/Instagram";
import Mailchimp from "../Components/SvgComponents/Mailchimp";
import Mashable from "../Components/SvgComponents/Mashable";
import Microsoft from "../Components/SvgComponents/Microsoft";
import Million from "../Components/SvgComponents/Million";
import Spotify from "../Components/SvgComponents/Spotify";
import Twtter from "../Components/SvgComponents/Twtter";
import Uptime from "../Components/SvgComponents/Uptime";
import User from "../Components/SvgComponents/User";
import World from "../Components/SvgComponents/World";
/* header data start */
const headerData = [
  "Home",
  "Company",
  " Marketplace",
  "Features",
  "Team",
  "Contact",
];
/* header data end */
/* company logo start */
const companiesData = [Airbnb, Google, Microsoft, Spotify, Mailchimp, Mashable];
/* company logo end */

/* service data start */
const serviceOneData = [
  "Continuous integration and deployment",
  "Development workflow",
  "Knowledge management",
];
const serviceTwoData = [
  " Dynamic reports and dashboards",
  "Templates for everyone",
  " Development workflow",
  "Limitless business automation",
  "Knowledge management",
];
/* service data end */

/* reaction data start */
const reactionData = [
  {
    svg: Uptime,
    title: "99.99% uptime",
    paragrap: "For Landwind, with zero maintenance downtime",
  },
  {
    svg: User,
    title: "600M+ Users",
    paragrap: "Trusted by over 600 milion users around the world",
  },
  {
    svg: Countries,
    title: "100+ countries",
    paragrap: "Have used Landwind to create functional websites",
  },
  {
    svg: Million,
    title: "5+ Million",
    paragrap: "Transactions per day",
  },
];
/* reaction data end  */

/* price data start */
const priceData = [
  {
    title: "Starter",
    paragrap: "Best option for personal use & for your next project.",
    price: "$29",
    list: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: 1 developer",
      "Premium support: 6 months",
      "Free updates: 6 months",
    ],
  },
  {
    title: "Company",
    paragrap: "Relevant for multiple users, extended & premium support.",
    price: "$99",
    list: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: 10 developers",
      "Premium support: 24 months",
      "Free updates: 24 months",
    ],
  },
  {
    title: "Enterprise",
    paragrap: "Best option for personal use & for your next project.",
    price: "$29",
    list: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: 100+ developer",
      "Premium support: 36 months",
      "Free updates: 36 months",
    ],
  },
];
/* price data end */

/* footer data start  */

const footerDataOne = [
  {
    name: "Company",
    list: ["About", "Careers", "Brand", "Center", "Blog"],
  },
  {
    name: "Help center",
    list: ["Discord Server", "Twitter", "Facebook", "Contact Us"],
  },
  {
    name: "Legal",
    list: ["Privacy Policy", "Licensing", "Terms"],
  },
  {
    name: "Company",
    list: ["About", "Careers", "Brand", "Center", "Blog"],
  },
  {
    name: "Download",
    list: ["iOS", " Android", "Windows", "MacOS"],
  },
];

const footerDataTwo = [Facebook, Instagram, Twtter, GitHub, World];
/* footer data end */

/* export data start */
export {
  companiesData,
  footerDataOne,
  footerDataTwo,
  headerData,
  priceData,
  reactionData,
  serviceOneData,
  serviceTwoData,
};
/* export data end */
