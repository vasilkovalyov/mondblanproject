function removeValueInput(){jQuery(".input-item");jQuery(".icon-close-button").on("click",function(n){jQuery(n.target.previousSibling).val("")})}function initSetDelayOnPosts(){for(var n=jQuery(".post-card"),e=0;e<=n.length-1;e++)jQuery(n[e]).css({"animation-delay":e/4+"s"})}jQuery(function(){(new WOW).init(),removeValueInput(),initSetDelayOnPosts()});