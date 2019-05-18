'use strict'
import Vue from 'vue'

const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'

export function getInfo () {
	return Vue.axios.get(URL)
}

export default {
	getInfo
}