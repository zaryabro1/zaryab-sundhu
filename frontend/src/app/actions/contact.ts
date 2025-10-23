'use server';

import { sendContactEmail, sendConfirmationEmail, validateContactForm, type ContactFormData } from '../../services/emailService';

export interface ContactFormResult {
  success: boolean;
  message: string;
  errors?: string[];
}

/**
 * Server action to handle contact form submission
 * This runs on the server and keeps API keys secure
 */
export async function submitContactForm(formData: ContactFormData): Promise<ContactFormResult> {
  try {
    // Validate the form data
    const validation = validateContactForm(formData);
    
    if (!validation.isValid) {
      return {
        success: false,
        message: 'Please fix the following errors:',
        errors: validation.errors
      };
    }

    // Send email to portfolio owner
    const contactResult = await sendContactEmail(formData);
    
    if (!contactResult.success) {
      return {
        success: false,
        message: 'Failed to send your message. Please try again later.'
      };
    }

    // Send confirmation email to user
    const confirmationResult = await sendConfirmationEmail(formData);
    
    // Even if confirmation fails, we still consider it successful
    // since the main message was sent
    if (!confirmationResult.success) {
      console.warn('Confirmation email failed to send:', confirmationResult.message);
    }

    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.'
    };

  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.'
    };
  }
}
