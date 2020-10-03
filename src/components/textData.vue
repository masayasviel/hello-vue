<template>
    <div class="textData">
        {{ tmp }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "textData",
    props: {
        tmp: String,
    },
});
</script>

<style scoped>
.textData {
    width: 600px;
    height: 400px;
    border: solid 3px #000000;
}
</style>