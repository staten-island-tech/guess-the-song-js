document.getElementById("start-button").onclick = function () {
  location.href = "/src/game.html";
};

function scorePage() {
  document.getElementById("body").innerHTML = `
  <div id="container-box" class="h-3/4 w-1/4 rounded-3xl overflow-hidden shadow-lg mx-auto my-12 bg-gray-200 flex flex-col">
    <h1 class="font-bold text-4xl mb-2 pb-4">You scored a ${score}!</h1>
    <p class="text-gray-600 text-base text-lg">Timing matters! Wanna try again?</p>
  </div>
  `;
}
