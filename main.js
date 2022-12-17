const { createApp } = Vue;

createApp({
    data() {
        return {
            discList: []
        }
    },
    created() {
        axios.get("https://localhost/boolean/php-dischi-json/api.php").then((res) => {
            this.discList = res.data;
            console.log(this.discList);
        })
    }
}).mount("#app");