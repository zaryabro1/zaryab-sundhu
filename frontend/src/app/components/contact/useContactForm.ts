'use client';

import { useState, useTransition } from 'react';
import { submitContactForm, type ContactFormResult } from '../../actions/contact';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface UseContactFormReturn {
  formData: ContactFormData;
  isSubmitting: boolean;
  isSuccess: boolean;
  errors: string[];
  message: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  resetForm: () => void;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  message: ''
};

/**
 * Custom hook for managing contact form state and submission
 */
export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
    
    // Clear success message when user starts typing
    if (isSuccess) {
      setIsSuccess(false);
      setMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Clear previous states
    setErrors([]);
    setMessage('');
    setIsSuccess(false);

    startTransition(async () => {
      try {
        const result: ContactFormResult = await submitContactForm(formData);
        
        if (result.success) {
          setIsSuccess(true);
          setMessage(result.message);
          setFormData(initialFormData); // Reset form
        } else {
          setErrors(result.errors || []);
          setMessage(result.message);
        }
      } catch (error) {
        console.error('Form submission error:', error);
        setMessage('An unexpected error occurred. Please try again.');
        setErrors(['Network error. Please check your connection and try again.']);
      }
    });
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors([]);
    setMessage('');
    setIsSuccess(false);
  };

  return {
    formData,
    isSubmitting: isPending,
    isSuccess,
    errors,
    message,
    handleChange,
    handleSubmit,
    resetForm
  };
}
