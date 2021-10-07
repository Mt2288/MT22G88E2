<template>
<div>
  <div
    class="
      d-flex
      justify-content-between
      flex-wrap flex-md-nowrap
      align-items-center
      pt-3
      pb-2
      mb-3
      border-bottom
    "
  >
    <h1 class="h2">Save Product</h1>
  </div>
  <form @submit.prevent="submit" class="form">
    <div class="mb-3">
      <label for="name" class="form-label"> Código de producto </label>
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="Name"
        v-model="product.code"
      />
    </div>
    <div class="mb-3">
      <label for="name" class="form-label"> Nombre </label>
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="Name"
        v-model="product.name"
      />
    </div>      
    <div class="mb-3">
      <label for="name" class="form-label"> Marca </label>
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="Name"
        v-model="product.marca"
      />
    </div>      
    <div class="mb-3">
      <label for="name" class="form-label"> Categoría </label>
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="Name"
        v-model="product.category"
      />
    </div>      
        <div class="mb-3">
      <label for="name" class="form-label"> Stock </label>
      <input
        type="number"
        class="form-control"
        id="name"
        placeholder="Name"
        v-model="product.stock"
      />
    </div>   
    <div class="mb-3">
      <label for="name" class="form-label"> Precio </label>
      <input
        type="number"
        class="form-control"
        id="name"
        placeholder="Name"
        v-model="product.precio"
      />
    </div>     
            <div class="mb-3">
             
                <label >Estado</label>
                <select
                  class="form-control selectpicker"

                  v-model="product.status"
                >
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>

            </div>    
               

    <button v-on:click="alerta" class="btn btn-primary w-100">Save</button>
  </form>
  </div>
</template>


<script>
// import Swal from "sweetalert2";
// import "@sweetalert2/themes/bootstrap-4/bootstrap-4.css";

export default {
  data() {
    return {
      product: {
        code:"",
        name : "",
        marca : "",
        category : "",
        stock : "",
        precio : "",
        status : "",      
      },
    };
  },
  created() {
    // When component is created must load info
    // get the info from the api using fetch
    if ("id" in this.$route.params) {
      let id = this.$route.params.id;
      console.log(id)
      // fetch data
      fetch("http://localhost:5000/productos/" + id)
        // response to json
        .then((res) => res.json())
        // read data
        .then((data) => {
          this.product = data;
          console.log(data)
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
          code : this.product.code,
          name : this.product.name,
          marca : this.product.marca,
          category : this.product.category,
          stock : this.product.stock,
          precio : this.product.precio,
          status : this.product.status,          
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
          if (res.status == "actualizado"){
            alert("actualizado")

          } 
        })
        .catch(()=>this.error());
    },
    alerta: function () {
      alert("Producto guardado correctamente");
    },    
    // success() {
    //   Swal.fire({
    //     icon: "success",
    //     text: "Product Saved",
    //   }).then(() => {
    //     this.$router.push("/dashboard/products");
    //   });
    // },
    // actualizarTask(id) {
    //   fetch("http://localhost:5000/" + id)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       this.task = new Task(
    //         data.documento,
    //         data.nombres,
    //         data.apellidos,
    //         data.telefono,
    //         data.correo,
    //         data.estado,
    //         data.password
    //       );
    //       this.taskToEdit = data._id;
    //       this.edit = true;
    //     });
    // },
    // error() {
    //   Swal.fire({
    //     icon: "error",
    //     text: "Error!",
    //   });
    // },
  },
};
</script>