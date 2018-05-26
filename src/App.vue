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
                    <md-tabs md-alignment="centered">
                        <md-tab id="tab-sports" md-label="Sports" md-icon="pool">
                            <NewsFeed category="SPORTS"></NewsFeed>
                        </md-tab>
                        <md-tab id="tab-top-news" md-label="Top News" md-icon="whatshot">
                            <NewsFeed category="TOPNEWS"></NewsFeed>
                        </md-tab>
                    </md-tabs>
                </div>
            </main>
            <footer>
                <div class="md-vertical md-alignment-center">
                    <!-- personal github page -->
                    Made with <span><img title="Vue.js" alt="Vue.js" class="inline-img" src="./assets/vue_logo.png"><md-tooltip
                        md-direction="top" id="vue-tooltip">Vue.js</md-tooltip></span> by Sebastian Brune<br>
                    <!-- github -->
                    <div id="github">
                        <a class="github-button" data-size="large" href="https://github.com/sebbrn" aria-label="Github">GitHub</a>
                        <a class="github-button" data-size="large" data-icon="octicon-star"
                           href="https://github.com/sebbrn/yournews" aria-label="Repository">Repository</a><br>
                    </div>
                    <!-- newsapi credit -->
                    News powered by <a class="no-link" href="https://newsapi.org/">NewsAPI.org</a>
                </div>
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

    let Category = Category;
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
        background-color: #f5f5f4;
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
        padding: 1rem 1rem 7rem 1rem;
    }

    footer {
        background-color: lightgrey;
        padding: 2rem;
        color: dimgrey;
        bottom: 0;
        position: absolute;
        width: 100%;
    }

    .inline-img {
        height: 1rem !important;
    }

    .no-link {
        color: inherit;
        text-decoration: underline;
    }

    #github {
        margin: 5px 0 5px 0;
    }

    #vue-tooltip {
        background-color: #009688;
        color: white;
    }
</style>
