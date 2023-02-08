const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";

  // li生成
  const li = document.createElement("li");
  const div = document.createElement("div");

  // liタグの子要素に各要素を設定
  li.appendChild(div);
  div.innerText = inputText;

  // 未完了リストに追加
  document.getElementById("incomplete_list").appendChild(li);
};

document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());
