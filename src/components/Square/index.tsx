import React, { ReactNode } from 'react';
import { Container } from './styles';

interface SquareProps {
  value?: ReactNode;
}

interface SquareState {
  value: string | null;
}

class Square extends React.Component<SquareProps, SquareState> {
  constructor(props: SquareProps) {
    super(props);
    this.state = {
      value: null,
    };
  }
  
  render() {
    return (
      <Container>
        <button 
          className="square"
          onClick={() => {
            this.setState({value: 'X'})
          }}
        >
          {this.state.value}
        </button>
      </Container>
    );
  }
}
export default Square;
