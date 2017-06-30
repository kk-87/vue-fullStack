<template>
    <div class="">
      <h1>当前共有 <div style='color: red; display: inline-block'>{{list.length}}</div> 条数据</h1>
      <ul class='list'>
        <li v-for='item in list'>{{item.name}}</li>
      </ul>

    </div>
</template>

<style scoped rel="stylesheet/less" lang='less'>
  .list{
    width: 200px;
    margin: 10px auto;
    li{
      font-size: 16px;
      margin: 5px 0;
    }
  }

</style>

<script>

    export default{
        data(){
            return {
                list:{},
            };
        },
        components: {},
        computed: {},
        created(){
          this.getlist()
        },
        methods: {
          getlist:function () {
            this.axios.get('/api/list').then(res=>{
              console.log(res);
              this.list = res.data;
            })
          }
        }
    }
</script>
