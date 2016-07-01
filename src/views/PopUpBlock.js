import {View} from 'backbone';
/**
 * Object voor PopUpBlock
 *
 * @constructor
 */
const PopUpBlock = View.extend({
    initialize: function ()
    {
        this.model.on("change:created", this.showColor, this);
    },
    /**
     * zorgt ervoor dat de grijze content box omhoog komt
     */
    showColor: function (model, created)
    {
        if (created) {
            this.$el.removeClass("border");
            this.$el.addClass("border");
        } else {
            this.$el.addClass("border");
            this.$el.removeClass("border");
        }
    }
});
export default PopUpBlock;