import { useEffect, useState } from "react";
import axios from "axios";
import { DataItem } from "./types";
import {DataContainer, DataBox, Components, MyButton, Button, TitleFact, TextFact} from ".//styles"

function Homework10 () {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(false);
  const CAT_URL = 'https://catfact.ninja/fact';
 
  const fetchData = async () => {
    setLoading(true);

  try {
   const response = await axios.get(CAT_URL);
   const newItem: DataItem = { id: Date.now(), title: "Cat fact:", body: response.data.fact };

   setData((prevData) => [...prevData, newItem]);

  } catch (error: any) {
    console.error("Error fetching data:", error);
  } finally {
    setLoading(false);
   }
 };

  useEffect(() => {
    fetchData();
  }, []);

  const clearData = () => setData([]);

  const hasData = data.length > 0;

  return (
   <Components>
     {hasData && (
      <DataContainer>
        {data.map((item) => (
          <DataBox key={item.id}>
            <TitleFact>{item.title}</TitleFact>
            <TextFact>{item.body}</TextFact>
          </DataBox>
        ))}
      </DataContainer>
    )}

    <MyButton>
      <Button onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "GET MORE INFO"}
      </Button>

      {hasData && (
        <Button onClick={clearData}>
           DELETE ALL DATA
        </Button>
      )}
    </MyButton>
   </Components>
  );
}

export default Homework10;

