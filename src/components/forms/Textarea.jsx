import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../utils/helpers';
import FormError from './FormError';

/**
 * CRICKET27 Reusable Accessible Textarea Primitive
 */
export const Textarea = forwardRef(
  (
    {
      id,
      name,
      label,
      rows = 4,
      placeholder,
      value = '',
      onChange,
      required = false,
      disabled = false,
      maxLength,
      showCharCount = false,
      error,
      helperText,
      className = '',
      textareaClassName = '',
      ...props
    },
    ref
  ) => {
    const inputId = id || name;
    const errorId = error ? `${inputId}-error` : undefined;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const describedBy = [errorId, helperId].filter(Boolean).join(' ') || undefined;

    const currentLength = typeof value === 'string' ? value.length : 0;

    return (
      <div className={cn('w-full space-y-1.5', className)}>
        <div className="flex items-center justify-between">
          {label && (
            <label
              htmlFor={inputId}
              className="block text-xs font-heading font-bold uppercase tracking-wider text-warm-white/90"
            >
              {label}
              {required && <span className="text-coral ml-1" aria-hidden="true">*</span>}
            </label>
          )}

          {showCharCount && maxLength && (
            <span
              className={cn(
                'text-[11px] font-mono',
                currentLength >= maxLength ? 'text-coral' : 'text-muted-text'
              )}
            >
              {currentLength}/{maxLength}
            </span>
          )}
        </div>

        <textarea
          ref={ref}
          id={inputId}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          maxLength={maxLength}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={cn(
            'w-full px-4 py-3 rounded-brand bg-slate-card border text-warm-white placeholder:text-muted-text text-base sm:text-sm resize-y transition-all duration-200',
            'focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error ? 'border-coral ring-1 ring-coral/40' : 'border-slate hover:border-slate-light',
            textareaClassName
          )}
          {...props}
        />

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

Textarea.displayName = 'Textarea';

Textarea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.node,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  showCharCount: PropTypes.bool,
  error: PropTypes.string,
  helperText: PropTypes.string,
  className: PropTypes.string,
  textareaClassName: PropTypes.string,
};

export default Textarea;
