// Environment variable configuration
export const config = {
  whatsappContact: import.meta.env.VITE_WHATSAPP_CONTACT || '919716360128',
  companyEmail: import.meta.env.VITE_COMPANY_EMAIL || 'info@getsetgo.com',
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || 'support@getsetgo.com',
  companyPhone: import.meta.env.VITE_COMPANY_PHONE || '+91 9716360128',
} as const;

// Rate limiting configuration
export const rateLimits = {
  formSubmission: {
    maxAttempts: 5,
    windowMs: 60 * 60 * 1000, // 1 hour
  },
} as const;