import Timeline from './Timeline';

const experienceData = [
  {
    company: "Palo Alto Networks (PANW)",
    role: "Financial Planning & Analysis (FP&A)",
    period: "Current",
    description: [
      "Supporting financial planning, forecasting, and business performance analysis.",
      "Working with financial reports, operational metrics, and business data.",
      "Collaborating with stakeholders to understand business drivers and financial trends.",
      "Assisting in process improvement and reporting automation initiatives."
    ]
  },
  {
    company: "GenLab",
    role: "Product Developer Intern",
    period: "Feb 2026 – March 2026",
    description: [
      "Analyzed user interaction data from chatbot systems to identify patterns and improve response effectiveness",
      "Queried and processed backend data using MongoDB and APIs to support data-driven feature improvements",
      "Built reporting workflows to monitor system performance and communicate insights to product stakeholders"
    ]
  },
  {
    company: "SaiKet Systems",
    role: "Data Science Intern",
    period: "May 2025 – June 2025",
    description: [
      "Wrote queries and performed data cleaning and transformation to prepare datasets for analysis",
      "Conducted exploratory data analysis to identify trends and patterns in real-world datasets",
      "Created visual reports and dashboards to communicate insights and support business decision-making"
    ]
  }
];

const Experience = () => {
  return (
    <Timeline 
      items={experienceData} 
      title="WORK JOURNEY" 
      subtitle="Professional experience in the AI and Data Science landscape."
    />
  );
};

export default Experience;
