<template>
  <div id="app">
    <Title :title='title'/>
    <NameForm :data_info='name_data'/>
    <DateForm :data_info='date_data'/>
    <ContactForm :data_info='contact_data'/>
    <div class="notice_message">
      <p>Si tus datos son correctos por favor continuemos</p>
      <b-button @click="showUserData" class="send_btn btn btn-primary btn-lg" variant="danger">Iniciar</b-button>
      <section class="answers-section" v-if="form_finished">
          <div>
           Fecha de nacimiento: {{ date_data.day + ' ' + date_data.month + ' ' + date_data.year }}
           <br>
           Correo electrónico: {{ contact_data.email }}
           <br>
           Teléfono celular: {{ contact_data.phone }}
           <br>
           Nombre: {{ name_data.name + ' ' + name_data.second_name + ' ' + name_data.last_name + ' ' + name_data.second_last_name }}
          </div>
      </section>
    </div>
  </div>
</template>

<script>
import Title from './components/Title.vue';
import NameForm from './components/NameForm.vue';
import DateForm from './components/DateForm.vue';
import ContactForm from './components/ContactForm.vue';
import UserService from './services/user.service';

export default {
  name: 'App',
  components: {
    Title,
    NameForm,
    DateForm,
    ContactForm,
  },
  data() {
    return {
      title: 'Título de formulario',
      name_data: {
        name: '',
        second_name: '',
        last_name: '',
        second_last_name: '',
      },
      date_data: {
        day: '',
        month: '',
        year: '',
      },
      contact_data: {
        email: '',
        phone: '',
      },
      form_finished: false,
    }
  },
  methods: {
    checkEmptyValues(info) {
      const values = Object.values(info);
      let empty_element = false;
      values.map((element) => {
        if(element.length === 0) {
          empty_element = true;
        }
      });
      return empty_element;
    },
    showUserData() {
      const name_elements = this.checkEmptyValues(this.name_data)
      const date_elements = this.checkEmptyValues(this.date_data)
      const contact_elements = this.checkEmptyValues(this.contact_data)

      if(!name_elements && !date_elements && !contact_elements) {
        this.form_finished = true;
        this.createUser();
      }
    },
    async createUser() {
      const birthdate = this.date_data.day + ' ' + this.date_data.month + ' ' + this.date_data.year;
      const user = {
        name: this.name_data.name,
        second_name: this.name_data.second_name,
        lastname: this.name_data.last_name,
        second_lastname: this.name_data.second_last_name,
        birthdate,
        email: this.contact_data.email,
        phone_number: this.contact_data.phone,
      };

      await UserService.createUser(user);
    },
  },
}
</script>

<style>
  .notice_message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .notice_message p {
    border-radius: 2%;
    background-color: #e0e0e0;
    padding: 20px;
    margin-left: 100px;
    width: 350px;
  }

  .send_btn {
    margin-top: 20px;
    margin-bottom: 60px;
    width: 400px;
  }

  .answers-section {
    background-color: #ff7eef;
    padding: 40px;
    margin-bottom: 50px;
    border-radius: 2%;
  }
</style>
