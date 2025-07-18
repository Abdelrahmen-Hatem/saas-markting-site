import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import {
  ChevronDown,
  ChevronUp,
  Monitor,
  Database,
  Smartphone,
  Target,
  Share2,
  Search,
  PenTool,
  Video,
  Zap,
  Camera,
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Award,
  Clock
} from 'lucide-react'
import './App.css'

function App() {
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const services = [
    { icon: Monitor, title: "Website Design", description: "Custom, responsive websites that convert visitors into customers with modern design and seamless user experience." },
    { icon: Database, title: "CRM Systems", description: "Streamline your customer relationships with powerful CRM solutions that boost sales and improve retention." },
    { icon: Smartphone, title: "Mobile App Development", description: "Native and cross-platform mobile apps that engage users and drive business growth on iOS and Android." },
    { icon: Target, title: "Paid Advertising", description: "Data-driven ad campaigns across Google, Facebook, and other platforms that maximize ROI and reach your ideal customers." },
    { icon: Share2, title: "Social Media Management", description: "Strategic social media presence that builds brand awareness, engages audiences, and drives meaningful conversions." },
    { icon: Search, title: "SEO", description: "Comprehensive search engine optimization that improves rankings, increases organic traffic, and boosts online visibility." },
    { icon: PenTool, title: "Content Writing", description: "Compelling, SEO-optimized content that tells your brand story and converts readers into loyal customers." },
    { icon: Video, title: "Video Editing", description: "Professional video content that captures attention, tells your story, and drives engagement across all platforms." },
    { icon: Zap, title: "Motion Graphics", description: "Eye-catching animated graphics and visual effects that bring your brand to life and captivate audiences." },
    { icon: Camera, title: "Full Studio Production", description: "Complete photo and video production services with professional equipment and creative direction." }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Good Deals transformed our online presence completely. Our website traffic increased by 300% and conversions doubled within 3 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "GrowthCorp",
      text: "The team's strategic approach to our marketing campaigns delivered exceptional results. ROI improved by 250% in just 6 months.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "BrandForward",
      text: "Professional, creative, and results-driven. They helped us scale from startup to market leader with their comprehensive marketing solutions.",
      rating: 5
    }
  ]

  const faqs = [
    {
      question: "How long does it take to see results from your marketing services?",
      answer: "Results vary by service, but most clients see initial improvements within 30-60 days. SEO typically takes 3-6 months for significant results, while paid advertising can show results within days."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes! We work with startups, small businesses, and large enterprises. Our strategies are customized to fit your budget, goals, and industry requirements."
    },
    {
      question: "What makes Good Deals different from other marketing agencies?",
      answer: "We focus on data-driven strategies, transparent reporting, and measurable results. Our team combines creativity with analytics to deliver campaigns that actually move the needle for your business."
    },
    {
      question: "Can you help with both digital and traditional marketing?",
      answer: "While we specialize in digital marketing, we can integrate traditional marketing elements into a comprehensive strategy that maximizes your reach across all channels."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Absolutely! We offer ongoing support, maintenance, and optimization for all our services to ensure continued success and growth for your business."
    }
  ]

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setFormSubmitted(true)
        setFormData({ name: '', whatsapp: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky Button */}
      <button className="sticky-button" onClick={scrollToContact}>
        Let's Talk
      </button>

      {/* Header */}
      <header className="header-container">
        <div className="logo-section">
          <img src="/logoGtrans.png" alt="Good Deals Logo" className="company-logo" />
          <span className="company-name-header">Good Deals</span>
        </div>
        <div className="contact-button-container">
          <Button
            onClick={scrollToContact}
            className="neon-green-bg text-black text-lg px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform neon-glow"
          >
            Contact Us
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="floating-elements">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="floating-element"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`
              }}
            />
          ))}
        </div>
        
        <div className="container-custom text-center z-10 relative">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="neon-green neon-text-glow">GOOD DEALS</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300">Smart Moves. Real Growth.</p>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-400">
              A modern full-service marketing agency that helps brands scale fast through design, strategy, and results-driven content.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Marketing That <span className="neon-green neon-text-glow">Moves Fast</span>,<br />
              <span className="neon-green neon-text-glow">Grows Faster</span>.
            </h2>
            <Button 
              onClick={scrollToContact}
              className="neon-green-bg text-black text-lg px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform neon-glow"
            >
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <ChevronDown className="h-8 w-8 neon-green" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="neon-green">Good Deals</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine creativity, strategy, and cutting-edge technology to deliver results that matter to your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 neon-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2 neon-green">Expert Team</h3>
              <p className="text-gray-400">Seasoned professionals with proven track records</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 neon-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2 neon-green">Data-Driven Results</h3>
              <p className="text-gray-400">Every strategy backed by analytics and insights</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 neon-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2 neon-green">Award-Winning</h3>
              <p className="text-gray-400">Recognized excellence in digital marketing</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 neon-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2 neon-green">Fast Delivery</h3>
              <p className="text-gray-400">Quick turnaround without compromising quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="neon-green">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive marketing solutions designed to accelerate your business growth and maximize your digital presence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 neon-green-bg rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real Client Results */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Client <span className="neon-green">Results</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Numbers don't lie. Here's the impact we've made for businesses just like yours.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="stats-number">500+</div>
              <p className="text-xl text-gray-400 mt-2">Projects Completed</p>
            </div>
            <div>
              <div className="stats-number">300%</div>
              <p className="text-xl text-gray-400 mt-2">Average ROI Increase</p>
            </div>
            <div>
              <div className="stats-number">50+</div>
              <p className="text-xl text-gray-400 mt-2">Countries Served</p>
            </div>
            <div>
              <div className="stats-number">24/7</div>
              <p className="text-xl text-gray-400 mt-2">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="neon-green">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 neon-green fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="neon-green">Questions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Got questions? We've got answers. Here are the most common questions about our services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <span>{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 neon-green" />
                  ) : (
                    <ChevronDown className="h-5 w-5 neon-green" />
                  )}
                </div>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Create Something <span className="neon-green">Amazing</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to take your business to the next level? Get in touch with us today and let's discuss your project.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
            {formSubmitted ? (
              <div className="text-center py-10">
                <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-lg text-gray-300">Thank you for reaching out! We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-2">Name *</label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-lg font-medium text-gray-300 mb-2">WhatsApp</label>
                  <Input
                    type="text"
                    id="whatsapp"
                    placeholder="Your WhatsApp number"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">Email *</label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-2">Message *</label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows="5"
                    className="input-field"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full neon-green-bg text-black text-xl px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform neon-glow"
                >
                  Send Message <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 text-center">
        <div className="container-custom">
          <h3 className="text-4xl font-bold mb-4 neon-green">GOOD DEALS</h3>
          <p className="text-xl text-gray-400 mb-6">Smart Moves. Real Growth.</p>
          <p className="text-gray-500">
            &copy; 2024 Good Deals. All rights reserved. | Built with passion for results.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App


