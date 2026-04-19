export interface ProjectMedia {
  type: 'image' | 'video'
  src: string
  alt: string
  caption?: string
}

export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  intent: string
  highlights: string[]
  tech: string[]
  skills: string[]
  media: ProjectMedia[]
  github?: string
  live?: string
  status?: string
}

const projects: Project[] = [
  {
    id: 'network-automation-workflows',
    title: 'Network Automation Workflows',
    tagline: 'Automated inventory and bandwidth utilization systems',
    description:
      'Developed automated workflows for network inventory discovery and device bandwidth utilization, integrating with CMDB for enhanced asset management. Implemented validation, execution, and ticketing processes to reduce manual efforts and improve operational efficiency.',
    intent:
      'To streamline network operations by automating repetitive tasks in inventory management and bandwidth monitoring.',
    highlights: [
      'Reduced manual efforts by 70% in inventory discovery',
      'Improved inventory accuracy by 45%',
      'Integrated automated ticketing for bandwidth utilization',
      'Supported multi-vendor environments',
    ],
    tech: ['Python', 'Apache Airflow', 'Ansible', 'ServiceNow'],
    skills: ['Automation', 'Workflow Orchestration', 'Network Management', 'Data Integration'],
    media: [],
    github: 'https://github.com/Shreesha-K-Rao',
    status: 'Completed',
  },
  {
    id: 'data-analytics-dashboards',
    title: 'Operational Dashboards with Power BI',
    tagline: 'Business intelligence reports for network operations',
    description:
      'Created comprehensive dashboards and reports using Power BI to address business, process, and system concerns. Gathered requirements from stakeholders to optimize performance and data quality.',
    intent:
      'To provide data-driven insights for informed decision-making in network operations.',
    highlights: [
      '25% boost in process optimization',
      '15% reduction in data refresh times',
      '45% increase in data quality',
      'Automated data processing pipelines',
    ],
    tech: ['Power BI', 'Azure Data Factory', 'MySQL', 'Python'],
    skills: ['Data Visualization', 'ETL Pipelines', 'Business Intelligence', 'Stakeholder Management'],
    media: [],
    live: 'https://github.com/Shreesha-K-Rao',
  },
]

export default projects
