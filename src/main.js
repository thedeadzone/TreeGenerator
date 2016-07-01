import _ from 'underscore';
import {Events} from 'backbone';
import Tree from './collections/Tree';
import DataLinks from './views/DataLinks';
import Data from './views/Data';
import Batch from './models/Batch';
import ClickA from './views/ClickA';
import Create from './models/Create';
import PopUpBlock from './views/PopUpBlock';



(function ()
{
    let setGlobalVariables = function ()
    {
        window.App = {};
        App.events = _.clone(Events);
    };
    /**
     * wordt uigevoerd nadat de DOM klaar is
     * backbone url wordt gezet waar vanaf die moet worden gebruikt
     * Alles wordt aan elkaar gekoppeld
     */
    let init = function () {
        setGlobalVariables();
        let DataCollection = new Tree();
        let CreateModel = new Create();
        new DataLinks();
        new Data({collection: DataCollection});
        new ClickA({el: "#clicker", model: CreateModel});
        new PopUpBlock({el: "#box", model: CreateModel});

        Backbone.history.start({pushState: true, root: '/tools/tree/'});
    };

    window.addEventListener('load', init);
})();
