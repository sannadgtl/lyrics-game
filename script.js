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
    artist: "1",
  },
  {
    lyric: "test2",
    artist: "2",
  },
  {
    lyric: "test3",
    artist: "3",
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
  if (selectedAnswer === lyrics[i].artist) {
    scores += 1;
    totalScore.textContent = scores;
    console.log(scores);
    answerComment.textContent = "correct answer";
  } else {
    answerComment.textContent = "wrong answer";
  }
});

nextBtn.addEventListener("click", function () {
  i++;
  if (i < lyrics.length) {
    lyric.textContent = lyrics[i].lyric;
    selectedAnswer = undefined;
    answerBtns.forEach((btn) => {
      btn.checked = false;
    });
  } else {
    lyric.textContent = "game over";
  }
});
