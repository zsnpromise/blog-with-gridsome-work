<template>
  <Layout>

        <!-- Page Header-->
        <header class="masthead" :style="`background-image: url('${GRIDSOME_API_URL + general.cover.url}')`">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="site-heading">
                            <h1>{{ general.title }}</h1>
                            <span class="subheading">{{ general.subtitle }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Main Content-->
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <!-- Post preview-->
                    <div class="post-preview" :key="node.id" v-for="{node} in posts">
                        <g-link :to="`/post/${node.id}`">
                            <h2 class="post-title">{{node.title}}</h2>
                            <!-- <h3 class="post-subtitle">Problems look mighty small from 150 miles up</h3> -->
                        </g-link>
                        <p class="post-meta">
                            Posted by
                            <span :key="tag.id" v-for="tag in node.tags">
                              <g-link :to="`/tag/${tag.id}`">{{tag.title}}</g-link>
                              &nbsp;
                              &nbsp;
                            </span>
                            
                            on September 24, 2021
                        </p>
                    </div>
              
                    <!-- Pager-->
                    <Pager :info="$page.allStrapiPosts.pageInfo"/>
                    <!-- <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div> -->
                </div>
            </div>
        </div>

  </Layout>
</template>
<page-query>
query($page: Int) {
  strapiGeneral(id: 1) {
    title,
    subtitle,
     cover {
      url
    }
  }

  allStrapiPosts(perPage:2,page:$page)@paginate {
     pageInfo {
       currentPage
       totalPages
     }
     edges {
       node {
           id
           title
           content
           tags {
             id
             title
           }
       }
     }
  }
}
</page-query>
<script>
import { Pager } from 'gridsome'
export default {
  name: 'home',
  metaInfo: {
    title: '首页'
  },
  components: {
    Pager
  },
  computed: {
     posts() {
       return this.$page.allStrapiPosts.edges
     },
     general() {
       return this.$page.strapiGeneral
     }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
