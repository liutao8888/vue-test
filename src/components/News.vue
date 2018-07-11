<template >
	<div>
		<h3>我是首页-->{{title}}</h3>
		<ul class="home">
			<li v-for = '(data,index) in newsList'>{{data}}</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name:'news',
		data () {
			return {
				title:"我是新闻",
				newsList:[
 				  '我是新闻11111',
 				  '我是新闻22222',
 				  '我是新闻33333'
				]
			}
		}
	}
</script>