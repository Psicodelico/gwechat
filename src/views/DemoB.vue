<template>
    <div class="home">
        <div class="fields">
            <div>DemoB</div>
            <div>用户名: {{ param.name }}</div>
            <div>密码: {{ param.password }}</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.fields {
    margin: 1rem 0;
}
</style>

<script>
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
    methods: {}
};
</script>
