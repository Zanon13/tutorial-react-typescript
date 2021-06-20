import styled from 'styled-components';

// type LayoutProps = {
//   gap: number;
// }

// const Row = styled.div<LayoutProps>`
//   display: flex;
//   flex-direction: row;
//   gap: ${props => props.gap}px;
// `
// const Column = styled.div<LayoutProps> `
//   display: flex;
//   flex-direction: column;
//   gap: ${props => props.gap}px;
// `

// const SquareStyle = styled.div `
//   width: 34px;
//   height: 34px;
//   background: #fff;
//   border: 1px solid #999;
//   padding: 0;
//   font-size: 24px;
//   font-weight: bold;
// `

const Container = styled.div `
  body {
    font: 14px "Century Gothic", Futura, sans-serif;
    margin: 20px;
  }

  ol, ul {
    padding-left: 30px;
  }

  .board-row:after {
    clear: both;
    content: "";
    display: table;
  }

  .status {
    margin-bottom: 10px;
  }

  .square {
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    height: 34px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 34px;
  }

  .square:focus {
    outline: none;
  }

  .kbd-navigation .square:focus {
    background: #ddd;
  }

  .game {
    display: flex;
    flex-direction: row;
  }

  .game-info {
    margin-left: 20px;
  }

`
export { Container };
