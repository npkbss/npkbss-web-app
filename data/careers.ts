import { Job, JobDetails } from '@/types/career';


// ************* Jobs ***************
export const jobs: Job[] = [
  {
    id: 'application-support-executive',
    title: 'Application Support Executive',
    department: 'Support',
    location: 'Jayanagar, Bangalore (WFO)',
    type: 'Full-time',
    experience: '0–1 Year',
    description:
      'Support business applications such as Zoho, Tally, Power BI, and custom-built applications.',
    skills: ['MS Excel', 'Email Communication', 'Business Processes', 'ERP Basics'],
  },
  {
    id: 'zoho-developer',
    title: 'Zoho Developer',
    department: 'Engineering',
    location: 'Jayanagar, Bangalore (WFO)',
    type: 'Full-time',
    experience: '1 Year',
    description:
      'Customization, automation, and support of Zoho applications for partner clients.',
    skills: ['Zoho CRM', 'Zoho Creator', 'Deluge', 'APIs', 'Integrations'],
  },
  {
    id: 'tally-developer-freelancer',
    title: 'Tally Developer (Freelancer)',
    department: 'Finance / ERP',
    location: 'Remote',
    type: 'Freelance / Project-based',
    experience: 'Experienced',
    description:
      'Work on multiple client projects involving Tally customization and integrations.',
    skills: ['TallyPrime', 'TDL', 'API Integration', 'Automation'],
  },
  {
    id: 'interns-freshers-2025',
    title: 'Interns & Fresh Graduates (2025)',
    department: 'Multiple',
    location: 'Jayanagar, Bangalore (WFO)',
    type: 'Internship / Full-time',
    experience: 'Freshers',
    description:
      'Hiring interns and fresh graduates interested in ERP implementations, reporting, and support.',
    skills: ['MS Excel', 'PowerPoint', 'Communication', 'ERP Interest'],
  },
];


// *********** JOB DETAILS **************
export const jobDetailsMap: Record<string, JobDetails> = {
  'application-support-executive': {
    id: 'application-support-executive',
    title: 'Application Support Executive (Fresher)',
    department: 'Support',
    location: 'Jayanagar, Bangalore (On-site)',
    type: 'Full-time',
    experience: '0–1 Year',
    level: 'fresher',

    salary: '₹12,500 – ₹35,000 per month',
    postedDate: 'Walk-in',
    deadline: '25th & 26th',
    openings: 'Multiple openings',

    description:
      'We are looking for a motivated Application Support Executive (Fresher) to support business applications such as Zoho, Tally, Power BI, and custom-built applications.',

    fullDescription:
      'This role involves client coordination, user access management, documentation, data reconciliation, and reporting activities. It is an excellent opportunity for fresh graduates to build a strong foundation in ERP and business application support.',

    skills: [
      'MS Excel, Word, PowerPoint',
      'Professional email writing',
      'Basic business process understanding',
      'Willingness to learn ERP & business applications',
    ],

    responsibilities: [
      'Act as the first point of contact for client support requests',
      'Assist with user access and role assignments',
      'Coordinate with internal technical teams',
      'Prepare SOPs, documentation, and reports',
      'Perform data reconciliation and MIS reporting',
    ],

    requirements: [
      'B.Com / BBA / BCA / MBA',
      'Good communication skills',
      'Basic computer knowledge',
      'Willingness to learn',
    ],

    niceToHave: [
      'Exposure to Zoho / Tally / Power BI',
      'Internship or academic projects',
      'Languages: Kannada, Telugu',
    ],
  },

  'zoho-developer': {
    id: 'zoho-developer',
    title: 'Zoho Developer',
    department: 'Engineering',
    location: 'Jayanagar 4th Block, Bangalore (WFO)',
    type: 'Full-time',
    experience: '1 Year',
    level: 'mid',

    description:
      'Seeking a Zoho Developer with practical experience in implementing, customizing, and supporting Zoho applications.',

    fullDescription:
      'The role includes configuration, automation, Deluge scripting, integrations, and end-user support for one of our associate partners.',

    skills: [
      'Zoho CRM, Zoho Books, Zoho Creator, Zoho People',
      'Deluge scripting',
      'Workflows & blueprints',
      'APIs and integrations',
    ],

    responsibilities: [
      'Customize and automate Zoho applications',
      'Create Deluge scripts and custom functions',
      'Work on integrations and data migration',
      'Resolve user issues and provide support',
      'Coordinate with functional and technical teams',
    ],

    requirements: ['1 year Zoho experience', 'Strong analytical skills', 'Good communication'],
  },

  'tally-developer-freelancer': {
    id: 'tally-developer-freelancer',
    title: 'Tally Developer (Freelancer)',
    department: 'Finance / ERP',
    location: 'Remote',
    type: 'Freelance / Project-based',
    experience: 'Experienced',
    level: 'senior',

    description:
      'Looking for an experienced Tally Developer to work on multiple client projects.',

    fullDescription:
      'The role involves Tally customization, TDL development, integrations, automation, and report development.',

    skills: ['TallyPrime', 'TDL Development', 'API Integrations', 'Automation', 'Reporting'],

    responsibilities: [
      'Customize Tally solutions',
      'Develop TDL modules',
      'Integrate APIs and automate workflows',
      'Understand business processes',
    ],

    requirements: ['Strong Tally experience', 'TDL knowledge', 'Project-based availability'],
  },

  'interns-freshers-2025': {
    id: 'interns-freshers-2025',
    title: 'Interns & Fresh Graduates (2025)',
    department: 'Multiple',
    location: 'Jayanagar 4th Block, Bangalore (WFO)',
    type: 'Internship / Full-time',
    experience: 'Freshers',
    level: 'entry',

    description:
      'Hiring interns and fresh graduates who have recently completed their studies in 2025.',

    fullDescription:
      'Ideal for candidates interested in ERP implementations, reporting, and application support.',

    skills: [
      'Good communication skills',
      'MS Excel, PowerPoint, Word',
      'Interest in ERP & reporting',
    ],

    requirements: ['B.Com / BCA / MBA / B.Tech'],

    niceToHave: [
      'Exposure to Zoho, Tally, Power BI',
      'Internships or academic projects',
      'Languages: Kannada, Telugu',
    ],
  },
};
