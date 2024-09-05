import { startOfDay } from 'date-fns';
import { languages } from '@/lib/languages/language';

export function formatDate(date: string, lang: languages): string {
  if (!date) return '';

  switch (lang) {
    case 'ptBr':
      return new Date(date).toLocaleString('pt-BR');
    default:
      return new Date(date).toLocaleString('pt-BR');
  }
}

export const getDefaultDate = () => {
  const now = new Date();
  now.setHours(12);

  // Get current date in UTC
  const currentDateUTC = new Date(
    Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1),
  );

  // Get start of the day in UTC time
  const startDateUTC = startOfDay(currentDateUTC);

  return startDateUTC;
};
