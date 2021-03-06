{if $page_type != $smarty.const.PAGE_TYPE_LINK}
    {if $runtime.company_id && "ULTIMATE"|fn_allowed_for || "MULTIVENDOR"|fn_allowed_for}
        {include file="common/subheader.tpl" title=__("comments_and_reviews") target="#discussion_page_setting"}
        <div id="discussion_page_setting" class="in collapse">
   		    <fieldset>
                {include
                    file="addons/discussion/views/discussion_manager/components/allow_discussion.tpl"
                    prefix="page_data"
                    object_id=$page_data.page_id
                    object_type="Addons\\Discussion\\DiscussionObjectTypes::PAGE"|enum
                    title=__("discussion_title_page")
                    non_editable=true
                    discussion_default_type=$addons.discussion.page_discussion_type
                }
   		    </fieldset>
        </div>
    {/if}
{/if}