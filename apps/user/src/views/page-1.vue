<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      text: "page1",
    };
  },
});
</script>

<template>
  <div>Routing page: {{ text }}</div>
</template>