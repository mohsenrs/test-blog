<template>
  <div class="tag">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length">
      <PostList :posts="postsWithTag" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner";
import PostList from "../components/PostList";
import getPosts from "../composables/getPosts";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: { Spinner, PostList },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();
    load();
    const postsWithTag = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag));
    });
    return { error, posts, postsWithTag };
  },
};
</script>

<style></style>
