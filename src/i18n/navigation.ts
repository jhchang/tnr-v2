// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
