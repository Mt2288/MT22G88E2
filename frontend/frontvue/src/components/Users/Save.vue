<template>
  <div class="container">
    <div
      class="
        container
        d-sm-flex
        align-items-center
        justify-content-left
        mb-4
        pb-1
        border-bottom
      "
    >
      <h1 class="h3 mb-0 text-gray-800">Actualizar usuario</h1>
    </div>
    <div class="container2">
      <form @submit.prevent="submit" class="form container">
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="name" class="form-label"> Identificacion </label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name"
              v-model="product.identificacion"
            />
          </div>
          <div class="form-group col-md-4">
            <label for="name" class="form-label"> Nombres </label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name"
              v-model="product.name"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="name" class="form-label"> Apellidos </label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name"
              v-model="product.lastname"
            />
          </div>
          <div class="form-group col-md-4">
            <label for="name" class="form-label"> Telefono </label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name"
              v-model="product.telephone"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="name" class="form-label"> Correo electronico </label>
            <input
              type="email"
              class="form-control"
              id="name"
              placeholder="Name"
              v-model="product.email"
            />
          </div>

          <div class="form-group col-md-4">
            <label>Tipo de usuario</label>
            <select
              class="form-control selectpicker"
              v-model="product.typeusername"
            >
              <option value="Administrador">Administrador</option>
              <option value="Vendedor">Vendedor</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label>Estado</label>
            <select class="form-control selectpicker" v-model="product.status">
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-8">
            <button v-on:click="success" class="btn btn-primary w-100">
              Actualizar
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import Swal from "sweetalert2";
// import "@sweetalert2/themes/bootstrap-4/bootstrap-4.css";

export default {
  data() {
    return {
      product: {
        identificacion: "",
        name: "",
        lastname: "",
        telephone: "",
        email: "",
        typeusername: "",
        status: "",
        password: "",
      },
    };
  },
  created() {
    // When component is created must load info
    // get the info from the api using fetch
    if ("id" in this.$route.params) {
      let id = this.$route.params.id;
      console.log(id);
      // fetch data
      fetch("https://ferremax.herokuapp.com/" + id)
        // response to json
        .then((res) => res.json())
        // read data
        .then((data) => {
          this.product = data;
          console.log(data);
        });
    }
  },
  methods: {
    submit() {
      // data to send the api via POST method
      let config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identificacion: this.product.identificacion,
          name: this.product.name,
          lastname: this.product.lastname,
          telephone: this.product.telephone,
          email: this.product.email,
          typeusername: this.product.typeusername,
          status: this.product.status,
          password: this.product.password,
        }),
      };

      // if route.params.id present then method is PUT
      let id = "";
      if ("id" in this.$route.params) {
        id = this.$route.params.id;
        config.method = "PUT";
      }

      // actually send the data
      fetch("https://ferremax.herokuapp.com/" + id, config)
        .then((res) => {
          if (res.status == "actualizado") {
            alert("actualizado");
          }
        })
        .catch(() => this.error());
    },
    success() {
      Swal.fire({
        icon: "success",
        text: "Usuario actualizado correctamente",
      }).then(() => {
        this.$router.push("/usuarios");
      });
    },
  },
};
</script>
