function calculateCalories() {
  const age = parseInt(document.getElementById("age").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const activity = document.getElementById("activity").value;

  const METs = {
    "Running": 10,
    "Walking": 4,
    "Cycling": 8
  };

  if (isNaN(age) || isNaN(weight)) {
    document.getElementById("result").innerText = "Please enter valid values.";
    return;
  }

  const minutes = 30;
  const burn = ((METs[activity] * 3.5 * weight) / 200) * minutes;
  document.getElementById("result").innerText =
    `You burned around ${Math.round(burn)} calories by ${activity} for 30 minutes!`;

  const quotes = [
    "No pain, no gain!",
    "You're stronger than you think!",
    "Keep moving forward!",
    "One workout at a time!",
    "You got this!"
  ];
  document.getElementById("quote").innerText =
    quotes[Math.floor(Math.random() * quotes.length)];
}
function showQuote() {
  const quotes = [
    "You're doing great!",
    "Every step counts!",
    "Push yourself because no one else is going to do it for you.",
    "Small progress is still progress!",
    "You got this 💪"
  ];
  const index = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[index];
}
