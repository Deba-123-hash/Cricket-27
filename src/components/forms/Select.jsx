import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/helpers';
import FormError from './FormError';

/**
 * CRICKET27 Reusable Accessible Select Primitive
 */
export const Select = forwardRef(
  (
    {
      id,
      name,
      label,
      options = [],
      value,
      onChange,
      placeholder,
      required = false,
      disabled = false,
      error,
      helperText,
      className = '',
      selectClassName = '',
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

        <div className="relative">
          <select
            ref={ref}
            id={inputId}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy}
            className={cn(
              'w-full px-4 py-3 pr-10 rounded-brand bg-slate-card border text-warm-white text-base sm:text-sm appearance-none transition-all duration-200 cursor-pointer',
              'focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              error ? 'border-coral ring-1 ring-coral/40' : 'border-slate hover:border-slate-light',
              selectClassName
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled className="bg-midnight-light text-muted-text">
                {placeholder}
              </option>
            )}
            {options.map((opt) => {
              const optValue = typeof opt === 'string' ? opt : opt.value;
              const optLabel = typeof opt === 'string' ? opt : opt.label;
              const optDisabled = typeof opt === 'object' ? Boolean(opt.disabled) : false;

              return (
                <option
                  key={optValue}
                  value={optValue}
                  disabled={optDisabled}
                  className="bg-midnight text-warm-white py-2"
                >
                  {optLabel}
                </option>
              );
            })}
          </select>

          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-muted-text">
            <ChevronDown className="w-4 h-4 text-lime" aria-hidden="true" />
          </div>
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

Select.displayName = 'Select';

Select.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.node,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        label: PropTypes.node.isRequired,
        disabled: PropTypes.bool,
      }),
    ])
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  helperText: PropTypes.string,
  className: PropTypes.string,
  selectClassName: PropTypes.string,
};

export default Select;
