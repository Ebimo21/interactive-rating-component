const submitBtn = document.getElementById('submit');
const rating = document.getElementsByClassName('rating')
const ratingScoreLabel = document.getElementById('ratingScore')
const ratingBoard = document.getElementById('rating-board')
const successBoard = document.getElementById('success-board')

let ratingScore = 0;

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    ratingBoard.classList.add('hidden')
    successBoard.classList.remove('hidden')
    ratingScoreLabel.textContent = ratingScore
});


for(let i =0; i < rating.length; i++){
    rating[i].addEventListener('change', (e)=>{
        ratingScore = rating[i].getAttribute('data-value')
        ratingScoreLabel.textContent = ratingScore
    });
}



