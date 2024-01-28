<template>
  <div v-for="list in lists" :key="list.index">{{ list.name }}</div>
</template>

<script>
  export default {
    data () {
      return {
        lists: JSON.parse(document.getElementById('boards').dataset.lists),
      }
    }
  }
</script>
