<template>
    <div class="jsonData">
        {{ state.jsonData }}
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, PropType } from "vue";

type Props = {
    content: string;
};

type State = {
    jsonData: string;
};

export default defineComponent({
    name: "jsonData",
    props: {
        content: {
            type: String,
            default: "{}"
        }
    },
    setup(props: Props) {
        // property
        const state = reactive<State>({
            jsonData: props.content
        });
        // watcher
        watch(props, (newVal) =>{
            state.jsonData = newVal.content;
        });
        return {
            state
        }
    }
});
</script>

<style scoped>
.jsonData {
    width: 600px;
    height: 400px;
    border: solid 3px #000000;
    overflow: auto; 
}
</style>