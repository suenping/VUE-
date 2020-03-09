<template>
<div class="box">
	<div class="tuijian">
			<div class="list" v-for="list in tuijianArr">
				<div v-if="list.tre_img"><img :src="list.tre_img[0].url" /></div>
				<div class="title">{{list.tre_descr}}</div>
				<div v-if="list.user.headimgurl">
					<div><img style="width: 36px;height: 36px;" :src="list.user.headimgurl[0].url"/></div>
					<div style="width: 150px;">{{list.user.show_name}}</div>
					<div><span class="glyphicon glyphicon-thumbs-up"></span>{{list.goodCnt}}</div>
				</div>
			</div>
	</div>
</div>		
</template>

<script>
	import axios from "axios";
	export default{
		name:"child1",
		data:function(){
			return {
				tuijianArr:[],		
			}
		},
		mounted:function(){
			axios.post("https://www.jvhv.com/siteindex.php/Trends/Index.html").then((data)=>{
			this.tuijianArr = data.data.data.list;
			console.log(data);			
			})
		}		
	}
</script>

<style lang="scss">
	*{margin: 0;padding: 0;background: white;}
	.tuijian{width: 100%;display: flex;flex-wrap: wrap;aling:center;padding-left: 13px;
		border-top: 1px solid whitesmoke;
		.list{margin: 5px;width:45%;height: 100%;
			div:nth-of-type(1){
				img{width: 100%;height: 210px;border-radius: 10px;}
			}
			div:nth-of-type(2){
				width:100%;display:flex;flex-flow: row wrap;
				max-height: 40px;overflow: hidden;margin-top: 10px;margin-bottom: 10px;
			}
			div:nth-of-type(3){
				display: flex;justify-content: space-around;align-items: center;
				div{margin: 2px;}
			}
		}
	}
</style>
