<template>
    <div class="files">
        <input id="filter" class="acd-check" type="checkbox">
        <label class="acd-label" for="filter" @click="toggleIsOpenFilter">Filter {{ state.IsOpenFilter ? "▲": "▼"}}</label>
        <div class="acd-content">
            <div>hoge</div>
        </div>
        <fileData :contentList="state.contentList" @pickup-content="pickupContent"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, PropType, SetupContext } from "vue";
import fileData from "./textData.vue";

type Props = {
    fileContent: string[];
};

type State = {
    IsOpenFilter: boolean;
    contentList: string[];
};

export default defineComponent({
    name: "files",
    components: {
        fileData
    },
    props: {
        fileContent: {
            type: Array as PropType<string[]>,
            default: []
        }
    },
    setup(props: Props, context: SetupContext) {
        // property
        const state = reactive<State>({
            IsOpenFilter: false,
            contentList: props.fileContent
        });
        // method
        const toggleIsOpenFilter = () => {
            state.IsOpenFilter = !state.IsOpenFilter;
        };
        const pickupContent = (index: Event) => {
            context.emit("pickup-content", index);
        };
        // watcher
        watch(props, (newVal) =>{
            state.contentList = newVal.fileContent;
        });
        return {
            // property
            state,
            // method
            toggleIsOpenFilter,
            pickupContent
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