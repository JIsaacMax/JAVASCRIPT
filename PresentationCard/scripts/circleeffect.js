const circleEffect =  document.querySelector('.text-circle')
circleEffect.innerHTML = circleEffect.innerText.split("").map(
    (char, i) =>
    `<span style="transform: rotate(${i * 7.4}deg)">${char}</span>`
).join("")
