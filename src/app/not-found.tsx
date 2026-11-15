import { ArrowLeft } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Section';

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-label uppercase text-brand">404</p>
      <h1 className="mt-3 text-h2-sm text-ink md:text-h2">This page doesn&apos;t exist.</h1>
      <p className="mt-4 max-w-md text-body">The link may be broken, or the page may have moved.</p>
      <ButtonLink href="/" className="mt-8">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to home
      </ButtonLink>
    </Container>
  );
}
