<template>
  <CategoryComponent/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CategoryComponent from './components/CategoryComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    CategoryComponent
  }
});
</script>

<style>

</style>
