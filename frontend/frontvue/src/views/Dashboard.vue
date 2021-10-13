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