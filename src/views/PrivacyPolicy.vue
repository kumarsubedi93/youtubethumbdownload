<template>
   <div class="info-box">
              <v-expansion-panels
                v-model="panels"
                :disabled="false"
                multiple
              >
                <v-expansion-panel value="first">
                  <v-expansion-panel-title class="font-weight-bold">Privacy Policy for Youtubethumb Downloader</v-expansion-panel-title>
                  <v-expansion-panel-text class="pa-2">
                    One of our top goals at Youtube thumbnail Download, located at <a href="https://youtubethumbdownload.com"> https://youtubethumbdownload.com </a>, is the privacy of our customers. The sorts of information that Youtube Thumbnail Downloader collects and records, as well as how we utilise it, are described in our Privacy Policy document.
                    Please get in touch with us if you have any more inquiries or need more details about our privacy policy.
                    Only our online activities are covered by this privacy statement, which also applies to website users' sharing and/or collection of information during Youtube thumbnail download. Information gathered offline or from sources other than this website is not covered by this policy.
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel value="second">
                  <v-expansion-panel-title class="font-weight-bold">Consent</v-expansion-panel-title>
                  <v-expansion-panel-text class="pa-2">
                    You hereby agree to our Privacy Policy's provisions and consent to its application by using our website.
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel  value="third">
                  <v-expansion-panel-title class="font-weight-bold"> Information we collect and use </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    At the time we ask for your personal information, we will make clear the personal information we are requesting from you as well as the reasons for doing so.
                    If you get in touch with us directly, we might learn more about you, including your name, email address, phone number, the message and/or attachments you send us, and any other details you decide to us.
                    We could ask for your contact information when you sign up for an account, such as your name, company name, address, email address, and phone number.
                    Also when using information to Find and prevent fraudulent activities
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel  value="fourth">
                  <v-expansion-panel-title class="font-weight-bold"> Children’s Information </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    Adding protection for kids using the internet is another one of our priorities. We urge parents and guardians to keep an eye on, engage in, monitor, and/or guide their children's internet behaviour.
                    Children under the age of 13 cannot intentionally provide any Personal Identifiable Information to Youtube thumbnail downloader. We firmly advise you to notify us immediately if you believe that your child provided this kind of information on our website. We will make every attempt to rapidly erase such information from our database.
                  </v-expansion-panel-text>
                </v-expansion-panel>

              </v-expansion-panels>
            </div>  
</template>
<script setup>
 import {ref} from 'vue'
 const panels = ref(['first', 'second', 'third', 'fourth'])
</script>