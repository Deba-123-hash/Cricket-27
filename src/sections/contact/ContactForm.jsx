import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, RotateCcw, AlertCircle, Info } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { INQUIRY_TYPES } from '../../data/contact';
import { useToast } from '../../hooks/useToast';
import { validateInquiryForm } from '../../utils/validators';

const INITIAL_FORM_STATE = {
  fullName: '',
  email: '',
  inquiryType: 'General Inquiry',
  subject: '',
  message: '',
  privacyAccepted: false,
};

export const ContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { success, info, error: toastError } = useToast();

  const validateAll = () => {
    const { errors: validationErrors } = validateInquiryForm(formData, INQUIRY_TYPES);
    return validationErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    // Clear error for this field as user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateAll();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toastError('Please check the required fields highlighted in the form.');
      return;
    }

    // Local validation successful - frontend only
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      success('Inquiry validated successfully!');
    }, 400);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setErrors({});
    setIsSubmitted(false);
    info('Inquiry form reset');
  };

  return (
    <section
      id="contact-form-section"
      aria-labelledby="contact-form-heading"
      className="relative py-24 sm:py-32 bg-midnight-light border-b border-slate/60 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-lime/5 rounded-full blur-[170px]" />
      </div>

      <Container size="md" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="lime" size="sm" className="mb-4">
            INQUIRY FORM
          </Badge>
          <h2
            id="contact-form-heading"
            className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-warm-white uppercase mb-4"
          >
            SEND US A <span className="text-lime">MESSAGE.</span>
          </h2>
          <p className="text-base sm:text-lg text-warm-white/75 font-sans leading-relaxed">
            Share your inquiry using the form below. Please note that this is a frontend demonstration portal in active pre-production.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-brand-xl bg-slate-card/90 border border-slate p-6 sm:p-10 md:p-12 shadow-card-elevated relative overflow-hidden">
          {/* Subtle Accent Glow Bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-lime to-transparent" />

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              /* Success / Validated State */
              <motion.div
                key="submission-feedback"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="py-10 sm:py-14 text-center max-w-lg mx-auto space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-lime/10 border border-lime/40 text-lime mx-auto flex items-center justify-center shadow-lime-glow">
                  <CheckCircle2 className="w-9 h-9" aria-hidden="true" />
                </div>

                <div className="space-y-3">
                  <span className="font-mono text-xs text-lime uppercase tracking-widest font-bold">
                    VALIDATION COMPLETE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-black uppercase text-warm-white tracking-wide">
                    INQUIRY VALIDATED
                  </h3>
                  <div className="p-4 rounded-brand bg-midnight/80 border border-slate text-sm sm:text-base text-warm-white font-sans leading-relaxed">
                    <p className="font-semibold text-lime">
                      Your form has been validated successfully. Message delivery is not available yet.
                    </p>
                    <p className="text-xs text-muted-text mt-2">
                      All inputs complied with our inquiry schema. Verified backend routing will be introduced in a future development phase.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex justify-center">
                  <Button
                    onClick={handleReset}
                    variant="primary"
                    size="md"
                    className="gap-2 group shadow-lime-glow"
                  >
                    <RotateCcw className="w-4 h-4 group-hover:-rotate-90 transition-transform duration-300" />
                    <span>PREPARE ANOTHER INQUIRY</span>
                  </Button>
                </div>
              </motion.div>
            ) : (
              /* Active Contact Form */
              <motion.form
                key="active-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6"
              >
                {/* Notice Banner */}
                <div className="p-4 rounded-brand bg-midnight/70 border border-slate/80 flex items-start gap-3 text-xs font-sans text-muted-text">
                  <Info className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                  <span>
                    This form performs local validation only. Inquiries are not stored in any database or transmitted externally.
                  </span>
                </div>

                {/* Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Field 1: Full Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-heading font-bold uppercase tracking-wider text-warm-white/90"
                    >
                      Full Name <span className="text-lime">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Liam Anderson"
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      className={`w-full px-4 py-3 rounded-brand bg-midnight border text-warm-white placeholder:text-muted-text/60 text-base sm:text-sm font-sans focus:outline-none transition-all duration-200 ${
                        errors.fullName
                          ? 'border-coral focus:border-coral focus:ring-1 focus:ring-coral/30'
                          : 'border-slate focus:border-lime focus:ring-1 focus:ring-lime/30'
                      }`}
                    />
                    {errors.fullName && (
                      <p
                        id="fullName-error"
                        className="text-xs text-coral flex items-center gap-1 font-mono pt-0.5"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 2: Email Address */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-heading font-bold uppercase tracking-wider text-warm-white/90"
                    >
                      Email Address <span className="text-lime">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. liam@example.com"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full px-4 py-3 rounded-brand bg-midnight border text-warm-white placeholder:text-muted-text/60 text-base sm:text-sm font-sans focus:outline-none transition-all duration-200 ${
                        errors.email
                          ? 'border-coral focus:border-coral focus:ring-1 focus:ring-coral/30'
                          : 'border-slate focus:border-lime focus:ring-1 focus:ring-lime/30'
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="text-xs text-coral flex items-center gap-1 font-mono pt-0.5"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Inquiry Type & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Field 3: Inquiry Type */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="inquiryType"
                      className="block text-xs font-heading font-bold uppercase tracking-wider text-warm-white/90"
                    >
                      Inquiry Type <span className="text-lime">*</span>
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.inquiryType}
                      aria-describedby={errors.inquiryType ? 'inquiryType-error' : undefined}
                      className={`w-full px-4 py-3 rounded-brand bg-midnight border text-warm-white text-base sm:text-sm font-sans focus:outline-none transition-all duration-200 ${
                        errors.inquiryType
                          ? 'border-coral focus:border-coral focus:ring-1 focus:ring-coral/30'
                          : 'border-slate focus:border-lime focus:ring-1 focus:ring-lime/30'
                      }`}
                    >
                      {INQUIRY_TYPES.map((type) => (
                        <option key={type} value={type} className="bg-midnight text-warm-white">
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.inquiryType && (
                      <p
                        id="inquiryType-error"
                        className="text-xs text-coral flex items-center gap-1 font-mono pt-0.5"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.inquiryType}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 4: Subject */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="block text-xs font-heading font-bold uppercase tracking-wider text-warm-white/90"
                    >
                      Subject <span className="text-lime">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      maxLength={100}
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Brief overview of your query"
                      aria-required="true"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      className={`w-full px-4 py-3 rounded-brand bg-midnight border text-warm-white placeholder:text-muted-text/60 text-base sm:text-sm font-sans focus:outline-none transition-all duration-200 ${
                        errors.subject
                          ? 'border-coral focus:border-coral focus:ring-1 focus:ring-coral/30'
                          : 'border-slate focus:border-lime focus:ring-1 focus:ring-lime/30'
                      }`}
                    />
                    {errors.subject && (
                      <p
                        id="subject-error"
                        className="text-xs text-coral flex items-center gap-1 font-mono pt-0.5"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Field 5: Message with Character Counter */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="message"
                      className="block text-xs font-heading font-bold uppercase tracking-wider text-warm-white/90"
                    >
                      Message <span className="text-lime">*</span>
                    </label>
                    <span
                      className={`text-xs font-mono ${
                        formData.message.length > 950
                          ? 'text-coral'
                          : 'text-muted-text'
                      }`}
                    >
                      {formData.message.length} / 1000 characters
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={1000}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your query, proposal, or thoughts in detail..."
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full px-4 py-3 rounded-brand bg-midnight border text-warm-white placeholder:text-muted-text/60 text-base sm:text-sm font-sans focus:outline-none transition-all duration-200 resize-y min-h-[120px] ${
                      errors.message
                        ? 'border-coral focus:border-coral focus:ring-1 focus:ring-coral/30'
                        : 'border-slate focus:border-lime focus:ring-1 focus:ring-lime/30'
                    }`}
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="text-xs text-coral flex items-center gap-1 font-mono pt-0.5"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Field 6: Privacy Acknowledgement Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer select-none group">
                    <input
                      type="checkbox"
                      id="privacyAccepted"
                      name="privacyAccepted"
                      checked={formData.privacyAccepted}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.privacyAccepted}
                      aria-describedby={errors.privacyAccepted ? 'privacyAccepted-error' : undefined}
                      className="mt-1 w-4 h-4 rounded border-slate bg-midnight text-lime focus:ring-lime/40 focus:ring-offset-midnight cursor-pointer accent-[#B7F34A]"
                    />
                    <span className="text-xs sm:text-sm text-warm-white/80 font-sans leading-relaxed group-hover:text-warm-white transition-colors">
                      I understand that this promotional website does not currently deliver messages to an external backend service. <span className="text-lime">*</span>
                    </span>
                  </label>
                  {errors.privacyAccepted && (
                    <p
                      id="privacyAccepted-error"
                      className="text-xs text-coral flex items-center gap-1 font-mono pt-1.5 pl-7"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.privacyAccepted}</span>
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    className="w-full sm:w-auto min-w-[220px] gap-2 shadow-lime-glow"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE</span>
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
