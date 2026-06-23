const caseStudies = [
  {
    label: 'KORA',
    title: 'Enterprise Knowledge & Onboarding Platform',
    summary:
      'Kora was designed to transform organizational knowledge into an intelligent onboarding and knowledge discovery experience.',
    diagram: `Enterprise Documents
          ↓
Document Processing
          ↓
Embedding Pipeline
          ↓
Vector Database
          ↓
Retrieval Layer
          ↓
LLM Reasoning Layer
          ↓
Knowledge Assistant
          ↓
Employee Experience`,
    challenge: 'Organizations struggle to make institutional knowledge discoverable and usable.',
    focus: 'Retrieval-Augmented Generation, knowledge retrieval, semantic search, document intelligence.',
    components: [
      'Document Ingestion',
      'Embedding Generation',
      'Vector Search',
      'Knowledge Retrieval',
      'LLM Reasoning',
    ],
    alt: false,
  },
  {
    label: 'QUILL',
    title: 'AI-Powered Statement of Work Generation',
    summary:
      'Quill automates the generation of Statements of Work, reducing manual effort while maintaining consistency and quality.',
    diagram: `Project Inputs
        ↓
Requirement Extraction
        ↓
Context Enrichment
        ↓
SOW Generation Engine
        ↓
Validation Layer
        ↓
Review Workflow
        ↓
Final Deliverable`,
    challenge: 'Manual document creation slows project delivery and introduces inconsistency.',
    focus: 'Document intelligence, workflow automation, context-aware generation.',
    components: [
      'Requirement Analysis',
      'Context Collection',
      'Generation Pipeline',
      'Review Layer',
      'Approval Workflow',
    ],
    alt: true,
  },
  {
    label: 'ATLAS',
    title: 'Multi-Agent Research & Decision Intelligence Platform',
    summary:
      'Atlas coordinates multiple specialized agents to support research, analysis, evaluation, and recommendation workflows.',
    diagram: `User Request
      ↓
Research Agent
      ↓
Analysis Agent
      ↓
Evaluation Agent
      ↓
Recommendation Agent
      ↓
Decision Brief`,
    challenge:
      'Complex decisions require gathering, analyzing, and synthesizing large volumes of information.',
    focus: 'Agent orchestration, decision intelligence, multi-agent systems, research automation.',
    components: [
      'Agent Coordination',
      'Research Pipelines',
      'Evaluation Frameworks',
      'Decision Support',
      'Intelligence Workflows',
    ],
    alt: false,
  },
]

export default function ArchitectureCaseStudies() {
  return (
    <>
      {caseStudies.map(({ label, title, summary, diagram, challenge, focus, components, alt }) => (
        <section key={label} className={alt ? 'section-alt' : 'section'}>
          <div className="container">
            <span className="section-label">{label}</span>
            <h2>{title}</h2>
            <p className="mb-8 max-w-[65ch]">{summary}</p>

            <div className="bg-white border border-border rounded-md p-8 mb-10 overflow-x-auto">
              <pre className="text-muted font-mono text-sm leading-relaxed">{diagram}</pre>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="mb-3">Challenge</h3>
                <p className="max-w-none">{challenge}</p>
              </div>
              <div>
                <h3 className="mb-3">Architecture Focus</h3>
                <p className="max-w-none">{focus}</p>
              </div>
              <div>
                <h3 className="mb-3">Key Components</h3>
                <ul className="space-y-1">
                  {components.map((c) => (
                    <li key={c} className="text-muted text-sm">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
