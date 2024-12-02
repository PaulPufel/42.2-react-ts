import Button from "../../components/Button/Button";
import { Homework07Container } from "./styles";

function Homework07() {
  return (
    < Homework07Container>
        <Button name="Active Button" onClick={() => { 
        console.log('Button works');
      }}/>
        <Button name="Disabled Button" disabled onClick={() => { 
        console.log('Button don`t works');
      }} />
    </Homework07Container>    
  )
}

export default Homework07;
