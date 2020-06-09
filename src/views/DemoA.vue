<template>
    <div class="home">
        <div class="fields">
            <span>DemoA</span>
            <mt-field label="姓名" placeholder="请输入姓名" v-model="param.name"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" v-model="param.password"></mt-field>
        </div>
        <mt-button @click="handleButtonClick" type="primary">DemoB</mt-button>
    </div>
</template>

<style lang="less" scoped>
.fields {
    margin: 1rem 0;
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from "vuex";

export default {
    name: "DemoA",
    components: {},
    computed: {
        ...mapState(["param"])
    },
    data() {
        return {
            code: "",
            enterprise: ""
        };
    },
    methods: {
        handleButtonClick(e) {
            this.$router.push("/demo-b");
        }
    }
};
</script>
