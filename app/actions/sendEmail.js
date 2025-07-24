'use server'
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendEmail(formData) {
  const { name, email, message } = formData;

  // Create email template function
  const createEmailTemplate = (headerTitle, headerSubtitle, content, footerText) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--[if mso]>
        <noscript>
          <xml>
            <o:OfficeDocumentSettings>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
        </noscript>
        <![endif]-->
      </head>
      <body style="margin: 0; padding: 20px; background-color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #0f1419 0%, #1a4d3a 50%, #2d7a4f 100%); border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px 20px; text-align: center; position: relative;">
            <h1 style="color: #ffffff; font-size: 28px; font-weight: 700; margin: 0 0 8px 0; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);">${headerTitle}</h1>
            <p style="color: #d1fae5; font-size: 16px; margin: 0; opacity: 0.9;">${headerSubtitle}</p>
          </div>
          
          <!-- Content -->
          <div style="background: linear-gradient(180deg, #111827 0%, #1f2937 100%); padding: 40px 30px; color: #f3f4f6;">
            ${content}
            
            <!-- Accent Line -->
            <div style="height: 3px; background: linear-gradient(90deg, #10b981 0%, #059669 50%, #047857 100%); margin: 20px 0; border-radius: 2px;"></div>
          </div>
          
          <!-- Footer -->
          <div style="background: linear-gradient(90deg, #000000 0%, #1a1a1a 100%); padding: 25px 30px; text-align: center; border-top: 1px solid rgba(16, 185, 129, 0.2);">
            <div style="color: #9ca3af; font-size: 14px; margin-bottom: 10px;">${footerText}</div>
            <div style="color: #10b981; font-weight: 600; font-size: 13px; letter-spacing: 0.5px;">Ruben Saporne © ${new Date().getFullYear()}</div>
          </div>
          
        </div>
      </body>
      </html>
    `;
  };

  try {
    // Email to you (notification email)
    const notificationContent = `
      <div style="margin-bottom: 25px; padding: 20px; background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.08) 100%); border-radius: 10px; border-left: 4px solid #10b981;">
        <div style="font-weight: 600; color: #10b981; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">👤 Name</div>
        <div style="color: #e5e7eb; font-size: 16px; word-wrap: break-word;">${name}</div>
      </div>
      
      <div style="margin-bottom: 25px; padding: 20px; background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.08) 100%); border-radius: 10px; border-left: 4px solid #10b981;">
        <div style="font-weight: 600; color: #10b981; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">📧 Email</div>
        <div style="color: #e5e7eb; font-size: 16px; word-wrap: break-word;">${email}</div>
      </div>
      
      <div style="margin-bottom: 25px; padding: 20px; background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.08) 100%); border-radius: 10px; border-left: 4px solid #10b981;">
        <div style="font-weight: 600; color: #10b981; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">💬 Message</div>
        <div style="color: #e5e7eb; font-size: 16px; word-wrap: break-word;">
          <div style="background: rgba(0, 0, 0, 0.3); padding: 20px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.2); white-space: pre-line; font-family: 'Courier New', monospace; font-size: 14px; line-height: 1.5;">${message}</div>
        </div>
      </div>
    `;

    await sgMail.send({
      to: process.env.SENDGRID_EMAIL,
      from: process.env.SENDGRID_EMAIL,
      subject: `🚀 Portfolio Contact/Inquiries by: ${name}`,
      text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n\nRuben Saporne © ${new Date().getFullYear()}`,
      html: createEmailTemplate(
        '📩 New Contact Form Submission',
        'Someone reached out through your portfolio',
        notificationContent,
        'This email was sent from your portfolio contact form'
      ),
    });

    // Thank you email to sender
    const thankYouContent = `
      <div style="margin-bottom: 25px; padding: 20px; background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.08) 100%); border-radius: 10px; border-left: 4px solid #10b981;">
        <div style="font-weight: 600; color: #10b981; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Hi ${name}! 👋</div>
        <div style="color: #e5e7eb; font-size: 16px; word-wrap: break-word; line-height: 1.6;">
          Thank you for reaching out! I appreciate your message and will get back to you as soon as possible.
          <br><br>
          I typically respond within 24-48 hours. In the meantime, feel free to check out my other projects and updates.
          <br><br>
          Looking forward to connecting with you!
        </div>
      </div>
      
      <div style="text-align: center; padding: 20px; color: #10b981; font-weight: 600;">
        Best regards,<br>
        <span style="font-size: 18px;">Ruben Saporne</span>
      </div>
    `;

    await sgMail.send({
      to: email,
      from: process.env.SENDGRID_EMAIL,
      subject: '✨ Thank you for reaching out!',
      text: `Hi ${name}!\n\nThank you for reaching out! I appreciate your message and will get back to you as soon as possible.\n\nI typically respond within 24-48 hours. In the meantime, feel free to check out my other projects and updates.\n\nLooking forward to connecting with you!\n\nBest regards,\nRuben Saporne\n\nRuben Saporne © ${new Date().getFullYear()}`,
      html: createEmailTemplate(
        '🙏 Thank You!',
        'Your message has been received',
        thankYouContent,
        'This is an automated response from Ruben\'s portfolio'
      ),
    });

    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error.message };
  }
}