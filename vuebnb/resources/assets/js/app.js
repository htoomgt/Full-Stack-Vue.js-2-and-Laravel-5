import Vue from 'vue';
import { populateAmenitiesAndPrices } from './helpers';
import "core-js/fn/object/assign";
let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

Vue.component('image-carousel', {
    template : `
        <div class="image-carousel"> 
            <img v-bind:src="image" />
            <div class="controls">
                <carousel-control></carousel-control>
                <carousel-control></carousel-control>
            </div>
        </div>
    `,
    data(){
        return {
            images : [
                '/images/1/Image_1.jpg',
                '/images/1/Image_2.jpg',
                '/images/1/Image_3.jpg',
                '/images/1/Image_4.jpg'
            ],
            index : 1
        }
    },
    computed:{
        image(){
            return this.images[this.index];
        }
    },
    components : {
        'carousel-control' : {
            template : `<i class="carosel-control fa fa-2x fa-chevron-left"></i>`
        }
    }
});

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
		}
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
	}
});

setTimeout(function(){
    app.val = 2;
}, 2000);



//console.log("This is watch and browser sync test and 2nd time");
