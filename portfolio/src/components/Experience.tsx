import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'Software Engineer, Research and Development',
      company: 'NTT DATA INC.',
      location: 'Bengaluru, KA, IND',
      period: 'Aug 2023 - Present',
      achievements: [
        'Automated inventory discovery workflows for controller and non-controller pre-sales based environments with CMDB integration thereby, reducing manual efforts by 70% and improved inventory accuracy by 45%, enhancing asset viability',
        'Implemented an automated device bandwidth utilization workflow integrating validation, execution and ticketing. Reduced manual triage by 60% and improved operational efficiency',
        'Extended configuration backup automation to support multi-vendor environments, onboarding various technologies and implementing standard workflow orchestration, validation and backup execution, increasing technology coverage by 20%, reducing manual efforts by 65%',
        'Automated vendor notification security advisory workflow and EOX/EOL workflow using Apache Airflow and Python, streamlining ingestion, validation, prioritization and alert routing, reduced manual effort by 78% and improved notification turnaround time by 64%',
        'Built a CI/CD pipeline using Azure DevOps and Azure Functions to monitor network device status, increasing efficiency and reliability by 35%',
        'Automated ServiceNow procedures to streamline logging, resulting in a 30% cost savings in development',
        'Deployed Azure Data Factory ETL pipelines to improve network configurations, resulting in a 70% boost in productivity',
        'Created meaningful operational dashboards and reports using Power BI that addressed business, process, and system concerns, promoting informed decision-making and generating a 25% boost in process optimization',
      ],
    },
    {
      title: 'Graduate Trainee',
      company: 'NTT Ltd.',
      location: 'Bengaluru, KA, IND',
      period: 'Aug 2022 - Jul 2023',
      achievements: [
        'Gained a solid foundation in advanced networking topics such as Network Security, Firewalls, and Routing Protocols',
        'Developed expertise in Network Automation, enabling simpler methods for managing and monitoring network operations, resulting in a 30% boost in operational efficiency',
        'Built data processing pipelines with Microsoft Azure Data Factory, automating 85% of data activities and streamlined data analysis by linking MySQL data to Power BI, decreasing manual involvement by 40% and increasing decision-making speed',
        'Collaborated with vendors such as Cisco, Palo Alto and VMware to improve server query response times via APIs, resulting in a 20% increase in query speed',
      ],
    },
  ]

  return (
    <section id="experience" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="card border border-white/15"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-50 mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-amber-200 font-semibold mb-2">
                    <FaBriefcase />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="text-slate-200/80 text-sm space-y-1">
                  <div className="flex items-center gap-2">
                    <FaCalendar />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start gap-3 text-slate-200/90">
                    <span className="text-amber-300 mt-1.5">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
