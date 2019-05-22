<template>
    <section class="home page">
        <div class="jumbotron text-center">
            <!--          alert-->
            <div v-if="alert.show" :class="'alert alert-'+alert.type+' alert-dismissible fade show'" role="alert">
                {{alert.message}}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="d-flex justify-content-center" >
            <div class="form-group">
                <label for="guessField">Enter a Number: </label>
                <input v-on:keyup.enter="checkGuess" v-model="guessField" type="number" id="guessField" class="form-control guessField shadow-sm">
                <small v-text="randomNumber"></small>
            </div>
            </div>

<!--            previous guess-->
            <div class="col-12 text-center">
                <div v-if="guesses.show" class="alert alert-dark" role="alert">
                    {{guesses.message }}{{guessField}}
                </div>

            </div>

            <div class="mt-3">
                <button v-on:click="checkGuess"  type="button" class="btn btn-primary">Guess Now !</button>
            </div>

        </div>


    </section>
</template>

<script>
  export default {
    data () {
      return {
        guessField: null,
        guessCount: 1,
        randomNumber: 0,
        alert: {
          show: false,
          type: 'danger',
          message: '',
        },
        guesses: {
          show:false,
          message:'',
        }
      }
    },
    mounted () {
      this.randomNumber = Math.floor(Math.random() * 100) + 1
    },
    methods: {

      alertSuccess (msg = '') {
        this.alert.show = true;
        this.alert.type = 'success'
        this.alert.message = msg
      },

      alertError (msg = '') {
        this.alert.show = true;
        this.alert.type = 'danger'
        this.alert.message = msg
      },

      allGuesses (msg = ''){
        this.guesses.show = true;
        this.guesses.message = msg
      },

      checkGuess () {
        this.guessField = Number(this.guessField)

        if(this.guessCount === 1){
        this.allGuesses('Previous Guess: ')
        }

        if (this.guessField === this.randomNumber) {
          return this.alertSuccess('You are correct')

        } else {
           this.alertError('You are wrong')

        }
        this.guessCount++

      }
    }
  }

</script>



