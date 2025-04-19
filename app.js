let calorieCount = 0;
let waterGlasses = 0;
const calorieGoal = 500;

function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;
  const bmi = (weight / (height * height)).toFixed(2);
  let status = "";

  if (bmi < 18.5) status = "Underweight";
  else if (bmi < 25) status = "Normal";
  else if (bmi < 30) status = "Overweight";
  else status = "Obese";

  document.getElementById("bmiResult").innerText = `Your BMI: ${bmi} (${status})`;
}

function updateCalories(amount) {
  calorieCount += amount;
  const percent = Math.min((calorieCount / calorieGoal) * 100, 100);
  document.getElementById("calorieBar").style.width = percent + "%";
  document.getElementById("calorieInfo").innerText = `${calorieCount}/${calorieGoal} calories burned`;

  if (calorieCount >= calorieGoal) {
    alert("🎉 Calorie goal reached!");
  }
}

function addWater() {
  waterGlasses++;
  document.getElementById("waterCount").innerText = `${waterGlasses} glass(es)`;
}

function getQuote() {
  const quotes = [
    "No pain, no gain!",
    "You are stronger than you think.",
    "Don’t stop now!",
    "One workout at a time.",
    "Progress, not perfection."
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteText").innerText = quote;
}

