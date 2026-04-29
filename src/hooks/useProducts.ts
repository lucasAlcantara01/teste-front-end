import { useQuery } from '@tanstack/react-query';
import type { ApiResponse } from '../types';

const BASE =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';
const URL = `https://corsproxy.io/?${encodeURIComponent(BASE)}`;

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async (): Promise<ApiResponse> => {
      const response = await fetch(URL);
      if (!response.ok) throw new Error('Network error');
      return response.json();
    },
    staleTime: 1000 * 60 * 5,
  });
};
