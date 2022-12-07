// Array of queisons
var quesions = [
  {
    question: "Html Stands For _____________________",
    options: [
      "Hyper Text Makeup Language",
      "html",
      "Case Cading Style Sheet",
      "Hypertext markup language",
    ],
    correctAns: "Hypertext markup language",
  },
  {
    question: "Css Stands For _______________________",
    options: [
      "Casecading Style Sheet",
      "Java",
      "Ram",
      "Hypertext markup language",
    ],
    correctAns: "Casecading Style Sheet",
  },
  {
    question: "Js Stands For _______________________",
    options: ["Java Style", "Java Script", "Script", "Script Src"],
    correctAns: "Java Script",
  },
  {
    question: "Dom Stands For _______________________",
    options: ["Document Object Model", "html", "Css", "Java"],
    correctAns: "Document Object Model",
  },
  {
    question: "Ram Stands For _______________________",
    options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
    correctAns: "Random Acccess Memory",
  },
  {
    question: "Rom Stands For _______________________",
    options: ["Hyper Text Markup Language", "html", "HTml", "Read Only Memory"],
    correctAns: "Read Only Memory",
  },
];

// select totalq no
var totalQuesionNo = document.getElementById("totalQuesionNo");
// secl curentqusion no
var curentQuesionNo = document.getElementById("curentQuesionNo");

var displayQuesion = document.getElementById("displayQuesion");
var optionsDisplay = document.getElementById("optionsDisplay");
var dmarks = document.getElementById("dmarks");
var dpercentage = document.getElementById("dpercentage");
var dstatus = document.getElementById("dstatus");
var showResult = document.getElementById("showResult");
var currentIndex = 0;
var marks = 0;

// initrender function
function initrender() {
  totalQuesionNo.innerHTML = quesions.length;
  curentQuesionNo.innerHTML = currentIndex + 1;
  displayQuesion.innerHTML = quesions[currentIndex].question;

  optionsDisplay.innerHTML = "";
  for (var i = 0; i < quesions[currentIndex].options.length; i++) {
    optionsDisplay.innerHTML += `
    <div class="col-md-6">
    <div class="py-2">
      <button onclick="checkQuesion('${quesions[currentIndex].options[i]}', '${quesions[currentIndex].correctAns}')" class="btn btn-outline-warning fs-4 w-100">
      ${quesions[currentIndex].options[i]}</button>
    </div>
  </div>
    `;
  }
}
initrender(); // rerender kerny kai liya ye function hama dubhara chaly

function nextQuestion() {
  if (currentIndex + 1 == quesions.length) {
    // MARKS PRINT
    dmarks.innerHTML = marks;
    var percentage = (marks / quesions.length) * 100;
    dpercentage.innerHTML = `${percentage.toFixed(2)}%`;
    if (percentage >= 50) {
      dstatus.innerHTML = "PASS";
    } else {
      dstatus.innerHTML = "FAIL";
    }
    showResult.style.display = "flex";
  } else {
    currentIndex++;
    initrender();
  }
}

function checkQuesion(userClick, currectAnswer) {
  // console.log(userClick);
  // console.log(currectAnswer);

  if (userClick == currectAnswer) {
    marks++;
  }
  // console.log(marks);

  nextQuestion();
}

// += pixhy waly mojud rahy agy waly bhi add ker dai
