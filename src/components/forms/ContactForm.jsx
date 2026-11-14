import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import FormField from './FormField';
import Button from '../common/Button';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'general',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or inquiry details.';
    } else if (formData.message.length < 15) {
      errs.message = 'Message must be at least 15 characters long.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Frontend foundation readiness state (ready for future MERN API integration)
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-cricket-dark-card border border-cricket-green/40 text-center space-y-4">
        <div className="w-14 h-14 mx-auto rounded-full bg-cricket-green/10 text-cricket-green flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-white">
          Transmission Received
        </h3>
        <p className="text-sm text-cricket-muted max-w-md mx-auto">
          Thank you for reaching out to <strong className="text-white">CRICKET27</strong>. Our studio relations team will review your enquiry and respond to <span className="text-cricket-green">{formData.email}</span>.
        </p>
        <div className="pt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', email: '', inquiryType: 'general', message: '' });
            }}
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-2xl bg-cricket-dark-card border border-cricket-dark-border space-y-5"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          label="Your Name"
          name="name"
          placeholder="e.g. Alex Morgan"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <FormField
          label="Email Address"
          name="email"
          type="email"
          placeholder="e.g. alex@example.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
      </div>

      <div className="w-full space-y-1.5">
        <label
          htmlFor="inquiryType"
          className="block text-xs font-display font-semibold uppercase tracking-wider text-cricket-silver"
        >
          Inquiry Type
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-cricket-dark-elevated border border-cricket-dark-border text-white text-sm focus:border-cricket-green focus:outline-none transition-colors"
        >
          <option value="general">General Brand Inquiry</option>
          <option value="creator">Creator & Streamer Program</option>
          <option value="press">Press & Media Relations</option>
          <option value="partnership">Esports & Brand Partnership</option>
          <option value="feedback">Game Concept Feedback</option>
        </select>
      </div>

      <FormField
        label="Message"
        name="message"
        placeholder="Tell us about your proposal, query, or feedback..."
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        isTextarea
        rows={5}
        required
      />

      <Button
        type="submit"
        variant="primary"
        size="md"
        className="w-full"
        icon={Send}
        iconPosition="right"
      >
        Transmit Message
      </Button>
    </form>
  );
};

export default ContactForm;
