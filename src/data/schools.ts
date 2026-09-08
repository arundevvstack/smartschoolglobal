export interface SchoolItem {
  id: string;
  code: string;
  name: string;
  region: "GCC" | "India" | "Africa" | "Global";
  subRegion: string;
  curriculum: string;
  campusCount: number;
  studentTier: string;
  status: "Verified Institution" | "Multi-Campus Network";
  avatarBg: string;
}

export const SCHOOLS_DATA: SchoolItem[] = Array.from({ length: 44 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  const regions: ("GCC" | "India" | "Africa" | "Global")[] = ["GCC", "India", "Africa", "Global"];
  const region = regions[i % 4];
  
  const subRegions: Record<string, string[]> = {
    GCC: ["Dubai, UAE", "Riyadh, KSA", "Doha, Qatar", "Kuwait City", "Manama, Bahrain", "Muscat, Oman"],
    India: ["Bengaluru, India", "Mumbai, India", "New Delhi, India", "Hyderabad, India", "Chennai, India"],
    Africa: ["Nairobi, Kenya", "Lagos, Nigeria", "Accra, Ghana", "Johannesburg, South Africa", "Cairo, Egypt"],
    Global: ["London, UK", "Singapore", "Toronto, Canada", "Sydney, Australia", "Kuala Lumpur, Malaysia"]
  };
  
  const curricula = ["IB World & Cambridge", "CBSE & ICSE Integrated", "British National Curriculum", "American & AP Framework", "National & Dual-Curriculum"];
  
  const colors = [
    "bg-blue-50 text-blue-700 border-blue-200",
    "bg-sky-50 text-sky-700 border-sky-200",
    "bg-indigo-50 text-indigo-700 border-indigo-200",
    "bg-cyan-50 text-cyan-700 border-cyan-200",
    "bg-slate-50 text-slate-700 border-slate-200"
  ];

  return {
    id: `school-${num}`,
    code: `SCH-${num}`,
    name: `School ${num}`,
    region,
    subRegion: subRegions[region][i % subRegions[region].length],
    curriculum: curricula[i % curricula.length],
    campusCount: (i % 6) + 1,
    studentTier: `${1200 + (i * 150)}+ Students`,
    status: (i % 3 === 0) ? "Multi-Campus Network" : "Verified Institution",
    avatarBg: colors[i % colors.length]
  };
});

export const TRUST_STATS = {
  totalSchools: "44+",
  campusesManaged: "180+",
  activeStudents: "120,000+",
  countriesActive: "14+",
  uptimeSLA: "99.98%"
};
