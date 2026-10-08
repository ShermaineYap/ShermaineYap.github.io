// Certificate wall. `file` is the name in /public/certs (without "-thumb" or extension).
// Categories drive the filter buttons.
export const certCategories = ['All', 'Hackathons', 'AI & Data', 'Networking & SQL', 'Academic', 'Leadership & Sport']

export const certificates = [
  { file: '00-sas-hackathon-2025-global-industry-track-champion-energy-off', title: 'SAS Hackathon 2025 · Global Champion, Energy Track', issuer: 'SAS', year: 2025, cat: 'Hackathons', star: true },
  { file: '02-google-data-center-student-hackathon-2026-runner-up-best-tea', title: 'Google Data Center Student Hackathon 2026 · Runner-Up & Best Teamwork', issuer: 'Google', year: 2026, cat: 'Hackathons', star: true },
  { file: '17-apu-fintech-day-2026-hackathon-2nd-runner-up-3rd-place', title: 'APU FinTech Day 2026 Hackathon · 2nd Runner-Up', issuer: 'FYLeaderS, APU', year: 2026, cat: 'Hackathons', star: true },
  { file: '04-muba-blockchain-hackathon-2026-participant', title: 'MUBA Blockchain Hackathon 2026 · Honourable Mention', issuer: 'APU', year: 2026, cat: 'Hackathons' },
  { file: '28-supervity-autopilot-asia-hackathon-2026-finalist-participati', title: 'Supervity Autopilot Asia Hackathon 2026 · Finalist', issuer: 'Supervity', year: 2026, cat: 'Hackathons' },
  { file: '05-ums-marinehack-2025-finalist', title: 'UMS MarineHack 2025 · Finalist', issuer: 'Universiti Malaysia Sabah', year: 2025, cat: 'Hackathons' },
  { file: '03-assemblyai-voice-agent-hackathon-2026-certificate-of-complet', title: 'AssemblyAI Voice Agent Hackathon · Completion', issuer: 'lablab.ai', year: 2026, cat: 'Hackathons' },
  { file: '18-ibm-bob-2-0-hackathon-2026-lablab-ai-certificate-of-completi', title: 'IBM Bob 2.0 Hackathon · Completion', issuer: 'lablab.ai', year: 2026, cat: 'Hackathons' },
  { file: '19-ignite-2026-startup-pitch-competition-icube-x-hult-prize-par', title: 'IGNITE 2026 Startup Pitch Competition', issuer: 'iCube × Hult Prize', year: 2026, cat: 'Hackathons' },
  { file: '06-hack4health-ai4alzheimers-hackathon-2026-participant', title: 'AI4Alzheimer\'s Hackathon', issuer: 'Hack4Health', year: 2026, cat: 'Hackathons' },
  { file: '30-futurehack-ai-battlefield-hackathon-2025-participant', title: 'FutureHack! A.I. Battlefield', issuer: 'FutureHack!', year: 2025, cat: 'Hackathons' },

  { file: '20-kementerian-digital-introduction-to-generative-ai', title: 'Introduction to Generative AI', issuer: 'Kementerian Digital Malaysia', year: 2026, cat: 'AI & Data' },
  { file: '26-kementerian-digital-agentic-ai-for-all', title: 'Agentic AI for All', issuer: 'Kementerian Digital Malaysia', year: 2026, cat: 'AI & Data' },
  { file: '21-kementerian-digital-ai-safety', title: 'AI Safety', issuer: 'Kementerian Digital Malaysia', year: 2026, cat: 'AI & Data' },
  { file: '27-kementerian-digital-ai-nation-2030-the-madani-approach', title: 'AI Nation 2030: The MADANI Approach', issuer: 'Kementerian Digital Malaysia', year: 2026, cat: 'AI & Data' },
  { file: '22-kementerian-digital-cloud-untuk-rakyat', title: 'Cloud untuk Rakyat', issuer: 'Kementerian Digital Malaysia', year: 2026, cat: 'AI & Data' },
  { file: '23-kementerian-digital-cybersafe-untuk-rakyat', title: 'CyberSAFE untuk Rakyat', issuer: 'Kementerian Digital Malaysia', year: 2026, cat: 'AI & Data' },
  { file: '11-apu-data-science-week-2025-power-bi-for-data-analytics-works', title: 'Power BI for Data Analytics Workshop', issuer: 'APU Data Science Week', year: 2025, cat: 'AI & Data' },
  { file: '12-apu-data-science-week-2025-llm-planning-and-reasoning-talk', title: 'Planning & Reasoning Abilities of LLMs and LRMs', issuer: 'APU Data Science Week', year: 2025, cat: 'AI & Data' },

  { file: '07-cisco-ccnav7-introduction-to-networks-certificate', title: 'CCNAv7: Introduction to Networks', issuer: 'Cisco Networking Academy', year: 2024, cat: 'Networking & SQL', star: true },
  { file: '08-cisco-ccnav7-introduction-to-networks-course-completion', title: 'CCNAv7: Course Completion', issuer: 'Cisco Networking Academy', year: 2024, cat: 'Networking & SQL' },
  { file: '09-hackerrank-sql-basic-certificate', title: 'SQL (Basic)', issuer: 'HackerRank', year: 2025, cat: 'Networking & SQL' },
  { file: '10-hackerrank-sql-intermediate-certificate', title: 'SQL (Intermediate)', issuer: 'HackerRank', year: 2025, cat: 'Networking & SQL' },

  { file: '14-apu-diploma-in-ict-data-informatics-certificate', title: 'Diploma in ICT (Data Informatics)', issuer: 'Asia Pacific University', year: 2024, cat: 'Academic' },
  { file: '15-apu-mathventure-2025-crack-the-grid-participant', title: 'Mathventure 2025 · Crack the Grid', issuer: 'APU SOMAQS', year: 2025, cat: 'Academic' },
  { file: '16-apu-mathventure-2025-math-mosaic-participant', title: 'Mathventure 2025 · Math Mosaic', issuer: 'APU SOMAQS', year: 2025, cat: 'Academic' },
  { file: '31-pearson-lcci-level-2-book-keeping-and-accounts-distinction', title: 'LCCI Level 2 Book-keeping & Accounts · Distinction', issuer: 'Pearson', year: 2023, cat: 'Academic' },

  { file: '24-footfallcam-internship-2024-top-quadrant-award', title: 'Top Quadrant Award · Internship Programme', issuer: 'FootfallCam', year: 2024, cat: 'Leadership & Sport', star: true },
  { file: '29-acm-w-asia-pacific-scholar-cohort-2026-apcwic-participant', title: 'ACM-W Asia Pacific Scholar Cohort 2026', issuer: 'ACM-W · Monash University Malaysia', year: 2026, cat: 'Leadership & Sport' },
  { file: '13-apu-peer-leader-adapted-classwide-peer-tutoring-2022-2023', title: 'Peer Leader · Adapted Classwide Peer Tutoring', issuer: 'APU School of Mathematics', year: 2023, cat: 'Leadership & Sport' },
  { file: '25-unity-in-motion-inter-university-badminton-tournament-2024-w', title: 'Inter-University Badminton 2024 · Women\'s Doubles Champion', issuer: 'YPC International College', year: 2024, cat: 'Leadership & Sport' },
]
