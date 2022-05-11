import CONFIG from '../../globals/config';

const createrestoDetailTemplate = (restaurant) => `
  <h2 class="movie__title">${restaurant.name}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="movie__info">
  <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${restaurant.description}</p>
    <h4>Duration</h4>
    <p>${restaurant.city} minutes</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>

`;

const createrestoItemTemplate = (restaurant) => `
<div class="movie-item">
<div class="movie-item__header">
    <img class="movie-item__header__poster" alt="${restaurant.name}"
        src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
    <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${restaurant.rating}</span></p>
    </div>
</div>
<div class="movie-item__content">
    <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
    <p>${restaurant.description}</p>
</div>
</div>
  `;

export {
  createrestoItemTemplate,
  createrestoDetailTemplate
};