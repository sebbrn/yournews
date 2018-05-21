<template>
    <div>
        <div v-if="posts && posts.length">
            <b-card class="card" v-for="post of posts"
                    :title=post.title
                    :img-src=post.urlToImage>
                <p class="card-text">{{post.description}}</p>
                <b-button :href=post.url variant="primary">Show me more</b-button>
            </b-card>
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