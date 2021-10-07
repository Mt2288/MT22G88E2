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
      <label for="name" class="form-label"> Identificacion </label>
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="Name"
        v-model="product.identificacion"
      />
    </div>
    <div class="mb-3">
      <label for="name" class="form-label"> Nombres </label>
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="Name"
        v-model="product.name"
      />
    </div>      
    <div class="mb-3">
      <label for="name" class="form-label"> Apellidos </label>
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="Name"
        v-model="product.lastname"
      />
    </div>      
    <div class="mb-3">
      <label for="name" class="form-label"> Telefono </label>
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="Name"
        v-model="product.telephone"
      />
    </div>      
        <div class="mb-3">
      <label for="name" class="form-label"> Correo electronico </label>
      <input
        type="email"
        class="form-control"
        id="name"
        placeholder="Name"
        v-model="product.email"
      />
    </div>   
   
            <div class="mb-3">
             
                <label >Tipo de usuario</label>
                <select
                  class="form-control selectpicker"

                  v-model="product.typeusername"
                >
                  <option value="Administrador">Administrador</option>
                  <option value="Vendedor">Vendedor</option>
                </select>

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
    <div class="mb-3">
      <label for="txtPassword" class="form-label"> Contraseña </label>
      <input
        type="password"
        class="form-control"
        id="pass"
        placeholder="Name"
        v-model="product.password"
      />
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
        identificacion:"",
        name : "",
        lastname : "",
        telephone : "",
        email : "",
        typeusername : "",
        status : "",      
        password : "",         
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
      fetch("http://localhost:5000/" + id)
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
          identificacion : this.product.identificacion,
          name : this.product.name,
          lastname : this.product.lastname,
          telephone : this.product.telephone,
          email : this.product.email,
          typeusername : this.product.typeusername,
          status : this.product.status, 
          password : this.product.password,                    
        }),
      };

      // if route.params.id present then method is PUT
      let id = "";
      if ("id" in this.$route.params) {
        id = this.$route.params.id;
        config.method = "PUT";
      }

      // actually send the data
      fetch("http://localhost:5000/" + id, config)
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