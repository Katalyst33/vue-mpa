

<template>


    <div id="app" >
        <div class="navbar navbar-expand-lg navbar-dark bg-dark py-3" id="navbar">
            <img src="../../assets/logo.png" height="50" width="50"/>
            <h3 class="navbar-brand px-3" href="#">Gusess The Number Game</h3>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">

                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">Sign in</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">Sign up</router-link>
                    </li>

                </ul>
            </div>
        </div>


        <transition name="fade" mode="out-in">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>

    </div>

</template>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0
    }

</style>
