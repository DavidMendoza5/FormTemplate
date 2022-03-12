<template>
  <div class="main-container">
    <section class="form-container">
      <figure>
        <img class="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR684OS5k3Nuzx3bWg5e7FjQHxwNZ8WbtnRYw&usqp=CAU" alt="Person">
      </figure>
      <div class="form-section">
        <form class="form">
          <h2>Datos de contacto</h2>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Correo electrónico" v-model="data_info.email">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Teléfono celular" v-model="data_info.phone">
          </div>
        </form>
        <section class="contact-section" v-if="form_finished">
          Correo electrónico: {{ data_info.email }}
          <br>
          Teléfono celular: {{ data_info.phone }}
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    data_info: {
      email: '',
      phone: '',
    }
  },
  data() {
    return {
      form_finished: false,
    }
  },
  updated() {
    if(this.data_info.email && this.data_info.phone) {
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
    width: 350px;
  }

  .contact-section {
    background-color: #ff7eef;
    text-align: left;
    justify-content: stretch;
    padding: 10px;
    border-radius: 2%;
  }
</style>