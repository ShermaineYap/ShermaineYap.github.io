// LinkedIn highlights. Counts are as of October 2026; update them whenever you like.
// `comments` are screenshots of real comments on the post (in /public/posts/). `images` live in /public/posts/.
export const posts = [
  {
    id: 'ibm',
    label: "my IBM Bob-a-thon post",
    date: '1 Oct 2026',
    title: 'The CTO of IBM Malaysia gave my project a thumbs up. I couldn\'t sleep that night.',
    excerpt:
      'Forty minutes at Plaza IBM to build something for a real problem. I picked one close to home: a lot of Malaysians never claim the government aid they qualify for, because the rules are scattered across a dozen websites. Bantuan Checker tells you what you qualify for, what to bring, and which schemes you nearly qualify for and why. Walked out with 1st Runner Up.',
    url: 'https://www.linkedin.com/posts/shermaineyapshimin_ibmbob-ibm-developerkaki-ugcPost-7511363893676408833-NCmq',
    images: ['ibm-2', 'ibm-1', 'ibm-3', 'ibm-4'],
    stats: { reactions: 147, comments: 18, reposts: 2, impressions: 3592 },
    comments: [{ src: 'comment-ibm-eddy', who: 'Eddy Liew, CTO of IBM Malaysia' }, { src: 'comment-ibm-nicole', who: 'Nicole Nair, IBM' }, { src: 'comment-ibm-ibm', who: 'IBM official page' }],
  },
  {
    id: 'google',
    label: "my Google Data Center Hackathon post",
    date: '24 Sep 2026',
    title: 'Most people apply to interview at Google. I got interviewed by Google after breaking into a server I built myself.',
    excerpt:
      'One of 48 students picked from thousands of applicants for the Google Data Center Student Hackathon at Google KL. My team of six was handed a table of loose parts and told to build a working server, then get into it and capture the flags. I write software; I had never seated a DIMM in my life. We finished Runner-Up and took Best Teamwork, which meant the most because we had met hours earlier. Hardware humbles you.',
    url: 'https://www.linkedin.com/posts/shermaineyapshimin_googledatacenter-datacenter-hackathon-ugcPost-7508833888480239618-bm_r',
    images: ['google-1', 'google-2', 'google-3', 'google-4'],
    stats: { reactions: 260, comments: 8, reposts: 0, impressions: 8221 },
    comments: [],
  },
  {
    id: 'muba',
    label: "my MUBA Web3 hackathon post",
    date: '10 Sep 2026',
    title: 'My first Web3 hackathon ended with two recognitions across different tracks.',
    excerpt:
      'MUBA 2026 was a crash course in blockchain under time pressure. Our project, SHOU, protects senior citizens from WhatsApp and Telegram scams with an AI-powered Chrome extension and a seedless wallet that holds suspicious transfers until a family member approves. Honourable Mention in the Sui Payments & Stablecoins track and Top 11–20 in the GonkaRouter AI for Society Good track. We even switched our presentation to Chinese at the last minute.',
    url: 'https://www.linkedin.com/posts/shermaineyapshimin_muba2026-web3-blockchain-ugcPost-7503749512809791488-GcgG',
    images: ['muba-1', 'muba-2', 'muba-3', 'muba-4'],
    stats: { reactions: 319, comments: 11, reposts: 2, impressions: 5360 },
    comments: [{ src: 'comment-muba-hana', who: 'Hana Tang, teammate' }],
  },
  {
    id: 'sas',
    label: "my SAS Malaysia visit post",
    date: '24 Jan 2026',
    title: 'Visited SAS Malaysia with the team. Then SAS asked to collaborate on our final year project.',
    excerpt:
      'After the SAS Hackathon win, Team Decathon was invited to SAS Malaysia at Menara IQ to present Project LUCID to Mr Andy Leo. He gave us real feedback on where data and AI are heading in energy and utilities, and then the plot twist: SAS wanted to work with us on our FYP. That conversation is where my final year project started.',
    url: 'https://www.linkedin.com/posts/shermaineyapshimin_teamdecathon-projectlucid-sas-ugcPost-7420523748589518848-zABA',
    images: ['sas-1', 'sas-2', 'sas-3', 'sas-4'],
    stats: { reactions: 126, comments: 4, reposts: 3, impressions: 4701 },
    comments: [{ src: 'comment-sas-andy', who: 'Andy Leo' }, { src: 'comment-sas-rina', who: 'Rina Rasidi' }],
  },
  {
    id: 'apu',
    label: "APU's post on our SAS win",
    date: '21 Feb 2026',
    repost: 'Asia Pacific University (APU)',
    title: 'APU: "A team of 10 APU students defied the odds to become Global Champions of the Industry Energy Track at the SAS Hackathon 2025."',
    excerpt:
      'The university\'s own post on our win, competing against Master\'s students, PhD researchers, industry professionals and former champions from over 100 teams worldwide. Balancing internships with a month-long global competition, and described by APU as a historic milestone for the university and for Malaysia.',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7431535985345290240/',
    images: ['apu-1'],
    stats: { reactions: 156, comments: 5, reposts: 7 },
    comments: [],
  },
]
