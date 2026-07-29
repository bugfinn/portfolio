'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'

export default function ContactForm() {
  const [form,   setForm]   = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('sending')
  try {
    const { postContact } = await import('@/lib/api')
    const result = await postContact(form.name, form.email, form.message)
    if (result.success) {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
setTimeout(() => {
  setStatus('idle')
}, 5000)
      if (status === 'error') {
  return (
    <section
      id="contact"
      style={{ padding: '64px 24px', maxWidth: '896px', margin: '0 auto', borderTop: '1px solid var(--border)' }}
    >
      <div
        style={{
          textAlign:       'center',
          padding:         '48px 24px',
          backgroundColor: 'var(--bg-card)',
          border:          '1px solid var(--border)',
          borderRadius:    '12px',
        }}
      >
        <p style={{ fontSize: '32px', marginBottom: '12px' }}>❌</p>
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-1)', marginBottom: '8px' }}>
          Something went wrong
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--text-2)', marginBottom: '16px' }}>
          Please try again or email me directly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          style={{ color: 'var(--accent)', cursor: 'pointer', background: 'none', border: 'none', fontSize: '14px', fontWeight: '600' }}
        >
          Try again
        </button>
      </div>
    </section>
  )
}
    } else {
      setStatus('error')
    }
  } catch {
    setStatus('error')
  }
}

  const inputStyle = {
    width:           '100%',
    padding:         '10px 14px',
    backgroundColor: 'var(--bg-card)',
    border:          '1px solid var(--border)',
    borderRadius:    '8px',
    fontSize:        '14px',
    color:           'var(--text-1)',
    outline:         'none',
    fontFamily:      'inherit',
    transition:      'border-color 0.15s',
  }

  const labelStyle = {
    display:      'block',
    fontSize:     '13px',
    fontWeight:   '600',
    color:        'var(--text-2)',
    marginBottom: '6px',
  }

  if (status === 'sent') {
  return (
    <section
      id="contact"
      style={{ padding: '64px 24px', maxWidth: '896px', margin: '0 auto', borderTop: '1px solid var(--border)' }}
    >
      <div
        style={{
          padding:         '48px 24px',
          backgroundColor: 'var(--bg-card)',
          border:          '1px solid var(--border)',
          borderRadius:    '12px',
          position:        'relative',
          overflow:        'hidden',
          textAlign:       'center',
        }}
      >
        <p style={{ fontSize: '32px', marginBottom: '12px' }}>✅</p>
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-1)', marginBottom: '8px' }}>
          Message sent!
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--text-2)', marginBottom: '20px' }}>
          Thanks for reaching out — I will get back to you soon.
        </p>
        <button
          onClick={() => setStatus('idle')}
          style={{
            color:      'var(--accent)',
            cursor:     'pointer',
            background: 'none',
            border:     'none',
            fontSize:   '13px',
            fontWeight: '600',
            padding:    0,
          }}
        >
          Send another message
        </button>

        {/* Progress bar */}
        <div
          style={{
            position:        'absolute',
            bottom:          0,
            left:            0,
            height:          '3px',
            backgroundColor: 'var(--accent)',
            animation:       'drain 5s linear forwards',
            width:           '100%',
          }}
        />
      </div>
    </section>
  )
}

  return (
    <section
      id="contact"
      style={{
        padding:   '64px 24px 80px',
        maxWidth:  '896px',
        margin:    '0 auto',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Heading */}
      <div style={{ marginBottom: '40px' }}>
        <p style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '8px' }}>
          Get In Touch
        </p>
        <h2 style={{ fontSize: '28px', fontWeight: '700', letterSpacing: '-0.02em', color: 'var(--text-1)', marginBottom: '10px' }}>
          Contact
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--text-2)', maxWidth: '440px', lineHeight: '1.7' }}>
          Have a project in mind or want to talk cloud? Drop me a message and
          I&apos;ll get back to you within 24 hours.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display:         'flex',
          flexDirection:   'column',
          gap:             '20px',
          maxWidth:        '560px',
          backgroundColor: 'var(--bg-card)',
          border:          '1px solid var(--border)',
          borderRadius:    '12px',
          padding:         '32px',
        }}
      >
        {/* Name */}
        <div>
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e)  => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={(e)   => (e.target.style.borderColor = 'var(--border)')}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e)  => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={(e)   => (e.target.style.borderColor = 'var(--border)')}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" style={labelStyle}>Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project or question..."
            value={form.message}
            onChange={handleChange}
            style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
            onFocus={(e)  => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={(e)   => (e.target.style.borderColor = 'var(--border)')}
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Send Message →'}
        </Button>
      </form>
    </section>
  )
}