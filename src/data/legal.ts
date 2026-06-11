import { contactInfo } from '@/data/site';

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type LegalContent = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export const privacyContent: LegalContent = {
  title: 'Privacy Policy',
  lastUpdated: 'Last updated June 2026',
  intro:
    'This policy explains what information Silvacal Technologies collects through this website, how it is used, and your rights regarding that information.',
  sections: [
    {
      heading: 'Information We Collect',
      paragraphs: [
        'When you submit our contact or quote request form, we collect the information you provide directly: your name, email address, phone number, and the contents of your message.',
      ],
    },
    {
      heading: 'How We Use Your Information',
      paragraphs: [
        `Form submissions are processed through Web3Forms, a third-party form delivery service, and forwarded to our company email address (${contactInfo.email}). We use this information solely to respond to your enquiry and discuss your project.`,
      ],
    },
    {
      heading: 'Cookies and Analytics',
      paragraphs: [
        'This website does not currently use analytics or tracking cookies.',
        // Placeholder: disclose any analytics or advertising cookies here if added in a future version of this site.
      ],
    },
    {
      heading: 'Data Sharing',
      paragraphs: [
        'We do not sell, rent, or trade your personal information to third parties. Information is only shared with the service providers needed to operate this website, such as Web3Forms for form delivery.',
      ],
    },
    {
      heading: 'Your Rights',
      paragraphs: [
        `Under the Kenya Data Protection Act, 2019, you have the right to access, correct, or request deletion of your personal data. To make a data request, email us at ${contactInfo.email}.`,
      ],
    },
    {
      heading: 'Governing Law',
      paragraphs: [
        'This policy is governed by the laws of Kenya, including the Data Protection Act, 2019.',
      ],
    },
  ],
};

export const privacySeo = {
  title: 'Privacy Policy',
  description:
    "Read Silvacal Technologies' privacy policy covering what our contact form collects, how it's processed via Web3Forms, and your data protection rights.",
};

export const termsContent: LegalContent = {
  title: 'Terms of Service',
  lastUpdated: 'Last updated June 2026',
  intro:
    'These terms govern the provision of software development, web, mobile, and digital marketing services by Silvacal Technologies to its clients.',
  sections: [
    {
      heading: 'Quotes and Estimates',
      paragraphs: [
        'Prices shown on this website and discussed in initial conversations are estimates only. A project is confirmed only once both parties sign a written agreement or proposal setting out the final scope, price, and timeline.',
      ],
    },
    {
      heading: 'Payment Terms',
      paragraphs: [
        'Unless otherwise agreed in writing, projects require a 50% deposit before work begins and the remaining 50% on delivery. For larger projects, payments may instead be split across agreed milestones. Monthly retainers are billed at the start of each month.',
      ],
    },
    {
      heading: 'Ownership of Work',
      paragraphs: [
        'Upon receipt of full payment, the client owns the final deliverables produced for their project. Until full payment is received, all work remains the property of Silvacal Technologies.',
      ],
    },
    {
      heading: 'Portfolio Use',
      paragraphs: [
        'Silvacal Technologies may showcase completed work, including screenshots and project descriptions, in its portfolio and marketing materials, unless the client has requested confidentiality or the project is covered by a non-disclosure agreement.',
      ],
    },
    {
      heading: 'Limitation of Liability',
      paragraphs: [
        'Silvacal Technologies will perform services with reasonable skill and care, but is not liable for indirect, incidental, or consequential losses arising from the use of delivered software, websites, or systems. Our total liability for any claim is limited to the amount paid by the client for the relevant project.',
      ],
    },
    {
      heading: 'Governing Law',
      paragraphs: ['These terms are governed by the laws of Kenya.'],
    },
  ],
};

export const termsSeo = {
  title: 'Terms of Service',
  description:
    "Silvacal Technologies' terms of service covering project quotes, our 50/50 payment structure, ownership of delivered work, and limitation of liability.",
};
