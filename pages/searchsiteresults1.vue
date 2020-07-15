<template>
  <div>
    
    <div>
      <b-row align-h="center">
        
        <div>
          <b-button pill>Button</b-button>
          <b-button pill variant="primary">Button</b-button>
          <b-button pill variant="outline-secondary">Button</b-button>
          <b-button pill variant="success">Button</b-button>
          <b-button pill variant="outline-danger">Button</b-button>
          <b-button pill variant="info">Button</b-button>
        </div>
      
      </b-row>
    </div>
    
    <div>
      <b-carousel
        fade
        id="carousel-fade"
        img-height="480"
        img-width="1024"
        indicators
        style="text-shadow: 0px 0px 2px #000"
      >
        <b-carousel-slide
          caption="First slide"
          img-src="https://picsum.photos/1024/480/?image=10"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Second Slide"
          img-src="https://picsum.photos/1024/480/?image=12"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Third Slide"
          img-src="https://picsum.photos/1024/480/?image=22"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    
    
    <div>
      <b-row align-h="center">
        <b-col cols="8">
          
          <div>
            <b-jumbotron>
              <template v-slot:header>BootstrapVue</template>
              
              <template v-slot:lead>
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
                featured content or information.
              </template>
              
              <hr class="my-4">
              
              <p>
                It uses utility classes for typography and spacing to space content out within the larger
                container.
              </p>
              
              <b-button href="#" variant="primary">Do Something</b-button>
              <b-button href="#" variant="success">Do Something Else</b-button>
            </b-jumbotron>
          </div>
        
        </b-col>
        <b-col cols="4">
          
          <div>
            <b-card>
              <b-media>
                <template v-slot:aside>
                  <b-img alt="placeholder" blank blank-color="#ccc" width="64"></b-img>
                </template>
                
                <h5 class="mt-0">Media Title</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                  Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                  ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </p>
                <p>
                  Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                
                <b-media>
                  <template v-slot:aside>
                    <b-img alt="placeholder" blank blank-color="#ccc" width="64"></b-img>
                  </template>
                  
                  <h5 class="mt-0">Nested Media</h5>
                  <p class="mb-0">
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                    faucibus.
                  </p>
                </b-media>
              </b-media>
            </b-card>
          </div>
        
        </b-col>
      </b-row>
    
    </div>
  
  </div>
</template>

<script>
  
  export default {
    layout: "results",
    components: {}
  }
</script>

<style>

</style>
