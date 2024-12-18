import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";
import { ClientsPage, NavBox, StyledNavLink} from "./styles";

function Clients() {
  const navigate = useNavigate();
   const goBack = () => {
     navigate('/')
}
  return (
    <ClientsPage>
       Content Clients page
        <NavBox>
           <StyledNavLink to='/clients/avacon' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
              Avacon
            </StyledNavLink>      
           <StyledNavLink to='/clients/rebax' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
              Rebax
           </StyledNavLink>
           <StyledNavLink to='/clients/netflix' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
              Netflix
           </StyledNavLink>
        </NavBox>
      <Button name="GO TO HOME" onClick={goBack} />
    </ClientsPage>
  )
}

export default Clients;
