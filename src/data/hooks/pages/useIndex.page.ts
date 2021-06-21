import { useState, useMemo } from 'react';

import { UserShortInterface } from 'data/@types/UserInterface';

import { ValidationService } from 'data/services/ValidationService';
import { ApiService } from 'data/services/ApiService';

export default function useIndex() {
  const [cep, setCep] = useState('');

  const validCep = useMemo(() => {
    return ValidationService.cep(cep);
  }, [cep]);

  const [error, setError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [professionals, setProfessionals] = useState(
    [] as UserShortInterface[]
  );
  const [remainingProfessionals, setRemainingProfessionals] = useState(0);

  async function search(cep: string) {
    setHasSearched(false);
    setLoading(true);
    setError('');

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>(`/api/diaristas-cidade?cep=${cep.replace(/\D/g, '')}`);

      setProfessionals(data.diaristas);
      setRemainingProfessionals(data.quantidade_diaristas);
      setHasSearched(true);
      setLoading(false);
    } catch (error) {
      setError('CEP não encontrado...');
      setLoading(false);
    }
  }

  return {
    cep,
    setCep,
    validCep,
    search,
    error,
    professionals,
    hasSearched,
    loading,
    remainingProfessionals,
  };
}
