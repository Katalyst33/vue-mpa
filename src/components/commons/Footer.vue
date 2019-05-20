<template>
    <footer class="container-fluid">
        <div class="container mt-4">
            <div class="row">
            <div class="col-12">
                <ul class="list-inline text white text-center">

                    <li class="list-inline-item">
                        <router-link class="nav-link" to="/game">
                        <button type="button" class="btn btn-dark">PLAY</button>
                             </router-link>
                    </li>

                    <li class="list-inline-item">
                        <router-link class="nav-link" to="/">
                        <button type="button" class="btn btn-dark">HOW TO PLAY</button>
                       </router-link>
                    </li>

                    <li class="list-inline-item">
                        <router-link class="nav-link" to="/dashboard">
                            <button type="button" class="btn btn-dark">DASHBOARD</button>
                        </router-link>
                    </li>

                    <li class="list-inline-item">
                        <router-link class="nav-link" to="/#">
                            <button type="button" class="btn btn-dark">SETTINGS</button>
                        </router-link>
                    </li>


                    <li class="list-inline-item">
                        <router-link class="nav-link" to="#">
                            <button type="button" class="btn btn-dark">HIGHSCORE</button>
                        </router-link>
                    </li>

                    <li class="list-inline-item">
                        <router-link class="nav-link" to="/#">
                            <button type="button" class="btn btn-dark">INVITE FRIEND</button>
                        </router-link>
                    </li>

                </ul>
            </div>
            </div>

            <div class="container-fluid">
            <div class="row text-center">
            <div class="col-12">
               <p class="px-5"> <img class="" src="../../assets/avatar.png" height="50" width="50"/><span class="bg-success rounded text-white px-3 py-1 ">Username</span></p>
            </div>

            </div>
            </div>

            </div>
    </footer>
</template>

<style>

    footer{
        font-family: 'Indie Flower', cursive;
        font-weight: bolder;

        /*padding-top: 1px;*/
        margin-bottom: -200px;
        padding-bottom: -200px;
    }
</style>
