using Microsoft.AspNetCore.Identity.UI.Services;
using MimeKit;
//using System.Net.Mail;
using MailKit.Net.Smtp;

namespace LMS_User_Service.Helpers
{
    public class SMTPService : IEmailSender
    {

        private readonly IConfiguration _configuration;
        public SMTPService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public async Task SendEmailAsync(string email, string subject, string message)
        {       
            // Create a new email message

            var emailMessage = new MimeMessage();
            // Set sender's email and name from configuration settings
             emailMessage.From.Add(new MailboxAddress(_configuration["SmtpSettings:SenderName"], _configuration["SmtpSettings:SenderEmail"]));
            // Add recipient email address
            emailMessage.To.Add(new MailboxAddress("", email));
            emailMessage.Subject = subject;
            // Create a body builder to set the HTML content of the emailemailMessage.Subject = subject;
            var bodyBuilder = new BodyBuilder { HtmlBody = message };
            emailMessage.Body = bodyBuilder.ToMessageBody();
            using (var client = new SmtpClient())
            {
                // Connect to the SMTP server using server details from configuration       
                await client.ConnectAsync(_configuration["SmtpSettings:Server"], int.Parse(_configuration["SmtpSettings:Port"]), false);
                // Authenticate with the SMTP server using credentials from configuration
                await client.AuthenticateAsync(_configuration["SmtpSettings:Username"], _configuration["SmtpSettings:Password"]);
                await client.SendAsync(emailMessage);
                await client.DisconnectAsync(true);
            }

        }
    }
}
