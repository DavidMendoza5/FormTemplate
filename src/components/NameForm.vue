<template>
  <div class="main-container">
    <section class="form-container">
      <figure>
        <img class="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR684OS5k3Nuzx3bWg5e7FjQHxwNZ8WbtnRYw&usqp=CAU" alt="Person">
      </figure>
      <div class="form-section">
        <form class="form">
          <h2>¿Cuál es tu nombre?</h2>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Nombre" v-model="data_info.name">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Segundo nombre" v-model="data_info.second_name">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Apellido paterno" v-model="data_info.last_name">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Apellido materno" v-model="data_info.second_last_name">
          </div>
        </form>
        <section class="name-section" v-if="form_finished">
          {{ data_info.name + ' ' + data_info.second_name + ' ' + data_info.last_name + ' ' + data_info.second_last_name }} 
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    data_info: {
      name: '',
      second_name: '',
      last_name: '',
      second_last_name: '',
    }
  },
  data() {
    return {
      form_finished: false,
    }
  },
  updated() {
    if(this.data_info.name && this.data_info.second_name && this.data_info.last_name && this.data_info.second_last_name) {
        this.form_finished = true;
    } else {
      this.form_finished = false;
    }
  },
}
</script>

<style scoped>
  .main-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .form-container{
    display: flex;
    gap: 20px;
    padding: 20px;
    margin-top: 50px;
    width: 500px;
  }

  .profile-img {
    border-radius: 35%;
    width: 90px;
    height: 110px;
    padding: 2px;
    background-color: white;
    border: 3px #ff7eef solid;
  }

  .form-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form {
    background-color: #e0e0e0;
    padding: 20px;
    border-radius: 2%;
  }

  .name-section {
    background-color: #ff7eef;
    display: flex;
    justify-content: stretch;
    padding: 10px;
    border-radius: 2%;
  }
</style>