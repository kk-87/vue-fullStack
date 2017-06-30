<template>
  <div>
    <Table :columns="columns" :data="userlist"></Table>
    <div class='modal-wrapper'>
      <Button @click="custom">添加用户</Button>
    </div>
    <Modal v-model="modal3" okText='添加' @on-ok="addUser" :closable="false">
      <div class='user-update'>添加新用户</div>
      <Form :model="formItem" :label-width="80">
        <Form-item label="姓名">
          <Input v-model="formItem.name" placeholder="请输入"></Input>
        </Form-item>
        <Form-item label="年龄">
          <Input v-model="formItem.age" placeholder="请输入"></Input>
        </Form-item>
        <Form-item label="地址">
          <Select v-model="formItem.address" placeholder="请选择">
            <Option value="beijing">北京市</Option>
            <Option value="shanghai">上海市</Option>
            <Option value="shenzhen">深圳市</Option>
          </Select>
        </Form-item>
      </Form>
    </Modal>
    <Back-top></Back-top>
  </div>
</template>

<script>
  import _ from 'lodash'
  import {isEmpty} from '../../assets/js/common'
  export default {
    data () {
      return {
        modal3: false,
        columns: [
          {
            title: '姓名',
            key: 'name',
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          },
        ],
        userlist: [],
        formItem: {
          name: '',
          age: '',
          address: '',
        }
      }
    },
    created(){
      this.getUserLisr()
    },
    methods: {
      getUserLisr: function () {
        console.log(_.last([1, 2, 3,4]));
        this.axios.get('/api/user').then(res => {
          this.userlist = res.data;
        })
      },
      addUser: function () {
        if (isEmpty(this.formItem.name)) {
          this.$Message.warning('这是一条警告的提示');
        }
        this.axios.post('/api/user/add', this.formItem).then(res => {
        }).catch(err => {
          console.log(err);
        })
        this.getUserLisr();
      },
      custom: function () {
        this.modal3 = !this.modal3
      },
    }
  }
</script>

<style scoped rel="stylesheet/less" lang='less'>
  .user-update {
    height: 50px;
    width: 100%;
    text-align: center;
    font-size: 20px;
    margin: 10px auto;
  }

  .modal-wrapper {
    width: 200px;
    margin: 100px auto;
  }
</style>
