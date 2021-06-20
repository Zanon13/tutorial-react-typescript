import { Container } from '../styles';

type squareValues = 'X' | 'O' | null;

interface SquareProps {
  value: squareValues;
  onClick(): void;
}
 
const Square = (props: SquareProps) => {
  return (
    <button className="square" onClick={props.onClick}>
      <Container>
        {props.value}
      </Container>
    </button>
  );
}

export default Square;