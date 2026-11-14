import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../../src/components/forms/Input';
import Textarea from '../../src/components/forms/Textarea';
import Select from '../../src/components/forms/Select';
import Checkbox from '../../src/components/forms/Checkbox';
import FormField from '../../src/components/forms/FormField';

describe('Form Primitives (src/components/forms/)', () => {
  describe('Input', () => {
    it('renders input with label and handles user typing', () => {
      const handleChange = vi.fn();
      render(
        <Input
          id="test-input"
          name="fullName"
          label="Full Name"
          placeholder="Enter name"
          value=""
          onChange={handleChange}
        />
      );

      const label = screen.getByLabelText(/full name/i);
      expect(label).toBeInTheDocument();

      fireEvent.change(label, { target: { value: 'Virat Kohli' } });
      expect(handleChange).toHaveBeenCalled();
    });

    it('displays error message and sets aria-invalid when error is present', () => {
      render(
        <Input
          id="email-input"
          label="Email"
          value=""
          onChange={() => {}}
          error="Email address is required."
        />
      );

      const input = screen.getByLabelText(/email/i);
      expect(input).toHaveAttribute('aria-invalid', 'true');
      expect(screen.getByRole('alert')).toHaveTextContent('Email address is required.');
    });
  });

  describe('Textarea', () => {
    it('renders textarea with character count indicator', () => {
      render(
        <Textarea
          id="message-input"
          label="Your Message"
          value="Hello team"
          maxLength={100}
          showCharCount
          onChange={() => {}}
        />
      );

      expect(screen.getByLabelText(/your message/i)).toBeInTheDocument();
      expect(screen.getByText('10/100')).toBeInTheDocument();
    });
  });

  describe('Select', () => {
    it('renders dropdown options and handles selection change', () => {
      const handleChange = vi.fn();
      const options = ['General Inquiry', 'Partnership', 'Media Request'];

      render(
        <Select
          id="inquiry-type"
          label="Inquiry Type"
          options={options}
          value="General Inquiry"
          onChange={handleChange}
        />
      );

      const select = screen.getByLabelText(/inquiry type/i);
      expect(select).toBeInTheDocument();
      expect(screen.getAllByRole('option').length).toBe(3);

      fireEvent.change(select, { target: { value: 'Partnership' } });
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe('Checkbox', () => {
    it('renders accessible checkbox and triggers onChange', () => {
      const handleChange = vi.fn();
      render(
        <Checkbox
          id="privacy"
          label="I acknowledge the promotional terms"
          checked={false}
          onChange={handleChange}
        />
      );

      const checkbox = screen.getByRole('checkbox', { name: /i acknowledge/i });
      expect(checkbox).not.toBeChecked();

      fireEvent.click(checkbox);
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe('FormField', () => {
    it('renders composite form field with label and helper text', () => {
      render(
        <FormField
          id="username"
          label="Username"
          helperText="Unique community handle"
          value=""
          onChange={() => {}}
        />
      );

      expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
      expect(screen.getByText('Unique community handle')).toBeInTheDocument();
    });
  });
});
