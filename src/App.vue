<template>
    <div>
        <div id="app">
            <NewsFeed/>
        </div>

    </div>
</template>

<script>
    import NewsFeed from "./components/NewsFeed";

    export default {
        name: 'app',
        components: {
            NewsFeed
        }
    }
</script>

<style>
    #app {
        font-family: 'Roboto', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 2rem;
        width: 70%;
        position: absolute;
        left: 15%;
    }
</style>
