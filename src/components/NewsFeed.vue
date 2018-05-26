<template>
    <div>
        <div v-if="posts && posts.length">
            <div class="md-layout md-gutter">
                <div v-for="post of posts"
                     class="md-layout-item md-large-size-33 md-medium-size-33 md-small-size-50 md-xsmall-size-100">

                    <md-card class="card">

                        <md-card-media>
                            <img crossOrigin="anonymous" :src=post.urlToImage alt="Image">
                        </md-card-media>

                        <md-card-content>
                            <strong>{{post.title}}</strong><br>
                            {{post.description}}
                        </md-card-content>

                        <md-card-actions>
                            <md-button :href=post.url class="md-icon-button">
                                <md-icon>link</md-icon>
                            </md-button>
                        </md-card-actions>

                    </md-card>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    function getApiURL(category) {
        switch (category) {
            case "SPORTS" :
                return 'https://newsapi.org/v2/top-headlines?sources=the-sport-bible&apiKey=fe0c5b3aa3864125b9ef31e528b8b2e4';
            case "TOPNEWS" :
                return 'https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=fe0c5b3aa3864125b9ef31e528b8b2e4'
        }
    }

    export default {
        name: 'NewsFeed',
        props: {
            category: String
        },
        data() {
            return {
                posts: []
            }
        },
        // when the component is created
        created() {
            axios.get(getApiURL(this.category))
                .then(response => {
                    this.posts = response.data.articles;
                })
                .catch(e => {
                    console.log({
                        errorInfo: 'Api Error',
                        apiURL: getApiURL(this._category),
                        error: e
                    });
                })
        }

    }
</script>

<style scoped>
    .card {
        margin-bottom: 2rem;
        background-color: white;
    }

    .md-icon-button {
        color: inherit;
    }

    strong {
        font-size: initial;
    }
</style>