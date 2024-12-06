import { useEffect, useState } from "react"
import axios from "axios";
import Input from "../../components/Input/Input";
import { DogImg, ErrorMessage, Homework09Component, HomeworkTitle, Button, Spinner } from "./styles";

function Homework09 () {
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");
  const [dogImageUrl, setDogImageUrl] = useState<string | undefined>(undefined);
  const [error, setError] = useState<any>(undefined);
  const DOG_URL = 'https://dog.ceo/api/breeds/image/random';
  const [isLoading, setIsLoading] = useState<boolean>(false);

// Функция для обработки изменений в первом инпуте
  const handleInput1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput1(event.target.value);
  }

// Функция для обработки изменений во втором инпуте
  const handleInput2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput2(event.target.value);
  }

// Функция для получения случайного изображения собаки
  const getDogPhoto = async () => {
    setDogImageUrl(undefined);
    setError(undefined)

      try {
        setIsLoading(true)
        const response = await axios.get(DOG_URL);
        setDogImageUrl(response.data.message) 
      } catch (error: any) {
        setError(error.response?.data?.message || "Something went wrong");
      } finally {
        setIsLoading(false) 
      }
    };
    useEffect(() => {
      getDogPhoto()
    }, [input1])
    
  return (
   <Homework09Component>
      <HomeworkTitle>Homework-09</HomeworkTitle>

      <Input
        name="input1"
        id="input1"
        placeholder="Type text..."
        label="Input 1"
        type="text"
        onChange={handleInput1Change}
      />

      <Input
        name="input2"
        id="input2"
        placeholder="Type text else..."
        label="Input 2"
        type="text"
        onChange={handleInput2Change}
      />
      
      <Button onClick={getDogPhoto} disabled={isLoading}>
        {isLoading ? "Loading..." : "Fetch Dog Image"}
      </Button>
      
      {dogImageUrl && <DogImg src={dogImageUrl} alt='random dog' />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {isLoading && <Spinner></Spinner>}
    </Homework09Component>
  )
}

export default Homework09;
