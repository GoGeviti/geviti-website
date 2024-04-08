import { ShoppingBagIcon } from "@/components/Icons";
import {
  BarChartSquareIcon,
  ChartIcon,
  DNAIcon,
  DocumentIcon,
  EmergencyCallAddIcon,
  FavoriteChartIcon,
  GevitiIcon,
  HeartbeatIcon,
  HomeIcon,
  HomeOutlineIcon,
  MedicalDocIcon,
  MonitoringIcon,
  PillIcon,
  TeamIcon,
} from "@/components/Icons/Landing";

const membershipdata = {
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
    preTitle: "all you need membership",
    title:
      'Longevity made <br class="sm:hidden"/>accessible. Data driven <br class="sm:hidden"/>anti-aging care.',
    titles: ["Optimize your health, transform ", "your wellness."],
    titlesMobile: [
      "Longevity made",
      "accessible. Data driven",
      "anti-aging care.",
    ],
    image: "/images/membership/hero.png",
    imageMobile: "/images/landing/compressed/hero_mobile.webp",
    btnCta: {
      text: "Get Started",
      href: "/onboarding",
      externalLink: false,
    },
    btnCta2: {
      href: "/products",
      externalLink: false,
      text: "See Products",
    },
    mainKeys: [
      {
        icon: MonitoringIcon,
        text: "Hormone optimization<br />Made simple",
      },
      {
        icon: DNAIcon,
        text: "At-home diagnostics<br />Blood and DNA",
      },
      {
        icon: MedicalDocIcon,
        text: "Data-driven protocols<br />No guesswork",
      },
      {
        icon: PillIcon,
        text: "Tailor-made supplements<br />Custom to you",
      },
      {
        icon: HeartbeatIcon,
        text: "Anti-aging peptides<br />Highly effective",
      },
    ],
  },
  biomakers: {
    data: [
      "Thyroid Cascade",
      "Luteinizing Hormone (LH)",
      "Total Testosterone",
      "Free Testosterone",
      "Chloride",
      "Globulin, Total",
      "Calcium",
      "Alkaline Phosphatase",
      "A/G Ratio",
      "Bilirubin",
      "Blood Urea Nitrogen (BUN)",
      "Sodium",
      "Potassium",
      "Glucose",
      "Total Protein",
      "Carbon Dioxide (CO2)",
      "Alanine Aminotransferase (ALT)",
      "Aspartate Aminotransferase (AST)",
      "Creatinine",
      "BUN/Creatinine Ratio",
      "Estimated Glomerular Filtration Rate (eGFR)",
      "HbA1C",
      "Red Blood Cell Count (RBC)",
      "White Blood Cell Count (WBC)",
      "Hemoglobin (HGB)",
      "Hematocrit (HCT)",
      "Mean Corpuscular Volume (MCV)",
      "Mean Corpuscular Hemoglobin (MCH)",
      "Mean Corpuscular Hemoglobin Concentration (MCHC)",
      "Red Cell Distribution Width (RDW)",
      "Platelet Count",
      "Neutrophils (Absolute and Percent)",
      "Lymphocytes (Absolute and Percent)",
      "Monocytes (Absolute and Percent)",
      "Eosinophils (Absolute and Percent)",
      "Basophils (Absolute and Percent)",
      "Immature Granulocytes (Absolute and Percent)",
      "Immature Cells (Absolute Count)",
      "Total Cholesterol",
      "High-Density Lipoprotein (HDL) Cholesterol",
      "Low-Density Lipoprotein (LDL) Cholesterol (calculated)",
      "Triglycerides",
      "sex hormone binding globulin (SHBG) ",
      "Very Low-Density Lipoprotein (VLDL) Cholesterol (calculated)",
      "Prostate-Specific Antigen (PSA)",
  
    ],
  },
  choosegivity: {
    data: [
      "Because why leave home for better care?",
      "Everything is streamlined and made easy.",
      "Geviti makes cutting edge care available.",
      "Optimizing hormones doesn’t have to be hard!",
    ],
  },
  steps: {
    preTitle: "become a member",
    title: "Start your health journey with a full blood panel",
    para: "Membership journey starts with choosing a “Deep Dive” <br/> diagnostic. We’ll draw your blood from the comfort of your home.",
    btnCta: {
      href: "/onboarding",
      externalLink: false,
      text: "Get Started",
    },
    list: [
      {
        id: "step-1",
        title:
          "Become a member by <br/> purchasing a “Deep Dive” <br/> diagnostic package",
        icon: GevitiIcon,
      },
      {
        id: "step-2",
        title:
          "Complete your at-home blood <br/> draw with our mobile <br/> phlebotomy team",
        icon: HomeOutlineIcon,
        iconMobile: HomeIcon,
      },
      {
        id: "step-3",
        title:
          "Review results and tailored <br/> protocol with your designated <br/> care team",
        icon: ChartIcon,
      },
      {
        id: "step-4",
        title:
          "Receive your tailor-made <br/> protocols in the mail and <br/> track your progress",
        icon: DocumentIcon,
      },
    ],
  },
  pricing:{
    data:[
        {
            name:"Essentials Diagnostic",
            price:"299",
            biomakers:"45",
            button:"primary",
    bg:"bg-[#F5FBFF]",
    text:"text-[#181A1C]",
    hide:"hidden"
    },
        {
            name:"Essentials Diagnostic",
            price:"299",
            biomakers:"45",
            button:"secondary",
    bg:"bg-[#181A1C]",
    text:"text-white",
    hide:""
    },
        {
            name:"Essentials Diagnostic",
            price:"299",
            biomakers:"45",
            button:"primary",
    bg:"bg-[#F5FBFF]",
    text:"text-[#181A1C]",
    hide:"hidden"
    }
    ],
    features:[
        "At-home phlebotomy blood draw",
        "Full biomarker results report",
        "Smart supplement recommendation",
        "Bloodwork results telehealth review",
        "Month one membership included"
    ],
    others:[
        "Free telehealth consults",
        "Designated certified health coach",
        "At-home bloodwork",
        "Free semi-annual bloodwork",
        "Affordable treatments",
        "Included medical supplies",
        "Custom Smart Supplements",
        "Everything direct to your door",
        "Wholesale cost additional testing",
        "Wholesale cost supplements",
        "DNA and bloodwork options",
        "Data-driven tech platform",
        "Integrated mobile app" 
    ]
  }
  
};

export default membershipdata;
