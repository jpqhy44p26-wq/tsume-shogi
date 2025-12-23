let coin = localStorage.getItem("coin")
  ? parseInt(localStorage.getItem("coin"))
  : 0;

document.getElementById("coin").innerText = "🪙 コイン: " + coin;

const correctMove = "７七桂";

function selectMove(move) {
  const result = document.getElementById("result");

  if (move === correctMove) {
    result.innerHTML = "🎉 正解！ +10コイン";
    addCoin(10);
    document.getElementById("rewardBtn").style.display = "inline-block";
  } else {
    result.innerHTML = "❌ 不正解";
  }
}

function addCoin(amount) {
  coin += amount;
  localStorage.setItem("coin", coin);
  document.getElementById("coin").innerText = "🪙 コイン: " + coin;
}

function watchAd() {
  // 実際は広告視聴後に付与
  addCoin(5);
  document.getElementById("rewardBtn").style.display = "none";
  alert("広告視聴ありがとう！");
}
