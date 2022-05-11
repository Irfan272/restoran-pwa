import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import {
    createrestoDetailTemplate
} from '../templates/template-creator';

const Detail = {
    async render() {
        return `
        <div id="movie" class="movie"></div>
    `;
    },
    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#movie');
        restaurantContainer.innerHTML = createrestoDetailTemplate(restaurant);
    },
};

export default Detail;