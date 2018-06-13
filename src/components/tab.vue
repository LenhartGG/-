<template>
<div>
  <el-table :data="tableData" stripe border  style="width: 100%">
      <el-table-column prop="attendNo" label="号牌" header-align="center" align="center"></el-table-column>
      <el-table-column prop="price" label="出价" header-align="center" align="center"></el-table-column>
      <el-table-column prop="bidTime" label="时间" header-align="center" align="center"></el-table-column>
      <el-table-column prop="bidType" label="类型" header-align="center" align="center"></el-table-column>
      <el-table-column prop="bidStatus" label="状态" header-align="center" align="center"></el-table-column>
  </el-table>
  <div v-show="total!='0'" class="block paginStyle" align="center">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pagesizes"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</div>
</template>

<script>

export default {
  name: 'tab',
  components:{
    
  },
  data () {
    return {
      tableData:[],
      currentPage: 1,//默认显示页码
      total:0,//记录总数
      pagesizes:[10,20,30,40,50],
      itemsPerPage:10,//默认每页显条数
      lastPrice:'',
      bidNo:''
    }
  },
  methods:{
    getTabData(currentPage,itemsPerPage){
      var that=this
      var data = JSON.stringify({
          prodId: localStorage.prodId,
          param:"",
          currentPage:currentPage,
          itemsPerPage:itemsPerPage
      })
      var postData = that.$qs.stringify({
          info: data
      })
      that.$http({
          url: '/gpai/bidding/biddingRecord.do',
          method: 'post',
          data: postData
      })
      .then(function(res) {
          console.log(res)
          if(res.data.code=='0000'){
              that.tableData=res.data.data.listObj
              that.total=res.data.data.total
              that.lastPrice=res.data.data.lastPrice
              that.bidNo=res.data.data.bidNo
          }else{
              console.log('竞价记录查询失败')
          }
              
      })
      .catch(function(error) {
          console.log(error);
          console.log('竞价记录查询出错')
      })
      
    },
    handleSizeChange(val) {
      var that=this
      //设置每页显示条数
      console.log(`每页 ${val} 条`);
      that.itemsPerPage=val
      that.getTabData(that.currentPage,val)
    },
    handleCurrentChange(val) {
      var that=this
      //选择查看的页码
      console.log(`当前页: ${val}`);
      that.currentPage=val
      that.getTabData(val,that.itemsPerPage)
    }
  },
  created(){
    var that=this
    that.timer=setInterval(getTotelNumber,2000)
    function getTotelNumber() {
        that.getTabData(that.currentPage,that.itemsPerPage)
    }
  },
  beforeDestroy(){
    clearInterval(this.timer)
  },
  watch:{
    lastPrice(curVal,oldVal){
      this.$store.common.state.lastPrice=curVal
    },
    bidNo(curVal,oldVal){
      this.$emit('bidNo',[this.bidNo,this.lastPrice])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .paginStyle{
    margin-top: 20px;
  }
</style>
