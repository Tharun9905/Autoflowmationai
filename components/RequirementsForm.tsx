import React, { useState } from "react";
import { ArrowLeft, CheckCircle2, Loader2, Bot, Shield } from "lucide-react";

/**
 * FRONTEND → BACKEND COMMUNICATION
 * No secrets live here. All sensitive logic stays on the backend.
 */
const SEND_EMAIL_ENDPOINT = "/api/send-email";

interface RequirementsFormProps {
  onBack: () => void;
}

const RequirementsForm: React.FC<RequirementsFormProps> = ({ onBack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    requirements: ""
  });

  const sendEmailViaBackend = async (data: typeof formData) => {
    const response = await fetch(SEND_EMAIL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error("Server error");
    }

    return response.json();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const result = await sendEmailViaBackend(formData);

      if (result?.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(
          result?.message || "Submission failed. Please try again."
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage(
        "Unable to submit the form right now. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ================= SUCCESS STATE ================= */
  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-slate-50">
        <div className="max-w-2xl w-full bg-white rounded-[3rem] shadow-premium p-10 md:p-16 text-center border border-slate-100 animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-green-50 text-green-600 rounded-3xl flex items-center justify-center mx-auto mb-10">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">
            Request Received
          </h2>
          <p className="text-slate-500 mb-12 leading-relaxed text-lg font-medium">
            Thanks{" "}
            <span className="font-bold text-blue-600">
              {formData.name}
            </span>
            . Our team will review your requirements and reach out within
            24 hours.
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

  /* ================= FORM UI ================= */
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
              <span>Secure Submission</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter">
              Initiate Your <br />
              <span className="text-blue-600 italic">Matrix Audit</span>
            </h1>

            <p className="text-slate-500 mb-10 leading-relaxed text-lg font-medium">
              Specify your manual bottlenecks. We engineer autonomous
              systems that scale without friction.
            </p>
          </div>

          <div className="lg:col-span-3 bg-white rounded-[3rem] shadow-premium p-8 md:p-12 border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              {errorMessage && (
                <div className="bg-red-50 border-2 border-red-200 text-red-700 px-6 py-4 rounded-2xl font-semibold">
                  {errorMessage}
                </div>
              )}

              {/* FORM FIELDS — unchanged UI */}
              {/* (your existing inputs stay exactly the same below) */}

              {/* … no changes required here … */}

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
