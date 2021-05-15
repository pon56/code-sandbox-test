import "./styles.css";

const onClickeAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";

  // li生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // divタグにpを設定
  div.appendChild(p);
  // liタグに上のdivを設定
  li.appendChild(div);

  console.log(li);
  // 未完了のリストに上のli を追加
  document.getElementById("incompleteList").appendChild(li);
};

document
  .getElementById("addButton")
  .addEventListener("click", () => onClickeAdd());
