<template>
    <div>
        <sfbg></sfbg>
        <!-- 搜索 -->
        <Search></Search>
        <!-- 菜单 -->
        <Menu></Menu>
        <!-- <tiparchives></tiparchives> -->
        <detailsWrap></detailsWrap>
    </div>
</template>
<script>
import sfbg from './sifa/sfbg.vue';
import Search from './sifa/sfsearch.vue';
import Menu from './sifa/Menu.vue';
import tiparchives from './detail/tiparchives.vue';
import detailsWrap from './detail/detailsWrap'
export default {
  components:{
      sfbg,Search,Menu,tiparchives,detailsWrap
  },
  
}
</script>

<style>

</style>

