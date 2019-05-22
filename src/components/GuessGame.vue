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
            <div class="form-group">
                <label for="guessField">Enter a guess: </label>
                <input v-model="guessField" type="text" id="guessField" class="form-control guessField shadow-sm">
                <small v-text="randomNumber"></small>
            </div>

<!--            previous guess-->
            <div class="col-12 text-center">
            <div class="bg-dark text-white  mx-5 py-2 rounded shadow-sm">{{guessField}}</div>
            </div>

            <div class="mt-3">
                <button @click="checkGuess" type="button" class="btn btn-primary">Guess Now !</button>
            </div>

        </div>
        <div id="example-1">
            <button v-on:click="doStuff">Add 1</button>
            <p>The button above has been clicked {{ counter }} times.</p>
        </div>

    </section>
</template>

<script>
  export default {
    data () {
      return {
        guessField: null,
        guessCount: 0,
        randomNumber: 0,
        alert: {

          show: false,
          type: 'danger',
          message: '',
        }
      }
    },
    mounted () {
      this.randomNumber = Math.floor(Math.random() * 100) + 1
    },
    methods: {
      doStuff () {
        alert('Did something')

      },
      GuessNow () {
        this.alert.type = 'info'

      },

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

      checkGuess () {
        this.guessField = Number(this.guessField)
        if (this.guessField === this.randomNumber) {
          return this.alertSuccess('You are correct')
        } else {
           this.alertError('Try again')
          // this,previousGuess+=
        }
        this.guessCount++

      }
    }
  }

</script>


<!--<script>
  export default {
    el: '#example-1',
    data() {
      counter: 0
      return {
        message:''
      }
    }
  }
</script>-->
<!--<script>
let randomNumber = Math.floor(Math.random() * 100) + 1
document.getElementById('answer').innerHTML = randomNumber

const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const guessSubmit = document.querySelector('.guessSubmit')
const guessField = document.querySelector('.guessField')
let guessCount = document.getElementById('.guessCount')

let correctGuess = 0
// correctGuess = document.getElementById('correctGuess');
guessCount = 1

let resetButton
guessField.focus()

// run function with enter key
guessField.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    document.getElementById('myBtn').click()
  }
})

function checkGuess () {
  let userGuess = Number(guessField.value)

  if (guessCount === 1) {
    guesses.textContent = 'previous guesses: '
  }

  guesses.textContent += userGuess + '  '

  if (userGuess === randomNumber) {
    // correctGuess.textContent = '60';
    lastResult.textContent = 'congratulations! you got it!'
    lastResult.style.backgroundColor = 'green'
    lowOrHi.textContent = ' '
    correctGuess += 1

    setGameOver()
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER !!!'
    setGameOver()
  } else {
    lastResult.textContent = 'Wrong!'
    lastResult.style.backgroundColor = 'red'
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!'
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'last guess was too high'
    }
  }
  guessCount.textContent = guessCount

  guessCount++
  guessField.value = ' '
  guessField.focus()
}

guessSubmit.addEventListener('click', checkGuess)

function setGameOver () {
  guessField.disabled = true
  guessSubmit.disabled = true
  resetButton = document.createElement('button')
  resetButton.textContent = 'Start new game'
  document.body.appendChild(resetButton)
  resetButton.add('click', resetGame)
}

function resetGame () {
  guessCount = 1

  const resetParas = document.querySelectorAll('.resultParas p')
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = ''
  }
  resetButton.parentNode.removeChild(resetButton)

  guessField.disabled = false
  guessSubmit.disabled = false
  guessField.value = ''
  guessField.focus()

  lastResult.style.backgroundColor = 'white'

  randomNumber = Math.floor(Math.random() * 100) + 1
}

</script>-->
