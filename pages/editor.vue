<template>
  <section class="container">

    <v-btn
      color="primary"
      @click="getContent"
    >
      Test
    </v-btn>

    <hr>

    <client-only>
      <quill-editor
        ref="editor"
        v-model="content"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)"
      />
    </client-only>

  </section>
</template>

<script>
    export default {
        layout: 'content-layout',
        name: 'quill-example-nuxt',
        data() {
            return {
                content: '',
                editorOption: {

                    theme: 'snow',
                    modules: {
                        toolbar: [
                            ['bold', 'italic', 'underline', 'strike'],
                            ['blockquote', 'code-block'],
                            [{'header': 1}, {'header': 2}],
                            [{'list': 'ordered'}, {'list': 'bullet'}],
                            [{'script': 'sub'}, {'script': 'super'}],
                            [{'indent': '-1'}, {'indent': '+1'}],
                            [{'direction': 'rtl'}],
                            [{'size': ['small', false, 'large', 'huge']}],
                            [{'header': [1, 2, 3, 4, 5, 6, false]}],
                            [{'font': []}],
                            [{'color': []}, {'background': []}],
                            [{'align': []}],
                            ['clean'],
                            ['link', 'image', 'video']
                        ]
                    }
                },
                value: ''
            }
        },
        mounted() {
            setTimeout(() => {
                this.content = 'I was changed!'
            }, 3000)
        },
        methods: {
            getContent(){
                let content = this.content;
                console.log('content: ' + content);
            },

            onEditorBlur(editor) {
                console.log('editor blur!', editor)
            },
            onEditorFocus(editor) {
                console.log('editor focus!', editor)
            },
            onEditorReady(editor) {
                console.log('editor ready!', editor)
            }
        }
    }
</script>

<style scoped>
  .container {
    width: 100%;
    margin: 0 auto;
    padding: 50px 0;
  }
  .container .quill-editor {
    min-height: 200px;
    max-height: 400px;
    overflow-y: auto;
  }
</style>
