/*!
 * Dynamic tab management for foundation 5
 * http://github.com/general03
 *
 * @author RIGAUDIE David
 * @version 0.1.0
 */

(function (global) {

	'use strict';

	// Storage variable
	var dynatab = {};

	// Server parameters
	dynatab.contentId = 'content';
	dynatab.ajaxType = 'POST';
	dynatab.prefixIdTab = '';
	dynatab.callback = function(){};

	/*
	 * Public methods
	 */

	// Create Tab
	dynatab.createTab = function (tabClass, contentClass, textContentTab, urlAjax, dataAjax) {
		$.ajax(
	      {
	        url : urlAjax,
	        data: dataAjax,
	        type: dynatab.ajaxType
	      }).done(function( data ) {
	        $('.'+contentClass+' section').removeClass('active');

	        $('.'+contentClass).append(data);

	        // <input type="hidden" name="id-tab-section" />
	        var idTable = dynatab.prefixIdTab + '-' + dataAjax["id-tab-section"];

	        var liContent = $('<li class="tab-title active" role="presentational" >')
	        .append('<a href="#'+idTable+'" class="left" role="tab" aria-selected="true" aria-controls="'+idTable+'">'+textContentTab+'</a>')
	        .append('<a class="right tab-action__close" id="tab--'+idTable+'__close">&times;</a>')
	        .append('</li>');

	        // Delete the current active tab
	        $('.'+tabClass+' .tab-title').removeClass('active');

	        // Add the tab linked to the table
	        $('#'+dynatab.contentId+' ul.'+tabClass).append(liContent);

	        // Add event to delete the tab
	        $('#tab--'+idTable+'__close').click(function(e){
	         // Activate the next tab
	         var ulParent = $(e.target.parentElement).parent();
	         $('#'+idTable).remove(); 
	         $(this).parent().remove();
	         ulParent.children().last().addClass('active');

	         // Activate the content linked to the tab
	         if($('ul.'+tabClass).find('li:last').length > 0)
	         {
	           var idTab = $('ul.'+tabClass).find('li:last').find('a:first').get(0).getAttribute('aria-controls');  
	           $('#'+idTab).addClass('active');          
	         }
	        });

	       	dynatab.callback();
    	}).fail(function(e){console.log(e)});

	};

	// Export dynatab into global space
	global.dynatab = dynatab;

}(window));

