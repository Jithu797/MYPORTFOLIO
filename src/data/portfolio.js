export const HERO = {
  roles: ['AI Engineer', 'Backend Developer', 'DSPy Expert', 'Agentic AI Builder', 'Prompt Engineer'],
  stats: [
    { num: '3',   label: 'AI Products'   },
    { num: '5',   label: 'Automations'   },
    { num: '4.7', label: 'Appraisal / 5' },
  ],
  socials: [
    { icon: 'uil-linkedin-alt', href: 'https://www.linkedin.com/in/bonam-jithendra-55bb16204/', label: 'LinkedIn' },
    { icon: 'uil-github-alt',   href: 'https://github.com/jithendraB007',                       label: 'GitHub'   },
    { icon: 'uil-envelope-alt', href: 'mailto:bonamjithendra@gmail.com',                         label: 'Email'    },
  ],
}

export const ABOUT = {
  highlights: [
    'Zero rollbacks across 9 months in Production',
    '2 research papers published in IJSES',
    'Patent filed — App. No. 202541126306',
    'TCS CodeVita Season 11 — Global Rank 1776',
  ],
  cards: [
    { icon: 'uil-graduation-cap',  title: 'M.Tech CSE',             sub: 'Vishnu Institute of Technology\nCGPA: 8.4 · 2024–26'         },
    { icon: 'uil-briefcase-alt',   title: 'Business Ops (Technical)', sub: 'NxtWave Disruptive Tech\nJun 2025 – Present'                },
    { icon: 'uil-file-alt',        title: 'Research',               sub: '2 Papers Published\n1 Patent Filed'                         },
    { icon: 'uil-award',           title: 'Appraisal 4.7 / 5',     sub: '100% KRA Achievement\nApril 2026'                           },
  ],
}

export const EXPERIENCE = [
  {
    role:    'Business Operations Associate (Technical)',
    company: 'NxtWave Disruptive Technologies Pvt. Ltd.',
    link:    'https://www.nxtwave.tech',
    date:    'Jun 2025 – Present',
    desc:    'Built and deployed 3 agentic AI products and 5 live automation systems independently — all in Production with zero rollbacks across 9 months. Owned TeachOS prompt engineering — 40 prompt changes, 82 AIQA testing sessions, 99% evaluation accuracy before every deployment.',
    tags:    ['Python', 'DSPy', 'FastAPI', 'Django', 'Claude AI', 'PostgreSQL', 'pgvector', 'Docker', 'ASP.NET Core'],
  },
  {
    role:    'Placement and Training Mentor',
    company: 'Vishnu Institute of Technology (Autonomous)',
    date:    'Nov 2024 – May 2025',
    desc:    'Mentored students in DSA, DBMS, Python, and .NET (C# basics and ASP.NET Core). Guided project builds, mock technical interviews, resume reviews, and aptitude training.',
    tags:    ['DSA', 'Python', 'ASP.NET Core', 'Mentoring'],
  },
  {
    role:    'Junior Research Fellow (JRF)',
    company: 'AI for Smart Systems — 6 Months',
    date:    '2024',
    desc:    'RNN-based Eye Motion Analysis (Accepted – National Research Journal). Collaborated on IoVT Intrusion Detection (NIT Warangal) and Green Finance Optimisation (IIT Bhubaneswar).',
    tags:    ['RNN', 'Deep Learning', 'NLP', 'Research'],
  },
]

export const SKILLS = [
  { icon: 'uil-brackets-curly', title: 'Programming',    tags: ['Python', 'C# (.NET)', 'SQL', 'JavaScript'] },
  { icon: 'uil-server',         title: 'Backend',        tags: ['Django', 'FastAPI', 'ASP.NET Core', 'REST APIs', 'Automation Pipelines'] },
  { icon: 'uil-brain',          title: 'AI / ML',        tags: ['DSPy', 'LangChain', 'Claude AI', 'Mistral AI', 'Prompt Engineering', 'Agentic AI', 'OpenCV', 'Deep Learning', 'NLP'] },
  { icon: 'uil-database',       title: 'Databases',      tags: ['PostgreSQL', 'pgvector', 'SQLite', 'Supabase', 'Firebase'] },
  { icon: 'uil-desktop',        title: 'Web & Tools',    tags: ['React (Basics)', 'HTML / CSS', 'Docker', 'Git', 'Make.com', 'Local Whisper', 'OpenRouter'] },
  { icon: 'uil-lightbulb-alt',  title: 'Concepts',       tags: ['DSA', 'DBMS', 'OOP', 'Agile SDLC'] },
]

export const PROJECTS = [
  {
    badge: 'B2C · Agentic AI', badgeClass: 'b2c',
    title: 'Topin — AI Question Generator',
    desc:  'DSPy-based agentic 4-step pipeline (Generate → Validate → Difficulty Judge → Rubric Judge). Generates CEFR-aligned A1–C2 MCQ, T2T, and Image MCQ questions.',
    tags:  ['Python', 'DSPy', 'Mistral AI', 'Pixtral-12B'],
    link:  'https://github.com/jithendraB007/Topin-Auto',
  },
  {
    badge: 'B2B · Agentic AI', badgeClass: 'b2b', featured: true,
    title: 'GA Question Generator',
    desc:  'Claude AI generates Bloom\'s taxonomy-aligned exam questions with a 4-gate semantic deduplication pipeline (Jaccard, exact match, pgvector, cosine similarity). React dashboard + Google Sheets logging + Excel export.',
    tags:  ['FastAPI', 'React', 'PostgreSQL', 'pgvector', 'Claude Sonnet', 'Docker'],
    link:  'https://github.com/jithendraB007/Graded-Questions-Creation',
  },
  {
    badge: 'B2B · Agentic AI', badgeClass: 'b2b',
    title: 'Exam Content Reviewer',
    desc:  '5-layer DSPy ChainOfThought pipeline assigning 13 rubric scores per question. GEPA optimizer auto-rewrites prompts from reviewer feedback — self-improving QA system.',
    tags:  ['Python', 'DSPy', 'Claude Sonnet 4.5', 'FastAPI', 'React'],
    link:  'https://github.com/jithendraB007/Content-Reviewer',
  },
  {
    badge: 'Internal · B2B', badgeClass: 'internal',
    title: 'Business Operations Dashboard',
    desc:  'ASP.NET Core internal web tool connecting AI workflows to generate live business reports. Significantly reduced manual reporting effort for the operations team.',
    tags:  ['C#', 'ASP.NET Core', 'Entity Framework', 'SQL', 'REST APIs'],
  },
  {
    badge: 'B2B · Automation', badgeClass: 'b2b',
    title: 'R1 Hiring System',
    desc:  'End-to-end automated hiring with Audio-to-Audio spoken evaluation and camera-monitored MCQ assessment. Deployed Sep 2025.',
    tags:  ['Django', 'Supabase', 'Firebase', 'Audio AI'],
  },
  {
    badge: 'M.Tech · Research', badgeClass: 'research',
    title: 'Intelligent Quantum Image Denoising (IQIDF)',
    desc:  'Hybrid FRQI + CNN framework to minimise quantum noise and enhance image fidelity under quantum simulation. M.Tech major project.',
    tags:  ['Python', 'PyTorch', 'Qiskit', 'OpenCV', 'Streamlit'],
  },
]

export const ACHIEVEMENTS = [
  { icon: 'uil-file-alt',      title: 'Research Publication',       desc: '"Medizin: Revolutionising Healthcare Management" — IJSES, Vol. 8, Issue 1, pp. 11–14, 2024' },
  { icon: 'uil-file-alt',      title: 'Research Publication',       desc: '"Temporal Eye Data Analysis using RNNs" — IJSES, Vol. 8, Issue 2, pp. 29–31, 2024' },
  { icon: 'uil-lightbulb-alt', title: 'Patent Filed',               desc: 'AI Driven Expert Matching & Consultation Management Platform — App. No: 202541126306' },
  { icon: 'uil-award',         title: 'Appraisal 4.7 / 5',         desc: '100% achievement across all 6 KRAs over 9-month cycle at NxtWave — April 2026' },
  { icon: 'uil-trophy',        title: 'Google Hackathon — 2nd Prize', desc: '24-hour GDSC hackathon. Secured Google Badge. Dec 31, 2023' },
  { icon: 'uil-code-branch',   title: 'TCS CodeVita Season 11',     desc: 'Global Rank 1776 among thousands of participants worldwide — Mar 22, 2024' },
  { icon: 'uil-star',          title: 'Flipkart Lens Creators',     desc: 'Designed and integrated a custom Snapchat lens using Lens Studio for Labs-Flip Lens program' },
  { icon: 'uil-cloud',         title: 'Microsoft Azure AZ-204',     desc: 'Microsoft Certified: Azure Developer Associate — Currently Pursuing' },
]

export const EDUCATION = [
  {
    year:   '2024 – 26',
    degree: 'M.Tech — Computer Science & Engineering',
    inst:   'Vishnu Institute of Technology (Autonomous), Bhimavaram',
    cgpa:   'CGPA: 8.4',
  },
  {
    year:   '2020 – 24',
    degree: 'B.Tech — Information Technology',
    inst:   'Vishnu Institute of Technology (Autonomous), Bhimavaram',
    cgpa:   'CGPA: 8.38',
  },
]

export const CONTACT = {
  phone:    '+91 8179728108',
  email:    'bonamjithendra@gmail.com',
  location: 'India',
  socials: [
    { icon: 'uil-linkedin-alt', href: 'https://www.linkedin.com/in/bonam-jithendra-55bb16204/', label: 'LinkedIn' },
    { icon: 'uil-github-alt',   href: 'https://github.com/jithendraB007',                       label: 'GitHub'   },
  ],
}
