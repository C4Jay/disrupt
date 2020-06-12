<template>
  <section class="VideoBg">
    <video autoplay playsinline loop :muted="muted" ref="video">
      <!-- <source src="@/assets/Wave-Loop.mp4"> -->
      <!-- <source src="@/assets/MVI_5670.mp4"> -->
      <!-- <source src="@/assets/4K technology free moving background globe animation.mp4"> -->
      <source src="@/assets/vibrant background HD   Animated Video.mp4">
    </video>
    <div class="VideoBg__content">
      <!-- <slot> -->
        <v-container>
       <v-layout row wrap class="text-center">
         <v-flex class="text-center">
           <v-layout row class="text-center">
           <v-flex offset-sm4 class="imgflex text-center">
           <v-img class="mainimg text-center" src="@/assets/Disrupt1.png"></v-img>
           </v-flex>
           </v-layout>
         <!-- <v-flex class="font-weight-light">
           <h1>Disrupt</h1>
         </v-flex> -->
         <v-layout row>
           <v-flex class="text-center btn">
            
             <v-btn class="white--text mr-1" color="#a832a8"><a href = "https://m.me/113818960362298"  style="text-decoration:none; color: white;">ask prices</a></v-btn>
             <v-btn class="white--text" color="#7aeb99" @click="showbox">contact us</v-btn>
            
           </v-flex>
         </v-layout>
         </v-flex>
       </v-layout>
        </v-container >
        <v-container v-if="show">
          <v-layout>
            <v-flex xs12 md4 offset-sm4>
          <v-card class="contacts" color="rgba(181, 158, 181,0.5)">
            <v-card-text>
            <v-layout row>
             <v-flex class="text-center icon">
               <v-img class="img" src="@/assets/icons8-whatsapp-48.png"></v-img>
               <v-img class="img1" src="@/assets/icons8-call-64.png"></v-img>
             </v-flex>
              <v-flex style="flex-direction: column">
              <h3><pre class="white--text contact">Sahan      077 291 4961</pre></h3>
              <h3><pre class="white--text contact">Jinendra   077 976 6262</pre></h3>
              </v-flex>
            </v-layout>
            </v-card-text>
          </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      <!-- </slot> -->
    </div>
  </section>
</template>


<script>
  export default {
    props: {
      sources: {
        type: Array,
        required: true
      },
      img: {
        type: String
      },
      muted: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        show: false,
        videoRatio: null
      }
    },
    mounted () {
      this.setImageUrl()
      this.setContainerHeight()
      if (this.videoCanPlay()) {
        this.$refs.video.oncanplay = () => {
          if (!this.$refs.video) return
          this.videoRatio = this.$refs.video.videoWidth / this.$refs.video.videoHeight
          this.setVideoSize()
          this.$refs.video.style.visibility = 'visible'
        }
      }
      window.addEventListener('resize', this.resize)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.resize)
    },
    methods: {
      showbox () {
        this.show = !this.show
      },
      resize () {
        this.setContainerHeight()
        if (this.videoCanPlay()) {
          this.setVideoSize()
        }
      },
      videoCanPlay () {
        return !!this.$refs.video.canPlayType
      },
      setImageUrl () {
        if (this.img) {
          this.$el.style.backgroundImage = `url(${this.img})`
        }
      },
      setContainerHeight () {
        this.$el.style.height = `${window.innerHeight}px`
      },
      setVideoSize () {
        var width, height, containerRatio = this.$el.offsetWidth / this.$el.offsetHeight
        if (containerRatio > this.videoRatio) {
          width = this.$el.offsetWidth
        } else {
          height = this.$el.offsetHeight
        }
        this.$refs.video.style.width = width ? `${width}px` : 'auto'
        this.$refs.video.style.height = height ? `${height}px` : 'auto'
      },
      getMediaType (src) {
        return 'video/' + src.split('.').pop()
      }
    }
  }
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Lobster&family=Montserrat:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Lobster&display=swap');

* {
       margin: 0;
      
   }

  .VideoBg {
    flex: 1;
    position: relative;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.6)
  }
  .VideoBg video {
    position: absolute;
    top: 50%;
    left: 50%;
    visibility: hidden;
    transform: translate(-50%, -50%);
     background-color: rgba(0, 0, 0, 0.6)
  }
  .VideoBg__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
     background-color: rgba(0, 0, 0, 0.6)
  }
  .main {
    text-align: center;
    justify-content: center;
    margin-top: 400px;
    background-color: none;
    color: white;
    font-size: 36px;
    font-family: 'Abel', sans-serif;
  }

  .main1 {
    text-align: center;
    justify-content: center;
    margin-top: 10px;
    background-color: none;
    color: white;
    font-size: 20px;
    font-family: 'Abel', sans-serif;
  }

  /* .contact {
    text-align: center;
    color: white;
     font-family: 'Abel', sans-serif;
     margin-top: 40px}
 */
  /* .contacts {
     text-align: center;
     align-content: center;
    flex-direction: column
   
  } */

  h1 {
    color:#ebfaff;
     /* font-family: 'Abel', sans-serif; */
     margin-top: -10px;
     text-align: center;
     font-size: 80px;
     font-family: 'Montserrat', sans-serif;
  }

  .btn {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    color: green;
  }

  .btn1 {
    background-color: #a832a8;
    color: white
  }

  a {
    text-decoration: none;
    color: white
  }

  .contact {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px
  }

  .icon {
    size: 100%
  }

  .img {
    size: 100%;
    width: 35px;
    height: 35px;
    margin-right: -100px;
    margin-left:  80px
  }

  .img1 {
    size: 100%;
    width: 35px;
    height: 35px;
    margin-top: -35px;
    margin-right: -40px;
    margin-left: 40px
  }

  .mainimg {
    height: 444px;
    width: 400px;
    text-align: center;
    align-content: center;
    size: 150%;
    
  }

  .imgflex {
    text-align: center;
    align-content: center;
    margin-top: -40px
  }
</style>