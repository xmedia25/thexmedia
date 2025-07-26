import { Metadata } from 'next';
import ErrorMain from '@/pages/error/error-main'
 
export const metadata: Metadata = {
  title: "The X Media - Page Not Found",
  description: "The page you're looking for doesn't exist. Return to The X Media homepage to explore our digital marketing and creative services.",
};

export default function NotFound() {
  return (
    <ErrorMain/>
  )
}