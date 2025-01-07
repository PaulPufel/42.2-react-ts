import { useNavigate } from 'react-router-dom';
import { Header, LayoutComponent, NavContainer, LogoContainer, Main, StyledNavLink } from "./styles"
import { EmployeeLayoutProps } from "./types"

function EmployeeLayout({ children }: EmployeeLayoutProps) {
  const navigate = useNavigate();
  
  return (
    <LayoutComponent>
      <Header>
        <LogoContainer onClick={() => navigate('/')}></LogoContainer>
        <NavContainer>
          <StyledNavLink to='/' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            Create Employee
          </StyledNavLink>
          <StyledNavLink to='/employee' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            Employee
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
    </LayoutComponent>
  )
}

export default EmployeeLayout;
