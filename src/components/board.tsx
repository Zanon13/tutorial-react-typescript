import { Square, squareValues } from './square';
import { Container } from '../styles';

interface BoardProps {
  onClick(i: number): void;
  squares: squareValues[];
}

export function Board(props: BoardProps) {
  function renderSquare(i: number) {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    );
  }
  return (
    <div>
      <Container>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </Container>
    </div>
  );
}