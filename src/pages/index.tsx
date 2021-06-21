import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';

import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from '@material-ui/core';

import {
  FormElementsContainer,
  ProfessionalsPaper,
  ProfessionalsContainer,
} from 'ui/styles/pages/index.style';

import useIndex from 'data/hooks/pages/useIndex.page';

export default function Home() {
  const {
    cep,
    setCep,
    validCep,
    search,
    error,
    professionals,
    hasSearched,
    loading,
    remainingProfessionals,
  } = useIndex();

  return (
    <div>
      <SafeEnvironment />

      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={
          'Preencha seu endereço e veja todos os profissionais da sua localidade'
        }
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask="99.999-999"
            label="Digite seu CEP"
            fullWidth
            variant={'outlined'}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />

          {error && <Typography color={'error'}>{error}</Typography>}

          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
            disabled={!validCep || loading}
            onClick={() => search(cep)}
          >
            {loading ? <CircularProgress size={20} /> : 'Buscar'}
          </Button>
        </FormElementsContainer>

        {hasSearched &&
          (professionals.length > 0 ? (
            <ProfessionalsPaper>
              <ProfessionalsContainer>
                {professionals.map(
                  (
                    { nome_completo, foto_usuario, reputacao, cidade },
                    index
                  ) => (
                    <UserInformation
                      key={index}
                      picture={foto_usuario}
                      name={nome_completo}
                      rating={reputacao}
                      description={cidade}
                    />
                  )
                )}
              </ProfessionalsContainer>

              <Container sx={{ textAlign: 'center' }}>
                {remainingProfessionals > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ... e mais {remainingProfessionals} profissionais atendem
                    seu endereço
                  </Typography>
                )}

                <Button
                  variant={'contained'}
                  color={'secondary'}
                  sx={{ mt: 5 }}
                >
                  Contratar
                </Button>
              </Container>
            </ProfessionalsPaper>
          ) : (
            <Typography align={'center'} color={'textPrimary'}>
              Ainda não temos nenhuma diarista disponível em sua região
            </Typography>
          ))}
      </Container>
    </div>
  );
}
