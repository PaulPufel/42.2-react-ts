import { useState } from "react";
import Button from "..//Button/Button";
import "./styles.ts";
import {FeedbackContainer, 
  FeedbackResultContainer, 
  LikeDislikeContainer, 
  Result
} from './styles';

function Feedback() {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDisikes] = useState<number>(0);

  const addLike = (): void => {
    setLikes((prevValue) => prevValue + 1);
  };

  const addDislike = (): void => {
    setDisikes((prevValue) => prevValue + 1);
  };

  const resetResults = (): void => {
    setLikes(0);
    setDisikes(0);
  }

  return (
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <Result>{likes}</Result>
          <Button name="LIKE" onClick={addLike} />
        </LikeDislikeContainer>
        <div className="like-dislike-container">
          <div className="result">{dislikes}</div>
          <Button name="DISLIKE" onClick={addDislike} />
        </div>
      </FeedbackResultContainer>
      <Button name="RESET RESULTS" onClick={resetResults} />
    </FeedbackContainer>
  );
}

export default Feedback;
