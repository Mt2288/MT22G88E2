<template>
  <div
    class="modal fade"
    id="modalFormUsuario"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header headerRegister">
          <h5 class="modal-tittle" id="titleModal">Nuevo Usuario</h5>
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
                <label for="txtIdentificacion">No. de documento</label>
                <input
                  type="text"
                  class="form-control valid validNumber"
                  id="txtIdentificacion"
                  name="txtIdentificacion"
                  v-model="form.identificacion"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="txtNombre">Nombres</label>
                <input
                  type="text"
                  class="form-control valid validText"
                  name="txtNombre"
                  id="txtNombre"
                  v-model="form.name"
                  required
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="txtApellido">Apellidos</label>
                <input
                  type="text"
                  class="form-control valid validText"
                  name="txtApellido"
                  id="txtApellido"
                  v-model="form.lastname"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="txtTelefono">Teléfono</label>
                <input
                  type="text"
                  class="form-control valid validNumber"
                  name="txtTelefono"
                  id="txtTelefono"
                  v-model="form.telephone"
                  required
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="txtEmail">Correo electrónico</label>
                <input
                  type="email"
                  class="form-control valid validEmail"
                  name="txtEmail"
                  id="txtEmail"
                  v-model="form.email"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="listRolid">Tipo de usuario</label>
                <select
                  class="form-control"
                  name="listRolid"
                  id="listRolid"
                  v-model="form.typeusername"
                  required
                >
                  <option value="Administrador">Administrador</option>
                  <option value="Vendedor">Vendedor</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="listStatus">Estado</label>
                <select
                  class="form-control selectpicker"
                  name="listStatus"
                  id="listStatus"
                  v-model="form.status"
                >
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="txtPassword">Contraseña</label>
                <input
                  type="password"
                  class="form-control"
                  name="txtPassword"
                  id="pass"
                  v-model="form.password"
                />
              </div>
            </div>

            <div class="tile-footer">
              <button
                id="btnActionForm"
                class="btn btn-primary"
                type="submit"
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
        name: "",
        lastname: "",
        telephone: "",
        email: "",
        typeusername: "",
        status: "",
        password: "",
      },
      isModalVisible: false,
    };
  },
  methods: {
    login() {
      let formData = new URLSearchParams();
      formData.append("identificacion", this.form.identificacion);
      formData.append("name", this.form.name);
      formData.append("lastname", this.form.lastname);
      formData.append("telephone", this.form.telephone);
      formData.append("email", this.form.email);
      formData.append("typeusername", this.form.typeusername);
      formData.append("status", this.form.status);
      formData.append("password", this.form.password);
      axios
        .post("http://localhost:5000/register", formData, {
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