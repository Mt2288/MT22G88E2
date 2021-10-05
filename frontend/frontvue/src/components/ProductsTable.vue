<template>
  <div id="tareas">
    <div class="container">
      <div class="row pt-5">
        <div class="col-md-14">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>Código</th>
                <th>Nombre</th>
                <th>Marca</th>
                <th>Categoría</th>
                <th>Stock</th>
                <th>Precio</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="task in tasks" v-bind:key="task.id">
                <td>{{ task.code }}</td>
                <td>{{ task.name }}</td>
                <td>{{ task.marca }}</td>
                <td>{{ task.category }}</td>
                <td>{{ task.stock }}</td>
                <td>{{ task.precio }}</td>
                <td>
                  <span
                    v-if="task.status == 'Activo'"
                    class="badge badge-pill badge-success"
                  >
                    {{ task.status }}</span
                  >
                  <span v-else class="badge badge-pill badge-danger">
                    {{ task.status }}</span
                  >
                </td>

                <td>
                  <button
                    data-bs-target="#modalFormProductos"
                    data-bs-toggle="modal"
                    @click="actualizarTask(task._id)"
                    class="btn btn-secondary btn-sm"
                  >
                    <i class="fas fa-pencil-alt" aria-hidden="true"></i>
                  </button>
                  <button
                    @click="deleteTask(task._id)"
                    class="btn btn-danger btn-sm"
                  >
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import ModalUsers from "@/components/ModalUsers.vue";
class Task {
  constructor(code, name, marca, category, stock, precio, status) {
    this.code = code;
    this.name = name;
    this.marca = marca;
    this.category = category;
    this.stock = stock;
    this.precio = precio;
    this.status = status;
  }
}
export default {
  name: "ProductsTable",
  components: {
    //ModalUsers,
  },
  data() {
    return {
      task: new Task(),
      tasks: [],
      edit: false,
      taskToEdit: "",
      isModalVisible: false,
    };
  },
  created() {
    this.getTasks();
  },
  methods: {
    getTasks() {
      fetch("http://localhost:5000/productos")
        .then((res) => res.json())
        .then((data) => {
          this.tasks = data;
          console.log(this.tasks);
        });
    },
    deleteTask(id) {
      fetch("http://localhost:5000/productos/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.getTasks(data);
        });
    },
    actualizarTask(id) {
      fetch("http://localhost:5000/" + id)
        .then((res) => res.json())
        .then((data) => {
          this.task = new Task(
            data.documento,
            data.nombres,
            data.apellidos,
            data.telefono,
            data.correo,
            data.estado,
            data.password
          );
          this.taskToEdit = data._id;
          this.edit = true;
        });
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>


<style scoped>
#tareas {
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 10%;
}
</style>