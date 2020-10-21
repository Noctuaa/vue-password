<template>
	<div class="hero">
		<div class="container">
			<InputPassword></InputPassword>
		</div>
	</div>
</template>

<script>
 import InputPassword from './components/Password';
	export default {
		name: 'App',
		components:{
			InputPassword
		}

	}
</script>

<style lang="scss">
@import '@/sass/app.scss';
</style>