import Vue from 'vue'
import Button from "./button";
console.log(Button)
Vue.component(
    'v-button',Button
)
var vm=new Vue({
    el:"#app",
})