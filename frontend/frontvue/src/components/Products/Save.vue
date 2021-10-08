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
      <h1 class="h3 mb-0 text-gray-800">Actualizar producto</h1>
    </div>
    <div class="container">
      <form @submit.prevent="submit" class="form">
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="name" class="form-label"> Código de producto </label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name"
              v-model="product.code"
            />
          </div>
          <div class="form-group col-md-4">
            <label for="name" class="form-label"> Nombre </label>
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
            <label for="name" class="form-label"> Marca </label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name"
              v-model="product.marca"
            />
          </div>
          <div class="form-group col-md-4">
            <label for="name" class="form-label"> Categoría </label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name"
              v-model="product.category"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="name" class="form-label"> Stock </label>
            <input
              type="number"
              class="form-control"
              id="name"
              placeholder="Name"
              v-model="product.stock"
            />
          </div>
          <div class="form-group col-md-4">
            <label for="name" class="form-label"> Precio </label>
            <input
              type="number"
              class="form-control"
              id="name"
              placeholder="Name"
              v-model="product.precio"
            />
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

export default {
  data() {
    return {
      product: {
        code: "",
        name: "",
        marca: "",
        category: "",
        stock: "",
        precio: "",
        status: "",
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
      fetch("http://localhost:5000/productos/" + id)
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
          code: this.product.code,
          name: this.product.name,
          marca: this.product.marca,
          category: this.product.category,
          stock: this.product.stock,
          precio: this.product.precio,
          status: this.product.status,
        }),
      };

      // if route.params.id present then method is PUT
      let id = "";
      if ("id" in this.$route.params) {
        id = this.$route.params.id;
        config.method = "PUT";
      }

      // actually send the data
      fetch("http://localhost:5000/productos/" + id, config)
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
        text: "Producto actualizado correctamente",
      }).then(() => {
        this.$router.push("/productos");
      });
    },
  },
};
</script>