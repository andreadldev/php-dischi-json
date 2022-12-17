const { createApp } = Vue;

createApp({
    data() {
        return {

        }
    },
    created() {
        axios.get("https://localhost/boolean/php-dischi-json/api.php").then((res) => {
            console.log(res.data);
        })
    }
}).mount("#app");