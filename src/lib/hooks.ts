import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionName } from './types';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
    inView,
  };
}

export function useCurrentUser() {
  const [user, setUser] = useState<Session['user'] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSession().then((session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });
  }, []);

  const isAuthenticated = !!user;

  return { user, loading, isAuthenticated };
}
