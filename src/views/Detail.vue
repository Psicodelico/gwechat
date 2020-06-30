<template>
    <div class="detail">
        <h3>报告内容</h3>
        <div>
            <span>报告编号:{{info.code}}</span>
            <span>委托单位名称:{{info.enterprise}}</span>
            <pre>{{report}}</pre>
        </div>
    </div>
</template>
<style lang="less" scoped>
span,
pre {
    display: block;
    margin: 10px 0;
}
</style>
<script>
import { mapState } from "vuex";

export default {
    name: "Detail",
    components: {},
    computed: {
        ...mapState(["info", "report"])
    },
    data() {
        return {};
    }
};
</script>
