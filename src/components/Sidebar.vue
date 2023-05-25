<script setup lang="ts">
import { onMounted, ref } from "vue";

const username = ref("ronhedwigzape");
const sidebar = ref(null);

const navLinks = ref(['intro', 'about', 'crafts', 'spells', 'owlme']);
const titles = ref(['Intro', 'About', 'Crafts', 'Spells', 'Owl Me']);

const handleSidebarChange = (event) => {
    if (event.matches) {
        sidebar.value.classList.add("fade-out");
    } else {
        sidebar.value.classList.remove("fade-out");
    }
};

onMounted(() => {
    const mediaQuery = window.matchMedia("(max-width: 990px)");
    mediaQuery.addListener(handleSidebarChange);
    handleSidebarChange(mediaQuery);
});
</script>

<template>
    <nav id="sidebar" class="bg-black-transparent sidebar show" ref="sidebar">

      <button class="navbar-toggler" type="button" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>

        <div>
            <div class="brand-box">
                <h1 class="harry-potter-font brand">{{ username }}</h1>
            </div>

          <ul id="MainNav" class="nav flex-column text-uppercase main-nav">
            <li v-for="(navLink, navLinkIndex) in navLinks" class="nav-item">
              <a :href="`#${navLink}`" class="nav-link active">
                <span class="d-inline-block pe-3">{{ titles[navLinkIndex] }}</span>
                <i class="d-inline-block ps-2 fa-solid fa-feather-pointed feather"></i>
              </a>
            </li>
          </ul>

            <footer class="text-center text-white small">
                <p class="pb-2 display-6 harry-potter-font">Harry Potter</p>
                <p class="pb-0">Inspired From:
                    <a href="https://www.hogwartslegacy.com/en-us" target="_blank" class="footer-link">Harry Potter
                        Game</a>
                </p>
            </footer>
        </div>
    </nav>
</template>

<style scoped>

@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

.sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    padding-left: 20px;
    padding-right: 20px;
    width: 20rem;
    max-width: 20rem;
}

/* Hide scrollbar */
.sidebar {
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
}

.sidebar::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
    display: none;
}

.footer-link {
    color: white;
}

.footer-link:hover {
    color: #005b96;
    text-decoration: none;
}

.brand {
    font-size: 4rem;
    padding-top: 0;
    padding-bottom: 5rem;
}

.bg-black-transparent {
    background-color: rgba(0, 0, 0, 0.5);
}

.brand-box {
    box-sizing: content-box;
    width: 100%;
    color: white;
    text-align: center;
    margin: 70px auto 90px;
}

.fade-out {
    animation-name: fadeOut;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    opacity: 1;
}

.main-nav > li > a {
  color: white;
}

.main-nav {
  padding-bottom: 200px;
}

.feather {
  display: block;
}

</style>