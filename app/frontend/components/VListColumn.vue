<template>
  <div class="lists">
    <h6>{{ list.name }}</h6>
    <VCardColumn
      v-for="card in list.cards"
      :key="card.id"
      :card="card"
      :list="list"
    />
  </div>
</template>

<script>
import VCardColumn from '@/components/VCardColumn.vue';

export default {
  components: {
    VCardColumn,
  },
  props: {
    list: {
      type: Object,
    }
  },
  name: 'VListColumn',
}
</script>