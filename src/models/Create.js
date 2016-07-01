import {Model} from 'backbone';
/**
 * Model waarin wordt opgeslagen of het plaatje is gegenereerd of niet, hiermee worden graphics geactiveerd.
 *
 * @constructor
 */
const Create = Model.extend({
    created: false
});
export default Create;