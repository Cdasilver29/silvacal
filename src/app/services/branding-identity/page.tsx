import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getServiceBySlug } from '@/data/services';

const service = getServiceBySlug('branding-identity')!;

export const metadata: Metadata = {
  title: service.seo.title,
  description: service.seo.description,
};

export default function BrandingIdentityPage() {
  return <ServicePage service={service} />;
}
