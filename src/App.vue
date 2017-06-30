<template>
  <div id="app">
    <template>
      <Menu mode="horizontal" :theme="theme1" active-name="1">
        <Menu-item name="1">
          <Icon type="ios-paper"></Icon>
          内容管理


        </Menu-item>
        <Menu-item name="2">
          <Icon type="ios-people"></Icon>
          用户管理


        </Menu-item>
        <Submenu name="3">
          <template slot="title">
            <Icon type="stats-bars"></Icon>
            统计分析


          </template>
          <Menu-group title="使用">
            <Menu-item name="3-1">新增和启动</Menu-item>
            <Menu-item name="3-2">活跃分析</Menu-item>
            <Menu-item name="3-3">时段分析</Menu-item>
          </Menu-group>
          <Menu-group title="留存">
            <Menu-item name="3-4">用户留存</Menu-item>
            <Menu-item name="3-5">流失用户</Menu-item>
          </Menu-group>
        </Submenu>
        <Menu-item name="4">
          <Icon type="settings"></Icon>
          综合设置


        </Menu-item>
      </Menu>
    </template>
    <Tabs value="name1">
      <Tab-pane label="标签一" name="name1">
        <router-view></router-view>
      </Tab-pane>
      <Tab-pane label="标签二" name="name2">标签二的内容</Tab-pane>
      <Tab-pane label="标签三" name="name3">标签三的内容</Tab-pane>
    </Tabs>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {}
  }
</script>

<style scoped rel="stylesheet/less" lang='less'>

</style>
