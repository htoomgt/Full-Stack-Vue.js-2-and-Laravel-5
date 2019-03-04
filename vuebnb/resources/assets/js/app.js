import Vue from 'vue';
import { populateAmenitiesAndPrices } from './helpers';
import "core-js/fn/object/assign";
//import MyComponent from "./components/MyComponent.vue";
import ImageCarousel from './components/ImageCarousel.vue';
import ModalWindow from './components/ModalWindow.vue';
let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);



var app = new Vue({
	el:"#app",

        data: Object.assign(model, {
            title: model.title,
            address: model.address,
            about: model.about,
		headerImageStyle: {
		    'background-image': `url(${model.images[0]})`
		},
            amenities: model.amenities,
            prices: model.prices,
            contracted: true,
            modalOpen: false,
            val: 1
        }),
        computed: {
            message(){
                return `The value is ${this.val}`
            }
        },
	methods: {
		escapeKeyListener(evt) {
		  if (evt.keyCode === 27 && app.modalOpen) {
		    app.modalOpen = false;
		  }
		},
            openModal() {
                this.$refs.imagemodal.modalOpen = true;
            },
	},
	watch : {
		modalOpen : function() {
		    var className = 'modal-open';
		      if (this.modalOpen) {
		        document.body.classList.add(className);
		      } else {
		        document.body.classList.remove(className);
		      }
		}
	},
	created: function() {
	    document.addEventListener('keyup', this.escapeKeyListener);
	  },
	destroyed: function () {
	    document.removeEventListener('keyup', this.escapeKeyListener);
	},
        components:{
            'image-carousel' : ImageCarousel,
            'modal-window' : ModalWindow
        }
});

setTimeout(function(){
    app.val = 2;
}, 2000);



//console.log("This is watch and browser sync test and 2nd time");
