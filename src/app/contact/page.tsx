'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <main className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-neutral-700 dark:text-neutral-300">
            Let's discuss how we can work together to create something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      mm355@njit.edu
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                      Location
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      New Jersey, USA
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                      Social Media
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.linkedin.com/in/mizan-modak-0336b9269/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://github.com/mizm13"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
} 