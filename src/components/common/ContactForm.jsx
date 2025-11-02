import { useState } from 'react'

/**
 * ContactForm 组件 - 联系表单
 * 用于 Contact 页面和其他需要联系功能的地方
 */
export function ContactForm() {
  const [formData, setFormData] = useState({
    subject: '',
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 表单提交逻辑
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // 重置表单
    setTimeout(() => {
      setFormData({
        subject: '',
        name: '',
        email: '',
        message: ''
      })
      setSubmitted(false)
    }, 3000)
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-stone-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-stone-600">
          We'll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-stone-200 p-6 md:p-8">
      {/* Subject */}
      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-semibold text-stone-900 mb-2">
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
        >
          <option value="">Select a subject</option>
          <option value="general">General Inquiry</option>
          <option value="order">Order Question</option>
          <option value="service">Service Booking</option>
          <option value="plant-care">Plant Care Help</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Name */}
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-semibold text-stone-900 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your full name"
          className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
        />
      </div>

      {/* Email */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-semibold text-stone-900 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@example.com"
          className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
        />
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-semibold text-stone-900 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Tell us how we can help you..."
          className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white px-8 py-4 rounded-md hover:bg-green-700 transition-colors font-semibold text-lg"
      >
        Send Message
      </button>

      {/* Response Policy */}
      <p className="text-sm text-stone-600 mt-4 text-center">
        We typically respond within 24 hours during business days.
      </p>
    </form>
  )
}

