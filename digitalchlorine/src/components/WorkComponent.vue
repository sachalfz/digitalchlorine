<script>
    export default {
        data() {
            return {
                isOpen: false
            };
        },
        methods: {
            toggleProjects() {
                this.isOpen = !this.isOpen;
            }
        }
    };
</script>

<template>
    <div class="work baserules" id="work">
        <p class="work--title">WORK.</p>
        <div class="work__content">

            <div class="headproject">
                <div class="headproject__images">
                    <img src="../assets/images/exitlutherrework10.png" alt="album 1" class="headproject__images--img">
                    <div class="headproject__images__sub">
                        <img src="../assets/images/exitlutherrework11.png" alt="album 1" class="headproject__images__sub--img">
                        <img src="../assets/images/exitlutherrework12.png" alt="album 1" class="headproject__images__sub--img">
                    </div>
                </div>
                <div class="headproject__text">
                    <p class="headproject__text--title">LUTHER - EXIT</p>
                    <p class="headproject__text--subtitle">alternative cover.</p>
                    <p class="headproject__text--desc">
                        I explored the dark and intense themes of the project. Additionally, I developed two extra variants, each offering a broader perspective on the universe conveyed by the cover. 
                        These variations aim to enhance the visual and emotional depth, providing a more comprehensive artistic experience.
                    </p>
                </div>
            </div>  

            <div class="headproject">
                <div class="headproject__images">
                    <img src="../assets/images/manjumping3.png" alt="album 1" class="headproject__images--img">
                    <div class="headproject__images__sub">
                        <img src="../assets/images/manjumping5.png" alt="album 1" class="headproject__images__sub--img">
                        <img src="../assets/images/manjumping6.png" alt="album 1" class="headproject__images__sub--img">
                    </div>
                </div>
                <div class="headproject__text">
                    <p class="headproject__text--title">Meech20x50 - SUICIDE DOORS</p>
                    <p class="headproject__text--subtitle">alternative cover.</p>
                    <p class="headproject__text--desc">
                        I immersed myself in the gritty and intense themes of the song "Suicide Doors" by Meech20x50.
                        This project is my first fully realized in 3D using Blender, capturing the raw energy and emotional depth of the track through detailed and immersive visuals.
                    </p>
                </div>
            </div>

            <div class="otherproject__header" @click="toggleProjects">
                <p class="otherproject__header--title">OTHER PROJECTS</p>
                <img src="../assets/icons/arrow.svg" alt="arrow" class="otherproject__header--svg" :class="{'rotated': isOpen}">
            </div>

            <div class="otherproject" v-show="isOpen">

                <div class="otherproject__self">
                    <img src="../assets/images/angel wings 2.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">angel wings.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/collage.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">still mad.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/absolut vodk.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">absolut.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/incendieeee 2.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">incendie pt1.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/vitesse des sprints 2.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">incendie pt2.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/ocean eyes.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">ocean eyes.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/test reticulation 3.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">reticulation pt1.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/test reticulation 4.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">reticulation pt2.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/hardstone psycho 2.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">hardstone psycho.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/blue moon.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">blue... so blue.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/ta pute sang.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">ta p*te en sang.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/bby rattrape moi dans les balles 3.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">rattrape moi ds les balles.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/average digitalchlorine fit.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">average fit.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/brainless edit 3.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">brainless edit.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/bullet hole 5.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">bullet hole.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/colt.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">colt.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/how can i forget that face 6.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">how can i forget.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/kill yourself 5.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">do it.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/lifes disgustingly bleak.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">disgustinlgy bleak.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/let me bleed 3.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">let me bleed.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/ma belle jtm.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">jtm.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/sword 4.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">sword.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/sorry.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">sorry.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/pussy enjoyer 2.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">pussy enjoyer.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/suck my blood 3 1.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">suck my blood.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/trust your bros 2.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">trust your bros/hoes.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/the only one who cared.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">the only one.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/everyone hates me.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">everyone hates me.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/theses drugs are calling me.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">drugs are calling me.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/hold my glock.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">hold my glock.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/gros incel.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">gros incel.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/veux finir dans.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">suicide de masse.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/parano2.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">trop parano.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/faut tuer emmanuel 3.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">tuer le chef d'état.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/ive never felt this good 2.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">ive never felt this good.</p>
                </div>

                <div class="otherproject__self">
                    <img src="../assets/images/etoiles dans la nuit.png" alt="" class="otherproject__self--img">
                    <p class="otherproject__self--txt">etoiles dans la nuit.</p>
                </div>    
            </div>

        </div>
    </div>
</template>