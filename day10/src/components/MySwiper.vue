<template>
		<div class="swiper-container">
			  <div class="swiper-wrapper">
					<div class="swiper-slide" v-for="item in swiperArr">
					<img v-if="type == 'about'" :src="item.adlist_img">
					<img v-if="type == 'about1'" :src="item.url">
					</div>				    
			  </div>				  
			  <div class="swiper-pagination"></div>
	</div>	
</template>

<script>
	import swiper from "swiper/dist/js/swiper.js";
	import swipers from "swiper/dist/css/swiper.min.css"; 
	export default{
		props:["swiperArr","type"],
		name:"myswiper",
		mounted:function(){
			new Swiper('.swiper-container', {
		       pagination: '.swiper-pagination',
		       nextButton: '.swiper-button-next',
		       prevButton: '.swiper-button-prev',
		       paginationClickable: true,
			   observer: true,
		       spaceBetween: 30,
		       centeredSlides: true,
		       autoplay: 2500,
		       autoplayDisableOnInteraction: false,
			})				
		}			
	}
</script>

<style>
	.sweiper-container{width: 100%;height: 200px;}
	.swiper-slide img{width: 100%;height: 200px;}
</style>
