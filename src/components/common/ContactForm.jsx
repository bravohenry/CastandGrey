import { useState } from 'react'
import { Input, Form, FormGroup, Button } from '../../design-system'

/**
 * ContactForm Component - Contact form with subject dropdown, name, email, and comment
 */
export const ContactForm = () => {
  const [formData, setFormData] = useState({
    subject: '',
    name: '',
    email: '',
    comment: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!formData.subject) newErrors.subject = 'Please select a subject'
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.comment) newErrors.comment = 'Comment is required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Handle form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setErrors({})
  }

  if (submitted) {
    return (
      <div className="bg-[#459361] text-[#FFFEF6] p-8 rounded-lg text-center">
        <p className="text-lg font-bold mb-2" style={{ fontFamily: 'Petrona, serif' }}>
          Thank you for your message!
        </p>
        <p style={{ fontFamily: 'Archivo, sans-serif' }}>
          We'll get back to you within 24-48 hours.
        </p>
      </div>
    )
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <label
          htmlFor="subject"
          className="block text-[14.6px] font-bold text-[#111111] mb-1"
          style={{ fontFamily: 'Archivo, sans-serif' }}
        >
          Subject <span className="text-[#E85C41]">*</span>
        </label>
        <select
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className={`w-full px-3 py-2 border rounded-lg text-[14.6px] text-[#111111] focus:outline-none ${
            errors.subject ? 'border-[#E85C41]' : 'border-[#848484] focus:border-[#459361]'
          }`}
          style={{ fontFamily: 'Archivo, sans-serif' }}
        >
          <option value="">Select a subject</option>
          <option value="general">General Inquiry</option>
          <option value="product">Product Question</option>
          <option value="service">Service Inquiry</option>
          <option value="support">Customer Support</option>
        </select>
        {errors.subject && (
          <p className="text-[#E85C41] text-sm mt-1">{errors.subject}</p>
        )}
      </FormGroup>

      <FormGroup>
        <Input
          label="Name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={!!errors.name}
          errorMessage={errors.name}
        />
      </FormGroup>

      <FormGroup>
        <Input
          label="Email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={!!errors.email}
          errorMessage={errors.email}
        />
      </FormGroup>

      <FormGroup>
        <label
          htmlFor="comment"
          className="block text-[14.6px] font-bold text-[#111111] mb-1"
          style={{ fontFamily: 'Archivo, sans-serif' }}
        >
          Comment <span className="text-[#E85C41]">*</span>
        </label>
        <textarea
          id="comment"
          value={formData.comment}
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          rows={5}
          className={`w-full px-3 py-2 border rounded-lg text-[14.6px] text-[#111111] focus:outline-none ${
            errors.comment ? 'border-[#E85C41]' : 'border-[#848484] focus:border-[#459361]'
          }`}
          style={{ fontFamily: 'Archivo, sans-serif' }}
        />
        {errors.comment && (
          <p className="text-[#E85C41] text-sm mt-1">{errors.comment}</p>
        )}
      </FormGroup>

      <div className="mt-6">
        <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
          Send Message
        </Button>
      </div>

      <p
        className="mt-4 text-sm text-[rgba(69,147,97,0.75)]"
        style={{ fontFamily: 'Archivo, sans-serif' }}
      >
        We typically respond within 24-48 hours.
      </p>
    </Form>
  )
}

