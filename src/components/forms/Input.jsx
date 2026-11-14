import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../utils/helpers';
import FormError from './FormError';

/**
 * CRICKET27 Reusable Accessible Input Primitive
 */
export const Input = forwardRef(
  (
    {
      id,
      name,
      label,
      type = 'text',
      placeholder,
      value,
      onChange,
      required = false,
      disabled = false,
      error,
      helperText,
      leadingIcon: LeadingIcon,
      trailingIcon: TrailingIcon,
      className = '',
      inputClassName = '',
      ...props
    },
    ref
  ) => {
    const inputId = id || name;
    const errorId = error ? `${inputId}-error` : undefined;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const describedBy = [errorId, helperId].filter(Boolean).join(' ') || undefined;

    return (
      <div className={cn('w-full space-y-1.5', className)}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-heading font-bold uppercase tracking-wider text-warm-white/90"
          >
            {label}
            {required && <span className="text-coral ml-1" aria-hidden="true">*</span>}
          </label>
        )}

        <div className="relative flex items-center">
          {LeadingIcon && (
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-text pointer-events-none">
              <LeadingIcon className="w-4 h-4 text-lime" aria-hidden="true" />
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy}
            className={cn(
              'w-full px-4 py-3 rounded-brand bg-slate-card border text-warm-white placeholder:text-muted-text text-base sm:text-sm transition-all duration-200',
              'focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              LeadingIcon ? 'pl-11' : 'pl-4',
              TrailingIcon ? 'pr-11' : 'pr-4',
              error ? 'border-coral ring-1 ring-coral/40' : 'border-slate hover:border-slate-light',
              inputClassName
            )}
            {...props}
          />

          {TrailingIcon && (
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-text pointer-events-none">
              <TrailingIcon className="w-4 h-4" aria-hidden="true" />
            </div>
          )}
        </div>

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

Input.displayName = 'Input';

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.node,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  helperText: PropTypes.string,
  leadingIcon: PropTypes.elementType,
  trailingIcon: PropTypes.elementType,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
};

export default Input;
