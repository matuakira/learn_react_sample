import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";
/*
 コンポーネント化する。
 拡張子がjsでも問題なく動くが、
 Reactのコンポーネントであることを明示するために、拡張子をjsxにする。
 コンポーネント名は必ず大文字を先頭にしなくてはならない。
 (正しい例)App, SomeComponent
 (エラーとなる例)app, someCompornent
 (エラーにはならないが非推奨の例)Some_component, Some_Component
*/

// Appという関数を定義。違う名前でも可。
const App = () => {
  // これがJSX記法。JavaScriptの中にHTMLを書く。
  // 一つのタグで括らないとエラーになる。
  // 便宜上divで括ってもよいが、無駄な要素がレンダリングされてしまうので、
  // Reactに用意されている<React.Fragment>というタグを使うのが定石。
  // 単に<>～</>でも良い。
  // buttonタグの中身について、イベントは単語の区切りを大文字にする（キャメルケース）。
  // {}で括った部分はjavascriptとして認識される。

  const onClickButton = () => alert("test");

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です。</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// 他からApp関数を使えるようにする。
export default App;
