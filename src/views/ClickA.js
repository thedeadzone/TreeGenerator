import {View} from 'backbone';
import $ from 'jquery';
import DataRouter from '../routers/DataRouter';
/**
 * Object dat wordt gebruikt voor de clickhandler van ClickA
 *
 * @constructor
 */
const ClickA = View.extend({
    router: null,
    events: {
        'click': 'clickHandler'
    },
    initialize: function ()
    {
        //Initialize the router to activate navigation
        this.router = new DataRouter();
    },
    /**
     * Clickhander voor de $el
     *
     * @param e
     */
    clickHandler: function (e)
    {
        e.preventDefault();

        /**
         * Waardes worden opgehaald uit formulier na het wordt gepost, deze worden
         * in de URL gestopt, hierna wordt de 'achtergrond' (grijs popup ding) geopened
         * en wordt de url veranderd in een die de 'mode' en 'value' bevat.
         */
        let value = $("#id").val();
        let mode = $("input[name=mode]:checked").val();

        let url = 'signature/'+ mode + '/' + value;

        this.model.set({created: false});
        this.model.set({created: !this.model.get('created')});

        //Use trigger & replace to update URL and make the router listen to change
        this.router.navigate(url, {trigger: true, replace: true});
    }
});
export default ClickA;
