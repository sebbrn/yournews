<template>
    <div>
        <div v-if="posts && posts.length">
            <md-card v-for="post of posts" class="card">
                <md-card-media-cover md-solid>
                    <md-card-media md-ratio="16:9">
                        <img :src=post.urlToImage alt="Image">
                    </md-card-media>

                    <md-card-area>
                        <md-card-header>
                            <span class="md-title">{{post.title}}</span>
                            <span class="md-subhead">{{post.description}}</span>
                        </md-card-header>

                        <md-card-actions>
                            <md-button :href=post.url class="md-icon-button">
                                <md-icon>link</md-icon>
                            </md-button>
                        </md-card-actions>
                    </md-card-area>
                </md-card-media-cover>
            </md-card>
        </div>
        <ul v-if="errors && errors.length">
            <li v-for="error of errors">
                {{error.message}}
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "NewsFeed",
        components: {},
        data() {
            return {
                posts: [],
                errors: []
            }
        },
        // when the component is created
        created() {
            axios.get('https://newsapi.org/v2/top-headlines?sources=the-sport-bible&apiKey=fe0c5b3aa3864125b9ef31e528b8b2e4')
                .then(response => {
                    this.posts = response.data.articles;
                })
                .catch(e => {
                    this.errors.push(e);
                })
        }
    }
</script>

<style scoped>
    .card {
        margin-bottom: 2rem;
    }
</style>