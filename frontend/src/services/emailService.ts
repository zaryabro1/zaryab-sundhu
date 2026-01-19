// Brevo API configuration
const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';
const BREVO_API_KEY = process.env.BREVO_API_KEY!;

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

/**
 * Send contact form email to the portfolio owner
 */
export async function sendContactEmail(formData: ContactFormData): Promise<EmailResponse> {
  try {
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #7B61FF; margin-bottom: 30px; text-align: center; font-size: 24px;">New Service Inquiry</h2>
          
          <div style="background-color: #f8f9fa; border-radius: 8px; overflow: hidden; border: 1px solid #e9ecef;">
            <table style="width: 100%; border-collapse: collapse; margin: 0;">
              <thead>
                <tr style="background-color: #7B61FF; color: white;">
                  <th style="padding: 15px; text-align: left; font-weight: 600; font-size: 16px;">Field</th>
                  <th style="padding: 15px; text-align: left; font-weight: 600; font-size: 16px;">Information</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid #e9ecef;">
                  <td style="padding: 15px; font-weight: 600; color: #495057; background-color: #f8f9fa; width: 120px;">Name</td>
                  <td style="padding: 15px; color: #212529;">${formData.name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e9ecef;">
                  <td style="padding: 15px; font-weight: 600; color: #495057; background-color: #f8f9fa;">Email</td>
                  <td style="padding: 15px; color: #212529;">
                    <a href="mailto:${formData.email}" style="color: #7B61FF; text-decoration: none;">${formData.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px; font-weight: 600; color: #495057; background-color: #f8f9fa; vertical-align: top;">Message</td>
                  <td style="padding: 15px; color: #212529; line-height: 1.6;">${formData.message.replace(/\n/g, '<br>')}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div style="margin-top: 25px; padding: 15px; background-color: #e3f2fd; border-radius: 5px; border-left: 4px solid #2196f3;">
            <p style="margin: 0; color: #1565c0; font-size: 14px;">
              <strong>📧 Quick Reply:</strong> Click the email address above to reply directly to this inquiry.
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              This inquiry was sent from your portfolio contact form at ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    `;

    const emailPayload = {
      sender: {
        email: process.env.BREVO_FROM_EMAIL!,
        name: 'Zaryab Sundhu Portfolio'
      },
      to: [
        {
          email: process.env.TO_EMAIL!
        }
      ],
      subject: `New Service Inquiry from ${formData.name}`,
      htmlContent: htmlContent
    };

    // Validate API key is present
    if (!BREVO_API_KEY) {
      throw new Error('BREVO_API_KEY is not set in environment variables');
    }

    if (!process.env.BREVO_FROM_EMAIL) {
      throw new Error('BREVO_FROM_EMAIL is not set in environment variables');
    }

    if (!process.env.TO_EMAIL) {
      throw new Error('TO_EMAIL is not set in environment variables');
    }

    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify(emailPayload)
    });

    // Handle response - some APIs return empty body on success
    let responseData: any = {};
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      try {
        const text = await response.text();
        if (text) {
          responseData = JSON.parse(text);
        }
      } catch (e) {
        // Response may be empty on success
      }
    }

    if (!response.ok) {
      const errorMessage = responseData.message || 
                           responseData.error?.message || 
                           responseData.error || 
                           `HTTP error! status: ${response.status}`;
      console.error('Brevo API Error:', errorMessage);
      throw new Error(errorMessage);
    }
    
    return {
      success: true,
      message: 'Contact email sent successfully'
    };
  } catch (error: any) {
    console.error('Error sending contact email:', error?.message || error);
    return {
      success: false,
      message: error?.message || 'Failed to send contact email'
    };
  }
}

/**
 * Send confirmation email to the user who submitted the form
 */
export async function sendConfirmationEmail(formData: ContactFormData): Promise<EmailResponse> {
  try {
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #7B61FF; margin-bottom: 20px; text-align: center;">Thank You for Contacting Me!</h2>
          
          <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
            Hi ${formData.name},
          </p>
          
          <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
            Thank you for reaching out through my portfolio contact form. I've received your message and will get back to you as soon as possible.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #7B61FF; margin-bottom: 20px;">
            <p style="margin: 0; color: #333;"><strong>Your Message:</strong></p>
            <p style="margin: 10px 0 0 0; color: #666; font-style: italic;">"${formData.message}"</p>
          </div>
          
          <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
            I typically respond within 24 hours. If you have any urgent inquiries, feel free to reach out directly.
          </p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px;">Best regards,<br><strong>Zaryab Sundhu</strong><br>Senior Software Engineer</p>
          </div>
        </div>
      </div>
    `;

    const emailPayload = {
      sender: {
        email: process.env.BREVO_FROM_EMAIL!,
        name: 'Zaryab Sundhu'
      },
      to: [
        {
          email: formData.email
        }
      ],
      subject: 'Thank you for contacting Zaryab Sundhu',
      htmlContent: htmlContent
    };

    // Validate API key is present
    if (!BREVO_API_KEY) {
      throw new Error('BREVO_API_KEY is not set in environment variables');
    }

    if (!process.env.BREVO_FROM_EMAIL) {
      throw new Error('BREVO_FROM_EMAIL is not set in environment variables');
    }

    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify(emailPayload)
    });

    // Handle response - some APIs return empty body on success
    let responseData: any = {};
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      try {
        const text = await response.text();
        if (text) {
          responseData = JSON.parse(text);
        }
      } catch (e) {
        // Response may be empty on success
      }
    }

    if (!response.ok) {
      const errorMessage = responseData.message || 
                           responseData.error?.message || 
                           responseData.error || 
                           `HTTP error! status: ${response.status}`;
      console.error('Brevo API Error:', errorMessage);
      throw new Error(errorMessage);
    }
    
    return {
      success: true,
      message: 'Confirmation email sent successfully'
    };
  } catch (error: any) {
    console.error('Error sending confirmation email:', error?.message || error);
    return {
      success: false,
      message: error?.message || 'Failed to send confirmation email'
    };
  }
}

/**
 * Validate contact form data
 */
export function validateContactForm(formData: ContactFormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!formData.name || formData.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}
