import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getServiceBySlug } from '@/data/services';

const service = getServiceBySlug('mpesa-integration')!;

export const metadata: Metadata = {
  title: service.seo.title,
  description: service.seo.description,
};

export default function MpesaIntegrationPage() {
  return <ServicePage service={service} />;
}
