<template>
  <div
    class="modal fade"
    id="modalFormProductos"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header headerRegister">
          <h5 class="modal-tittle" id="titleModal">Nuevo Producto</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="close"
          >
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div class="modal-body">
          <form id="formUsuario" name="formUsuario" class="form-horizontal">
            <input type="hidden" id="idUsuario" name="idUsuario" value="" />
            <p class="text-primary">Todos los campos son obligatorios.</p>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="txtNombre">ID</label>
                <input
                  type="number"
                  class="form-control valid validText"
                  name="txtNombre"
                  id="txtNombre"
                  v-model="form.identificacion"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="txtNombre">Tipo</label>
                <input
                  type="text"
                  class="form-control valid validText"
                  name="txtNombre"
                  id="txtNombre"
                  v-model="form.tipo"
                  required
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="txtApellido">Nombre</label>
                <input
                  type="text"
                  class="form-control valid validText"
                  name="txtApellido"
                  id="txtApellido"
                  v-model="form.nombre"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="txtTelefono">Valor</label>
                <input
                  type="number"
                  class="form-control valid validNumber"
                  name="txtTelefono"
                  id="txtTelefono"
                  v-model="form.valor"
                  required
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="txtEmail">Cantidad</label>
                <input
                  type="number"
                  class="form-control valid validEmail"
                  name="txtEmail"
                  id="txtEmail"
                  v-model="form.cantidad"
                  required
                />
              </div>

            </div>


            <div class="tile-footer">
              <button
                id="btnActionForm"
                class="btn btn-primary"
                type="button"
                @click="login"
                v-on:click="alerta"
              >
                <i class="fa fa-fw fa-lg fa-check-circle"></i
                ><span id="btnText">Guardar</span></button
              >&nbsp;&nbsp;&nbsp;
              <button
                class="btn btn-danger"
                type="button"
                data-bs-dismiss="modal"
              >
                <i class="fa fa-fw fa-lg fa-times-circle"></i>Cerrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        identificacion: "",
        tipo: "",
        nombre: "",
        valor: "",
        cantidad: "",
      },
    };
  },
  methods: {
    login() {
      let formData = new URLSearchParams();
      formData.append("identificacion", this.form.identificacion);
      formData.append("tipo", this.form.tipo);
      formData.append("nombre", this.form.nombre);
      formData.append("valor", this.form.valor);
      formData.append("cantidad", this.form.cantidad);
      axios
        .post("http://localhost:5000/productos", formData, {
          headers: {
            "Access-Control-Allow_Methods": "POST",
          },
        })
        .then((response) => {
          console.log(response.data);
        });
    },
    alerta: function () {
      alert("Datos guardados correctamente");
    },
  },
};
</script>