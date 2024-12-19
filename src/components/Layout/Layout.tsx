import { useNavigate } from 'react-router-dom';
import { Footer, Header, LayoutComponent, NavContainer, LogoContainer, Main, StyledNavLink } from "./styles";
import { LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  return (
    <LayoutComponent>
      <Header>
         {/* 1-й способ - обертка Link */}
        {/* <Link to='/'><LogoContainer></LogoContainer></Link> */}
        {/* 2-й способ - хук useNavigate */}
        <LogoContainer onClick={() => navigate('/')}>HOME</LogoContainer>
        <NavContainer>
          <StyledNavLink to='/' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            Home
          </StyledNavLink>
          <StyledNavLink to='/about' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            About
          </StyledNavLink>
          <StyledNavLink to='/users' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            Users
          </StyledNavLink>
          <StyledNavLink to='/clients' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            Clients
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>
        {children}
      </Main>
      <Footer><LogoContainer></LogoContainer>The End</Footer>
    </LayoutComponent>
  )
}

export default Layout;
