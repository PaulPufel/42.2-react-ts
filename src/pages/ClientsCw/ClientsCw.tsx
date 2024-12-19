import { ClientsPage, Title, StyledLink } from './styles';

function ClientsCw() {
  return (
    <ClientsPage>
      <Title>ClientsCw</Title>
      <StyledLink to='amazon'>Amazon</StyledLink>
      <StyledLink to='facebook'>Facebook</StyledLink>
      <StyledLink to='google'>Google</StyledLink>
    </ClientsPage>
  )
}

export default ClientsCw;
