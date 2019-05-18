<template>
	<div>
		<template v-if="loading">
			<p>Loading...</p>
		</template>
		<template v-else>
			<table>
				<thead>
				<tr>
					<th v-for="(header, index) in headers" :key="index">{{ header }}</th>
				</tr>
				</thead>
				<tbody>
				<tr v-for="(item, index) in currencies" :key="index">
					<td>
						<img
							:src="`${mainUrl}${item.CoinInfo.ImageUrl}`"
							:alt="item.CoinInfo.FullName"
							:title="item.CoinInfo.FullName"
						>
					</td>
					<td>{{ item.CoinInfo.FullName }}</td>
					<td>{{ item.CoinInfo.Name }}</td>
					<td>{{ item.DISPLAY.USD.PRICE }}</td>
					<td>{{ item.DISPLAY.USD.SUPPLY }}</td>
				</tr>
				</tbody>
			</table>
		</template>
  </div>
</template>

<script>
	import { getInfo } from '../helpers/api.js'
	export default {
		name: 'CryptoTable',
		props: {
			mainUrl: {
				type: String,
				default: ''
			}
		},
		data () {
			return {
				loading: true,
				headers: [
					'icon',
					'fullname',
					'name',
					'price',
					'supply'
				],
				currencies: [],
				timer: null,
				intervalTime: 5 * 60 * 1000
			}
		},
		methods: {
			fetchData () {
				getInfo()
					.then(({data}) => {
						this.currencies = data.Data.sort(this.sortArray)
						this.loading = false
					})
					.catch((error) => {
						this.loading = false
						throw new Error(error)
					})
			},
			sortArray (a, b) {
				return b.RAW.USD.PRICE - a.RAW.USD.PRICE
			}
		},
		mounted () {
			this.fetchData()
			this.timer = setInterval(this.fetchData, this.intervalTime)
		},
		beforeDestroy () {
			clearInterval(this.timer)
		}
	}
</script>

<style lang="scss" scoped>
	table {
		border-collapse: collapse;
		width: 100%;
		th, td {
			border: 1px solid #ddd;
			img {
				width: 40px;
				height: 40px;
				vertical-align: middle;
			}
		}
		th {
			text-transform: capitalize;
			&:first-child {
				width: 48px;
			}
		}
	}
	p {
		margin-top: 48px;
		font-weight: 700;
	}
</style>
