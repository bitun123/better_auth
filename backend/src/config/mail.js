
import nodemailer from "nodemailer";

export const mailTransporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "127.0.0.1",
  port: Number(process.env.SMTP_PORT || 1025),
  secure: process.env.SMTP_SECURE === "true",

  connectionTimeout: 5000,
  greetingTimeout: 5000,
  socketTimeout: 10000,
});

export async function verifyMailConnection() {
  try {
    await mailTransporter.verify();
    console.log("Mailpit SMTP connected successfully");
  } catch (error) {
    console.error("Mailpit SMTP connection failed:", error.message);
    throw error;
  }
}
