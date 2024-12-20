import { CardContainer, CardName} from './styles'
import Message from '../Message/Message';

function Card() {
    return (
        <CardContainer isShowResult={true}>
           <CardName>Mailbox: Richard Wagner</CardName>
           <Message />
        </CardContainer>)
}
export default Card;
