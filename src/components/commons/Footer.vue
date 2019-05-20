<template>
    <footer>
        <div class="container mt-4">
            <div class="col-12">
                <ul class="list-inline text white text-center">

                    <li class="list-inline-item">
                        <router-link class="nav-link" to="/game">Play </router-link>
                    </li>

                    <li class="list-inline-item">
                    <router-link class="nav-link" to="/">How to play </router-link>
                    </li>

                    <li class="list-inline-item">
                        <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
                    </li>

                    <li class="list-inline-item">
                        <router-link class="nav-link" to="/contact">Contact</router-link>
                    </li>
                    <li class="list-inline-item"><i class="fas fa-cogs"></i><a href="#"> Settings</a></li>
                    <li class="list-inline-item"><a href="#"> High score</a></li>
                    <li class="list-inline-item"><a href="#"> invite a friend </a></li>

                </ul>
            </div>
        </div>
    </footer>
</template>

<style>
    footer{
        /*padding-top: 1px;*/
        margin-bottom: -200px;
        padding-bottom: -200px;
    }
</style>
