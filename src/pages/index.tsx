import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={
          'Preencha seu endereço e veja todos os profissionais da sua localidade'
        }
      />
      <UserInformation
        picture="https://github.com/luan11.png"
        name="Luan Novais"
        rating={4}
        description="Guarulhos"
      />
      <UserInformation
        picture=""
        name="John Doe"
        rating={2}
        description="São Paulo"
      />
    </div>
  );
}
