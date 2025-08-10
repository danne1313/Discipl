import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Message sent successfully!');
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: 'example@gmail.com',
      subtitle: 'We reply within 24 hours',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: '+91 00000 00000',
      subtitle: 'Mon-Fri, 9AM-6PM IST',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      details: 'placeholder address',
      subtitle: 'city - pincode',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM IST',
      subtitle: 'Sat-Sun: 10AM-4PM IST',
    },
  ];

  const faqs = [
    {
      question: 'Question 1',
      answer: 'Answer 1'
    },
    {
      question: 'Question 2',
      answer: 'Answer 2'
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
    },
    {
      question: 'Question 4',
      answer: 'Answer 4',
    },
    {
      question: 'Question 5',
      answer: 'Answer 5',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Have questions about our platform? Want to partner with us? 
              We'd love to hear from you and help you on your fitness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-8 bg-neutral-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-primary-600 mb-4 flex justify-center">{info.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-lg text-neutral-700 font-medium mb-1">
                  {info.details}
                </p>
                <p className="text-sm text-neutral-600">{info.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  Send us a Message
                </h2>
                <p className="text-neutral-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="listing">Facility Listing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map/Additional Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  Our Location
                </h3>
                <div className="aspect-video bg-neutral-200 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center text-neutral-600">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">123 Fitness Ave, Health City, HC 12345</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-900">Address</p>
                      <p className="text-neutral-600">123 Fitness Ave, Health City, HC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-900">Office Hours</p>
                      <p className="text-neutral-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-neutral-600">Saturday - Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-8 w-8 text-primary-600 mr-3" />
                  <h3 className="text-xl font-bold text-neutral-900">
                    Need Immediate Help?
                  </h3>
                </div>
                <p className="text-neutral-600 mb-6">
                  Our support team is available during business hours to assist you with any questions or technical issues.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+15551234567"
                    className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    +1 (555) 123-4567
                  </a>
                  <a
                    href="mailto:support@discipl.com"
                    className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    support@discipl.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral-600">
              Find answers to common questions about Discipl and our services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-neutral-50 rounded-lg p-6 hover:bg-neutral-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;