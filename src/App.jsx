/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
/*
 Appをコンポーネント化する。
 拡張子がjsでも問題なく動くが、
 Reactのコンポーネントであることを明示するために、拡張子をjsxにする。
 コンポーネント名は必ず大文字を先頭にしなくてはならない。
 (正しい例)App, SomeComponent
 (エラーとなる例)app, someComponent
 (エラーにはならないが非推奨の例)Some_component, Some_Component
*/

// Appという関数を定義。違う名前でも可。
const App = () => {
  console.log("さいしょ");
  // Stateを使ってみる。
  // 分割代入で変数をセット。変数名は任意。[変数名, セット用関数名]といった形。
  // useStateの引数でnumの初期値をセット。
  // Stateに変化があった場合は、コンポーネント全体が上から順に評価され再レンダリングが行われる。
  // 再評価の起因は以下の3種類。
  // State変化、Props変化、親コンポーネントが再評価で子コンポーネントも再評価
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  // ボタンクリック時にStateのnumをカウントアップする。
  // setNumを使う。
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // 3の倍数の時だけ顔描画。
  // setFaceShowFlagだけだと、too many re-renderのエラー。
  // ここでsetFaceShowFlagを呼ぶたびにStateが変化して、
  // このコンポーネントが先頭から再評価され、またここに来た時に同じことになり、
  // 無限ループになってしまうため。

  // useEffectで関心ごとを分離する。
  // 第１引数は関数、第２引数は関心ごと。
  // faceShowFlagからは分離して、numによってのみ切り替えたいため。
  // 第２引数にnumを指定することで、numが変化したときだけ第１引数で書いた関数が実行される。
  // 第２引数は可変長。空配列[]にすると初回のみ実行される。
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // || は左辺がfalseなら右辺を返す。左辺がtrueなら左辺を返す。
        faceShowFlag || setFaceShowFlag(true);
      } else {
        // && は左辺がtrueなら右辺を返す。左辺がfalseなら左辺を返す。
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  // 以下がJSX記法。JavaScriptの中にHTMLを書く。
  // 一つのタグで括らないとエラーになる。
  // 便宜上divで括ってもよいが、無駄な要素がレンダリングされてしまうので、
  // Reactに用意されている<React.Fragment>というタグを使うのが定石。単に<>～</>でも良い。
  // buttonタグの中身について、イベントは単語の区切りを大文字にする（キャメルケース）。
  // {}で括った部分はjavascriptとして認識される。
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です。</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ﾟДﾟ)</p>}
    </>
  );
};

// 他からApp関数を使えるようにする。
export default App;
