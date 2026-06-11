import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { privacyContent, privacySeo } from '@/data/legal';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: privacySeo.title,
  description: privacySeo.description,
  path: '/privacy',
});

export default function PrivacyPage() {
  return <LegalPage content={privacyContent} />;
}
