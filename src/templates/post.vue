<template>
  <Layout>
       <!-- Page Header-->
        <header class="masthead" :style="`background-image: url('${$page.strapiPosts.cover.url}')`">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                            <h1>{{ $page.strapiPosts.title }}</h1>
                            <!-- <h2 class="subheading">Problems look mighty small from 150 miles up</h2> -->
                            <span class="meta">
                                Posted by
                               <span :key="tag.id" v-for="tag in $page.strapiPosts.tags">
                                 <g-link :to="`/tag/${tag.id}`">{{tag.title}}</g-link>
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
        <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7" v-html="changeMd($page.strapiPosts.content)">
                    </div>
                </div>
            </div>
        </article>
  </Layout>
</template>
<page-query>
query($id: ID!){
  strapiPosts(id: $id) {
    id
    title
    content
    tags {
      id,
      title
    }
    cover {
      url
    }
  }
}
</page-query>
<script>
import MarkdownIt from  'markdown-it'
const md = new MarkdownIt()
export default {
  name: 'post',
  metaInfo() {
      return {
        title: this.$page.strapiPosts.title
      }
  },
  methods: {
      changeMd(str) {
          return md.render(str).replace('/uploads', '/uploads')
      }
  }
}
</script>

<style>
img {
  max-width: 400px;
}
</style>