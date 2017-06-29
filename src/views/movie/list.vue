<template>
  <div class="">
    <p>dfjdspfdspf</p>
    <p>dfjdspfdspf</p>
    <p>dfjdspfdspf</p>
    <button @click='addMovie'>点我</button>
  </div>
</template>

<style scoped rel="stylesheet/less" lang='less'>

</style>

<script>

  export default{
    data(){
      return {
        title: '1',
        poster: '2',
        rating: "dd",
        introduction: '3',
        movie_id: '',
        movies: [],
        addMovieModal: false,
        editMovieModal: false
      };
    },
    components: {},
    computed: {},
    created(){
      this.getMovies()
    },
    methods: {

      getMovies() {
        this.axios.get('/api/movie')
          .then(res => {
            console.dir(res.data)
            this.movies = res.data
          })
          .catch(err => {
            this.toastr.error(`${err.message}`, 'ERROR!')
            console.log(err)
          })
      },
      addMovie: function () {
        this.axios.post('/api/movie', {
          title: this.title,
          poster: this.poster,
          introduction: this.introduction,
          rating: this.rating
        })
          .then(res => {
            console.log(res);
          }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>
