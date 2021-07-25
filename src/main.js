import Vue from 'vue';
import App from './App.vue';
import {
  Button,
  Container,
  Main,
  Carousel,
  CarouselItem,
  Tag
} from 'element-ui';

Vue.config.productionTip = true;

Vue.use(Button)
Vue.use(Container);
Vue.use(Main);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Tag);

new Vue({
  render: h => h(App),
}).$mount('#app');
