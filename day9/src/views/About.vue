<template>
	<div>
		<div class="swiper-container">
			  <div class="swiper-wrapper">
					<div class="swiper-slide" v-for="item in swiper">
					<img :src="item.adlist_img">
					</div>				    
			  </div>				  
			  <div class="swiper-pagination"></div>
		</div>
		<div>
			<ul class="pro_List">
				<li v-for="i in icon">
					<div></div>
					<div>{{i.CategoryName}}</div>
				</li>
			</ul>
		</div>
		<div class="course">
			<div v-for="course in jingxuan">
				<div><img :src="course.pro_img[0].url"></div>
				<div>{{course.pro_name}}</div>
				<div class="num">{{course.pro_Joiner}}已参加</div>
			</div>
		</div>
		<div class="box">
			<h4>本周最受欢迎Top5</h4>
			<ul class="list">				
				<li v-for="item in listArr">
					<router-link :to="'/item'+item.pro_id">
					<div><img :src="item.pro_img[0].url"></div>
					<div class="project">
					<div>{{item.pro_name}}</div>
					<div class="num">{{item.pro_Joiner}}人已参加</div>
					</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	import swiper from "swiper/dist/js/swiper.js"; 
	import swipers from "swiper/dist/css/swiper.min.css"; 
	export default {
		name:"about",
		data:function(){
			return {
				listArr:[],
				swiper:[],
				icon:[],
				jingxuan:[]
			}
		},
		mounted:function(){
			axios.post("https://www.jvhv.com/siteindex.php/Index/Index.html").then((data)=>{
				console.log(data);
				this.listArr = data.data.data.CourseTop5;
				this.swiper = data.data.data.top_ad.list;
				this.icon = data.data.data.iconList;
				this.jingxuan = data.data.data.CourseforYou;
			});
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
	};
	
</script>
	
<style>	
	.sweiper-container{width: 100%;height: 200px;}
	.swiper-slide img{width: 100%;height: 200px;}
	.box{height: 440px;background: darkblue;margin: 10px;border-radius: 10px;margin-bottom:80px;}
	.box h4{;font-size: 20px;color: white;padding:10px;}
	.list li a{list-style: none;background: white;width: 90%;border-bottom:1px solid lightgrey;
	margin: auto;display: flex; }	
	.list li div{margin: 5px;}
	.list img{width: 80px;height: 80px;border-radius: 5px;}
	ul li{list-style: none;}
	.num{color: darkgrey;}
	ul{width: 100%;}
	.pro_List{display: flex;flex-wrap: wrap;flex-direction: row;
	justify-content: center;align-items: center;}
	.pro_List li{margin: 10px;align-items: center;font-size: 15px;width: auto;}
	.pro_List li div:nth-of-type(1){width: 50px;height: 50px;background: skyblue;border-radius: 8px;}
	.pro_List li div:nth-of-type(2){margin-top: 5px ;}
	.course{width:100%;display: flex;justify-content: center;flex-direction: row;flex-wrap: wrap;}
	.course div{margin: 5px;width: auto;}
	.course img{width: 160px;height: 120px;border-radius: 10px;}
</style>
