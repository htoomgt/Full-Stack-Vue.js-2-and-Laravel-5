<template>
  <div id="my-component">{{ title }}</div>
</template>
<script>
  export default {
    data() {
      title: 'My Component'
    }
  };
</script>
<style>
  .my-component {
    color: red;
  }
</style>
