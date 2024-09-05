import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface Tenant {
  name: string;
  id: string;
}

interface AppState {
  language: 'ptBr';
  selectLanguage: (language: 'ptBr') => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        language: 'ptBr',
        selectLanguage: (language) => set({ language }),
      }),
      {
        name: 'fictorpay-operational-backoffice@app-storage',
      },
    ),
  ),
);
