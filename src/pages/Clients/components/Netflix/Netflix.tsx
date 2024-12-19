import { useNavigate } from "react-router-dom";
import { ButtonWrapper, CompanyName, CompanyWrapper, Description} from "./styles";
import Button from "components/Button/Button";

function Netflix() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1)
  }

  return ( 
   <CompanyWrapper>
     <CompanyName>Netflix</CompanyName>
     <Description>Description: Broadcasting video channels</Description>
     <ButtonWrapper>
       <Button name="GO BACK" onClick={goBack}/>
     </ButtonWrapper>
   </CompanyWrapper> 
  )
}

export default Netflix;
