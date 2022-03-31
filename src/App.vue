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
           Fecha de nacimiento: {{ user.birthdate }}
           <br>
           Correo electrónico: {{ user.email }}
           <br>
           Teléfono celular: {{ user.phone }}
           <br>
           Nombre: {{ user.name + ' ' + user.second_name + ' ' + user.lastname + ' ' + user.second_lastname }}
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
      user: {
          name: '',
          second_name: '',
          lastname: '',
          second_lastname: '',
          birthdate: '',
          email: '',
          phone_number: '',
      },
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
    resetInformation() {
          this.name_data.name = '';
          this.name_data.second_name = '';
          this.name_data.last_name = '';
          this.name_data.second_last_name = '';
          this.date_data.day = '';
          this.date_data.month = '';
          this.date_data.year = '';
          this.contact_data.email = '';
          this.contact_data.phone = '';
    },
    showUserData() {
      const name_elements = this.checkEmptyValues(this.name_data)
      const date_elements = this.checkEmptyValues(this.date_data)
      const contact_elements = this.checkEmptyValues(this.contact_data)

      if(!name_elements && !date_elements && !contact_elements) {
        this.createUser();
      } else {
        alert('Hay campos vacíos');
      }
    },
    async createUser() {
      try {
        const birthdate = this.date_data.day + ' ' + this.date_data.month + ' ' + this.date_data.year;

        this.user.name = this.name_data.name;
        this.user.second_name = this.name_data.second_name,
        this.user.lastname = this.name_data.last_name,
        this.user.second_lastname = this.name_data.second_last_name,
        this.user.birthdate = birthdate,
        this.user.email = this.contact_data.email,
        this.user.phone_number = this.contact_data.phone,

        sessionStorage.setItem('user', JSON.stringify(this.user));

        const new_user = await UserService.createUser(this.user);
        if(new_user) {
          this.form_finished = true;
          this.resetInformation();
        }
      } catch (err) {
        alert(err.response.data);
      }
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
