"use strict";

const totalScore = document.querySelector(".total-score");
const lyric = document.querySelector(".lyric");
const nextBtn = document.querySelector(".next-btn");
const checkBtn = document.querySelector(".check-btn");
const restartBtn = document.querySelector(".restart-btn");
const answerBtns = document.querySelectorAll(".answer");
const answerComment = document.querySelector(".comment");
const answerGroup = document.querySelector("#answer-group");

let lyrics = [
  {
    lyric: "No deal, the 1950s shit they want from me",
    album: "midnights",
    song: "lavendar haze",
  },
  {
    lyric: "Two graves, one gun",
    album: "ttpd",
    song: "so long london",
  },
  {
    lyric: "You play stupid games, you win stupid prizes",
    album: "lover",
    song: "miss americana and the heartbreak prince",
  },
  {
    lyric: "In the garden, would you trust me",
    album: "folklore",
    song: "betty",
  },
  {
    lyric: "I called my mom, she said to get it off my chest",
    album: "1989",
    song: "now that we don't talk",
  },
  {
    lyric: "You should've said no, you should've gone home",
    album: "debut",
    song: "should've said no",
  },
  {
    lyric: "I've got my money on things goin' badly",
    album: "speak-now",
    song: "electric touch",
  },
  {
    lyric: "What died didn't stay dead",
    album: "evermore",
    song: "marjorie",
  },
  {
    lyric: "Dive bar on the East Side, where you at?",
    album: "reputation",
    song: "delicate",
  },
  {
    lyric: "How's your heart after breaking mine?",
    album: "fearless",
    song: "mr perfectly fine",
  },
  {
    lyric: "Feeling like the very last drops of an ink pen",
    album: "ttpd",
    song: "so long london",
  },
  {
    lyric: 'Pass me a note saying, "meet me tonight"',
    album: "speak-now",
    song: "i can see you",
  },
  {
    lyric: "Lord, save me, my drug is my baby",
    album: "reputation",
    song: "don't blame me",
  },
  {
    lyric: "I can still make the whole place shimmer",
    album: "midnights",
    song: "bejeweled",
  },
  {
    lyric: "Til we were dead and gone and buried",
    album: "red",
    song: "all too well",
  },
];

// starting conditions
let scores = 0;
let i = 13;
let selectedAnswer;
lyric.textContent = lyrics[i].lyric;

answerBtns.forEach((btn) => {
  btn.addEventListener("change", function () {
    selectedAnswer = btn.value;
    // console.log(selectedAnswer);
  });
});

checkBtn.addEventListener("click", function () {
  // no answer selected
  if (selectedAnswer === undefined) {
    answerComment.textContent = "Please select an answer 🤨";
    return;
  }
  // answer selected
  if (selectedAnswer === lyrics[i].album) {
    scores += 1;
    totalScore.textContent = scores;
    // console.log(scores);
    answerComment.textContent = "Correct answer 😁";
  } else {
    answerComment.textContent = "Wrong answer 😔";
  }

  // prevent answer changing
  answerBtns.forEach((btn) => {
    btn.disabled = true;
    answerGroup.classList.add("overlay");
  });
  // shown next btn
  checkBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");
});

nextBtn.addEventListener("click", function () {
  i++;
  if (i === lyrics.length - 1) {
    nextBtn.textContent = "View Results 👀";
  }
  // console.log("view");
  if (i < lyrics.length) {
    lyric.textContent = lyrics[i].lyric;
    selectedAnswer = undefined;
    answerComment.textContent = "";
    answerBtns.forEach((btn) => {
      btn.checked = false;
      btn.disabled = false;
    });
    checkBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");
    answerGroup.classList.remove("overlay");
  } else {
    lyric.textContent = "Game Over";
    answerGroup.classList.add("hidden");
    nextBtn.classList.add("hidden");
    restartBtn.classList.remove("hidden");
    answerComment.textContent = `Your total score was ${scores}/15`;
  }
});

restartBtn.addEventListener("click", function () {
  i = 0;
  scores = 0;
  totalScore.textContent = scores;
  // console.log(scores);
  lyric.textContent = lyrics[i].lyric;
  selectedAnswer = undefined;
  answerGroup.classList.remove("hidden");
  answerGroup.classList.remove("overlay");
  checkBtn.classList.remove("hidden");
  nextBtn.classList.add("hidden");
  restartBtn.classList.add("hidden");
  answerComment.textContent = "";
  answerBtns.forEach((btn) => {
    btn.checked = false;
    btn.disabled = false;
  });
});
