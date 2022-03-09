const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
];

let index = 0;

document.querySelector(".img-container").style.backgroundImage = `url(../img/${pictures[0]}.jpeg)`;

document.querySelector(".btn-left").addEventListener("click", function () {
  slide(-1);
});
document.querySelector(".btn-right").addEventListener("click", function () {
  slide(1);
});

function slide(direction) {
  if (pictures[index + direction] !== undefined) {
    const img = document.querySelector(".img-container");
    index += direction;
    img.style.backgroundImage = `url(../img/${pictures[index]}.jpeg)`
  }
}