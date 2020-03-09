<template>
	<div>	
		<myswiper :swiperArr="swiperArr" type="about1"></myswiper>
		<div class="pro_course">
			<div><span>{{course.pro_name}}</span><span class="glyphicon glyphicon-heart-empty"></span></div>			
			<div><span class="glyphicon glyphicon-time"> {{course.pro_timestr}}</span><span>0好评</span></div>
			<div>
				<span>课时数:{{course.pro_setprice_quantity}}</span> |
				<span>有效期:{{course.pro_active_date_text}}</span> |
				<span>场地:{{course.pro_placestr}}</span>
			</div>
			<div>
				<span>
					<span>{{course.pro_price}}</span>
					<span>元 </span>
					<span>原价:{{course.pro_market_price}}元</span>
				</span>
			</div>
		</div>
		<div class="keyuyue">
			<div class="title"><span>可预约场馆</span></div>
			<div class="list">
				<div v-for="list1 in keyuyue">
					<div><img :src="list1.gym_headimg[0].url"/></div>
					<div><span>{{list1.gym_name}}</span><span class="glyphicon glyphicon-heart-empty"></span></div>
					<div>{{list1.gym_address}}</div>
					<div><span>{{list1.gym_distance}}</span><span class="glyphicon glyphicon-send">导航</span></div>
				</div>
			</div>
		</div>
	</div>	
</template>

<script>
	import axios from "axios";
	import myswiper from "../components/MySwiper";
	export default{
		name:"about1",
		data:function(){
			 return {
				swiperArr:[],
				course:[],
				keyuyue:[]
			 }
		 },
			mounted:function(){	
				var pid = parseInt(this.$route.params.pro_id);
				let prarams = new URLSearchParams();
				prarams.append("pro_id",pid);
				prarams.append("fid","");										
				axios.post("https://www.jvhv.com/siteindex.php/Lesson/Detail.html",prarams).then((data)=>{
					console.log(data);
					this.swiperArr = data.data.data.pro_imglist;
					this.course = data.data.data;
					this.keyuyue = data.data.data.pro_gym_list
				});
			 },
			components:{
				myswiper
			}
		}		 
</script>

<style lang="scss">
	*{margin: 0;padding: 0;}
	.pro_course{width: 100%;background: white;padding: 5px;}
	.pro_course div{margin: 8px;color:black;}
	.pro_course div:nth-of-type(1){display: flex;justify-content: space-between;flex-wrap: wrap;
		span:nth-of-type(1){font-size: 22px;}
		span:nth-of-type(2){font-size: 20px;}
	}
	.pro_course div:nth-of-type(2){display: flex;justify-content: space-between;flex-wrap: wrap;
		span:nth-of-type(1){font-size: 14px;}
		span:nth-of-type(2){font-size: 15px;background: blue;padding: 3px;border-radius: 15px;color: white;}
	}
	.pro_course div:nth-of-type(4){
		span:nth-of-type(1){
			span:nth-of-type(1){color: red;font-size: 24px;}
			span:nth-of-type(2){font-size: 16px;}
			span:nth-of-type(3){color: darkgrey;text-decoration:line-through}
		}
	}
	.keyuyue{margin-top: 8px;width: 100%;background: white;margin-bottom: 50px;
		.title{font-size: 20px;padding: 10px;}
		.list{display: flex;;width: 100%;justify-content: space-between;overflow: scroll;
			div{width: 100%;border-radius: 10px;background: whitesmoke;margin: 8px;
				div:nth-of-type(1){margin: 0;
					img{width: 180px;height: 120px;border-radius: 5px;}
				}
				div:nth-of-type(2){margin: 0;margin-bottom: 5px;padding: 5px;
					display: flex;justify-content: space-between;
					span:nth-of-type(1){width: 80%;height: 40px;overflow: hidden;}
					span:nth-of-type(2){width: 10%;color: red;right: 0;}
				}
				div:nth-of-type(3){margin: 0;margin-bottom: 5px;padding: 5px;
					;height: 40px;overflow: hidden;
				}
				div:nth-of-type(4){margin: 0;margin-bottom: 5px;padding: 5px;
					display: flex;
					span:nth-of-type(2){margin-left: 40px;background: blue;color: white;
					;border-radius: 5px;font-size: 16px;
					}
				}
			}
		}
		
	}
		
// https://www.jvhv.com/wap/pages/find/find
			
		
	
	
</style>
