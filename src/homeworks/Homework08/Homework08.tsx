import React, { ChangeEvent, useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Homework08Container, HomeworkHeader, FormWrapper, ResultWrapper, ResultBlock } from "./styles";

function Homework08() { 
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");
  const [results, setResults] = useState<boolean>(false);

const input1OnChange = (event: ChangeEvent<HTMLInputElement>) => {
  setInput1(event.target.value)
}

const input2OnChange = (event: ChangeEvent<HTMLInputElement>) => {
  setInput2(event.target.value)
}

const handleSubmit = (): void => {
   setResults(!results);
}

return (
  <Homework08Container>
    <HomeworkHeader>Homework-08</HomeworkHeader>
     <FormWrapper>
      <Input
        name="input1"
        id="input1"
        placeholder="Enter first value"
        label="Input 1"
        type="text"
        value={input1}
        onChange={input1OnChange}
      />
      <Input
        name="input2"
        id="input2"
        placeholder="Enter second value"
        label="Input 2"
        type="text"
        value={input2}
        onChange={input2OnChange}
      />
     <Button name="SUBMIT" onClick={handleSubmit} />
    </FormWrapper>
    
  { results && (<ResultWrapper>
     <ResultBlock>{input1}</ResultBlock>
     <ResultBlock>{input2}</ResultBlock> 
   </ResultWrapper>)}

   </Homework08Container>
  )
}

export default Homework08;
