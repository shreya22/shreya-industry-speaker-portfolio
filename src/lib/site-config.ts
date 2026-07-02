export const siteConfig = {
  name: "Shreya Sahu",
  title: "Shreya Sahu, Engineering Leader, Speaker & Writer",
  description:
    "Shreya Sahu is a Tech Lead at Monzo, and before that she was an engineer at Twitter, Amazon and Microsoft. She speaks at universities, conferences and engineering communities on distributed systems, engineering leadership and AI engineering, and writes The Longer Thought.",
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
  { label: "Speaking", href: "#speaking" },
  { label: "Writing", href: "#writing" },
  { label: "Community", href: "#community" },
  { label: "Experience", href: "#experience" },
  { label: "Invite Me", href: "#invite" },
] as const;

export const speakingFormatCards = [
  {
    title: "Speaking",
    description:
      "Talks across a range of formats and audiences, from a single guest lecture to a recurring conference circuit.",
    items: [
      "Conference talks",
      "Guest lectures at universities",
      "Meetup and community talks",
      "Panels and fireside chats",
      "Internal company talks",
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

export const writingEssays = [
  {
    title: "Why Incentives Beat Intentions",
    description:
      "Systems produce whatever behaviour they reward, regardless of what anyone meant them to do.",
  },
  {
    title: "The Case for Second-Order Thinking",
    description:
      "Most decisions look fine at the first consequence. The interesting ones show up at the second.",
  },
  {
    title: "On Outsourcing Your Judgment",
    description:
      "What we give up, quietly, every time we let a feed or an algorithm decide for us.",
  },
] as const;

export const communityCards = [
  {
    title: "Toastmasters",
    subtitle: "Member, Wharf Speakers & City of London",
    description:
      "I've been an active member of both Wharf Speakers Toastmasters and City of London Toastmasters. They've been instrumental in helping me become a clearer communicator and a more thoughtful speaker. Every speech is an opportunity to refine ideas, improve storytelling and connect better with an audience.",
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
    role: "Software Engineer",
    focus: "Started my career here, cutting my teeth on large-scale production software.",
  },
] as const;

export const inviteFormats = [
  "60 minutes",
  "90 minutes",
  "2 hours",
  "Half-day workshop",
  "Full-day workshop",
] as const;

export const inviteAudiences = [
  "Universities",
  "Conferences",
  "Engineering meetups",
  "Internal company events",
  "Leadership offsites",
  "Bootcamps",
  "Podcasts",
  "Panels",
] as const;
