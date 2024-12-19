import { useNavigate } from "react-router-dom";
import { ButtonWrapper, CompanyName, CompanyWrapper, Description} from "./styles";
import Button from "components/Button/Button";

function Avacon() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1)
  }

  return ( 
   <CompanyWrapper>
     <CompanyName>Avacon</CompanyName>
     <Description>Description: Elektricity Brocker</Description>
     <ButtonWrapper>
       <Button name="GO BACK" onClick={goBack}/>
     </ButtonWrapper>
   </CompanyWrapper> 
  )
}

export default Avacon;