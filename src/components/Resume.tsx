import { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Download,
  Mail,
  Code2,
  Languages,
} from 'lucide-react'

interface ResumeProps {
  onBack: () => void
}

/* ─── Colors ─── */
const ACCENT = '#D4845A'   // warm copper — distinctive, prints with presence
const HEADER_BG = '#111827' // gray-900 — neutral charcoal, lets accent pop

const Resume = ({ onBack }: ResumeProps) => {
  useEffect(() => {
    const prev = document.title
    document.title = 'Resume — Abdou Nuru NIYIGENA'
    return () => { document.title = prev }
  }, [])

  return (
    <div className="min-h-screen bg-gray-200 print:bg-white print:min-h-0">
      {/* ── Floating action bar (web only) ── */}
      <div className="fixed top-0 left-0 right-0 z-50 print:hidden bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[850px] mx-auto px-4 sm:px-6 py-2.5 flex justify-between items-center">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="flex items-center space-x-2 px-3.5 py-1.5 border border-gray-200 rounded-lg text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-all text-sm font-medium"
          >
            <ArrowLeft size={15} />
            <span className="hidden sm:inline">Back to Portfolio</span>
            <span className="sm:hidden">Back</span>
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => window.print()}
            className="flex items-center space-x-2 px-3.5 py-1.5 bg-[#D4845A] text-white rounded-lg hover:bg-[#c0754d] transition-all text-sm font-medium"
          >
            <Download size={15} />
            <span className="hidden sm:inline">Download PDF</span>
            <span className="sm:hidden">PDF</span>
          </motion.button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          RESUME DOCUMENT
          ══════════════════════════════════════════════ */}
      <div
        id="resume-page"
        className="max-w-[850px] mx-2 sm:mx-4 md:mx-auto mt-14 mb-10 bg-white shadow-lg print:shadow-none print:mt-0 print:mb-0 print:max-w-none print:mx-0"
      >
        {/* ═══ HEADER BAND ═══ */}
        <header className="text-center px-5 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 print:py-8 print:px-8" style={{ backgroundColor: HEADER_BG }}>
          <h1
            className="text-[22px] sm:text-[28px] md:text-[32px] font-extrabold uppercase tracking-[0.08em] sm:tracking-[0.15em] leading-tight"
            style={{ color: ACCENT }}
          >
            ABDOU NURU NIYIGENA
          </h1>
          <p className="text-white/80 text-[13px] mt-1.5 font-normal tracking-wide">
            Full-Stack Software Engineer
          </p>
          <a
            href="https://abdounuru.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] mt-1 inline-block hover:underline"
            style={{ color: ACCENT }}
          >
            www.abdounuru.com
          </a>
        </header>

        {/* ═══ PROFESSIONAL SUMMARY ═══ */}
        <div className="px-5 sm:px-8 md:px-10 py-4 sm:py-5 border-b border-gray-200 print:px-8 print:py-4">
          <p className="text-[12px] text-gray-600 leading-[1.7] italic">
            Full-stack software engineer with 5+ years of experience delivering digital banking
            products across four financial institutions in Rwanda. Currently owning the Internet
            Banking Platform at Bank of Kigali, the country's largest commercial bank, serving
            tens of thousands of retail and corporate customers. Collaborating within a 25+
            engineer organization to ship features that process real transactions daily. Proven ability to deliver
            end-to-end solutions in high-stakes, regulated environments.
          </p>
        </div>

        {/* ═══ TWO-COLUMN BODY ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] print:grid-cols-[3fr_2fr]">
          {/* ──────── LEFT COLUMN ──────── */}
          <div className="px-5 sm:px-8 md:px-10 pt-5 sm:pt-6 pb-5 sm:pb-6 md:border-r md:border-[#D4845A] print:px-8 print:pt-5 print:pb-4 print:border-r print:border-[#D4845A]">
            {/* EXPERIENCE */}
            <LeftSectionHeader title="Experience" />

            <div className="mt-4 space-y-0">
              <TimelineEntry
                period="2022 – Present"
                title="Full-Stack Software Engineer"
                company="Bank of Kigali PLC — Digital Factory"
                bullets={[
                  <>Architect and deliver <strong>end-to-end web applications</strong> across the bank's digital products, owning both frontend and backend systems from design to deployment.</>,
                  <>Own the <strong>Internet Banking Platform</strong> serving retail and corporate customers, shipping features that process real transactions daily.</>,
                  <>Led the rebuild of the <strong>Bank of Kigali's official website</strong>, delivering faster load times and a modern user experience.</>,
                ]}
              />
              <TimelineEntry
                period="2021 – 2022"
                title="Software Engineer"
                company="Equity Bank Rwanda PLC"
                bullets={[
                  <>Built integrations powering the bank's <strong>digital banking channels</strong>, connecting core systems to customer-facing web and mobile products.</>,
                  <>Improved reliability of in-house banking applications by resolving recurring issues and <strong>reducing system downtime</strong>.</>,
                  <>Developed internal tools adopted across multiple departments, streamlining day-to-day operations.</>,
                ]}
              />
              <TimelineEntry
                period="2020 – 2021"
                title="Software Engineer"
                company="Guaranty Trust Bank (Rwanda) PLC"
                bullets={[
                  <>Developed internal applications that automated manual processes and supported <strong>core banking operations</strong>.</>,
                  <>Monitored system performance, identified bottlenecks, and delivered reports that informed <strong>infrastructure improvements</strong>.</>,
                ]}
              />
              <TimelineEntry
                period="2019 – 2020"
                title="Software Engineer"
                company="Andela"
                bullets={[
                  <>Built full-stack web applications following <strong>test-driven development</strong> practices across multiple projects.</>,
                  <>Authored implementation plans and technical documentation that enabled smooth <strong>team onboarding and project handoffs</strong>.</>,
                  <>Conducted thorough code reviews, improving <strong>code quality</strong> and consistency across the team.</>,
                ]}
                isLast
              />
            </div>

            {/* EDUCATION */}
            <LeftSectionHeader title="Education" className="mt-5" />

            <div className="mt-4 space-y-0">
              <TimelineEntry
                period="2016 – 2020"
                title="BSc in Information Technology — Software Engineering"
                company="Adventist University of Central Africa, Kigali"
                isLast
              />
            </div>
          </div>

          {/* ──────── RIGHT COLUMN ──────── */}
          <div className="px-5 sm:px-7 md:px-8 pt-5 sm:pt-6 pb-5 sm:pb-6 border-t border-gray-200 md:border-t-0 print:px-6 print:pt-5 print:pb-4 print:border-t-0">
            {/* SKILLS */}
            <RightSectionHeader icon={Code2} title="Technical Skills" />
            <div className="mt-3 space-y-3">
              <SkillGroup label="Languages" items={['JavaScript', 'TypeScript', 'Java', 'Python']} />
              <SkillGroup label="Frontend" items={['React', 'React Native', 'Next.js', 'Tailwind CSS']} />
              <SkillGroup label="Backend" items={['Node.js', 'NestJS', 'Express', 'Spring Boot', 'FastAPI']} />
              <SkillGroup label="Data" items={['PostgreSQL', 'MongoDB', 'Redis']} />
              <SkillGroup label="Cloud & Tools" items={['AWS', 'Docker', 'GitHub Actions', 'Vercel', 'Git', 'Linux']} />
              <SkillGroup label="Design" items={['Figma']} />
            </div>

            {/* LANGUAGES */}
            <RightSectionHeader icon={Languages} title="Languages" className="mt-6" />
            <ul className="mt-3 space-y-1">
              <BulletItem>English (Very Good)</BulletItem>
              <BulletItem>French (Very Good)</BulletItem>
              <BulletItem>Swahili (Fair)</BulletItem>
              <BulletItem>Kinyarwanda (Native)</BulletItem>
            </ul>

            {/* CONTACT */}
            <RightSectionHeader icon={Mail} title="Contact" className="mt-6" />
            <ul className="mt-3 space-y-1">
              <BulletItem>
                <a href="mailto:abdoulniyigena@gmail.com" className="hover:text-[#D4845A] transition-colors">
                  abdoulniyigena@gmail.com
                </a>
              </BulletItem>
              <BulletItem>
                <a href="tel:+250788470370" className="hover:text-[#D4845A] transition-colors">
                  +250 788 470 370
                </a>
              </BulletItem>
              <BulletItem>
                <a href="https://www.linkedin.com/in/abdou-nuru-niyigena/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4845A] transition-colors">
                  linkedin.com/in/abdou-nuru-niyigena
                </a>
              </BulletItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════════════ */

/** Left-column section header — text + accent underline (no icon) */
const LeftSectionHeader = ({ title, className = '' }: { title: string; className?: string }) => (
  <div className={className}>
    <h2 className="text-[13px] font-bold text-gray-900 uppercase tracking-[0.15em]">
      {title}
    </h2>
    <div className="w-14 h-[2.5px] mt-1" style={{ backgroundColor: ACCENT }} />
  </div>
)

/** Right-column section header — icon in circle + text + accent underline */
const RightSectionHeader = ({
  icon: Icon,
  title,
  className = '',
}: {
  icon: React.ElementType
  title: string
  className?: string
}) => (
  <div className={className}>
    <div className="flex items-center space-x-2">
      <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center shrink-0">
        <Icon size={10} className="text-gray-500" />
      </div>
      <h2 className="text-[13px] font-bold text-gray-900 uppercase tracking-[0.15em]">
        {title}
      </h2>
    </div>
    <div className="w-14 h-[2.5px] mt-1 ml-7" style={{ backgroundColor: ACCENT }} />
  </div>
)

/** Timeline entry — three-column: date | dot+line | content */
const TimelineEntry = ({
  period,
  title,
  company,
  bullets,
  isLast = false,
}: {
  period: string
  title: string
  company: string
  bullets?: React.ReactNode[]
  isLast?: boolean
}) => (
  <div className="grid grid-cols-[65px_16px_1fr] sm:grid-cols-[85px_20px_1fr] print:grid-cols-[85px_20px_1fr]">
    {/* Date */}
    <p className="text-[10px] text-gray-400 font-medium text-right pr-1 sm:pr-2 pt-[3px] leading-tight">
      {period}
    </p>

    {/* Dot + line */}
    <div className="flex flex-col items-center">
      <div className="w-[7px] h-[7px] sm:w-[9px] sm:h-[9px] rounded-full border-[1.5px] border-gray-400 bg-white mt-[3px] shrink-0 relative z-10" />
      {!isLast && <div className="w-px flex-1 bg-gray-200" />}
    </div>

    {/* Content */}
    <div className={`pl-2 ${isLast ? 'pb-0' : 'pb-4'}`}>
      <h3 className="text-[13px] font-bold text-gray-900 leading-tight">{title}</h3>
      <p className="text-[10px] sm:text-[9px] text-gray-400 uppercase tracking-[0.12em] mt-[2px]">{company}</p>

      {bullets && bullets.length > 0 && (
        <ul className="mt-2 space-y-1">
          {bullets.map((b, i) => (
            <li key={i} className="text-[11.5px] text-gray-600 leading-[1.6] flex items-start">
              <span className="text-gray-400 mr-1.5 mt-[1px] shrink-0 text-[8px] leading-[1.6]">•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
)

/** Skill group with small pills */
const SkillGroup = ({ label, items }: { label: string; items: string[] }) => (
  <div>
    <p className="text-[10px] font-semibold text-gray-800 uppercase tracking-wide mb-1">{label}</p>
    <div className="flex flex-wrap gap-1">
      {items.map((item) => (
        <span
          key={item}
          className="px-2 py-[1px] bg-gray-50 border border-gray-200 rounded text-[10px] text-gray-600 print:bg-gray-50 print:border-gray-300"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
)

/** Simple bullet list item */
const BulletItem = ({ children }: { children: React.ReactNode }) => (
  <li className="text-[12px] text-gray-700 flex items-start leading-relaxed">
    <span className="text-gray-400 mr-2 mt-[2px] shrink-0 text-[8px]">•</span>
    <span>{children}</span>
  </li>
)

export default Resume
