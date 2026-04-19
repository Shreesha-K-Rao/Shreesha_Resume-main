import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-lg text-slate-200/90">
            <p>
              I'm a results-driven software engineer with 4 years of experience in network automation and data analytics in the networking domain.
            </p>
            <p>
              Proficient in network automation techniques that include IT service management, workflow orchestration, cloud infrastructure management, and continuous integration and deployment.
            </p>
            <p>
              Well-versed in data analysis, business intelligence, reporting, and predictive modeling. Skilled at using automated approaches to streamline network operations and improve performance.
            </p>
            <p>
              Proven ability to collaborate across teams and achieve effective, high-impact results.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '70%', label: 'Manual Effort Reduction' },
              { number: '45%', label: 'Inventory Accuracy Improvement' },
              { number: '78%', label: 'Notification Efficiency' },
              { number: '35%', label: 'CI/CD Efficiency Boost' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="card text-center border border-white/15"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-amber-200 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-200/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
