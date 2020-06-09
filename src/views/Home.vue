<template>
  <div class="home">
    <div>
      <mt-field label="证书号码" placeholder="请输入证书号码" v-model="info.code"></mt-field>
      <mt-field label="单位名称" placeholder="请输入单位名称" v-model="info.enterprise"></mt-field>
    </div>
    <mt-button @click="handleButtonClick" type="primary">提交</mt-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  computed:{
    ...mapState([
      "info"
    ])
  },
  data(){
    return {
      code: '',
      enterprise: ''
    }
  },
  methods:{
    handleButtonClick(e){
      this.$store.dispatch("fetchReport").then(a => {
        this.$router.push('/report')
      });
    }
  }
}
</script>
