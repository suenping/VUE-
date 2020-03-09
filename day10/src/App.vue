<template>
  <div id="app">
	   <router-view/>
    <div id="nav">
      <router-link to="/">	 
			  <img src="https://www.jvhv.com/wap/static/images/footer_1_red.png" />
			   <div>首页 </div>
		  </router-link>
	  <router-link to="/find">
		  <img src="https://www.jvhv.com/wap/static/images/footer_6_red.png" />
		  <div>发现</div>
		  </router-link>
	  <router-link to="/msg">
		  <img src="https://www.jvhv.com/wap/static/images/footer_8_red.png" />
		  <div>消息</div>
		  </router-link>
	  <router-link to="/me">
		  <img src="https://www.jvhv.com/wap/static/images/footer_5_red.png" />
		  <div>我的</div>
		  </router-link>
    </div>
  </div>
</template>

<style lang="scss">
*{margin: 0;padding: 0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: whitesmoke;
}
a{
	text-decoration: none;
}
#nav {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	height: 50px;
	width: 100%;
	background: whitesmoke;
	position: fixed;
	bottom: 0px;
	border-top: 1px solid lightgrey;
	  a {
		// font-weight: bold;
		color: #2c3e50;
		font-size: 14px;
		img{
			width: 25px;
			height: 25px;
		}

		&.router-link-exact-active {
		  color: #42b983;
		}
	  }
}
</style>
