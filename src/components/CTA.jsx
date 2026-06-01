import { useReveal } from '../hooks/useReveal'

export default function CTA() {
  const ref = useReveal()
  return (
    <section className="cta-section section">
      <div className="container">
        <div className="cta-box glass reveal" ref={ref}>
          <h2>Let&apos;s Build Something <span className="grad-text">Extraordinary</span></h2>
          <p>Open to AI engineering roles, backend development, and agentic AI projects.</p>
          <a href="#contact" className="btn btn--primary btn--lg">
            Get In Touch <i className="uil uil-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  )
}
