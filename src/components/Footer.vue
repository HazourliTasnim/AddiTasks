<template>
  <v-footer>
    <div class="foot">
      <div class="container-fluid">
        <!-- Icons -->
        <div class="social-media">
          <a href="#" class="icon fs-2 me-3"><i class="bi bi-facebook"></i></a>
          <a href="#" class="icon fs-2 me-3"><i class="bi bi-pinterest"></i></a>
          <a href="#" class="icon fs-2 me-3"><i class="bi bi-instagram"></i></a>
          <a href="#" class="icon fs-2"><i class="bi bi-linkedin"></i></a>
        </div>

        <hr>

        <!-- liens -->
        <div class="footer-links">
          <p class="mb-0">2024 © GoalGetter. Tous droits réservés.</p>
          <p>
            <a href="#" class="text-decoration-none">Politique de confidentialité</a>
          </p>
        </div>
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style scoped>
.foot {
  background-color: #cccccc;
  padding-top: 10px;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.social-media {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.social-media a {
  color: #491784;
  text-decoration: none;
}

.social-media a:hover {
  color: #823aa0;
}

.footer-links {
  justify-content: center;
  gap: 10px;
}

.footer-links a {
  color: #491784;
  text-decoration: none;
}

.footer-links a:hover {
  color: #823aa0;
}

hr {
  margin: 15px 0;
  border: 1px solid #491784;
}




</style>
