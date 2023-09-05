<template>
    <div class="mt-4">
       <v-card class="no-radius">
          <v-card-title class="font-weight-bold"> 
            <h2 class="fix-font-size">  {{  title  }} </h2>
          </v-card-title>
          <v-img
              src="/banner-avif.jpg"
              height="125"
              cover
              class="bg-grey-lighten-2"
              alt="youtube vimeo banner"
            ></v-img>
              <div class="input-box mt-4 pa-2">
                  <v-text-field
                  v-model="search"
                  label="Paste Youtube or Vimeo video link here"
                  loading
                  placeholder="Start typing..."
                  variant="outlined"
                >
                  <template v-slot:loader>
                    <v-progress-linear
                      :active="loading"
                      absolute
                      height="7"
                      indeterminate
                    ></v-progress-linear>
                  </template>

                  <template v-slot:prepend-inner>
                    <img
                          height="50"
                          width="50"
                          src="/youtube.svg"
                          alt="youtube-icon"
                        >
                    </template>
                </v-text-field> 
                  <v-btn @click="getThumbnail" class="go-btn" elevation="2" color="primary" variant="elevated"> GO
                      <template v-slot:prepend>
                        <span class="icon-holder">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" enable-background="new 0 0 512 512"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>
                        </span>
                      </template>
                  </v-btn>
              </div>

            <div class="result-box pa-3">
              <div class="img-box" v-if="videos.length">
                <div class="iterator mb-3" v-for="item in videos">
                  <v-img
                    :height="item.height"
                    class="inherit-width"
                    :src="item.src"
                  ></v-img>
                  <v-btn
                    variant="elevated"
                    elevation="2"
                    @click="downloadImage(item.src, item.name)"
                    color="primary" 
                    class="mt-2"> Download 
                    <template v-slot:prepend>
                      <span class="icon-holder">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z" /></svg>
                      </span>
                    </template>
                  </v-btn>
                
                  &nbsp; <span> {{  item.name }} </span>
                </div>
              </div>
            </div>

            <div class="info-box">
              <v-expansion-panels
                v-model="panels"
                :disabled="false"
                multiple
              >
                <v-expansion-panel value="first">
                  <v-expansion-panel-title class="font-weight-bold"><h3> Use Of YouTube Thumbnail Downloader </h3></v-expansion-panel-title>
                  <v-expansion-panel-text class="pa-2">
                    <p> 
                    This website offers a convenient solution for individuals seeking to extract a thumbnail image from any YouTube video.
                    The downloaded thumbnail can be utilized for various activities, such as presentations, animation work, or other creative endeavors. With its user-friendly interface, this YouTube thumbnail downloader makes the process quick and hassle-free
                    </p>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel value="second">
                  <v-expansion-panel-title class="font-weight-bold">
                    <h3> Is it  legal to  download YouTube videos and thumbnail </h3>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text class="pa-2">
                    <p> Although it is legal to download YouTube videos and thumbnails according to YouTube's privacy policy, it's important to note that both are copyrighted products. Therefore, permission from the author should be obtained before reusing them </p>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel  value="third">
                  <v-expansion-panel-title class="font-weight-bold">
                     <h3>
                        How to download YouTube Thumbnails 
                     </h3>
                    </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <ol class="pa-2">
                      <li>  Paste YouTube video link in above text box. </li> 
                      <li>  Press download button for download the image </li>
                    </ol>
                  </v-expansion-panel-text>
                </v-expansion-panel>

              </v-expansion-panels>
            </div>  
       </v-card>
    </div>
</template>

<style scoped>
  .no-radius {
    border-radius: 0px !important;
  }
  .icon-holder {
    height: 24px;
    width: 24px;
    color: #fff;
    fill: currentColor;
  }

  .fix-font-size {
    font-size: 1.25rem;
  }

  .animation-content{
    max-width: 100%;
    position: relative;
  }
  .input-box{
    display: flex;
    flex-wrap: wrap;
  }
  .go-btn {
    height: 50px;
    margin-left: 10px;
  }
</style>

<script setup>
import { ref } from 'vue'
import axios from 'axios';
 const search = ref(null)
 const title = ref('Get Access to Stunning YouTube and Vimeo Video Thumbnails')
 const panels = ref(['first', 'second', 'third'])
 const videos = ref([])
 const loading = ref(false)
 const ytVideoId = ref(null)

 const slugify = (str) => {
  return String(str)
    .normalize('NFKD') 
    .replace(/[\u0300-\u036f]/g, '') 
    .trim() 
    .toLowerCase() 
    .replace(/[^a-z0-9 -]/g, '') 
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-'); 
}

const downloadImage = async (imglink = null, name) => {
  if(!imglink || !ytVideoId) return;
  const url =  import.meta.env.VITE_BACKEND_HOST_URL || 'http://localhost:3001/download'
  axios.post(url, {
    link:imglink
  },{
    responseType: 'blob', 
  }).then(r => {
        const url = window.URL.createObjectURL(new Blob([r.data]));
        const link = document.createElement('a');
        link.href = url;
        const imageName = slugify(name)
        link.setAttribute('download', `${imageName}.jpg`);
        document.body.appendChild(link);
        link.click();
        link.remove();
  })
 }

 const getThumbnail = () => {
   document.querySelector('.v-field__input input').blur();
   document.body.focus()
   initialFunction()
 }

 const initialFunction = () => {
    var value = search.value;
    if(!value) return;
    var isVimeo = checkVimeo(value);
    if (isVimeo) {
        isVimeo = isVimeo[isVimeo.length - 1];
        getVimeoDetails(isVimeo);
        return;
    }
    var videoId = (extractYoutubeLink(value));
    if (videoId === 0) {
        return;
    }
    prepareYoutubeThumbnail(videoId)
    return;
 }

 const prepareYoutubeThumbnail = (videoId) => {
  loading.value = true
  if (videoId) {
      videos.value = [
        {
          height:700,
          src:`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
          name:'HD Image (1280x720)',
          qt:'HD'
        },
        {
          height:400,
          src: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
          name:'SD Image (640x480)',
          qt:'SD'
        },
        {
          height:300,
          src:`https://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          name: 'Normal Image (480x360)',
          qt:'HQ'
        },
        {
          height:180,
          src:`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
          name: 'Normal Image (320x180)',
          qt:'MQ'
        },{
          height:90,
          src:`https://img.youtube.com/vi/${videoId}/default.jpg`,
          name:'Normal Image (120x90)',
          qt: 'def'
        }
    ]
    search.value = `https://youtube.com/watch?v=${videoId}`
    ytVideoId.value = videoId
  } else {
    videos.value = []
    ytVideoId.value = ''
  }
  setTimeout(() => {
    loading.value = false
  },300)
 }

 const checkVimeo = (link) => {
    var res = link.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/)
    return res;
 } 


 const getVimeoDetails = (link) => {
   loading.value = true
   axios.get(`https://vimeo.com/api/v2/video/${link}.json`).then(response=>{
    if(response.status === 200){
      const { thumbnail_large,thumbnail_medium,thumbnail_small } = response.data[0]
      videos.value = [
        {
          name:'HD Image (640x480)',
          src:thumbnail_large,
          height:400
        },
        {
          name:'SD Image (200x150)',
          src:thumbnail_medium,
          height:150
        },
        {
          name:'Normal Image (100x74)',
          src:thumbnail_small,
          height:70
        }
      ]
    }
    loading.value = false
   }).catch(err=> {
    loading.value = false
     videos.value = []
   })
 }

 const extractYoutubeLink = (link) => {
    var regex = /(?:https?:\/\/)?(?:www\.)?(?:youtu(?:be\.com\/(?:watch\?(?:v=|vi=)|v\/|vi\/)|\.be\/|be\.com\/embed\/|be\.com\/shorts\/)|youtube\.com\/\?(?:v=|vi=))([\w-]{11})/;
    var res = regex.exec(link)
    if (res && res[1]) {
        return res[1];
    }
    return;
 }


</script>