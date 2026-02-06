
import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Loader2, Bot, Shield } from 'lucide-react';

/**
 * BREVO CONFIGURATION
 * 1. Get your API Key from: https://app.brevo.com/settings/keys/api
 * 2. Ensure your SENDER_EMAIL is verified in Brevo: https://app.brevo.com/settings/senders
 * 3. Set environment variables in .env file or Vercel project settings
 */
const BREVO_CONFIG = {
  API_KEY: import.meta.env.VITE_BREVO_API_KEY || '',
  SENDER_EMAIL: import.meta.env.VITE_BREVO_SENDER_EMAIL || 'myfromemail@mycompany.com',
  SENDER_NAME: import.meta.env.VITE_BREVO_SENDER_NAME || 'From name',
  ADMIN_RECEIVER_EMAIL: import.meta.env.VITE_BREVO_ADMIN_EMAIL || 'admin@mycompany.com', // Where you receive form submissions
  SMTP_API_ENDPOINT: 'https://api.brevo.com/v3/smtp/email'
};

interface RequirementsFormProps {
  onBack: () => void;
}

const RequirementsForm: React.FC<RequirementsFormProps> = ({ onBack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    requirements: ''
  });

  const sendEmailViaBrevo = async (data: typeof formData) => {
    const emailHtml = `
      <div style="font-family: 'Inter', sans-serif; color: #1e293b; line-height: 1.6; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
        <div style="background: #0f172a; padding: 30px; text-align: center;">
          <h1 style="color: #fbbf24; margin: 0; font-size: 24px; letter-spacing: -0.05em;">AutoFlowmation<span style="color: #3b82f6;">AI</span></h1>
          <p style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.2em; margin-top: 10px;">New Matrix Audit Request</p>
        </div>
        <div style="padding: 30px; background: #ffffff;">
          <p style="font-size: 16px; margin-bottom: 25px;">A new potential partner has initiated a system audit protocol. See details below:</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #64748b; width: 40%;">Full Name</td>
              <td style="padding: 12px; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #64748b;">Contact Email</td>
              <td style="padding: 12px; border-bottom: 1px solid #f1f5f9; color: #3b82f6; font-weight: 600;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #64748b;">Contact Number</td>
              <td style="padding: 12px; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${data.phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #64748b;">Company</td>
              <td style="padding: 12px; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${data.company}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #64748b;">Industry</td>
              <td style="padding: 12px; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${data.industry}</td>
            </tr>
          </table>
          <div style="margin-top: 30px; padding: 20px; background: #f8fafc; border-radius: 12px; border-left: 4px solid #3b82f6;">
            <h4 style="margin: 0 0 10px 0; color: #1e3a8a; font-size: 14px; text-transform: uppercase;">Automation Requirements:</h4>
            <p style="margin: 0; color: #334155; font-size: 15px;">${data.requirements}</p>
          </div>
        </div>
        <div style="background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="font-size: 11px; color: #94a3b8; margin: 0;">This transmission is encrypted and dispatched via Brevo SMTP.</p>
        </div>
      </div>
    `;

    // Send email to admin with form submission details
    return await fetch(BREVO_CONFIG.SMTP_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_CONFIG.API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: { 
          name: BREVO_CONFIG.SENDER_NAME, 
          email: BREVO_CONFIG.SENDER_EMAIL 
        },
        to: [{ 
          email: BREVO_CONFIG.ADMIN_RECEIVER_EMAIL, 
          name: 'AutoFlowmation Admin' 
        }],
        subject: `[NEW LEAD] ${data.company} - Audit Initiated by ${data.name}`,
        htmlContent: emailHtml,
        replyTo: { 
          email: data.email, 
          name: data.name 
        }
      })
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await sendEmailViaBrevo(formData);

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const errorData = await response.json();
        console.error("Brevo Error Response:", errorData);
        // If the error code is 401, it's an API Key issue. 400 is often a sender email verification issue.
        throw new Error(errorData.message || 'Transmission Interrupted');
      }
    } catch (error) {
      console.error("Critical Submission Error:", error);
      alert("Form submission failed. Configuration required: Ensure your Brevo API key is valid and sender email is verified in your Brevo dashboard.");
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
