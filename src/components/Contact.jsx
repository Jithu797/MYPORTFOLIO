import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { CONTACT } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'

const EMAILJS = {
  serviceId:  'service_syzyr8q',
  templateId: 'template_514j1d9',
  publicKey:  'WuCYQayeFSQtQPG4m',
}

export default function Contact() {
  const infoRef = useReveal()
  const formRef = useReveal(0.15)

  const [form,    setForm]    = useState({ name: '', mail: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent,    setSent]    = useState(false)
  const [error,   setError]   = useState('')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        { from_name: form.name, from_email: form.mail, message: form.message },
        EMAILJS.publicKey,
      )
      setSent(true)
      setForm({ name: '', mail: '', message: '' })
    } catch {
      setError('Failed to send. Please try again or email directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">07 — Contact</span>
          <h2 className="section__title">Reach Out</h2>
        </div>

        <div className="contact__grid">
          {/* Info */}
          <div className="contact__info reveal" ref={infoRef}>
            <p className="contact__intro">
              I&apos;m actively looking for new opportunities. Whether you have a question,
              a project idea, or just want to say hi — my inbox is always open.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <i className="uil uil-phone-alt" />
                <div>
                  <span className="detail-label">Phone</span>
                  <a href={`tel:${CONTACT.phone}`} className="detail-value">{CONTACT.phone}</a>
                </div>
              </div>
              <div className="contact__detail">
                <i className="uil uil-envelope-alt" />
                <div>
                  <span className="detail-label">Email</span>
                  <a href={`mailto:${CONTACT.email}`} className="detail-value">{CONTACT.email}</a>
                </div>
              </div>
              <div className="contact__detail">
                <i className="uil uil-location-point" />
                <div>
                  <span className="detail-label">Location</span>
                  <span className="detail-value">{CONTACT.location}</span>
                </div>
              </div>
            </div>

            <div className="contact__socials">
              {CONTACT.socials.map(s => (
                <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="contact__social">
                  <i className={`uil ${s.icon}`} /> {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="contact__form glass reveal" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text" name="name" className="form-input"
                placeholder="Your Name" value={form.name}
                onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <input
                type="email" name="mail" className="form-input"
                placeholder="Your Email" value={form.mail}
                onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message" className="form-input form-textarea"
                placeholder="Your Message" rows={5} value={form.message}
                onChange={handleChange} required
              />
            </div>

            {sent  && <p className="form-success">Message sent successfully!</p>}
            {error && <p className="form-error">{error}</p>}

            <button type="submit" className="btn btn--primary btn--full" disabled={sending}>
              {sending ? 'Sending…' : <>Send Message <i className="uil uil-message" /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
