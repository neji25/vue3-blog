<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  selector: 'my-button'
}
</script>

<style scoped>
  .btn-primary {
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
  }
</style>