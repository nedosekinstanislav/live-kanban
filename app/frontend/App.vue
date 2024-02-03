<template>
  <div class="container mx-auto">
    <div
      class="flex flex-row"
    >
      <VListColumn
        v-for="(list, index) in lists"
        :key="list.id"
        :list="list"
      />
    </div>
  </div>
</template>

<script>
import VListColumn from '@/components/VListColumn.vue';

export default {
  components: {
    VListColumn,
  },
  props: {
    lists: {
      type: Object,
      default: JSON.parse(document.getElementById('boards').dataset.lists),
    }
  },
}
</script>
