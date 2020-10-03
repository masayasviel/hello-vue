<template>
    <div class="files">
        <input id="filter" class="acd-check" type="checkbox">
        <label class="acd-label" for="filter" @click="toggleIsOpenFilter">Filter {{ state.IsOpenFilter ? "▲": "▼"}}</label>
        <div class="acd-content">
            <div>hoge</div>
        </div>
        <fileData :tmp="state.msg"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from "vue";
import fileData from "./textData.vue";

type Props = {
    message: string;
};

type State = {
    IsOpenFilter: boolean;
    msg: string;
};

export default defineComponent({
    name: "files",
    components: {
        fileData
    },
    props: {
        message: {
            type: String,
            default: "def"
        }
    },
    setup(props: Props) {
        // property
        const state = reactive<State>({
            IsOpenFilter: false,
            msg: props.message
        });
        // method
        function toggleIsOpenFilter(): void {
            state.IsOpenFilter = !state.IsOpenFilter;
        }
        // watcher
        watch(props, (newVal) =>{
            state.msg = newVal.message;
        });
        return {
            // property
            state,
            // method
            toggleIsOpenFilter
        };
    }
});
</script>

<style scoped>
.acd-check{
    display: none;
}
.acd-label {
    display: block;
}
.acd-content{
    height: 0;
    opacity: 0;
    transition: .2s;
    visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.acd-check:checked + .acd-label + .acd-content{
    height: auto;
    opacity: 1;
    padding: 10px;
    visibility: visible;
}
</style>