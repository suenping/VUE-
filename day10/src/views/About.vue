<template>
	<div>
		<div class="sousuo">
			<div class="city">深圳<span class="glyphicon glyphicon-chevron-up"></span></div>
			<div><input type="text" placeholder="请输入关键字" /></div>
		</div>
		<myswiper :swiperArr="swiperArr" type="about"></myswiper>
		<div class="iconList">
			<div v-for="(icon,index) in iconArr">
				<div><img :src="require('../assets/icon/'+(index+1)+'.png')" /></div>
				<div><span>{{icon.CategoryName}}</span></div>
			</div>
		</div>
		<div class="jingxuan">
			<h4>为您精选</h4>
			<div class="jingxuanList">
				<div v-for="course in jingxuan">
					<div><img :src="course.pro_img[0].url"></div>
					<div class="pro_name">{{course.pro_name}}</div>
					<div class="num">{{course.pro_Joiner}}已参加</div>
				</div>
			</div>
		</div>
		<div class="box">
			<div class="Top5">
				<h4>本周最受欢迎Top5</h4>
				<ul class="list">				
					<li v-for="item in listArr">
						<router-link :to="'/about1/'+item.pro_id">
						<div><img :src="item.pro_img[0].url"></div>
						<div>
						<div class="pro_name">{{item.pro_name}}</div>
						<div class="num">{{item.pro_Joiner}}人已参加</div>
						</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		
	</div>
</template>

<script>
	import axios from "axios";
	import myswiper from "../components/MySwiper";
	export default {
		name:"about",
		data:function(){
			return {
				listArr:[],
				swiperArr:[],
				iconArr:[],
				jingxuan:[],
				i:"../assets/icon/",
				m:".png"
			}
		},
		mounted:function(){
			axios.post("https://www.jvhv.com/siteindex.php/Index/Index.html").then((data)=>{
				console.log(data);
				this.listArr = data.data.data.CourseTop5;
				this.swiperArr = data.data.data.top_ad.list;
				this.iconArr = data.data.data.iconList;
				this.jingxuan = data.data.data.CourseforYou;
			});			
		},
		components:{
			myswiper
		}
	};
	
</script>
	
<style>	
	.sousuo{width: 100%;height: 50px;background: darkblue;display: flex;line-height: 50px;}
	.sousuo .city{width: 40%px;color: white;padding-left: 20px;}
	.sousuo input{height: 25px;width: 280px;border-radius: 5px;}
	.box{background: white;padding-top: 1px;margin-top: 8px;}
	.Top5{background: darkblue;margin: 10px;border-radius: 10px;margin-bottom:60px;padding: 5px;}
	.Top5 h4{;font-size: 20px;color: white;padding:10px;padding-top: 20px;}
	ul li{list-style: none;}
	.Top5 ul{margin: 5px;}
	.Top5 li a{list-style: none;background: white;border-bottom:1px solid lightgrey;margin: auto;display: flex; }	
	.Top5 li div{margin: 5px;}
	.Top5 .pro_name{color: #000000;font-size: 16px;}
	.Top5 img{width: 80px;height: 80px;border-radius: 5px;}
	.num{color: darkgrey;}
	.iconList{background: white;margin-top: 5px;width: 100%;display:flex ;flex-flow:row wrap;
	justify-content: center;text-align: center;font-size: 14px;}
	.iconList img{width: 40px;height: 40px;}
	.iconList div{margin: 7px;}
	.jingxuan{background: white;margin-top: 8px;}
	.jingxuan h4{padding-left: 20px;padding-top: 10px;}
	.jingxuan .pro_name{color: #000000;font-weight: bold;font-size: 16px;}
	.jingxuanList img{width: 160px;height: 100px;border-radius: 10px;}
	.jingxuanList {display: flex;flex-flow:row wrap;justify-content: center;}
	.jingxuan div{margin: 5px;}
</style>
