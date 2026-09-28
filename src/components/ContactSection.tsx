import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  Phone, 
  Building2, 
  Globe, 
  MessageSquare, 
  ShieldCheck, 
  Clock,
  Sparkles
} from 'lucide-react';

interface Props {
  plainLanguageMode: boolean;
}

export const ContactSection: React.FC<Props> = ({ plainLanguageMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Caregiver / Family Member',
    topic: 'Clinical Trial Information',
    urgency: 'Routine Question',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      role: 'Caregiver / Family Member',
      topic: 'Clinical Trial Information',
      urgency: 'Routine Question',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contact-section" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
            <Mail className="w-3.5 h-3.5 text-teal-600" />
            <span>Connect & Support — Route: /contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact the SPG11 Alliance & Research Network
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Have questions about clinical trial participation, accessing genetic testing resources, or sharing preclinical data? Our coordination team responds to families, physicians, and research scientists worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message Received</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. A dedicated SPG11 patient coordinator or research liaison will respond to <strong>{formData.email}</strong> within 1–2 business days.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs rounded-xl transition"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-teal-600" />
                    <span>Direct Inquiry Form</span>
                  </span>
                  <span className="text-[11px] text-slate-400">* Required fields</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maria Sanchez"
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. maria@example.com"
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Primary Role
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                    >
                      <option>Caregiver / Family Member</option>
                      <option>Patient with SPG11</option>
                      <option>Neurologist / Pediatric Neurologist</option>
                      <option>Clinical Geneticist</option>
                      <option>Physical / Occupational Therapist</option>
                      <option>Laboratory / Translational Researcher</option>
                      <option>Patient Advocacy Group</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Topic / Inquiry Category
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                    >
                      <option>Clinical Trial Information</option>
                      <option>Genetic Variant & Diagnosis Confirmation</option>
                      <option>Patient Wallet Card & Emergency Guidelines</option>
                      <option>Physical Therapy & Spasticity Management</option>
                      <option>Researcher Registry Collaboration</option>
                      <option>General Support & Peer Connection</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry, trial query, or request for guidance..."
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <ShieldCheck className="w-4 h-4 text-teal-600" />
                    <span>Encrypted & confidential correspondence</span>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl transition flex items-center gap-2 shadow-xs disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{submitting ? 'Sending...' : 'Submit Message'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Quick Help Contacts & Emergency Notice */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Urgent Medical Notice */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 space-y-2 text-xs">
              <div className="flex items-center gap-2 font-bold text-amber-900 uppercase tracking-wider text-[11px]">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <span>Urgent Medical Precaution</span>
              </div>
              <p className="leading-relaxed">
                This portal does not provide acute emergency services. If the patient is undergoing surgery or sedation, ensure anesthesiology is alerted that <strong>succinylcholine is strictly contraindicated</strong> due to fatal hyperkalemia risks in upper motor neuron disorders.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4 text-xs">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Building2 className="w-4 h-4 text-teal-600" />
                <span>Global Alliance Directory</span>
              </h4>

              <div className="space-y-3 divide-y divide-slate-100 text-slate-700">
                <div className="pt-2 flex items-start gap-3">
                  <Mail className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">General Scientific Inquiries</strong>
                    <span className="font-mono text-slate-500">liaison@spg11-hub.org</span>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-3">
                  <Clock className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Clinical Trial Helpdesk</strong>
                    <span>TreatHSP / SPATAX Protocol Coordinators (Mon-Fri 09:00 - 17:00 UTC)</span>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-3">
                  <Globe className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">International HSP Advocacy Alliances</strong>
                    <span>Spastic Paraplegia Foundation (USA), EURO-HSP (Europe), ASLA HSP (Australia)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
