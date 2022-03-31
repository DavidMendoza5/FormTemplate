<template>
  <div class="main-container">
    <section class="form-container">
      <figure class="img-section">
        <img class="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR684OS5k3Nuzx3bWg5e7FjQHxwNZ8WbtnRYw&usqp=CAU" alt="Person">
        <b-icon class="person-icon" icon="person-circle" style="width: 30px; height: 30px;"></b-icon>
      </figure>
      <div class="form-section">
        <form class="form">
          <h2>¿Cuál es tu fecha de nacimiento?</h2>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Día" v-model="data_info.day">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Mes" v-model="data_info.month">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Año " v-model="data_info.year">
          </div>
          <label for="input-live">Ejemplo: 05 Enero 1998</label>
        </form>
        <section class="date-section" v-if="form_finished">
          {{ data_info.day + ' ' + data_info.month + ' ' + data_info.year }} 
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    data_info: {
      day: '',
      month: '',
      year: '',
    },
  },
  data() {
    return {
      form_finished: false,
    }
  },
  updated() {
    if(this.data_info.day.length  === 2 && this.data_info.month && this.data_info.year.length === 4) {
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

  .img-section {
    position: relative;
  }

  .profile-img {
    border-radius: 35%;
    width: 90px;
    height: 110px;
    padding: 2px;
    background-color: white;
    border: 3px #ff7eef solid;
  }

  .person-icon {
    border: 2px #ff7eef solid;
    border-radius: 50%;
    position: absolute;
    top: 28%;
    left: 80%;
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

  .date-section {
    background-color: #ff7eef;
    display: flex;
    justify-content: stretch;
    padding: 10px;
    border-radius: 2%;
  }
</style>