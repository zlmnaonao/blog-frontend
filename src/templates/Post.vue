<template>
  <Layout>
    <!-- Page Header -->
    <header
      class="masthead"
      :style="{backgroundImage:`url(http://117.50.95.2:1337${$page.post.cover.url})`}"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-heading">
              <h1>{{$page.post.title}}</h1>
              <span class="meta">
                Posted by
                {{$page.post.created_at}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Post Content -->
    <article>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto" v-html="$page.post.content"></div>
        </div>
      </div>
    </article>
  </Layout>
</template>
<page-query>
query ($id: ID!) {
  post: strapiPost (id: $id) {
    id
    title
    content
    created_at
    cover {
      id
      url
    }
    tags {
      id
      title
    }
  }
}
</page-query>
<script>
export default {
  name: "PostsPage"
};
</script>