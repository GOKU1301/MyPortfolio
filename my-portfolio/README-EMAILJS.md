# Setting Up EmailJS for the Contact Form

To make the contact form in your portfolio website actually send emails to your inbox, follow these steps to set up EmailJS:

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. The free tier allows 200 emails per month, which should be sufficient for your portfolio website

## Step 2: Create an Email Service

1. After logging in, go to the "Email Services" tab
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Name your service (e.g., "portfolio_contact_service")
6. Note down the Service ID (you'll need it later)

## Step 3: Create an Email Template

1. Go to the "Email Templates" tab
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{from_name}}` - The name of the person who submitted the form
   - `{{from_email}}` - The email of the person who submitted the form
   - `{{message}}` - The message content
4. Save the template
5. Note down the Template ID (you'll need it later)

## Step 4: Get Your User ID

1. Go to "Account" > "API Keys"
2. Copy your Public Key (this is your User ID)

## Step 5: Update Your Contact Component

1. Open `src/components/Contact.jsx`
2. Replace the placeholder values with your actual IDs:
   ```javascript
   // Line 17: Replace "YOUR_USER_ID" with your actual EmailJS User ID
   emailjs.init("YOUR_USER_ID");
   
   // Line 67-68: Replace with your actual service and template IDs
   emailjs.send(
     'default_service',  // Replace with your EmailJS service ID
     'template_contact_form',  // Replace with your EmailJS template ID
     templateParams
   )
   ```

After completing these steps, your contact form will send real emails to your inbox whenever someone submits the form.

## Testing the Form

1. Fill out the form with test information
2. Submit the form
3. Check your email inbox to make sure you received the test message

If you encounter any issues, check the browser console for error messages or visit the EmailJS dashboard to review your configuration.
