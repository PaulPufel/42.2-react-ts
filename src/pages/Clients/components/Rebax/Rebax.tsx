import { useNavigate } from "react-router-dom";
import { ButtonWrapper, CompanyName, CompanyWrapper, Description} from "./styles";
import Button from "components/Button/Button";

function Rebax() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1)
  }

  return ( 
   <CompanyWrapper>
     <CompanyName>Rebax</CompanyName>
     <Description>Description: Metalworking</Description>
     <ButtonWrapper>
       <Button name="GO BACK" onClick={goBack}/>
     </ButtonWrapper>
   </CompanyWrapper> 
  )
}

export default Rebax;