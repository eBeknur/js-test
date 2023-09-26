var questions = [
  {
    question: "HTML nimani anglatadi?",
    answer: "a",
    options: {
      a: "Hyper Text Markup Language",
      b: "Hyperlinks and Text Markup Language",
      c: "Home Tool Markup Language",
      d: "None of the above",
    },
  },
  {
    question: "Qaysi teg tashqi CSS faylini aniqlash uchun ishlatiladi?",
    answer: "b",
    options: {
      a: "<style>",
      b: "<link>",
      c: "<script>",
      d: "<img>",
    },
  },
];

var score = 0;

for (var i = 0; i < questions.length; i++) {
  var userAnswer = prompt(
    questions[i].question +
      "\na) " +
      questions[i].options.a +
      "\nb) " +
      questions[i].options.b +
      "\nc) " +
      questions[i].options.c +
      "\nd) " +
      questions[i].options.d
  );

  if (userAnswer.toLowerCase() === questions[i].answer.toLowerCase()) {
    score++;
    alert("Tog'ri!");
  } else {
    alert("Xato!");
  }
}

alert("Sizning balingiz" + score + " Tashqarida " + questions.length);
