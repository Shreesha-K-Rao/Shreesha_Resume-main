import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaNode, FaDatabase, FaCode } from 'react-icons/fa'
import { SiTypescript, SiDotnet } from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Languages',
      icon: <FaCode className="text-4xl text-primary-600" />,
      skills: ['Python', 'SQL', 'C++'],
    },
    {
      title: 'DevOps & Automation',
      icon: <FaNode className="text-4xl text-primary-600" />,
      skills: ['Apache Airflow', 'Ansible', 'ServiceNow', 'LogicMonitor'],
    },
    {
      title: 'Databases',
      icon: <FaDatabase className="text-4xl text-primary-600" />,
      skills: ['MSSQL'],
    },
    {
      title: 'Visualization',
      icon: <SiTypescript className="text-4xl text-primary-600" />,
      skills: ['Power BI'],
    },
    {
      title: 'Tools',
      icon: <SiDotnet className="text-4xl text-primary-600" />,
      skills: ['Microsoft Office Suite', 'Cloud', 'Qlik', 'Postman', 'JIRA'],
    },
  ]

  return (
    <section id="skills" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Technical Skills</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="card border border-white/15"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-slate-50">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white/10 text-amber-100 rounded-full text-sm font-medium border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
