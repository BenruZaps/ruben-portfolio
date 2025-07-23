'use server'

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendEmail(formData) {
  const { name, email, message } = formData;

  try {
    // Email to you
    await sgMail.send({
      to: process.env.SENDGRID_EMAIL, // your verified sender or destination
      from: process.env.SENDGRID_EMAIL, // must be a verified sender in SendGrid
      subject: `Portfolio Contact/Inquiries by: ${name}`,
      html: `
        <div style="background:#10b981;padding:32px 24px;border-radius:12px;color:#fff;font-family:sans-serif;max-width:500px;margin:auto;">
          <h2 style="margin-top:0;margin-bottom:16px;font-size:24px;">New Contact Form Submission</h2>
          <p style="margin:0 0 8px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin:0 0 8px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin:0 0 8px 0;"><strong>Message:</strong></p>
          <div style="background:#059669;padding:16px;border-radius:8px;margin-bottom:16px;">${message}</div>
          <p style="margin:0;font-size:14px;opacity:0.8;">Portfolio Contact Form &copy; ${new Date().getFullYear()}</p>
        </div>
      `,
    });

    // Thank you email to sender
    await sgMail.send({
      to: email,
      from: process.env.SENDGRID_EMAIL, // must be a verified sender in SendGrid
      subject: 'Thank you for reaching out!',
      html: `
        <div style="background:#10b981;padding:32px 24px;border-radius:12px;color:#fff;font-family:sans-serif;max-width:500px;margin:auto;">
          <h2 style="margin-top:0;margin-bottom:16px;font-size:24px;">Thank You!</h2>
          <p style="margin:0 0 8px 0;">Hi ${name},</p>
          <p style="margin:0 0 8px 0;">Thank you for reaching out! I appreciate your message and will get back to you as soon as possible.</p>
          <p style="margin:0 0 8px 0;">Best regards,<br/>Ruben Saporne</p>
          <p style="margin:0;font-size:14px;opacity:0.8;">Contact Form &copy; ${new Date().getFullYear()}</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error.message };
  }
}