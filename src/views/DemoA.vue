<template>
    <div class="home">
        <div class="fields">
            <span>DemoA</span>
            <mt-field label="姓名" placeholder="请输入姓名" v-model="name"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" v-model="password"></mt-field>
        </div>
        <div class="counter">
            <p>{{ count }}</p>
            <p>
                <mt-button plain @click="increment" type="default">+</mt-button>
                <mt-button plain @click="decrement" type="default">-</mt-button>
            </p>
        </div>
        <mt-button @click="handleButtonClick" type="primary">DemoB</mt-button>
    </div>
</template>

<style lang="less" scoped>
.fields {
    margin: 1rem 0;
}
.counter {
    margin: 1rem 0;
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from "vuex";
import types from "@/store/types";

export default {
    name: "DemoA",
    components: {},
    computed: {
        name: {
            get() {
                return this.$store.state.name;
            },
            set(value) {
                this.$store.commit(types.UPDATE_NAME, value);
            }
        },
        password: {
            get() {
                return this.$store.state.password;
            },
            set(value) {
                this.$store.commit(types.UPDATE_PASSWORD, value);
            }
        },
        count() {
            return this.$store.state.count;
        }
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
        },
        increment() {
            this.$store.commit("increment");
        },
        decrement() {
            this.$store.commit("decrement");
        }
    }
};
</script>
