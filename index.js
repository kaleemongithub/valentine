let no = document.querySelector(".No")
let yes = document.querySelector(".yes")
let height = 4
let width = 7
let font = 20
let currentSentence = 0
let zero = "o"
let sentence = [
  "Are you sure?",
  "Really sure?",
  "Think again?",
  "Last chance!",
  "Surely not?",
  "You, might regret this?",
  "Give it a another thought!",
  "Are you abosoultely certain?",
  "This could be mistaken!",
  "Have a heart",
  "Don't be so cold!",
  "Change of heart?",
  "Wouln't you reconsider?",
  "You're breaking by heart",
  "😠😠😠😠😠😠",
]

no.addEventListener("click", (event) => {
  width += 1
  height += 1
  font += 10
  yes.style.width = width + "vw"
  yes.style.height = height + "vw"
  yes.style.fontSize = font + "px"
  for (let i = 0; sentence.length > i; i++) {
    no.textContent = sentence[currentSentence]
    console.log(sentence[i])
  }
  currentSentence += 1

  if (currentSentence > 14) {
    zero += "o"
    no.textContent = "N" + zero + "!"
  }
})


