import os
import smtplib
import ssl
import logging

from email.message import EmailMessage

logger = logging.getLogger(__name__)

def send_contact_email(name, phone, email, message):
    logger.info("send_contact_email() function called")
        
    smtp_host = os.getenv("SMTP_HOST")
    smtp_port = int(os.getenv("SMTP_PORT", "587"))
    smtp_username = os.getenv("SMTP_USERNAME")
    smtp_password = os.getenv("SMTP_PASSWORD")
    contact_receiver = os.getenv("CONTACT_RECEIVER")
    
    if not all([smtp_host, smtp_port, smtp_username, smtp_password, contact_receiver]):
        raise RuntimeError("SMTP configuration is incomplete")
    
    mail = EmailMessage()
    
    mail["Subject"] = f"New Portfolio Contact - {name}" 
    mail["From"] = smtp_username
    mail["To"] = contact_receiver
    mail["Reply-To"] = email
    
    
    mail.set_content(
        
        f"""
        
      New Contact form submission.
    
      Name: {name}
      Phone: {phone}
      Email: {email}
      
      Message: {message}
        
        """
    )
    
    context = ssl.create_default_context()
    
    try:
    
        with smtplib.SMTP(smtp_host, smtp_port, timeout=15) as server:
        
            server.starttls(context=context)
            
            server.login(smtp_username, smtp_password)
            
            server.send_message(mail)
            
            logger.info("Contact email sent successfully")
            
        return True
        
    except Exception as e:
        logger.error(f"Failed to send contact email: {e}")
        raise RuntimeError("Failed to send contact email") from e