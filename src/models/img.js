import {Model} from 'backbone';
import $ from 'jquery';
/**
 * Constructor waar uiteindelijk een img komt met daarin de signature die gegenereerd is.
 *
 * @constructor
 * @param {int} hits - het percentage hits van de opgehaalde gebruiker.
 * @param {int} wr - het percentage wins van de opgehaalde gebruiker.
 * @param {string} nick - bevat de naam van de opgehaalde gebruiker.
 * @param {int} trees - het aantal omgereden bomen van de opgehaalde gebruiker.
 * @param {int} rating - dit getal bevat de rating van de opgehaalde gebruiker.
 * @param {string} value - bevat "Blank" of "Full", dit geeft aan welke stijl afbeelding er gebruikt wordt.
 */
const Img = Model.extend({
    constructor: function (hits, wr, nick, trees, rating, value) {
        /**
         * Standaard class waarvan wordt geërfd door de twee afbeeldinge classes.
         * Bevat canvas en image die gebruikt worden.
         * Zorgt er ook voor dat canvas schoon is zou de gebruiker de andere versie van de afbeelding willen zien
         * @constructor
         */
        class image {
            constructor(hits, wr, nick, trees, rating) {
                this.ctx = document.getElementById('myCanvas').getContext('2d');
                this.img = new Image();
                this.ctx.clearRect(0, 0, 1000, 1000);
            }
        }

        class ImageBlank extends image {
            /**
             * erft van de hoofdclass en neemt hier wat variablen van over.
             * Div wordt op goede breedte gezet voor afbeelding
             * met if statements worden de kleuren beslist die nodig zijn aan de hand van de waardes
             * text wordt op de afbeelding gezet en de afbeelding zelf wordt erachter gezet.
             * @constructor
             */
            constructor(hits, wr, nick, trees, rating) {
                super(hits, wr, nick, trees, rating);
                var img = this.img;
                var ctx = this.ctx;
                img.onload = function () {
                    $('#box.border').css('width', '415px');
                    //ctx.canvas.width = 350;
                    //tree/battle
                    if (trees < 0.2) {
                        //red
                        ctx.fillStyle = '#E31230';
                    }
                    if (trees >= 0.2 && trees <= 0.29) {
                        //orange
                        ctx.fillStyle = '#CC7A00';
                    }
                    if (trees >= 0.3 && trees <= 0.79) {
                        //yellow
                        ctx.fillStyle = '#CCB800';
                    }
                    if (trees >= 0.8 && trees <= 0.9) {
                        //green
                        ctx.fillStyle = '#4D7326';
                    }
                    if (trees >= 0.91 && trees <= 1.19) {
                        //blue
                        ctx.fillStyle = '#3972C6';
                    }
                    if (trees > 1.2) {
                        //purple
                        ctx.fillStyle = '#793DB6';
                    }

                    ctx.fillRect(0, 0, 400, 120);
                    ctx.drawImage(img, 0, 0);
                    ctx.font = "15pt Arial";
                    ctx.fillStyle = '#FFFFFF';
                    ctx.textAlign = "center";
                    ctx.fillText(nick, 193, 25);
                    ctx.textAlign = "left";
                    ctx.fillText("Tree's cut per battle", 110, 50);
                    ctx.textAlign = "center";
                    ctx.font = "25pt Arial";
                    ctx.fillText(trees, 190, 85);
                };
                img.src = 'http://thedeadzone.pro/tools/tree/signature_template_blank_good.png';
            }
        }


        class ImageFull extends image {
            /**
             * erft van de hoofdclass en neemt hier wat variablen van over.
             * Div wordt op goede breedte gezet voor afbeelding
             * met if statements worden de kleuren beslist die nodig zijn aan de hand van de waardes
             * text wordt op de afbeelding gezet en de afbeelding zelf wordt erachter gezet.
             * full bevat meer waarden dan blank omdat er meer content in zit.
             * @constructor
             */
            constructor(hits, wr, nick, trees, rating) {
                super(hits, wr, nick, trees, rating);
                var img = this.img;
                var ctx = this.ctx;
                img.onload = function () {
                    $('#box.border').css('width', '520px');
                    //wr%
                    if (wr < 47) {
                        //red
                        ctx.fillStyle = '#E31230';
                    }
                    if (wr == 47 ) {
                        //orange
                        ctx.fillStyle = '#CC7A00';
                    }
                    if (wr == 48 || wr == 49) {
                        //yellow
                        ctx.fillStyle = '#CCB800';
                    }
                    if (wr == 50 || wr == 51 || wr == 52 || wr == 53) {
                        //green
                        ctx.fillStyle = '#4D7326';
                    }
                    if (wr >= 54 && wr < 60) {
                        //blue
                        ctx.fillStyle = '#3972C6';
                    }
                    if (wr >= 60) {
                        //purple
                        ctx.fillStyle = '#793DB6';
                    }
                    ctx.fillRect(0, 0, 75, 60);
                    //hit%
                    if (hits < 40) {
                        //red
                        ctx.fillStyle = '#E31230';
                    }
                    if (hits >= 40 && hits <= 49) {
                        //orange
                        ctx.fillStyle = '#CC7A00';
                    }
                    if (hits >= 50 && hits <= 59) {
                        //yellow
                        ctx.fillStyle = '#CCB800';
                    }
                    if (hits >= 60 && hits <= 69) {
                        //green
                        ctx.fillStyle = '#4D7326';
                    }
                    if (hits >= 70 && hits <= 75) {
                        //blue
                        ctx.fillStyle = '#3972C6';
                    }
                    if (hits >75) {
                        //purple
                        ctx.fillStyle = '#793DB6';
                    }
                    ctx.fillRect(0, 60, 75, 60);

                    //tree/battle
                    if (trees < 0.2) {
                        //red
                        ctx.fillStyle = '#E31230';
                    }
                    if (trees >= 0.2 && trees <= 0.29) {
                        //orange
                        ctx.fillStyle = '#CC7A00';
                    }
                    if (trees >= 0.3 && trees <= 0.79) {
                        //yellow
                        ctx.fillStyle = '#CCB800';
                    }
                    if (trees >= 0.8 && trees <= 0.9) {
                        //green
                        ctx.fillStyle = '#4D7326';
                    }
                    if (trees >= 0.91 && trees <= 1.19) {
                        //blue
                        ctx.fillStyle = '#3972C6';
                    }
                    if (trees > 1.2) {
                        //purple
                        ctx.fillStyle = '#793DB6';
                    }
                    ctx.fillRect(75, 0, 400, 120);


                    ctx.fillStyle = '#000000';
                    ctx.fillRect(415, 0, 90, 120);
                    ctx.drawImage(img, 0, 0);
                    ctx.font = "15pt Arial";
                    ctx.fillStyle = '#FFFFFF';
                    ctx.textAlign = "center";
                    ctx.fillText(nick, 250, 25);
                    ctx.fillText(rating, 460, 80);
                    ctx.textAlign = "left";
                    ctx.fillText("Tree's cut per battle", 170, 50);

                    ctx.font = "12pt Arial";
                    ctx.fillText("Winrate", 10, 20);
                    ctx.fillText("Hit %", 18, 83);
                    ctx.textAlign = "center";
                    ctx.fillText("Personal", 458, 30);
                    ctx.fillText("Rating", 458, 45);
                    ctx.fillText(wr + "%", 39, 45);
                    ctx.fillText(hits + "%", 35, 105);
                    ctx.font = "25pt Arial";
                    ctx.fillText(trees, 250, 85);
                    ctx.fillStyle = '#000000';
                    ctx.fillRect(75, 0, 1, 120);
                    ctx.fillRect(0, 60, 75, 1);

                };
                img.src = 'http://thedeadzone.pro/tools/tree/signature_template_empty.png';
            }
        }


        /**
         *
         * aan de hand van de geslecteerde waarde wordt de blank of full versie aangemaakt.
         *
         */
        if (value == "Blank") {
            new ImageBlank(hits, wr, nick, trees, rating);
        }
        if (value == "Full"){
            new ImageFull(hits, wr, nick, trees, rating);
        }
    }
});

export default Img;