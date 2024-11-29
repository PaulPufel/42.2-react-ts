import "./styles.ts";
import { AnimalCardProps } from './types';
import {AnimalCardWrapper, AnimalImage, AnimalName, AnimalSpecies} from './styles';

function AnimalCard({ animalData }: AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      <AnimalName>{animalData.name}</AnimalName>
      <AnimalSpecies>{animalData.species}</AnimalSpecies>
      <AnimalImage src={animalData.image}/>
    </AnimalCardWrapper>
  );
}

export default AnimalCard;
