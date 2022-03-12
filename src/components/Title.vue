<template>
  <div class="header">
    <div class="title">
      <h1>{{ title }}</h1>
      <div class="description">
        <p class="mb-2"><b-icon icon="clock"></b-icon></p>
        <p>En menos de 5 minutos</p>
      </div>
    </div>
    <b-icon icon="clipboard" style="width: 120px; height: 120px;"></b-icon>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: 'Título',
    }
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: center;
    gap: 150px;
    background-color: #ff7eef;
    padding: 40px;

  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 100px;
  }

  .description {
    display: flex;
    gap: 10px;
    margin-top: 50px;
  }
</style>