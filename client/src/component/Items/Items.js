import React from "react";

const Test = (props) => {
  console.log(props.hello);
  return <div>Test Component {props.hello}</div>
}

function Items() {
  return (
    <>
      <div>상품 정보</div>
      <div />
      <div></div>
      <div>{false}</div>
      <div>{null}</div>
      <div>{undefined}</div>
      <div>{true}</div>

      {/* ------- [조건부 렌더링] -------*/}
      {true && '하이'}
      {true && true}
      {true && <Test hello='쉬고 싶다' />}
      {true && <Test />}
      {false && <Test />}
    </>
  );
}

export default Items;
