import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";




const NavLinks = [
    {
        id: 1,
        text: "Home",
        route: "/Home",
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
    }
]


const SocialMedias = [
    {
        id: 1,
        text: "X",
        route: '/',
        icons: FaXTwitter,
    },
    {
        id: 2,
        text: "Youtube",
        route: '/',
        icons: FaYoutube,

    },
    {
        id: 3,
        text: "GitHub",
        route: '/',
        icons: FaGithub,

    },
    {
        id: 4,
        text: "LinkedIn",
        route: '/',
        icons: FaLinkedin,

    }
]


type Plan = {
    title: string
    description: string
    price: string
    features: string[]
    badge?: string
}

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
        badge: "Popular",
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
]



export { NavLinks, SocialMedias, Plans };