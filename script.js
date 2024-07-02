"use strict";

const totalScore = document.querySelector(".total-score");
const lyric = document.querySelector(".lyric");
const nextBtn = document.querySelector(".next-btn");
const checkBtn = document.querySelector(".check-btn");
const answerBtns = document.querySelectorAll(".answer");
const answerComment = document.querySelector(".comment");

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
    album: "marjorie",
    song: "evermore",
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
