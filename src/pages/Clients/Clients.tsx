import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";
import { ClientsPage, NavBox, StyledLink} from "./styles";

function Clients() {
  const navigate = useNavigate();
   const goBack = () => {
     navigate('/')
}
  return (
    <ClientsPage>
       Content Clients page
        <NavBox>
           <StyledLink to='/clients/avacon'>Avacon<StyledLink> 
              Avacon
            </StyledLink>      
           <StyledLink to='/clients/rebax' >Rebax<StyledLink>
              Rebax
           </StyledLink>
           <StyledLink to='/clients/netflix' >Netflix<StyledLink>
              Netflix
           </StyledLink>
        </NavBox>
      <Button name="GO TO HOME" onClick={goBack} />
    </ClientsPage>
  )
}

export default Clients;
