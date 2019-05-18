<template>
  <div id="app">
    <header>
			<img alt="Vue logo" src="./assets/logo.png">
			<span>Made with Vue</span>
		</header>
		<div class="table-container">
			<CryptoTable :mainUrl="mainUrl"></CryptoTable>
		</div>
  </div>
</template>

<script>
	import CryptoTable from './components/CryptoTable.vue'

	export default {
		name: 'app',
		components: {
			CryptoTable
		},
		data () {
			return {
				mainUrl: 'https://cryptocompare.com/'
			}
		}
	}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	header {
		height: 64px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 0 24px 24px;
		img	{
			height: 56px;
			float: left;
		}
	}
	.table-container{
		width: 96%;
		margin: 0 auto;
	}
}
</style>
