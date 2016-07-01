import {Collection} from 'backbone';
import Batch from '../models/Batch';
/**
 * hierin wordt de standaard URL gezet met daarin de link zonder het account ID.
 * De Data wordt opgeslagen in het lege model 'Batch'
 * @constructor
 */
const Tree = Collection.extend({
    model: Batch,
    url: 'https://api.worldoftanks.eu/wot/account/info/?application_id=77a9b9a92906a93589aa9a0e25bc12cb&account_id='
});
export default Tree;