# Google Forms contact form prompt

This prompt is designed for the contact form linked from the personal website. It
keeps the form concise, reflects the site's professional focus, and minimizes the
personal information collected from respondents and disclosed about the form owner.

```text
Create a concise English-language contact form for a professional personal website.

The website represents a software engineer and biomedical data scientist whose work
includes software engineering, cloud-native systems, DevOps, AI/ML, biomedical data
science, and research.

Do not include the website owner's name, email address, location, employer, or any
other identifying information in the form.

Title: Contact

Description:
Use this form for professional inquiries about software engineering, AI/ML,
biomedical data science, research, or related work. If you would like a reply,
please provide a valid email address.

Add exactly these questions in this order:
1. Inquiry type — multiple choice, required.
   Options:
   - Software engineering
   - AI / ML
   - Biomedical data science
   - Research
   - Other
2. Name or organization — short answer, optional.
3. Reply email — short answer, optional. Apply email-address validation if available.
4. Subject — short answer, optional.
5. Message — paragraph, required.

Form settings:
- Do not automatically collect email addresses.
- Do not require Google sign-in.
- Allow anyone with the form link to respond.
- Do not request phone numbers, postal addresses, demographic information, or other
  unnecessary personal information.
- Do not add file uploads.
- Do not add marketing consent or newsletter options.
- Do not expose identifying information about the form owner.
- Keep the form concise and professional.

Set the confirmation message to:
"Thank you for your message. If you provided a reply email, I may contact you
regarding your inquiry."
```
