const caseStudies = [
  {
    index: '01',
    name: 'Kora',
    subtitle: 'Enterprise Knowledge & Onboarding Platform',
    summary:
      'An enterprise RAG platform designed to transform organizational knowledge into an intelligent onboarding and knowledge discovery experience.',
    problem:
      'Organizations accumulate vast amounts of knowledge across documentation, policies, processes, and internal resources. Employees often struggle to locate accurate information, resulting in slower onboarding and reduced productivity.',
    solution:
      'Built a retrieval-augmented knowledge system capable of ingesting enterprise documentation, retrieving relevant context, and generating accurate responses to employee questions.',
    capabilities: [
      'Enterprise Search',
      'Knowledge Discovery',
      'Semantic Retrieval',
      'Document Intelligence',
      'Context-Aware Responses',
    ],
    stack: 'OpenAI • LangGraph • Python • Vector Database • AWS',
    impact:
      'Reduced friction in employee onboarding, improved access to institutional knowledge, and increased operational efficiency through faster information retrieval.',
    alt: false,
  },
  {
    index: '02',
    name: 'Quill',
    subtitle: 'AI-Powered Statement of Work Generation Platform',
    summary:
      'An AI-powered system that automates the generation of Statements of Work, reducing manual effort and accelerating project delivery.',
    problem:
      'Creating Statements of Work manually is time-consuming, often requiring coordination between multiple stakeholders and introducing inconsistencies across deliverables.',
    solution:
      'Designed a document intelligence platform capable of analyzing project requirements, enriching context, and generating structured Statements of Work.',
    capabilities: [
      'Requirement Analysis',
      'Document Generation',
      'Context Enrichment',
      'Workflow Automation',
      'Review & Approval Processes',
    ],
    stack: 'OpenAI • Claude • Python • LangGraph • AWS',
    impact:
      'Accelerated project initiation, reduced document preparation effort, and improved consistency across project documentation.',
    alt: true,
  },
  {
    index: '03',
    name: 'Atlas',
    subtitle: 'Multi-Agent Research & Decision Intelligence Platform',
    summary:
      'A multi-agent platform designed to support research, analysis, evaluation, and recommendation workflows.',
    problem:
      'Strategic decisions often require gathering information from multiple sources, analyzing tradeoffs, and producing actionable recommendations. This process is usually manual and time-intensive.',
    solution:
      'Developed a multi-agent system where specialized agents collaborate to conduct research, evaluate information, and generate structured decision briefs.',
    capabilities: [
      'Research Automation',
      'Agent Collaboration',
      'Decision Intelligence',
      'Recommendation Generation',
      'Knowledge Synthesis',
    ],
    stack: 'LangGraph • OpenAI • Claude • Python • AWS',
    impact:
      'Reduced research effort, accelerated analysis workflows, and improved the quality and consistency of decision support outputs.',
    alt: false,
  },
]

export default function ProjectCaseStudies() {
  return (
    <>
      {caseStudies.map(({ index, name, subtitle, summary, problem, solution, capabilities, stack, impact, alt }) => (
        <section key={name} className={alt ? 'section-alt' : 'section'}>
          <div className="container">
            <span className="section-label">CASE STUDY {index}</span>
            <h2 className="mb-2">{name}</h2>
            <h3 className="text-muted font-normal mb-6">{subtitle}</h3>
            <p className="text-[1.05rem] mb-10 max-w-[65ch]">{summary}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-foreground font-semibold mb-3">The Problem</h4>
                <p className="max-w-none">{problem}</p>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-3">The Solution</h4>
                <p className="max-w-none">{solution}</p>
              </div>
            </div>

            <h4 className="text-foreground font-semibold mb-4">Key Capabilities</h4>
            <ul className="flex flex-wrap gap-3 mb-8">
              {capabilities.map((cap) => (
                <li
                  key={cap}
                  className="px-4 py-2 rounded-full bg-accent/[0.1] border border-accent/20 text-accent text-sm"
                >
                  {cap}
                </li>
              ))}
            </ul>

            <h4 className="text-foreground font-semibold mb-2">Technology Stack</h4>
            <p className="mb-8 max-w-none font-mono text-sm">{stack}</p>

            <h4 className="text-foreground font-semibold mb-2">Business Impact</h4>
            <p className="max-w-[65ch]">{impact}</p>
          </div>
        </section>
      ))}
    </>
  )
}
