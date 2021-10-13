<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <AppSidebar />
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <!-- Topbar -->
          <Header />

          <!-- End of Topbar -->

          <!-- Begin Page Content -->
          <div class="container-fluid">
            <!-- Page Heading -->
            <div
              class="d-sm-flex align-items-center justify-content-left mb-4"
            ></div>
            <div class="row">
              <div class="col-lg-5">
                <div class="card shadow-lg border-0 rounded-lg">
                  <div class="card-header">
                    <h4
                      class="
                        mb-0
                        text-gray-800
                        m-0
                        font-weight-bold
                        text-primary
                      "
                    >
                      Gestión y control de inventario
                    </h4>
                  </div>
                  <div class="card-body">
                    <p>
                      Se diseñará y construirá una página web que permita a la
                      ferretería Ferremax llevar un control sobre los usuarios
                      del sistema (Administradores y Vendedores) y el stock de
                      los productos disponibles.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="card shadow-lg border-0 rounded-lg">
                  <div class="card-header">
                    <h4
                      class="
                        mb-0
                        text-gray-800
                        m-0
                        font-weight-bold
                        text-primary
                      "
                    >
                      Equipo de desarrollo
                    </h4>
                  </div>
                  <div class="card-body">
                    <ul>
                      <li>Daniela Bedoya Poveda</li>
                      <li>Julian Alejandro Garcia Rubio</li>
                      <li>Miguel Angel Acuña Reyes</li>
                      <li>Jaiber Daivison Nova restrepo</li>
                      <li>Nayib Xavier Patron Diaz</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <router-view />
            <!-- <TaskApp/> -->
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- End of Main Content -->
      </div>
      <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import AppSidebar from "@/components/AppSidebar.vue";
// import TaskApp from "@/components/TaskApp.vue";

export default {
  name: "Dashboard",
  components: {
    Header,
    AppSidebar,
    // TaskApp,
  },
};
</script>

<style scoped>
#dashboard h1 {
  text-align: center;
  width: 100%;
  padding: 1%;
  height: 10vh;
}
</style>