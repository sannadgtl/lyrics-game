"use strict";

const totalScore = document.querySelector(".total-score");
const lyric = document.querySelector(".lyric");
const startBtn = document.querySelector(".start-btn");
const nextBtn = document.querySelector(".next-btn");
const answerBtns = document.querySelectorAll(".answer");

let lyrics = [
  {
    lyric: "test1",
    artist: 1,
  },
  {
    lyric: "test2",
    artist: 2,
  },
  {
    lyric: "test3",
    artist: 3,
  },
];
let scores;

startBtn.addEventListener("click", function () {
  startBtn.classList.toggle("hidden");
  nextBtn.classList.toggle("hidden");
  scores = 0;
  for (let i = 0; i < lyrics.length; i++) {
    lyric.textContent = lyrics[i].lyric;

    if (answerBtns.textContent === lyrics[i].artist) {
      scores += 1;
      totalScore.textContent = scores;
    } else {
      scores += 0;
      totalScore.textContent = scores;
    }
    // click on "next" button
  }
});
