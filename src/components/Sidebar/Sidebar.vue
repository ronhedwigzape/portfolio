<script setup lang="ts">

import NavbarToggler from "./NavbarToggler.vue";
import NavigationLinks from "./NavigationLinks.vue";
import { onMounted, ref } from "vue";

const username = ref("ronhedwigzape");
const sidebar = ref(null);

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

        <NavbarToggler/>

        <div>
            <div class="brand-box">
                <h1 class="harry-potter-font brand">{{ username }}</h1>
            </div>

            <NavigationLinks/>

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
    padding-left: 70px;
    padding-right: 70px;
    width: 24.7rem;
    max-width: 24.7rem;
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
    background-color: rgba(0, 0, 0, 0.8);
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

</style>