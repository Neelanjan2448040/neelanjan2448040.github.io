import Timeline from './Timeline';
import christLogo from '../assets/christ_university.png';
import assamLogo from '../assets/assam_university.jpg';

const educationData = [
  {
    institution: "CHRIST (Deemed to be University)",
    title: "MSc in Data Science",
    period: "Jun 2024 - May 2026",
    logo: christLogo,
    stats: ["GPA: 3.52/4", "Percentage: 72.4%"]
  },
  {
    institution: "Assam University",
    title: "BSc in Statistics",
    period: "Jan 2020 - March 2023",
    logo: assamLogo,
    stats: ["GPA: 9.07/10 (Gold Medalist)", "Percentage: 90.07%"]
  }
];

const Education = () => {
  return (
    <Timeline 
      items={educationData} 
      title="MY EDUCATION" 
      subtitle="Academic foundation in Data Science and Statistics."
    />
  );
};

export default Education;
