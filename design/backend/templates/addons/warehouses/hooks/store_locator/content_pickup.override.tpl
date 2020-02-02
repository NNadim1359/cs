{if $destinations}
    <div class="control-group">
        <label class="control-label">{__("store_locator.main_destination")}{include file="common/tooltip.tpl" tooltip=__("warehouses.main_destination_tooltip")}:</label>
        <div class="controls">
            <label class="checkbox inline" for="main_destination">
                <select name="store_location_data[main_destination_id]" id="main_destination">
                    <option value="">{__("none")}</option>
                    {foreach $destinations as $destination}
                        <option value="{$destination.destination_id}" {if $store_location.main_destination_id === $destination.destination_id}selected{/if}>{$destination.destination}</option>
                    {/foreach}
                </select>
            </label>
        </div>
    </div>

    {if $store_location.store_type === "\Tygh\Addons\Warehouses\Manager::STORE_LOCATOR_TYPE_STORE"|constant
        || $store_location.store_type === "\Tygh\Addons\Warehouses\Manager::STORE_LOCATOR_TYPE_PICKUP"|constant
    }
        <div class="control-group store-locator__pickup-destinations-list{if !$store_location.main_destination_id} hidden{/if}">
            <label class="control-label">{__("warehouses.show_to")}{include file="common/tooltip.tpl" tooltip=__("warehouses.show_to_tooltip")}:</label>
            <div class="controls">
                <div class="destinations-wrapper">
                    {foreach $destinations as $destination}
                        <label class="checkbox inline" for="destinations_{$destination.destination_id}">
                            <input
                                    type="checkbox"
                                    name="store_location_data[pickup_destinations_ids][]"
                                    class="store-locator__destination"
                                    id="destinations_{$destination.destination_id}"
                                    {if $store_location.pickup_destinations_ids && $destination.destination_id|in_array:$store_location.pickup_destinations_ids}
                                        checked="checked"
                                    {/if}
                                    value="{$destination.destination_id}"
                            />{$destination.destination}
                        </label>
                    {/foreach}
                </div>
            </div>
        </div>
    {/if}

    {if $store_location.store_type === "\Tygh\Addons\Warehouses\Manager::STORE_LOCATOR_TYPE_STORE"|constant
        || $store_location.store_type === "\Tygh\Addons\Warehouses\Manager::STORE_LOCATOR_TYPE_WAREHOUSE"|constant
    }
        <div class="control-group store-locator__pickup-destinations-list{if !$store_location.main_destination_id} hidden{/if}">
            <label class="control-label">{__("warehouses.ship_to")}{include file="common/tooltip.tpl" tooltip=__("warehouses.ship_to_tooltip")}:</label>
            <div class="controls">
                {include file="addons/warehouses/components/picker/destinations/picker.tpl"
                    multiple = true
                    view_mode = "external"
                    item_ids = $store_location.shipping_destinations_ids
                }
            </div>
        </div>
    {/if}

    <div class="control-group">
        <label for="" class="control-label"></label>
        <div class="controls">
            <div class="well well-small help-block">
                {__("warehouses.destinations_configuration.tooltip", [
                    "[destinations_url]" => fn_url("destinations.manage")
                ])}
            </div>
        </div>
    </div>
{/if}

<style>

</style>
