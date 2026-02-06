
import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Loader2, Bot, Shield } from 'lucide-react';

/**
 * BACKEND API CONFIGURATION
 * API calls are now routed through your secure backend
 * API key is protected and never exposed to the frontend
 */
const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  SEND_EMAIL_ENDPOINT: '/api/send-email'
};

interface RequirementsFormProps {
  onBack: () => void;
}

const RequirementsForm: React.FC<RequirementsFormProps> = ({ onBack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    requirements: ''
  });

  const sendEmailViaBackend = async (data: typeof formData) => {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.SEND_EMAIL_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      const response = await sendEmailViaBackend(formData);
      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(data.message || 'Failed to send email. Please try again.');
        console.error("Submission error:", data);
      }
    } catch (error) {
      console.error("Critical submission error:", error);
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-slate-50">
        <div className="max-w-2xl w-full bg-white rounded-[3rem] shadow-premium p-10 md:p-16 text-center border border-slate-100 animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-green-50 text-green-600 rounded-3xl flex items-center justify-center mx-auto mb-10">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter brand-header">Request Received.</h2>
          <p className="text-slate-500 mb-12 leading-relaxed text-lg font-medium">
            Your request is now in our queue, <span className="font-bold text-blue-600">{formData.name}</span>. 
            Our team will review your requirements and reach out within 24 hours.
          </p>
          <button 
            onClick={onBack}
            className="w-full bg-slate-900 text-white py-6 rounded-[2rem] font-black text-xl hover:bg-blue-600 transition-all shadow-xl active:scale-[0.98]"
          >
            Return to Matrix Hub
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 bg-slate-50 px-4">
      <div className="container mx-auto max-w-5xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-slate-400 hover:text-slate-900 font-black uppercase tracking-[0.3em] text-[10px] mb-12 transition-all group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
          Terminate Session
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-2 pt-10">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
              <Shield className="w-4 h-4" />
              <span>Direct Email Submission</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter brand-header">
              Initiate Your <br />
              <span className="text-blue-600 italic">Matrix Audit.</span>
            </h1>
            <p className="text-slate-500 mb-10 leading-relaxed text-lg font-medium">
              Specify your manual bottlenecks. We engineer custom autonomous stacks that scale with zero friction.
            </p>
            <div className="space-y-6">
              {[
                "24/7 Priority Mail Monitoring",
                "Advanced Lead Filtration",
                "Direct Bravo SMTP Pipeline",
                "Infinite Scale Potential"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-[11px] font-black text-slate-800 uppercase tracking-tight">
                  <div className="w-6 h-6 rounded-xl bg-blue-600 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-[3rem] shadow-premium p-8 md:p-12 border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              {errorMessage && (
                <div className="bg-red-50 border-2 border-red-200 text-red-700 px-6 py-4 rounded-2xl font-semibold">
                  {errorMessage}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">Full Name</label>
                  <input 
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="E.g., Alexander Pierce"
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all outline-none font-semibold text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">Contact Email</label>
                  <input 
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="direct@brand.io"
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all outline-none font-semibold text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">Contact Number</label>
                  <input 
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 0000 000000"
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all outline-none font-semibold text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">Industry Vertical</label>
                  <select 
                    required
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all outline-none font-semibold text-slate-900"
                  >
                    <option value="">Select Vertical</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="SaaS / Fintech">SaaS / Fintech</option>
                    <option value="Health & Wellness">Health & Wellness</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Other">Other High-Growth</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">Company Name</label>
                <input 
                  required
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Brand Identity"
                  className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all outline-none font-semibold text-slate-900"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">Automation Requirements</label>
                <textarea 
                  required
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Specify which manual tasks currently hinder your growth..."
                  className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all outline-none resize-none font-semibold text-slate-900"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-900 text-white py-6 rounded-3xl font-black text-xl hover:bg-blue-600 transition-all shadow-2xl flex items-center justify-center gap-4 disabled:opacity-70 active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin text-yellow-400" />
                    Sending Details...
                  </>
                ) : (
                  <>
                    <Bot className="w-6 h-6 text-yellow-400" />
                    Deploy Audit Protocol
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementsForm;
