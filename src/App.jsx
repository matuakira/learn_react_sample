import React from "react";

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
  return (
    <>
      <h1>こんにちは</h1>
      <p>お元気ですか</p>
    </>
  );
};

// 他からApp関数を使えるようにする。
export default App;
