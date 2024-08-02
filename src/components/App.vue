<template>
  <div>
    <h1>Host Application</h1>
    <Microfrontend1 />
    <Microfrontend2 />
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

const Microfrontend1 = defineAsyncComponent(() => import('microfrontend1/Microfrontend1'));
const Microfrontend2 = defineAsyncComponent(() => import('microfrontend2/Microfrontend2'));

export default defineComponent({
  name: 'App',
  components: {
    Microfrontend1,
    Microfrontend2,
  },
});
</script>
