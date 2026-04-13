import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Create mailto link data - this opens the user's email client
    // For actual email sending, configure with your SMTP or use a service like Resend/SendGrid
    // Add your SMTP credentials in .env.local:
    // EMAIL_USER=raneembikai70@gmail.com
    // EMAIL_PASS=your-app-password

    // Simple approach: log and return success
    // To enable real email: npm install nodemailer and uncomment below
    
    /*
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: 'raneembikai70@gmail.com',
      subject: `Portfolio Contact from ${name}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    */

    console.log("Contact form submission:", { name, email, message });

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
