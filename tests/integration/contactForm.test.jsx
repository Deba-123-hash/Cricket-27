import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '../../src/sections/contact/ContactForm';
import { ToastProvider } from '../../src/context/ToastContext';

describe('Contact Form Integration (src/sections/contact/ContactForm.jsx)', () => {
  it('triggers field validation errors on empty submission', async () => {
    render(
      <ToastProvider>
        <ContactForm />
      </ToastProvider>
    );

    const submitBtn = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText('Full name is required.')).toBeInTheDocument();
      expect(screen.getByText('Email address is required.')).toBeInTheDocument();
      expect(screen.getByText('Subject is required.')).toBeInTheDocument();
      expect(screen.getByText('Message is required.')).toBeInTheDocument();
      expect(screen.getByText('You must acknowledge the promotional notice to proceed.')).toBeInTheDocument();
    });
  });

  it('validates and submits when valid data is provided', async () => {
    render(
      <ToastProvider>
        <ContactForm />
      </ToastProvider>
    );

    // Fill fields
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Kane Williamson' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'kane@nzcricket.co.nz' } });
    fireEvent.change(screen.getByLabelText(/inquiry type/i), { target: { value: 'Brand & Partnerships' } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Cricket Game Partnership' } });
    fireEvent.change(screen.getByLabelText(/^message/i), {
      target: { value: 'We would love to discuss potential cricket brand partnership opportunities.' },
    });
    fireEvent.click(screen.getByRole('checkbox'));

    const submitBtn = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText('VALIDATION COMPLETE')).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /inquiry validated/i })).toBeInTheDocument();
    }, { timeout: 2000 });
  });
});
