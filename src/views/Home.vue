<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
    <!-- <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button> -->
  </div>
</template>

<script>
import PostList from "../components/PostList";
import TagCloud from "../components/TagCloud";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner";

export default {
  name: "Home",
  components: { PostList, Spinner, TagCloud },
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
