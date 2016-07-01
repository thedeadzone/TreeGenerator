import {Router} from 'backbone';

/**
 *
 * router voor de url die de mode & id bevat.
 * @constructor
 */
const DataRouter = Router.extend({
    routes: {
        'signature/:mode/:id': 'TreeAction'
    },

    /**
     * wordt gebruikt om het global event te activeren en hier ook in Data.js activiteiten te activeren.
     * @param mode - bevat "Blank" of "Full"
     * @param id - bevat ID van de opgezochte gebruiker.
     *
     */
    TreeAction: function (mode, id)
    {
        App.events.trigger('newSignature', {
            id: id,
            mode: mode
        });
    }
});

export default DataRouter;
