<template>
  <div class="sf_index">
    <headernav></headernav>
    <ListMain></ListMain>
    <!-- <div v-html="html"></div> -->
    <footernav></footernav>
    <recordMsg></recordMsg>
  </div>
</template>

<script>
import ListMain from '../components/list'
export default {
  name: 'sf_index',
  data () {
    return {
      msg: ''
    }
  },
  components:{
    ListMain
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
