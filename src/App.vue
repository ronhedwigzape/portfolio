<template>
    <v-app>
        <TopBar/>
        <SideBar/>
        <RouterView/>
        <Footer/>
    </v-app>
</template>

<script setup>
import TopBar from "./components/navbars/TopBar.vue";
import SideBar from "./components/navbars/SideBar.vue";
import Footer from "./components/footer/Footer.vue";
import {onMounted} from "vue";
import axios from "axios";
import {useStore} from "./stores";
import {useProfileStore} from "./stores/store-profile";

const store = useStore();
const profile = useProfileStore();

const fetchGithubData = async () => {
    try {
        const response = await axios.get(`${store.appURL}/index.php?token=""`);
        const token = response.data.token;
        profile.setGithubPersonalToken(token);
    } catch (error) {
        console.error('Error fetching token:', error);
    }
}

onMounted(() => {
    fetchGithubData();
})

</script>

<style scoped>

</style>
