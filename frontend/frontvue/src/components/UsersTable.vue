<template>
  <div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Nombres</th>
          <th scope="col">Apellidos</th>
          <th scope="col">Telefono</th>
          <th scope="col">Correo Electronico</th>
          <th scope="col">Tipo de usuario</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    const apiUrl = "http://localhost:5000/";
    axios
      .get(apiUrl)
      .then((res) => {
        this.users = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>