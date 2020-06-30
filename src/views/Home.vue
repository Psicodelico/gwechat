<template>
    <div class="home">
        <div class="fields">
            <mt-field label="报告编号" placeholder="请输入报告编号" v-model="info.code"></mt-field>
            <mt-field label="委托单位名称" placeholder="请输入委托单位名称" v-model="info.enterprise"></mt-field>
        </div>
        <mt-button @click="handleButtonClick" type="primary">提交</mt-button>
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
    name: "Home",
    components: {
        // HelloWorld
    },
    computed: {
        ...mapState(["info"])
    },
    data() {
        return {};
    },
    methods: {
        handleButtonClick(e) {
            this.$store.dispatch("fetchReport").then(a => {
                this.$router.push("/report");
            });
        }
    }
};
</script>
