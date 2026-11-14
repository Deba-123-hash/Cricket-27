/**
 * CRICKET27 — Centralized Input & Form Validation Utilities
 * Phase 20 Component Architecture & Frontend State Management
 *
 * Provides pure, reusable, deterministic validation functions for all
 * interactive client forms across the application.
 */

/**
 * Validates whether a string matches a standard email format.
 * @param {string} email
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  if (typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

/**
 * Validates that a string or array is not empty.
 * @param {*} value
 * @param {string} [fieldName='Field']
 * @returns {string|null} Error message or null if valid
 */
export const validateRequired = (value, fieldName = 'Field') => {
  if (value === undefined || value === null) {
    return `${fieldName} is required.`;
  }
  if (typeof value === 'string' && !value.trim()) {
    return `${fieldName} is required.`;
  }
  if (Array.isArray(value) && value.length === 0) {
    return `Please select at least one ${fieldName.toLowerCase()}.`;
  }
  return null;
};

/**
 * Validates minimum string length.
 * @param {string} value
 * @param {number} min
 * @param {string} [fieldName='Field']
 * @returns {string|null} Error message or null if valid
 */
export const validateMinLength = (value, min, fieldName = 'Field') => {
  if (typeof value !== 'string') return `${fieldName} must be a valid text string.`;
  const trimmed = value.trim();
  if (trimmed.length < min) {
    return `${fieldName} must be at least ${min} character${min === 1 ? '' : 's'}.`;
  }
  return null;
};

/**
 * Validates maximum string length.
 * @param {string} value
 * @param {number} max
 * @param {string} [fieldName='Field']
 * @returns {string|null} Error message or null if valid
 */
export const validateMaxLength = (value, max, fieldName = 'Field') => {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (trimmed.length > max) {
    return `${fieldName} cannot exceed ${max} character${max === 1 ? '' : 's'}.`;
  }
  return null;
};

/**
 * Validates that a value belongs to a list of allowed options.
 * @param {string} value
 * @param {string[]} allowedOptions
 * @param {string} [fieldName='Option']
 * @returns {string|null} Error message or null if valid
 */
export const validateOption = (value, allowedOptions = [], fieldName = 'Option') => {
  if (!value || !allowedOptions.includes(value)) {
    return `Please select a valid ${fieldName.toLowerCase()}.`;
  }
  return null;
};

/**
 * Validates the newsletter subscription email input.
 * @param {string} email
 * @returns {{ isValid: boolean, error: string|null }}
 */
export const validateNewsletterEmail = (email) => {
  const trimmed = (email || '').trim();
  if (!trimmed) {
    return {
      isValid: false,
      error: 'Please enter a valid email address.',
    };
  }
  if (!isValidEmail(trimmed)) {
    return {
      isValid: false,
      error: 'Please check the formatting of your email address.',
    };
  }
  return {
    isValid: true,
    error: null,
  };
};

/**
 * Comprehensive validator for the Contact Inquiry Form.
 * @param {Object} formData
 * @param {string} formData.fullName
 * @param {string} formData.email
 * @param {string} formData.inquiryType
 * @param {string} formData.subject
 * @param {string} formData.message
 * @param {boolean} formData.privacyAccepted
 * @param {string[]} [allowedInquiryTypes=[]]
 * @returns {{ isValid: boolean, errors: Record<string, string> }}
 */
export const validateInquiryForm = (formData, allowedInquiryTypes = []) => {
  const errors = {};

  // Full Name validation
  const nameRequired = validateRequired(formData.fullName, 'Full name');
  if (nameRequired) {
    errors.fullName = nameRequired;
  } else {
    const nameMin = validateMinLength(formData.fullName, 2, 'Full name');
    if (nameMin) errors.fullName = nameMin;
  }

  // Email validation
  const emailRequired = validateRequired(formData.email, 'Email address');
  if (emailRequired) {
    errors.email = emailRequired;
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  // Inquiry Type validation
  if (allowedInquiryTypes.length > 0) {
    const typeErr = validateOption(formData.inquiryType, allowedInquiryTypes, 'inquiry type');
    if (typeErr) errors.inquiryType = typeErr;
  }

  // Subject validation
  const subjectRequired = validateRequired(formData.subject, 'Subject');
  if (subjectRequired) {
    errors.subject = subjectRequired;
  } else {
    const subjectMin = validateMinLength(formData.subject, 3, 'Subject');
    if (subjectMin) {
      errors.subject = subjectMin;
    } else {
      const subjectMax = validateMaxLength(formData.subject, 100, 'Subject');
      if (subjectMax) errors.subject = subjectMax;
    }
  }

  // Message validation
  const messageRequired = validateRequired(formData.message, 'Message');
  if (messageRequired) {
    errors.message = messageRequired;
  } else {
    const messageMin = validateMinLength(formData.message, 10, 'Message');
    if (messageMin) {
      errors.message = messageMin;
    } else {
      const messageMax = validateMaxLength(formData.message, 1000, 'Message');
      if (messageMax) errors.message = messageMax;
    }
  }

  // Privacy notice acknowledgement
  if (!formData.privacyAccepted) {
    errors.privacyAccepted = 'You must acknowledge the promotional notice to proceed.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
