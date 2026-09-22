import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getServiceBySlug } from '@/data/services';
import { buildMetadata } from '@/lib/seo';

const service = getServiceBySlug('data-ai')!;

export const metadata: Metadata = buildMetadata({
  title: service.seo.title,
  description: service.seo.description,
  path: `/services/${service.slug}`,
});

export default function DataAiPage() {
  return <ServicePage service={service} />;
}
