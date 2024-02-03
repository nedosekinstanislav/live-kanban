<template>
  <div class="card">
    <h5 class="modal-title">{{ card.name }}</h5>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
    }
  },
}
</script>