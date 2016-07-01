import {View} from 'backbone';
import _ from 'underscore';
import Tree from '../collections/Tree';
//import ImageBlank from '../models/ImageBlank';
//import ImageFull from '../models/ImgFull';
import img from '../models/img';

/**
 * Object waar de data wordt opgehaald en uit het object wordt gehaald.
 *
 * @constructor
 */
const Data = View.extend({

    initialize: function () {
        //Listen to global events for change of new club
        App.events.on('newSignature', this.loadMatches, this);
    },

    /**
     * Wrapper function to load the matches through the collection
     *
     * @param data - bevat data die mee is gegeven uit index html zoals data-mode
     */
    loadMatches: function (data) {
        this.collection.url = 'https://api.worldoftanks.eu/wot/account/info/?application_id=77a9b9a92906a93589aa9a0e25bc12cb&account_id=' + data.id;
        this.collection.fetch({
            success: (collection) => this.loadMatchesSuccessHandler(collection, data),
            error: (collection, response) => this.loadMatchesErrorHandler(collection, response)
        });
    },

    /**
     * zodra alles goed gaat dan wordt de data in let's gestopped en meegegeven naar de img class waar
     * de echte afbeelding wordt gecreërd
     *
     * @param collection - collectie uit url met speler gegevens.
     * @param data
     */
    loadMatchesSuccessHandler: function (collection, data) {
        //console.log(data);
        let value = data.mode;

        let variables = collection.models[0].attributes.data[data.id];
        let stats = variables.statistics.all;

        let wrMath = stats.wins / stats.battles * 100;
        let hits = stats.hits_percents;
        let wr = wrMath.toFixed(0);
        let nick = variables.nickname;
        let trees = (variables.statistics.trees_cut / stats.battles).toFixed(2);
        let rating = variables.global_rating;

        new img(hits, wr, nick, trees, rating, value);
    },

    /**
     * bij een error wordt deze gelogged
     *
     * @param collection
     * @param response
     */
    loadMatchesErrorHandler: function (collection, response) {
        console.log(response.responseJSON.error);
    }
});

export default Data;
