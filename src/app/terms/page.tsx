import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { termsContent, termsSeo } from '@/data/legal';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: termsSeo.title,
  description: termsSeo.description,
  path: '/terms',
});

export default function TermsPage() {
  return <LegalPage content={termsContent} />;
}
