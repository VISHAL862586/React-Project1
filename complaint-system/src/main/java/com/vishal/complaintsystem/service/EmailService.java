package com.vishal.complaintsystem.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.vishal.complaintsystem.entity.Complaint;

import jakarta.mail.internet.MimeMessage;
import jakarta.mail.util.ByteArrayDataSource;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    // ==========================
    // OTP EMAIL
    // ==========================
    public void sendOtpEmail(String toEmail, String otp) {

        try {

            MimeMessage message = mailSender.createMimeMessage();

            MimeMessageHelper helper =
                    new MimeMessageHelper(message);

           helper.setFrom("urbanresolve.support1@gmail.com");
            helper.setTo(toEmail);
            helper.setSubject("Your Login OTP");

            helper.setText(
                    """
                    Hello,

                    Your OTP is: %s

                    This OTP is valid for 5 minutes.

                    UrbanResolve
                    """.formatted(otp)
            );

            mailSender.send(message);

            System.out.println("EMAIL SENT SUCCESSFULLY");

        } catch (Exception e) {

            e.printStackTrace();

            throw new RuntimeException(e);
        }
    }

    // ==========================
    // COMPLAINT PDF EMAIL
    // ==========================
    public void sendComplaintPdf(
            String toEmail,
            Complaint complaint
    ) throws Exception {

        byte[] pdf =
                PdfGenerator.generateComplaintPdf(complaint);

        MimeMessage message =
                mailSender.createMimeMessage();

        MimeMessageHelper helper =
                new MimeMessageHelper(message, true);

        helper.setFrom("urbanresolve.support1@gmail.com");

        helper.setTo(toEmail);

        helper.setSubject(
                "Complaint Registered Successfully"
        );

        helper.setText(
                """
                Dear Citizen,

                Your complaint has been registered successfully.

                Please find the attached PDF acknowledgement receipt.

                UrbanResolve
                """
        );

        helper.addAttachment(
                "ComplaintReceipt.pdf",
                new ByteArrayDataSource(
                        pdf,
                        "application/pdf"
                )
        );

        mailSender.send(message);

        System.out.println("PDF EMAIL SENT SUCCESSFULLY");
    }
}