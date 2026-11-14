import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../utils/helpers';
import FormError from './FormError';

/**
 * CRICKET27 Reusable FormField Container & Composite Input
 */
export const FormField = forwardRef(
  (
    {
      label,
      id,
      name,
      type = 'text',
      placeholder,
      value,
      onChange,
      required = false,
      disabled = false,
      error,
      helperText,
      isTextarea = false,
      rows = 4,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const inputId = id || name;
    const errorId = error ? `${inputId}-error` : undefined;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const describedBy = [errorId, helperId].filter(Boolean).join(' ') || undefined;

    const baseInputClasses = cn(
      'w-full px-4 py-3 rounded-brand bg-slate-card border text-warm-white placeholder:text-muted-text text-base sm:text-sm transition-all duration-200',
      'focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      error ? 'border-coral ring-1 ring-coral/40' : 'border-slate hover:border-slate-light',
      className
    );

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-heading font-bold uppercase tracking-wider text-warm-white/90"
          >
            {label}
            {required && <span className="text-coral ml-1" aria-hidden="true">*</span>}
          </label>
        )}

        {children ? (
          children
        ) : isTextarea ? (
          <textarea
            ref={ref}
            id={inputId}
            name={name}
            rows={rows}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy}
            className={baseInputClasses}
            {...props}
          />
        ) : (
          <input
            ref={ref}
            id={inputId}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy}
            className={baseInputClasses}
            {...props}
          />
        )}

        {error ? (
          <FormError id={errorId} message={error} />
        ) : helperText ? (
          <p id={helperId} className="text-xs text-muted-text">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

FormField.displayName = 'FormField';

FormField.propTypes = {
  label: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  helperText: PropTypes.string,
  isTextarea: PropTypes.bool,
  rows: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default FormField;
