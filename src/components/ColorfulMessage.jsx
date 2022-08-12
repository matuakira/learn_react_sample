import React from "react";

/*
  ColorfulMessageをコンポーネント化する。
  propsで引数を受け取れるようにする。
*/
const ColorfulMessage = (props) => {
  // 毎回propsを書かなくて済むように分割代入
  const { color, children } = props;

  const contentStyle = {
    // 正式には「color: color,」と書くが、
    // セット対象のプロパティ名と、セットする値の変数名が同じときは省略可能。
    // コードもすっきりする。
    color,
    fontSize: "18px"
  };

  // childrenにタグの中身が入ってる。
  // messageというようなpropsを定義してもよし。
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
