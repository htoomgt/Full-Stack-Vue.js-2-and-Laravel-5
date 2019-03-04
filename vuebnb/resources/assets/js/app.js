import Vue from 'vue';
import { populateAmenitiesAndPrices } from './helpers';
import "core-js/fn/object/assign";
//import MyComponent from "./components/MyComponent.vue";
import ImageCarousel from './components/ImageCarousel.vue';
import ModalWindow from './components/ModalWindow.vue';
import HeaderImage from './components/HeaderImage.vue';
let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);



var app = new Vue({
	el:"#app",

        data: Object.assign(model, {
            title: model.title,
            address: model.address,
            about: model.about,		
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
            
            openModal() {
                this.$refs.imagemodal.modalOpen = true;
            },
	},
	watch : {
            
	},
	created: function() {
	    
	  },
	destroyed: function () {
	    
	},
        components:{
            'image-carousel' : ImageCarousel,
            'modal-window' : ModalWindow,
            'header-image' : HeaderImage
        }
});

setTimeout(function(){
    app.val = 2;
}, 2000);



//console.log("This is watch and browser sync test and 2nd time");
