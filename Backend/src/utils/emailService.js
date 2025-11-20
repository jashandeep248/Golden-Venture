const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  async sendContactEmail(contactData) {
    const { name, email, message } = contactData;
    
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.COMPANY_EMAIL,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0b2034;">New Project Discovery Form Submission</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0b2034; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #0b2034; margin-top: 0;">Project Scope</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #ffc107; border-radius: 8px;">
            <p style="margin: 0; color: #0b2034;"><strong>Action Required:</strong> Follow up within two working days as promised.</p>
          </div>
        </div>
      `,
      replyTo: email
    };

    return await this.transporter.sendMail(mailOptions);
  }

  async sendAutoReply(contactData) {
    const { name, email } = contactData;
    
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for your project inquiry - The Golden Venture',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0b2034; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">The Golden Venture</h1>
            <p style="margin: 5px 0 0 0;">Himalayan Infrastructure Experts</p>
          </div>
          
          <div style="padding: 30px 20px;">
            <h2 style="color: #0b2034;">Thank you, ${name}!</h2>
            
            <p>We've received your project inquiry and appreciate your interest in working with The Golden Venture.</p>
            
            <div style="background: #ffc107; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #0b2034;"><strong>What happens next?</strong></p>
              <p style="margin: 5px 0 0 0; color: #0b2034;">Our project desk will review your requirements and follow up within two working days with a detailed roadmap.</p>
            </div>
            
            <h3 style="color: #0b2034;">Need immediate assistance?</h3>
            <p><strong>Phone:</strong> 70635 11351 / 76027 46333</p>
            <p><strong>Email:</strong> goldenventures2011@gmail.com</p>
            <p><strong>Office:</strong> Himalayan Little Monk Home Stay Building, Rumtek, East Sikkim 737135</p>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #dee2e6;">
            <p style="color: #6c757d; font-size: 14px;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `
    };

    return await this.transporter.sendMail(mailOptions);
  }
}

module.exports = new EmailService();