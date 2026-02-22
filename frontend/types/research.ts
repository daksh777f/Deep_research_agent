// ── Phase timeline types ─────────────────────────────────────────────────────

export interface Phase {
  id: string
  label: string
  status: 'pending' | 'active' | 'complete' | 'skipped'
  started_at: number | null
  completed_at: number | null
  elapsed_seconds: number | null
  log_entries: string[]
}

export interface ResearchTimelineProps {
  phases: Phase[]
  isLive: boolean
}

// ── Trust panel types ────────────────────────────────────────────────────────

export interface TrustMetrics {
  sources_analyzed: number
  independent_domains: number
  claims_verified: number
  claims_total: number
  contradictions_found: number
  confidence_score: number
  methodology_score: number
  bias_risk: 'low' | 'medium' | 'high'
  source_independence_index: number
}

export interface TrustPanelProps {
  metrics: TrustMetrics
  onContradictionClick: () => void
}

// ── Contradiction types ──────────────────────────────────────────────────────

export interface ConflictingClaim {
  text: string
  source_url: string
  source_domain: string
  trust_score: number
}

export interface Contradiction {
  id: string
  claim_a: ConflictingClaim
  claim_b: ConflictingClaim
  resolution_note: string
  severity: 'low' | 'moderate' | 'high'
}

export interface ContradictionSectionProps {
  contradictions: Contradiction[]
}

// ── Output mode types (Part 2) ──────────────────────────────────────────────

export type OutputMode = 'quick' | 'deep' | 'technical'

export type AudienceType = 'myself' | 'team' | 'executive' | 'client' | 'academic'

export type ExpertiseLevel = 'beginner' | 'intermediate' | 'expert'

export interface ModeSelectorProps {
  selected: OutputMode
  onChange: (mode: OutputMode) => void
}

export interface PersonalizationFieldsProps {
  audience: AudienceType
  expertiseLevel: ExpertiseLevel
  onAudienceChange: (val: AudienceType) => void
  onExpertiseLevelChange: (val: ExpertiseLevel) => void
}

// ── Research metrics types (Part 2) ─────────────────────────────────────────

export interface ResearchMetrics {
  rigor_level: string
  task_nodes: number
  graph_depth: number
  parallel_agents_used: number
  total_duration_seconds: number
  reliability_coverage_pct: number
  engineering_rigor_score: number
  model_routing_summary: string
  reflexion_iterations: number
  output_mode_used: string
}

export interface MetricsPanelProps {
  metrics: ResearchMetrics
  isDeveloperMode: boolean
}

// ── Part 3: Claim-level expander types ──────────────────────────────────────

export interface ClaimSource {
  url: string
  domain: string
  reliability: number
  snippet: string
}

export interface Claim {
  citation_marker: string          // e.g. "[1]"
  claim_text: string
  sources: ClaimSource[]
}

export interface ClaimExpanderProps {
  content: string
  sources: { url: string; reliability?: number; agent?: string; title?: string; content?: string }[]
  claims: Claim[]
  className?: string
  onChallenge?: (marker: string, claimText: string, originalDomains: string[], confidence: number) => void
  onViewGenome?: (sourceIndex: number) => void
  isChallenging?: boolean
}

// ── Part 3: Research gaps types ─────────────────────────────────────────────

export interface ResearchGaps {
  insufficient_evidence: string[]
  unresolved_contradictions: string[]
  scope_limitations: string[]
  suggested_followups: string[]
}

export interface ResearchGapsProps {
  gaps: ResearchGaps
  onFollowupClick?: (followup: string) => void
}

// ── Part 3: Continuation button types ───────────────────────────────────────

export interface Continuation {
  label: string
  query: string
  icon: string               // lucide-react icon name e.g. "Search"
  reason: string
}

export interface ContinuationButtonsProps {
  continuations: Continuation[]
  sessionId?: string
  onFollowupClick: (query: string) => void
  onExportClick: (format: string) => void
}

// ── Part 3: Session summary for phase navigator ────────────────────────────

export interface SessionSummary {
  id: string
  query: string
  status: string
  created_at: string
}

export interface PhaseNavigatorProps {
  phases: Phase[]
  isLive: boolean
  sessionHistory: SessionSummary[]
  onSessionClick: (id: string) => void
}

// ── Part 3: Developer mode toggle ──────────────────────────────────────────

export interface DeveloperModeToggleProps {
  enabled: boolean
  onToggle: (value: boolean) => void
}

// ── Part 3: Mobile panels drawer ───────────────────────────────────────────

export interface MobilePanelsDrawerProps {
  trustMetrics: TrustMetrics | null
  researchMetrics: ResearchMetrics | null
  isDeveloperMode: boolean
  onContradictionClick: () => void
}

// ── Part 4: Claim Challenge Mode ───────────────────────────────────────────

export interface ChallengeSource {
  url: string
  domain: string
  title: string
  snippet: string
  reliability: number
  agrees_with_original: boolean
}

export interface ChallengeResult {
  claim_marker: string
  claim_text: string
  verdict: 'corroborated' | 'refuted' | 'disputed'
  confidence_before: number
  confidence_after: number
  summary: string
  new_sources: ChallengeSource[]
  challenge_queries: string[]
}

export interface ChallengeResultProps {
  result: ChallengeResult
  onDismiss: () => void
}

// ── Part 4: Source Genome Tracer ───────────────────────────────────────────

export interface CitationHop {
  hop: number
  url: string
  domain: string
  domain_trust: number
  claim_text_at_this_hop: string
  source_type: string
  fetch_method: string
}

export interface SourceGenomeData {
  source_url: string
  source_domain: string
  citation_chain: CitationHop[]
  distortion_detected: boolean
  distortion_summary: string
}

export interface SourceGenomeProps {
  genome: SourceGenomeData
  isOpen: boolean
  onClose: () => void
}

// ── Part 4: Visual Evidence Graph ──────────────────────────────────────────

export interface GraphNode {
  id: string
  type: 'claim' | 'source'
  label: string
  confidence?: number
  reliability?: number
  domain?: string
}

export interface GraphEdge {
  source: string
  target: string
  relation: 'supports' | 'contradicts' | 'mentions'
  strength: number
}

export interface EvidenceGraphData {
  nodes: GraphNode[]
  edges: GraphEdge[]
}

export interface EvidenceGraphProps {
  sessionId: string
  isOpen: boolean
  onClose: () => void
}

// ── Part 4: Export Pipeline ────────────────────────────────────────────────

export type ExportFormat = 'pdf' | 'pptx' | 'docx' | 'markdown' | 'checklist'

// ── Part 4: Structured Comparison Mode ────────────────────────────────────

export interface ComparisonDimension {
  dimension: string
  subject_a_summary: string
  subject_b_summary: string
  winner: 'a' | 'b' | 'tie'
  confidence: number
}

export interface ComparisonResult {
  subject_a: string
  subject_b: string
  dimensions: ComparisonDimension[]
  overall_summary: string
  verdict: string
}

export interface ComparisonInputProps {
  comparisonMode: boolean
  setComparisonMode: (enabled: boolean) => void
  subjectA: string
  setSubjectA: (val: string) => void
  subjectB: string
  setSubjectB: (val: string) => void
}

export interface ComparisonTableProps {
  comparison: ComparisonResult | null
}
