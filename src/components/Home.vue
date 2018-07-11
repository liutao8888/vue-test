<template>
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
				title:"我是首页",
				newsList:[
 				  '11111',
 				  '22222',
 				  '33333'
				]
			}
		}
	}
</script>