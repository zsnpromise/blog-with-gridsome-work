<template>
  <Layout>
       <!-- Page Header-->
        <header class="masthead" :style="`background-image: url('${$page.strapiTags.conver.url}')`">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                            <h1>{{ $page.strapiTags.title }}</h1>
                            <!-- <h2 class="subheading">Problems look mighty small from 150 miles up</h2> -->
                            <span class="meta">
                                Posted by
                               <span :key="post.id" v-for="post in $page.strapiTags.posts">
                                 <g-link :to="`/post/${post.id}`">{{post.title}}</g-link>
                                 &nbsp;
                                 &nbsp;
                               </span>
                                on August 24, 2021
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Post Content-->
        <!-- <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        {{ $page.strapiPosts.content }}
                    </div>
                </div>
            </div>
        </article> -->
  </Layout>
</template>
<page-query>
query($id: ID!){
  strapiTags(id: $id) {
    id
    title
    posts {
      id
      title
    }
    conver {
      url
    }
  }
}
</page-query>
<script>
export default {
  name: 'tag'
}
</script>

<style>

</style>