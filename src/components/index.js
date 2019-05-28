import head from './head.vue'
// 这里是重点
export default {
    install: function(Vue){
        Vue.component('ofm-head',head)
    }
}
