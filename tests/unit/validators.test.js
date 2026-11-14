import { describe, it, expect } from 'vitest';
import {
  isValidEmail,
  validateRequired,
  validateMinLength,
  validateMaxLength,
  validateOption,
  validateNewsletterEmail,
  validateInquiryForm,
} from '../../src/utils/validators';

describe('Validation Utilities (src/utils/validators.js)', () => {
  describe('isValidEmail', () => {
    it('accepts valid email addresses', () => {
      expect(isValidEmail('cricket@domain.com')).toBe(true);
      expect(isValidEmail('user.name+tag@sub.domain.co.uk')).toBe(true);
    });

    it('rejects invalid email addresses', () => {
      expect(isValidEmail('')).toBe(false);
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('missing@domain')).toBe(false);
      expect(isValidEmail(null)).toBe(false);
      expect(isValidEmail(undefined)).toBe(false);
    });
  });

  describe('validateRequired', () => {
    it('returns null for non-empty values', () => {
      expect(validateRequired('John Doe', 'Full name')).toBeNull();
      expect(validateRequired(123, 'ID')).toBeNull();
      expect(validateRequired(['cricket'], 'Sports')).toBeNull();
    });

    it('returns error message for empty strings or empty arrays', () => {
      expect(validateRequired('', 'Full name')).toBe('Full name is required.');
      expect(validateRequired('   ', 'Email')).toBe('Email is required.');
      expect(validateRequired(null, 'Subject')).toBe('Subject is required.');
      expect(validateRequired([], 'Categories')).toBe('Please select at least one categories.');
    });
  });

  describe('validateMinLength', () => {
    it('returns null if length meets or exceeds minimum', () => {
      expect(validateMinLength('batting', 3, 'Term')).toBeNull();
      expect(validateMinLength('abc', 3, 'Code')).toBeNull();
    });

    it('returns error if string is shorter than minimum', () => {
      expect(validateMinLength('ab', 3, 'Code')).toBe('Code must be at least 3 characters.');
    });
  });

  describe('validateMaxLength', () => {
    it('returns null if string length is within limit', () => {
      expect(validateMaxLength('valid length', 20, 'Subject')).toBeNull();
    });

    it('returns error if string exceeds maximum limit', () => {
      expect(validateMaxLength('toolongtext', 5, 'Nickname')).toBe('Nickname cannot exceed 5 characters.');
    });
  });

  describe('validateOption', () => {
    it('returns null if value is in allowed options', () => {
      expect(validateOption('General', ['General', 'Media'], 'Inquiry type')).toBeNull();
    });

    it('returns error if value is not in allowed options', () => {
      expect(validateOption('InvalidOption', ['General', 'Media'], 'Inquiry type')).toBe('Please select a valid inquiry type.');
    });
  });

  describe('validateNewsletterEmail', () => {
    it('validates correct newsletter email', () => {
      const result = validateNewsletterEmail('fan@cricket27.com');
      expect(result.isValid).toBe(true);
      expect(result.error).toBeNull();
    });

    it('flags empty newsletter email', () => {
      const result = validateNewsletterEmail('');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Please enter a valid email address.');
    });

    it('flags formatted newsletter email error', () => {
      const result = validateNewsletterEmail('not-an-email');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Please check the formatting of your email address.');
    });
  });

  describe('validateInquiryForm', () => {
    const validInquiry = {
      fullName: 'Rohit Sharma',
      email: 'rohit@cricket27.com',
      inquiryType: 'General Inquiry',
      subject: 'Inquiry regarding 2D physics',
      message: 'I would like to inquire about batting mechanics in the upcoming 2D game concept.',
      privacyAccepted: true,
    };

    const allowedTypes = ['General Inquiry', 'Media', 'Partnership'];

    it('validates a completely valid inquiry form', () => {
      const { isValid, errors } = validateInquiryForm(validInquiry, allowedTypes);
      expect(isValid).toBe(true);
      expect(Object.keys(errors).length).toBe(0);
    });

    it('detects multiple missing or invalid fields simultaneously', () => {
      const invalidForm = {
        fullName: 'R', // too short (<2)
        email: 'invalid-email',
        inquiryType: 'Unknown Type',
        subject: '',
        message: 'short', // too short (<10)
        privacyAccepted: false,
      };

      const { isValid, errors } = validateInquiryForm(invalidForm, allowedTypes);
      expect(isValid).toBe(false);
      expect(errors.fullName).toBe('Full name must be at least 2 characters.');
      expect(errors.email).toBe('Please enter a valid email address.');
      expect(errors.inquiryType).toBe('Please select a valid inquiry type.');
      expect(errors.subject).toBe('Subject is required.');
      expect(errors.message).toBe('Message must be at least 10 characters.');
      expect(errors.privacyAccepted).toBe('You must acknowledge the promotional notice to proceed.');
    });
  });
});
