<template>
  <div>
    <h2>Categories</h2>
    <ul>
      <li
        v-for="cat in list" :key="cat.idCategory"
      >
      <h3>{{ cat.nameofCategory }}</h3>

      </li>
    </ul>
  </div>


</template>

<script lang="ts">
import CategoryService from '@/service/CategoryService';
import { defineComponent } from 'vue';

declare interface Category{
  idCategory: string;
  nameofCategory: string;
  descriptionCategory: string;
  enabledCtegory: boolean;
}



export default defineComponent({
  name: 'CategoryComponent',
  data(){
    return {list: [] as Category[]}
  },
  methods: {
    getAll(){
      CategoryService.getAllCategories().then(response => {
        console.log(response);
        this.list =  response.data.data;
      });
    }
  },
  mounted(){
    this.getAll();
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
