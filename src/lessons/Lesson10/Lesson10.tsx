import { useEffect, useState } from "react"
import { DataItem } from "./types";
import { Button, ButtonGroup, Component, DataContainer, DataBox, Page, PageName,  } from "./styles"

function Lesson10() {
 const [data, setData] = useState<DataItem[]>([]);
        const [loading, setLoading] = useState(false);
      
        // Функция для загрузки данных
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
           //const response = await fetch("https://catfact.ninja/fact");
            const result: DataItem[] = await response.json();
            setData((prevData) => [...prevData, ...result]); // Добавляем данные к уже существующим
          } catch (error) {
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
      
        return (
          <Component>
            {data.length > 0 && (
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
      
              {data.length > 0 && (
                <Button onClick={clearData}>
                  DELETE ALL DATA
                </Button>
              )}
            </ButtonGroup>
          </Component>
        );
      };
      
      export default Lesson10;  
         