import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { SiPexels } from "react-icons/si";



const NavLinks = [
  {
    id: 1,
    text: "Home",
    route: "#Home",
  },
  {
    id: 2,
    text: "Plans",
    route: "#Plans",
  },
  {
    id: 3,
    text: "FAQ",
    route: "#FAQ",
  },

  {
    id: 4,
    text: "Art-Work",
    route: "/ArtWork",
  },
];

const SocialMedias = [
  {
    id: 1,
    text: "X",
    route: "https://x.com/Satumbo9",
    icons: FaXTwitter,
  },
  {
    id: 2,
    text: "Instagram",
    route: "https://www.instagram.com/satumbo9/",
    icons: IoLogoInstagram,
  },
  {
    id: 3,
    text: "Youtube",
    route: "https://www.youtube.com/@Satumbo9Hub",
    icons: FaYoutube,
  },
  {
    id: 4,
    text: "GitHub",
    route: "https://github.com/Satumbo9",
    icons: FaGithub,
  },
  {
    id: 5,
    text: "LinkedIn",
    route: "https://www.linkedin.com/in/edimarf-satumbo-96b725143/",
    icons: FaLinkedin,
  },
  {
    id: 6,
    text: "Pexels",
    route: "https://www.pexels.com/@satumbo-9-436475624/stats/",
    icons: SiPexels,
  },
];

type Plan = {
  title: string;
  description: string;
  price: string;
  features: string[];
  badge?: string;
};

const Plans: Plan[] = [
  {
    title: "Code Support",
    description: "Best for small tasks, audits, and fixes.",
    price: "$1,500/mo",
    features: [
      "Up to 10 hours/month",
      "Bug fixing, code reviews",
      "2-day response time",
    ],
  },
  {
    title: "Build & Scale",
    description: "For teams that need hands-on delivery.",
    price: "$5,000/mo",
    features: [
      "Up to 40 hours/month",
      "Feature development",
      "Mentorship + Slack access",
      "24h response time",
    ],
    badge: "Premium",
  },
  {
    title: "Tech Partner",
    description: "Your long-term technical ally.",
    price: "$9,500/mo",
    features: [
      "Everything in Pro Tier",
      "Live/Recorded sessions",
      "Architecture guidance",
      "Priority support (same day)",
    ],
  },
];

export { NavLinks, SocialMedias, Plans };
