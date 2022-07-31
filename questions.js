//点数用の変数
let score = 0;

const form = document.querySelector('#questions');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);

  const correctAnswers = {
    question1: 'B',
    question2: 'B',
    question3: 'A',
  };
 
  // 答えは正解か不正解か確認
  for (var pair of data.entries()) {
    const isCorrect = correctAnswers[pair[0]] === pair[1];

    // 正解の答えの計算
    if (isCorrect) {
      score++;
    }
  }
  
  // 点数を反映する
  alert('あなたの点数は: ' + score + '点です！');
});

