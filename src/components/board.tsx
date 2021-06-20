import React from 'react';
import Square from './square';
import { Container } from '../styles';

type squareValues = 'X' | 'O' | null;

interface BoardProps {
  onClick(i: number): void;
  squares: squareValues[];
}

export default class Board extends React.Component<BoardProps> {
  renderSquare(i: number) {
    return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
    );
  }

  render() {
    return (
        <div>
          <Container>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </Container>
        </div>
    );
  }
}