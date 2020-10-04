<template>
    <div class="textData">
        <div v-for="(item, index) in contentList" :key="index" @click="pickupContent(index)">
            {{ item }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, SetupContext } from "vue";

type Props = {
    contentList: string[];
};

export default defineComponent({
    name: "textData",
    props: {
        contentList: {
            type: Array as PropType<string[]>,
            default: []
        }
    },
    setup(props: Props, context: SetupContext) {
        // method
        const pickupContent = (index: Event) => {
            context.emit("pickup-content", index);
        };
        return {
            pickupContent
        }
    }
});
</script>

<style scoped>
.textData {
    width: 600px;
    height: 400px;
    border: solid 3px #000000;
    overflow: auto; 
}
</style>