<template>
  <div class="login">
    <headernav></headernav>
    <detail></detail>
    <footernav></footernav>
    <recordMsg></recordMsg>
  </div>
</template>

<script>
import detail from '../components/detail.vue'
export default {
  name: 'login',
  data () {
    return {
      msg: ''
    }
  },
  components:{
    detail
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
