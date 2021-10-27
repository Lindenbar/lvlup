let target = document.getElementById('reviews');

fetch('json/reviews.json')
    .then(response => response.json())
    .then(reviews => {
        reviews.forEach(review => {
            target.innerHTML += `<div class="reviews__box">
                                    <div class="reviews__user-photo">
                                        <img alt="user_photo" src="${review.photo}"/>
                                    </div>
                                    <div class="reviews__content">
                                        <div class="reviews__user-name">${review.name}</div>
                                        <div class="reviews__text">${review.text}</div>
                                    </div>
                                 </div>`
        });
    });