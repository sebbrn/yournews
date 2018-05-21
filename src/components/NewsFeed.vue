<template>
    <div>
        <ul v-if="posts && posts.length">
            <li v-for="post of posts">
                <a :href=post.url><strong>{{post.title}}</strong></a>
                <p>{{post.description}}</p>
                <img :src=post.urlToImage>
            </li>
        </ul>
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

</style>