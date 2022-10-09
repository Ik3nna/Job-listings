const data = [
  {
    id: 1,
    company: "Photosnap",
    logo: "/images/photosnap.svg",  
    newItem: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
    getAllTags() {
      return [this.role, this.level, ...this.languages, ...this.tools]
    }
  },
  {
    id: 2,
    company: "Manage",
    logo: "/images/manage.svg",
    newItem: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
    getAllTags() {
      return [this.role, this.level, ...this.languages,  ...this.tools]
    }
  },
  {
    id: 3,
    company: "Account",
    logo: "/images/account.svg",
    newItem: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
    getAllTags() {
      return [this.role, this.level, ...this.languages,  ...this.tools]
    }
  },
  {
    id: 4,
    company: "MyHome",
    logo: "/images/myhome.svg",
    newItem: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
    getAllTags() {
      return [this.role, this.level, ...this.languages,  ...this.tools]
    }
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "/images/loop-studios.svg",
    newItem: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
    getAllTags() {
      return [this.role, this.level, ...this.languages,  ...this.tools]
    }
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "/images/faceit.svg",
    newItem: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
    getAllTags() {
      return [this.role, this.level, ...this.languages,  ...this.tools]
    }
  },
  {
    id: 7,
    company: "Shortly",
    logo: "/images/shortly.svg",
    newItem: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
    getAllTags() {
      return [this.role, this.level, ...this.languages,  ...this.tools]
    }
  },
  {
    id: 8,
    company: "Insure",
    logo: "/images/insure.svg",
    newItem: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
    getAllTags() {
      return [this.role, this.level, ...this.languages,  ...this.tools]
    }
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "/images/eyecam-co.svg",
    newItem: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
    getAllTags() {
      return [this.role, this.level, ...this.languages,  ...this.tools]
    }
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "/images/the-air-filter-company.svg",
    newItem: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
    getAllTags() {
      return [this.role, this.level, ...this.languages,  ...this.tools]
    }
  }
];

export default data;
