import { ShoppingBagIcon } from "@/components/Icons";
import {
  BarChartSquareIcon,
  ChartIcon,
  DocumentIcon,
  EmergencyCallAddIcon,
  FavoriteChartIcon,
  GevitiIcon,
  HomeIcon,
  HomeOutlineIcon,
  TeamIcon,
} from "@/components/Icons/Landing";

const landingData = {
  navbar: {
    iconsMenu: [
      {
        id: "shopping",
        href: "/cart",
        icon: ShoppingBagIcon,
      },
    ],
  },
  hero: {
    preTitle: "mens health and wellness solutions",
    title: "Live optimized with Geviti",
    titles: ["Live optimized with Geviti"],
    subtitles: [
      "A Geviti membership makes longevity easy and accessible with our wide range of at-home diagnostics, innovative anti-aging therapies, and a dedicated qualified care team.",
    ],

    image: "/images/solution_media/solution-bg.webp",
    imageMobile: "/images/solution_media/solution-mobile-bg.webp",
    btnCta: {
      text: "Join Geviti",
      href: "/onboarding",
      externalLink: false,
    },
  },
  products: {
    title: "Discover Geviti",
    description: "Browse our wide range of products!",
    viewAll: {
      text: "View All Products",
      href: "/products",
    },
    titleMobile: "Our Products",
  },
  investment: {
    preTitle: "An INVESTMENT IN YOUR FUTURE",
    title: "Prioritizing longevity is an investment in your future self.",
    description:
      "Live longer without compromising your lifestyle—our longevity solutions are designed to fit seamlessly into your everyday life.",
    image: "/images/landing/investment.png",
    imageMobile: "/images/landing/investment_mobile.png",
    btnCta: {
      href: "/onboarding",
      externalLink: false,
      text: "Get Started",
    },
  },
  mission: {
    preTitle: "An INVESTMENT IN YOUR FUTURE",
    title: "Prioritizing longevity is an investment in your future self.",
    description:
      "Live longer without compromising your lifestyle—our longevity solutions are designed to fit seamlessly into your everyday life.",
    image: "/images/landing/compressed/mission_2.webp",
    imageMobile: "/images/landing/compressed/mission_mobile.webp",
    images: [
      {
        src: "/images/landing/compressed/mission_1.webp",
        theme: "dark",
      },
      {
        src: "/images/landing/compressed/mission_2.webp",
        theme: "light",
      },
    ],
    btnCta: {
      href: "/onboarding",
      externalLink: false,
      text: "Start Now",
    },
  },
  steps: {
    preTitle: "Easy online care",
    title:
      'A healthier you in just <span class="sm:hidden"><br /></span>4 easy steps.',
    btnCta: {
      href: "/onboarding",
      externalLink: false,
      text: "Get Started",
    },
    list: [
      {
        id: "step-1",
        title: 'Become a <br class="max-lg-hidden" />Geviti Member',
        icon: GevitiIcon,
      },
      {
        id: "step-2",
        title: 'Complete at-<br class="max-lg-hidden" />home labs',
        icon: HomeOutlineIcon,
        iconMobile: HomeIcon,
      },
      {
        id: "step-3",
        title: 'Full lab results <br class="max-lg-hidden" />breakdown',
        icon: ChartIcon,
      },
      {
        id: "step-4",
        title: 'Tailor made <br class="max-lg-hidden" />protocols.',
        icon: DocumentIcon,
      },
    ],
  },
  dashboard: {
    preTitle: "Quality Care made accessible",
    title: "Easy to use Geviti telehealth dashboard.",
    btnCta: {
      href: "/onboarding",
      externalLink: false,
      text: "Start Now",
    },
    image: "/images/landing/compressed/dashboard_geviti.webp",
  },
  application: {
    preTitle: "membership features",
    title: "A health coach in your pocket",
    list: [
      "The creation of an action plan based off of the users bloodwork results, focusing on lifestyle, nutrition, supplementation, and overall health optimization.",
      "The creation of an action plan based off of the users bloodwork results, focusing on lifestyle, nutrition, supplementation, and overall health optimization.",
      "The creation of an action plan based off of the users bloodwork results, focusing on lifestyle, nutrition, supplementation, and overall health optimization.",
      "The creation of an action plan based off of the users bloodwork results, focusing on lifestyle, nutrition, supplementation, and overall health optimization.",
    ],
    btnCta: {
      href: "/onboarding",
      externalLink: false,
      text: "Join Now",
    },
    image: "/images/landing/compressed/athlete-female.webp",
    imageMobile: "/images/landing/compressed/athlete-female-mobile.webp",
  },
  functional: {
    preTitle: "Tailored Functional Medicine",
    preTitleMobile: "Longevity made easy",
    title:
      'A holistic approach to an<br />optimized <span class="font-semibold">you.</span>',
    btnCta: {
      href: "/products",
      externalLink: false,
      text: "See Products",
    },
    list: [
      "Custom treatment sent straight to your door",
      "Cutting edge anti-aging peptide therapy",
      "New generation hormone replacement therapy",
      "All made in fully accredited USA pharmacies",
    ],
  },
  quality: {
    preTitle: "USA Pharmacy dispensed",
    preTitleMobile: "Tailor-made longevity",
    title: "Hormone therapy, peptide therapy, and more.",
    notes:
      "*Product images are for display purposes; actual items from US-based pharmacies may vary.",
    list: [
      'Treatments for both <span class="font-semibold">men</span> and <span class="font-semibold">women</span>',
      "Data-driven care to truly optimize your life",
      "24/7 health tracking via wearable integrations ",
      "Driven by technology to make your life simpler",
    ],
    btnCtaList: [
      {
        href: "/onboarding",
        externalLink: false,
        text: "Start Now",
      },
      {
        href: "/products",
        externalLink: false,
        text: "See Products",
      },
    ],
  },
  therapy: {
    preTitle: "Innovative anti-aging therapies",
    preTitleMobile: "Geviti is the cutting edge",
    title: "No need to leave home. Anti-aging care that goes where you go.",
    titleMobile: "Anti-aging care that goes where you go.",
    description:
      "Through on-site blood analysis by certified mobile phlebotomists, we'll tailor a healthcare plan specifically for your requirements.",
    descriptionMobile:
      "Geviti aims to increase both healthspan and lifespan by making longevity accessible.",
    btnCta: {
      href: "/onboarding",
      externalLink: false,
      text: "Start Now",
    },
  },
  flexible: {
    preTitle: "Personalized plans that are right for you",
    preTitleMobile: "Personalized for you",
    title: "Full access for just $99",
    description:
      "Unlock personalized healthcare on the Geviti platform. From hormone optimization to peptide therapies and advanced diagnostics—all at your fingertips.",
    descriptionMobile:
      "From hormone optimization to peptide therapies and advanced diagnostics—all at your fingertips with the Geviti platform.",
    image: "/images/landing/compressed/flexible.webp",
    imageMobile: "/images/landing/compressed/flexible-mobile.webp",
    list: [
      "Telehealth provider access",
      "Personal health and wellness coach",
      "Prescriptions delivered to your door",
      "Cutting edge anti-aging medications",
      "Wholesale supplements and diagnostics",
      "Mobile application and web dashboard",
      "Autonomous health screening",
      "And so much more",
    ],
  },
  clinical: {
    preTitle: "Membership Features",
    preTitleMobile: "Membership Features",
    title: "Nationwide clinical network",
    description:
      "Each user is given access to licensed providers who are qualified to go over their bloodwork results and write prescriptions accordingly within our platform.<br/><br/>The network of providers using the Geviti platforms spans across the country with the ability to provide care in most states.",
    descriptionMobile:
      "Each user is assigned a licensed provider who is qualified to go over their bloodwork results and write prescriptions accordingly within our platform.<br/><br/>The network of providers using the Geviti platforms spans  across the country with the ability to provide care in most states.",
    image: "/images/landing/compressed/clinical-network.webp",
    imageMobile: "/images/landing/compressed/clinical-network.webp",
    btnCta: {
      href: "/onboarding",
      externalLink: false,
      text: "Get Access",
    },
  },
  benefits: {
    preTitle: "Membership Benefits",
    title: "Innovative clinical treatments",
    description:
      "Geviti has partnered with key compound pharmacies across the country to offer a range of anti-aging care at the lowest prices possible. All clinical protocols are created and overseen by board certified providers.",
    viewAll: {
      text: "View All Products",
      href: "/products",
    },
    list: [
      {
        id: "men",
        image: "/images/landing/compressed/benefits-men.webp",
        imageMobile: "/images/landing/compressed/benefits-men-mobile.webp",
        title: "Mens Health",
        details: [
          "Testosterone Replacement",
          "Hormone Optimization",
          "Peptide Therapy",
          "Medical Weight-loss",
          "Sexual Function",
          "Other Anti-aging Solutions",
        ],
      },
      {
        id: "women",
        image: "/images/landing/compressed/benefits-women.webp",
        imageMobile: "/images/landing/compressed/benefits-women-mobile.webp",
        title: "Women's Health",
        details: [
          "Menopause Hormone Replacement",
          "PCOS Treatment",
          "Peptide Therapy",
          "Medical Weight-loss",
          "Sexual Function",
          "Other Anti-aging Solutions",
        ],
      },
    ],
  },
  biologicalKit: {
    title: "At-home<br />biological age kit",
    description:
      "Our biological age tests use the DNA methylation analysis method to accurately depict your biological age. This is known to be the most advanced way to retrieve ones biological age currently.",
    btnCta: {
      text: "See all Kits",
      href: "/products",
    },
    counter: {
      digit: 32.7,
      description:
        'BIOLOGICAL <span class="text-white">AGE is 4.3 Years Lower</span> THAN chronological age ',
    },
    step: {
      title: "How to use your biological test kit",
      list: [
        {
          title: "Receive your package",
          text: "directly in your mail. Included in this test is a cheek swap collection kit for quick and convenient testing.",
          image: "/images/landing/hero-icons/package.png",
          stepColor: "#EF8E5F",
          shadowColor: "#DF865A80",
        },
        {
          title: "Complete the test",
          text: "by collecting your sample via a quick and easy cheek swap. The process takes all of 10 minutes max.",
          image: "/images/landing/hero-icons/complete-test.png",
          stepColor: "#D07EE5",
          shadowColor: "#C941CE80",
        },
        {
          title: "Receive the test results",
          text: "once they are processed by our labs. You’ll be notified when the results are ready for review in roughly 7-14 days.",
          image: "/images/landing/hero-icons/test-result.png",
          stepColor: "#00D1FF",
          shadowColor: "#96D4FD80",
        },
      ],
    },
  },
  innovative: {
    preTitle: "Innovative Technology",
    title: 'Data-driven longevity. No <br class="lg:hidden"/>guesswork.',
    description:
      "Geviti is reshaping the traditional health care system and the worlds relationship with their health by leveraging cutting edge technology and combining it with convenient diagnostics followed by cutting edge care.",
    list: [
      {
        id: "1",
        image: "/images/landing/compressed/dashboard-bloodwork.webp",
      },
      {
        id: "2",
        title:
          'Easy to use Geviti <br class="sm:hidden"/>telehealth dashboard.',
        description:
          "Our technology driven platform compiles your full health context into a centralized hub that is easy to navigate. In doing so, Geviti works with you to promote longevity using your real health data.",
        btnCta: {
          text: "Join Now",
          href: "/onboarding",
        },
      },
      {
        id: "3",
        title: "Up to date test results",
        description:
          "There should never be a reason to bounce around to track down  you lab reports. Geviti compiles your diagnostic results into our platform for users to analyze, track, and understand their markers.",
        groupImages: [
          "/images/landing/compressed/group-test-result-1.webp",
          "/images/landing/compressed/group-test-result-2.webp",
          "/images/landing/compressed/group-test-result-3.webp",
        ],
        list: [
          {
            title: "Endocrine Health",
            date: "Feb. 22 2024",
            badge: "Normal",
          },
          {
            title: "Metabolic Health",
            date: "Mar. 04 2024",
            badge: "Warning",
          },
          {
            title: "Cardiovascular Risk",
            date: "Mar. 12 2024",
            badge: "Review",
          },
        ],
      },
      {
        id: "4",
        title: "Integrated health tracking mobile application.",
        description:
          "Geviti’s applications make managing longevity easy and convenient.",
        list: [
          {
            icon: BarChartSquareIcon,
            text: "track Key metrics",
          },
          {
            icon: FavoriteChartIcon,
            text: "manage your goals",
          },
          {
            icon: TeamIcon,
            text: "Medical team access",
          },
          {
            icon: EmergencyCallAddIcon,
            text: "field telehealth calls",
          },
        ],
      },
    ],
  },
  homeKits: {
    description:
      'Geviti offers a wide range of convenient and <br class="max-lg:hidden" />advanced diagnostics, all from the comfort <br class="max-lg:hidden" />of your home. From mobile phlebotomy, to <br class="max-lg:hidden" />at-home testing kits, we make health <br class="max-lg:hidden" />screening ultra accessible.',
    title: "Innovative at-home kits",
  },
  supplements: {
    preTitle: "Driven by your bloodwork Results",
    title: 'Tailormade smart <br class="sm:hidden"/>supplements',
    description:
      "No more over spending on supplements that aren't designed exactly for you. Geviti will analyze your biomarkers and create totally custom supplements with everything you need, and nothing that you don’t.",
  },
};

export default landingData;
