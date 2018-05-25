<template>
    <div>
        <div id="app">
            <nav>
                <md-toolbar>
                    <span class="md-title">yournews</span>
                </md-toolbar>
            </nav>
            <main>
                <div class="content">
                    <NewsFeed/>
                </div>
            </main>
            <footer>

            </footer>

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
    }

    body {
        background-color: #e5f4f3;
    }

    nav {
        background-color: #009688;
    }

    @font-face {
        font-family: Valencia-Script;
        src: url("assets/fonts/Valencia-Script.otf") format("opentype");
    }

    .md-toolbar .md-title {
        color: white;
        font-size: 48px;
        line-height: normal;
        font-family: Valencia-Script, 'Pacifico', Helvetica, Arial, sans-serif;
    }

    main {
        padding: 1rem 1rem 0 1rem;
    }
</style>
