import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import TextBlur from "./ui/text-blur";
import {
  FaArrowsRotate,
  FaBullseye,
  FaChartSimple,
  FaClock,
  FaDollarSign,
  FaPercent,
  FaRibbon,
  FaTrophy,
} from "react-icons/fa6";
import { title } from "process";

const logos = [
  {
    icon: <FaBullseye />,
    title: "Lowest Profit Target",
    desc: "Only 7% profit target in phase one - the most achievable in the industry",
  },
  {
    icon : <FaChartSimple/>,
    title : "News Trading Allowd",
    desc : "Trade during high-impact news events without restrictions"
  },
  {
    icon: <FaClock />,
    title: "Lightning-Fast Payouts",
    desc: "12-hours payout guarantee or get $1,000!",
  },
  {
    icon: <FaPercent />,
    title: "Higher Drawdown Limit",
    desc: "Flexible 12% maxium drawdown for better trading freedom",
  },
  {
    icon: <FaDollarSign />,
    title: "Affordable Accounts",
    desc: "Most competitive pricing in the industry for funded accounts",
  },
  {
    icon: <FaRibbon />,
    title: "Transparent Pricing",
    desc: "Best spreads, zero commision, no hidden fees!",
  },
  {
    icon: <FaArrowsRotate />,
    title: "Evaluation Fee Refund",
    desc: "Get your evaluation fee back upon successfull completion",
  },
  {
    icon: <FaTrophy />,
    title: "Rewards Up to 100%",
    desc: "Earn maximum rewards for consistent performance",
  },
];

export default function Logos() {
  return (
    <motion.div
      className="flex h-full w-full flex-col gap-2 pb-12 pt-12 md:pb-24 md:pt-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}
        className="flex justify-center"
      >
        <TextBlur
          className="text-center text-4xl font-semibold tracking-tight text-zinc-200 md:text-5xl lg:text-5xl lg:w-[60%] md:w-[60%] sm:w-[80%]"
          text="The World's First Certified Prop Firm By a Stock Exchange"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-base text-zinc-300 sm:text-lg"
          text="Unmatched Benefits for Serious Traders"
          duration={0.8}
        />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-4 grid w-full grid-cols-1 items-center justify-center gap-4 md:mt-6 md:grid-cols-2 md:gap-6">
        {logos.map((logo, index) => (
          <div
            key={index}
            rel="noopener noreferrer"
            className="flex h-52 flex-col items-center justify-center gap-2 rounded-lg border bg-zinc-900 p-8 transition-all duration-150 ease-in-out md:hover:border-zinc-700 md:hover:bg-accent">
            <div className="mb-4 self-start text-4xl">{logo.icon}</div>
            <h1 className="self-start text-2xl font-bold">{logo.title}</h1>
            <p className="self-start">{logo.desc}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
