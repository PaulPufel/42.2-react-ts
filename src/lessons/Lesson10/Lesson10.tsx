import { useEffect, useState } from "react";
import axios from "axios";
import { DataItem } from "./types";
import { Button, ButtonGroup, Component, DataContainer, DataBox, Page, PageName } from "./styles";

function Lesson10() {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(false);
  const CAT_URL = 'https://catfact.ninja/fact';
 
  // Функция для загрузки данных
  const fetchData = async () => {
    setLoading(true);

  try {
  // const response = await axios.get("https://catfact.ninja/fact");
   const response = await axios.get(CAT_URL);

  // Создаем объект DataItem вручную
   const newItem: DataItem = {
   id: Date.now(), // Уникальный идентификатор
   title: "Cat Fact",
   body: response.data.fact // Данные из ответа
 };

 // Добавляем данные к уже существующим
   setData((prevData) => [...prevData, newItem]);

  } catch (error: any) {
    console.error("Error fetching data:", error);
  } finally {
    setLoading(false);
   }
 };

  // Эффект для загрузки данных при загрузке страницы
  useEffect(() => {
    fetchData();
  }, []);

  // Функция для очистки всех данных
  const clearData = () => setData([]);

  const hasData = data.length > 0;

  return (
    <Component>
      {hasData && (
        <DataContainer>
          {data.map((item) => (
            <DataBox key={item.id}>
              <PageName>{item.title}</PageName>
              <Page>{item.body}</Page>
            </DataBox>
          ))}
        </DataContainer>
      )}

      <ButtonGroup>
        <Button onClick={fetchData} disabled={loading}>
          {loading ? "Loading..." : "GET MORE INFO"}
        </Button>

        {hasData && (
          <Button onClick={clearData}>
            DELETE ALL DATA
          </Button>
        )}
      </ButtonGroup>
    </Component>
  );
}

export default Lesson10;

