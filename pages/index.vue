<template>
  <section class="section">
    <section class="section">
      <div class="box has-text-centered">
        <h1 class="title">Sube tu archivo en <span class="mp3">.mp3</span> aquí</h1>
        <div class="container">
          <b-field>
            <b-upload v-model="dropFiles"
                multiple
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
            <span v-for="(file, index) in dropFiles"
                :key="index"
                class="tag is-primary" >
                {{file.name}}
                <button class="delete is-small"
                    type="button"
                    @click="deleteDropFile(index)">
                </button>
            </span>
          </div>
        </div>

        <div class="container">
          <b-button :disabled="!isActive">Subir archivos</b-button>
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
      dropFiles: [],
      isActive: false
    }
  },
  methods: {
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1)
    }
  }
}
</script>

<style>
  .mp3 {
    color: blue;
  }
</style>
