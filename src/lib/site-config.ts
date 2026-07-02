export const siteConfig = {
  name: "Shreya Sahu",
  title: "Shreya Sahu — Engineering Leader, Educator & Speaker",
  description:
    "Shreya Sahu is a Tech Lead at Monzo and former engineer at Twitter, Amazon and Microsoft. She gives guest lectures, workshops and talks on distributed systems, engineering leadership and AI engineering.",
  url: "https://shreyasahu.com",
  email: "hello@shreyasahu.com",
  location: "London, UK",
  social: {
    linkedin: "https://www.linkedin.com/in/shreya22/",
    github: "https://github.com/shreya22",
    substack: "https://thelongerthought.substack.com/",
  },
  resumeHref: "/resume/ShreyaResume.pdf",
  headshotSrc: "/images/headshot.jpg",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Teaching", href: "#teaching" },
  { label: "Speaking", href: "#speaking" },
  { label: "Community", href: "#community" },
  { label: "Experience", href: "#experience" },
  { label: "Invite Me", href: "#invite" },
] as const;

export const teachingCards = [
  {
    title: "Guest Lectures",
    description:
      "One-off lectures for undergraduate and postgraduate students, tailored to the course and the room.",
    items: [
      "System Design",
      "Distributed Systems",
      "Backend Engineering",
      "Engineering Leadership",
      "AI Engineering",
      "Product Engineering",
      "Building Software at Scale",
    ],
  },
  {
    title: "Workshops",
    description:
      "Half-day and full-day, hands-on sessions built around real engineering problems, not slideware.",
    items: [
      "Building Reliable Distributed Systems",
      "System Design Beyond Interviews",
      "Shipping Production Software",
      "AI Engineering in Practice",
    ],
  },
  {
    title: "Mentoring",
    description:
      "Structured, ongoing support for engineers navigating technical and career growth.",
    items: [
      "Mentored students through Scalar Academy",
      "Mentored engineers internally at Monzo",
      "Focused on technical depth and professional growth",
    ],
  },
] as const;

export const speakingTopics = [
  {
    title: "Building Software at Scale",
    description: "What actually changes when millions of people depend on your system.",
  },
  {
    title: "Lessons from Monzo Engineering",
    description: "How a bank engineers for trust, speed and reliability at once.",
  },
  {
    title: "Distributed Systems in Practice",
    description: "The theory that matters and the theory that doesn't, learned the hard way.",
  },
  {
    title: "System Design Beyond Interviews",
    description: "Designing systems to be lived with, not just whiteboarded.",
  },
  {
    title: "Feature Flags and Safe Deployments",
    description: "Shipping continuously without gambling with production.",
  },
  {
    title: "Engineering Trade-offs",
    description: "Why the best engineering decision is rarely the most elegant one.",
  },
  {
    title: "AI Engineering Beyond the Hype",
    description: "Separating durable practice from the news cycle.",
  },
  {
    title: "Career Growth in Software Engineering",
    description: "A realistic map of the path from early-career to technical leadership.",
  },
] as const;

export const communityCards = [
  {
    title: "Wharf Speakers Toastmasters",
    subtitle: "Member, past year",
    description:
      "Regularly practises public speaking, storytelling and technical communication in a live, supportive club setting.",
  },
  {
    title: "The Longer Thought",
    subtitle: "Founder",
    description:
      "A publication dedicated to reclaiming independent judgment in an age that profits from outsourcing it. Through essays grounded in systems thinking, second-order thinking, incentives and other mental models, it teaches readers how to think more clearly rather than what to think.",
    href: siteConfig.social.substack,
    linkLabel: "Read The Longer Thought",
  },
] as const;

export const experience = [
  {
    company: "Monzo",
    role: "Tech Lead",
    focus: "Backend systems, engineering leadership, product engineering.",
  },
  {
    company: "Twitter",
    role: "Software Engineer",
    focus: "Recommendation systems and large-scale distributed systems.",
  },
  {
    company: "Amazon",
    role: "Software Engineer",
    focus: "Backend engineering.",
  },
  {
    company: "Microsoft",
    role: "Software Engineering Intern",
    focus: "Early foundations in large-scale production software.",
  },
] as const;

export const testimonials = [
  { placeholder: true },
  { placeholder: true },
  { placeholder: true },
] as const;

export const inviteFormats = [
  "60 minutes",
  "90 minutes",
  "2 hours",
  "Half-day workshop",
  "Full-day workshop",
] as const;

export const inviteFormatsKinds = [
  "Guest lectures",
  "Visiting lectures",
  "Workshops",
  "Career talks",
  "Conference talks",
  "Engineering panels",
  "Fireside chats",
] as const;
