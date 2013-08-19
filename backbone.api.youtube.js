/* Backbone API: Youtube
 * Source: https://github.com/backbone-api/youtube
 *
 * Created by Makis Tracend (@tracend)
 * Distributed through [Makesites.org](http://makesites.org)
 * Released under the [MIT license](http://makesites.org/licenses/MIT)
 */

(function(_, Backbone) {

	// API reference: https://developers.google.com/youtube/v3

	// Constants
	var api = "https://gdata.youtube.com"

	// Support backbone-app (if available)
	var Model = ( typeof APP != "undefined" && !_.isUndefined( APP.Model) ) ? APP.Model : Backbone.Model;

	// Base model - mainly used for setup options
	var Youtube = new Backbone.Model({
		"appId": false,
		"uri": false
	});

	// Namespace definition
	Youtube.Models = {};
	Youtube.Collections = {};
	Youtube.Views = {};

	// Models

	//
	Youtube.Models.Video = Model.extend({
		url: function(){
			return api +"/feeds/api/videos/"+ this.id +"?"+ $.param( this.params )
		},
		params : {
			v : 2,
			alt: "json"
		},
		parse: function( data ){
			console.log("Youtube.Models.Video: ", data);
			// validate data?
			return data.entry;
		}
	});

	// Fallbacks
	//APP = window.APP || (APP = { Models: {}, Collections: {}, Views: {} });
	if( _.isUndefined(Backbone.API) ) Backbone.API = {};
	Backbone.API.Youtube = Youtube;

	// alias APP.API
	if( typeof APP != "undefined" && (_.isUndefined( APP.API) || _.isUndefined( APP.API.Youtube) ) ){
		APP.API = APP.API || {};
		APP.API.Youtube = Backbone.API.Youtube;
	}

	// Shortcut
	if(typeof window.Youtube == "undefined"){
		window.Youtube = Youtube;
	}

})(this._, this.Backbone);