<template>
  <section class="section">
    <section class="section">
      <div class="box has-text-centered">
        <h1 class="title">Sube tu archivo en <span class="mp3">.mp3</span> aquí</h1>
        <div class="container">
          <b-field>
            <b-upload v-model="file"
                drag-drop>
                <section class="section">
                    <div class="content has-text-centered">
                        <p>
                            <b-icon
                                icon="upload"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Arrastra tus archivos aquí o da click para subirlos</p>
                    </div>
                </section>
            </b-upload>
          </b-field>

          <div class="tags">
            <span v-if="file"
                class="tag is-primary" >
                {{file.name}}
            </span>
          </div>
        </div>

        <div class="container">
          <b-button :loading="active" @click="upload">Subir archivos</b-button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'IndexPage',
  components: {
    Card
  },
  data() {
    return {
      file: null,
      active: false
    }
  },
  methods: {
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1)
    },
    async upload () {
      console.log('hola')
      try {
        this.active = true
        const res = await this.$store.dispatch('modules/music/uploadSong',
          {
            data: this.file
          }
        )
        this.file = null
        console.log(res)
        this.active = false
      } catch (error) {
        console.log(error)
      } finally {
        this.active = false
      }
    }
  }
}
</script>

<style>
  .mp3 {
    color: blue;
  }
</style>
