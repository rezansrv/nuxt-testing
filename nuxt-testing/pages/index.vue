<template>
  <div>
    <h1>hello world</h1>
    <button @click="Increase">{{ counter }}</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const counter = ref(0);

    function Increase() {
      counter.value++;
    }

    return {
      counter,
      Increase
    };
  }
}
</script>
