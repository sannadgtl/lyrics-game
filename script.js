"use strict";

const totalScore = document.querySelector(".total-score");
const lyric = document.querySelector(".lyric");
const nextBtn = document.querySelector(".next-btn");
const checkBtn = document.querySelector(".check-btn");
const answerBtns = document.querySelectorAll(".answer");
const answerComment = document.querySelector(".comment");

let lyrics = [
  {
    lyric: "test1",
    album: "taylor-swift",
  },
  {
    lyric: "test2",
    album: "girls-generation",
  },
  {
    lyric: "test3",
    album: "dreamcatcher",
  },
];

let scores = 0;
let i = 0;
let selectedAnswer;
lyric.textContent = lyrics[i].lyric;

answerBtns.forEach((btn) => {
  btn.addEventListener("change", function () {
    selectedAnswer = btn.value;
    console.log(selectedAnswer);
  });
});

checkBtn.addEventListener("click", function () {
  if (selectedAnswer === lyrics[i].album) {
    scores += 1;
    totalScore.textContent = scores;
    console.log(scores);
    answerComment.textContent = "correct answer";
  } else {
    answerComment.textContent = "wrong answer";
  }

  //   prevent answer changing
  answerBtns.forEach((btn) => {
    btn.disabled = true;
  });
});

nextBtn.addEventListener("click", function () {
  i++;
  if (i < lyrics.length) {
    lyric.textContent = lyrics[i].lyric;
    selectedAnswer = undefined;
    answerComment.textContent = "";
    answerBtns.forEach((btn) => {
      btn.checked = false;
      btn.disabled = false;
    });
  } else {
    lyric.textContent = "game over";
    // create restart button add to HTML as well
  }
});
