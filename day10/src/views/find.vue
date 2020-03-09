<template>
	<div>
		<div class="faxian">
			<span></span>
			<span>发现</span>
			<span>
				<span class="glyphicon glyphicon-search"></span>
				<span class="glyphicon glyphicon-plus"></span>
			</span>
		</div>
		<div class="child">
			<router-link to="/find/child1"><div>推荐</div></router-link>
			<router-link to="/find/child2"><div>关注</div></router-link>
			<router-link to="/find/child3"><div>同城</div></router-link>			
		</div>
		<div>
			<router-view></router-view>
		</div>
		
	</div>	
	
</template>

<script>

</script>
	
<style lang="scss">
	*{margin: 0;padding: 0;;}
	.faxian{width: 100%;height: 40px;text-align: center;line-height: 40px;
	display: flex;justify-content: space-around;background: white;
	border-bottom: 1px solid whitesmoke;
		span:nth-of-type(1){width: 20%;}
		span:nth-of-type(2){width: 60%;font-size: 16px;}
		span:nth-of-type(3){width: 20%;}
	}
	.child{display: flex;justify-content: space-around;background: white;
	font-size: 16px;height: 40px;line-height: 40px;border-bottom: 1px solid whitesmoke;
		a{text-decoration: none;color: darkgrey;}
		div:hover{border-bottom: 2px solid royalblue ;color: royalblue;}	
	}
</style>
