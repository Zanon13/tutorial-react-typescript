import { Container } from '../styles';

export type squareValues = 'X' | 'O' | null;

interface SquareProps {
  value: squareValues;
  onClick(): void;
}
 
export function Square(props: SquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      <Container>
        {props.value}
      </Container>
    </button>
  );
}