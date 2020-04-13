<template>
  <div class="mt-5">
    <h1>Formularios</h1>

    <form>
      <b-row>
        <b-col md="3">
          <b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
          <small>Minimo 3 caracteres</small>
        </b-col>

        <b-col md="3">
          <b-form-select v-model="select" :options="animales"></b-form-select>
          <p>Seleccion: {{select}}</p>
        </b-col>

        <b-col md="3">
          <b-form-radio-group v-model="radio" :options="animalesRadio"></b-form-radio-group>
          <p>Radio: {{radio}}</p>
        </b-col>

        <b-col md="3">
          <b-form-checkbox-group v-model="check" :options="animalesRadio"></b-form-checkbox-group>
          <p>Multiple: {{check}}</p>
        </b-col>

      </b-row>
    </form>
    <p>Texto: {{texto}}</p>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      texto: '',
      check: [],
      radio: '',
      select: null,
      animales: [
          {value: null, text: 'Seleccione un animal'},
          {value: 'perro', text: 'Guau guau'},
          {value: 'gato', text: 'Miau'},
          {value: 'pato', text: 'Cuack'}
      ],
      animalesRadio: [
          {value: 'perro', text: 'Guau guau'},
          {value: 'gato', text: 'Miau'},
          {value: 'pato', text: 'Cuack'}
      ],

    };
  },
  computed: {
    comprobar() {
      return this.texto.length > 2 ? true : false;
    }
  }
};
</script>