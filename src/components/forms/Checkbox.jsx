import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Check } from 'lucide-react';
import { cn } from '../../utils/helpers';
import FormError from './FormError';

/**
 * CRICKET27 Reusable Accessible Checkbox Primitive
 */
export const Checkbox = forwardRef(
  (
    {
      id,
      name,
      label,
      checked = false,
      onChange,
      required = false,
      disabled = false,
      error,
      helperText,
      className = '',
      ...props
    },
    ref
  ) => {
    const inputId = id || name;
    const errorId = error ? `${inputId}-error` : undefined;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const describedBy = [errorId, helperId].filter(Boolean).join(' ') || undefined;

    return (
      <div className={cn('space-y-1.5', className)}>
        <label
          htmlFor={inputId}
          className={cn(
            'flex items-start gap-3 cursor-pointer select-none group',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
        >
          <div className="relative flex items-center justify-center shrink-0 mt-0.5">
            <input
              ref={ref}
              id={inputId}
              name={name}
              type="checkbox"
              checked={checked}
              onChange={onChange}
              required={required}
              disabled={disabled}
              aria-invalid={Boolean(error)}
              aria-describedby={describedBy}
              className="sr-only peer"
              {...props}
            />

            <div
              className={cn(
                'w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200',
                'bg-slate-card border-slate',
                'peer-focus-visible:ring-2 peer-focus-visible:ring-lime peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-midnight',
                'peer-checked:bg-lime peer-checked:border-lime',
                error ? 'border-coral ring-1 ring-coral/40' : 'group-hover:border-slate-light'
              )}
            >
              <Check
                className={cn(
                  'w-3.5 h-3.5 stroke-[3] transition-transform duration-150',
                  checked ? 'text-midnight scale-100 opacity-100' : 'scale-75 opacity-0'
                )}
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="text-xs sm:text-sm text-warm-white/90 leading-tight">
            {label}
            {required && <span className="text-coral ml-1" aria-hidden="true">*</span>}
          </div>
        </label>

        {error ? (
          <FormError id={errorId} message={error} className="ml-8" />
        ) : helperText ? (
          <p id={helperId} className="text-xs text-muted-text ml-8">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.node.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  helperText: PropTypes.string,
  className: PropTypes.string,
};

export default Checkbox;
