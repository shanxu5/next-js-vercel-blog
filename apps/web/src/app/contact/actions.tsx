'use server';

import { submitContactForm } from '@repo/api/brand';

type ContactFormState = {
  success: boolean;
  message: string | null;
};

export async function submitContactFormAction(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    const name = formData.get('email') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    const result = await submitContactForm({
      name,
      email,
      subject,
      message,
    });
    if (result.success) {
      return {
        success: true,
        message: 'Thank you for your message. We will get back to you soon!',
      };
    }
  } catch (err) {
    return {
      success: false,
      message: err instanceof Error ? err.message : 'Unxcepted Error',
    };
  }

  return {
    success: true,
    message: 'Thank you for your message. We will get back to you soon!',
  };
}
