import {View} from 'backbone';
import DataRouter from '../routers/DataRouter';

/**
 * Object met clickhandler
 *
 * @constructor
 */
const DataLinks = View.extend({
    router: null,

    events: {
        'click a': 'clickHandler'
    },

    initialize: function ()
    {
        //Initialize the matches router to activate navigation
        this.router = new DataRouter();
    },

    /**
     * Clickhandler voor links, de data uit data attribute en de navigatie router.
     *
     * @param e
     */
    clickHandler: function (e)
    {
        e.preventDefault();

        //Get target the retrieve data properties
        let target = e.currentTarget;
        let url = 'signature/' + target.dataset['id'];

        //Use trigger & replace to update URL and make the router listen to change
        this.router.navigate(url, {trigger: true, replace: true});
    }
});

export default DataLinks;
