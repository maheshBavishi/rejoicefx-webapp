import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstName, email, country, phone, services, message } = req.body;

  if (!firstName || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Only attempt to send email if SMTP credentials are configured
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: process.env.SMTP_PORT || 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER || '"Contact Form" <noreply@example.com>',
        to: "enquiry@genxeltechnology.com",
        subject: `New Genxel Lead: Contact Form Submission from ${firstName}`,
        text: `
Lead Source: GENXEL
-----------------------
Name: ${firstName}
Email: ${email}
Country: ${country}
Phone Number: ${phone}
Services Interested: ${services && services.length > 0 ? services.join(', ') : 'None'}

Message: 
${message}
        `,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f7f6; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 5px 20px rgba(0,0,0,0.05); border: 1px solid #eaeaea; }
              .header { background: linear-gradient(137.56deg, #8A2BE2 0%, #3FA9F5 100%); color: white; padding: 40px 20px; text-align: center; }
              .header h1 { margin: 0; font-size: 26px; font-weight: 700; letter-spacing: 0.5px; }
              .badge { display: inline-block; background-color: #ffffff; color: #8A2BE2; padding: 6px 16px; border-radius: 30px; font-size: 13px; font-weight: bold; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
              .content { padding: 40px 30px; color: #333333; }
              .info-group { margin-bottom: 25px; border-bottom: 1px solid #f0f0f0; padding-bottom: 20px; }
              .info-group:last-child { border-bottom: none; padding-bottom: 0; margin-bottom: 0; }
              .label { font-size: 12px; color: #888888; text-transform: uppercase; font-weight: 700; margin-bottom: 6px; display: block; letter-spacing: 0.5px; }
              .value { font-size: 16px; color: #1a1a1a; font-weight: 500; }
              .services-list { margin-top: 8px; }
              .service-pill { background-color: #f4f0ff; color: #8A2BE2; padding: 8px 14px; border-radius: 20px; font-size: 15px; font-weight: 600; display: inline-block; border: 1px solid #e9dfff; margin-right: 6px; margin-bottom: 6px; }
              .message-box { background-color: #f9f9f9; border-left: 4px solid #8A2BE2; padding: 18px; font-style: italic; color: #444; line-height: 1.6; border-radius: 0 6px 6px 0; margin-top: 8px; font-size: 15px; }
              .footer { background-color: #f9fafb; padding: 20px; text-align: center; font-size: 13px; color: #999999; border-top: 1px solid #eaeaea; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <span class="badge">Genxel Lead</span>
                <h1>New Contact Request</h1>
              </div>
              <div class="content">
                <div class="info-group">
                  <span class="label">Full Name</span>
                  <span class="value">${firstName}</span>
                </div>
                <div class="info-group">
                  <span class="label">Email Address</span>
                  <span class="value"><a href="mailto:${email}" style="color: #3FA9F5; text-decoration: none;">${email}</a></span>
                </div>
                <div class="info-group">
                  <span class="label">Phone Number</span>
                  <span class="value"><a href="tel:${phone}" style="color: #1a1a1a; text-decoration: none;">${phone}</a></span>
                </div>
                <div class="info-group">
                  <span class="label">Country</span>
                  <span class="value">${country}</span>
                </div>
                
                <div class="info-group">
                  <span class="label">Services Interested In</span>
                  <div class="services-list">
                    ${services && services.length > 0
          ? services.map(s => `<span class="service-pill">${s}</span>`).join('')
          : '<span class="value" style="color: #888;">No services selected</span>'}
                  </div>
                </div>

                <div class="info-group">
                  <span class="label">Message</span>
                  <div class="message-box">
                    ${message ? message.replace(/\n/g, '<br>') : '<span style="color: #888;">No message provided</span>'}
                  </div>
                </div>
              </div>
              <div class="footer">
                This lead was generated from the Genxel Contact Form.
              </div>
            </div>
          </body>
          </html>
        `
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.log("SMTP not configured. Contact form data:", { firstName, email, country, phone, services, message });
    }

    res.status(200).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error: error.message });
  }
}
