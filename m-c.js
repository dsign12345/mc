if (typeof jQuery === "undefined") {
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
}

window.onload = function() {
  	jQuery('.players-collection-list .players-collection-list-item:first-child').find('.player-statistics-content-left').show();
    jQuery('.players-collection-list .players-collection-list-item:first-child').find('.player-statistics-content-right').addClass('active');

    jQuery('.defensemen-collection-list .defensemen-collection-list-item:first-child').find('.defensemen-statistics-content-left').show();
    jQuery('.defensemen-collection-list .defensemen-collection-list-item:first-child').find('.defensemen-statistics-content-right').addClass('active');

    jQuery('.rookies-collection-list .rookies-collection-list-item:first-child').find('.rookies-statistics-content-left').show();
    jQuery('.rookies-collection-list .rookies-collection-list-item:first-child').find('.rookies-statistics-content-right').addClass('active');

    jQuery('.goalies-collection-list .goalies-collection-list-item:first-child').find('.goalies-statistics-content-left').show();
    jQuery('.goalies-collection-list .goalies-collection-list-item:first-child').find('.goalies-statistics-content-right').addClass('active');

    if ( jQuery('.player-sort-button.sort-active').find('.sort-button-text').text() == 'POINTS' ) {
	    
    	jQuery('.players-collection-list').find('.player-goals').hide();
      	jQuery('.players-collection-list').find('.player-assists').hide();
    
    }
    
    if ( jQuery('.defensemen-sort-button.sort-active').find('.sort-button-text').text() == 'POINTS' ) {
    
	jQuery('.defensemen-collection-list').find('.player-goals').hide();
	jQuery('.defensemen-collection-list').find('.player-assists').hide();
    
    }

    if ( jQuery('.rookies-sort-button.sort-active').find('.sort-button-text').text() == 'POINTS' ) {
    
	jQuery('.rookies-collection-list').find('.player-goals').hide();
	jQuery('.rookies-collection-list').find('.player-assists').hide();
    
    }
    
    if ( jQuery('.goalies-sort-button.sort-active').find('.sort-button-text').text() == 'GAA' ) {
    
	jQuery('.goalies-collection-list').find('.player-goals').hide();
	jQuery('.goalies-collection-list').find('.player-assists').hide();
    
    }
    
    jQuery('#players-filter .player-sort-button').each(function() {
	    
	jQuery(this).click(function() {
                
	    var clickedButton = jQuery(this).find('.sort-button-text').text();
            
            if ( clickedButton == 'POINTS' ) {

                jQuery('.players-collection-list').find('.player-points').show();
                jQuery('.players-collection-list').find('.player-goals').hide();
                jQuery('.players-collection-list').find('.player-assists').hide();
            

                jQuery('.players-collection-list .players-collection-list-item').each(function() {
                    jQuery(this).find('.player-statistics-content-left').hide();
                    jQuery(this).find('.player-statistics-content-right').removeClass('active');
                });

                jQuery('.players-collection-list .players-collection-list-item:first-child').find('.player-statistics-content-left').show();
                jQuery('.players-collection-list .players-collection-list-item:first-child').find('.player-statistics-content-right').addClass('active');
            
            } else if ( clickedButton == 'GOALS' ) {
        
                jQuery('.players-collection-list').find('.player-points').hide();
                jQuery('.players-collection-list').find('.player-goals').show();
                jQuery('.players-collection-list').find('.player-assists').hide();
                

                jQuery('.players-collection-list .players-collection-list-item ').each(function() {
                    jQuery(this).find('.player-statistics-content-left').hide();
                    jQuery(this).find('.player-statistics-content-right').removeClass('active');
                });

                jQuery('.players-collection-list .players-collection-list-item:first-child').find('.player-statistics-content-left').show();
                jQuery('.players-collection-list .players-collection-list-item:first-child').find('.player-statistics-content-right').addClass('active');
                
            } else if ( clickedButton == 'ASSISTS' ) {    

                jQuery('.players-collection-list').find('.player-points').hide();
                jQuery('.players-collection-list').find('.player-goals').hide();
                jQuery('.players-collection-list').find('.player-assists').show();
                

                jQuery('.players-collection-list .players-collection-list-item').each(function() {
                    jQuery(this).find('.player-statistics-content-left').hide();
                    jQuery(this).find('.player-statistics-content-right').removeClass('active');
                });

                jQuery('.players-collection-list .players-collection-list-item:first-child').find('.player-statistics-content-left').show();
                jQuery('.players-collection-list .players-collection-list-item:first-child').find('.player-statistics-content-right').addClass('active');
            
            }
    
      });
    });
	
   jQuery('#defensemen-filter-filter .defensemen-filter-sort-button').each(function() {
	    
	jQuery(this).click(function() {
                
	    var clickedButton = jQuery(this).find('.sort-button-text').text();
            
            if ( clickedButton == 'POINTS' ) {

                jQuery('.defensemen-filter-collection-list').find('.player-points').show();
                jQuery('.defensemen-filter-collection-list').find('.player-goals').hide();
                jQuery('.defensemen-filter-collection-list').find('.player-assists').hide();
            

                jQuery('.defensemen-filter-collection-list .defensemen-filter-collection-list-item').each(function() {
                    jQuery(this).find('.defensemen-filter-statistics-content-left').hide();
                    jQuery(this).find('.defensemen-filter-statistics-content-right').removeClass('active');
                });

                jQuery('.defensemen-filter-collection-list .defensemen-filter-collection-list-item:first-child').find('.defensemen-filter-statistics-content-left').show();
                jQuery('.defensemen-filter-collection-list .defensemen-filter-collection-list-item:first-child').find('.defensemen-filter-statistics-content-right').addClass('active');
            
            } else if ( clickedButton == 'GOALS' ) {
        
                jQuery('.defensemen-filter-collection-list').find('.player-points').hide();
                jQuery('.defensemen-filter-collection-list').find('.player-goals').show();
                jQuery('.defensemen-filter-collection-list').find('.player-assists').hide();
                

                jQuery('.defensemen-filter-collection-list .defensemen-filter-collection-list-item ').each(function() {
                    jQuery(this).find('.defensemen-filter-statistics-content-left').hide();
                    jQuery(this).find('.defensemen-filter-statistics-content-right').removeClass('active');
                });

                jQuery('.defensemen-filter-collection-list .defensemen-filter-collection-list-item:first-child').find('.defensemen-filter-statistics-content-left').show();
                jQuery('.defensemen-filter-collection-list .defensemen-filter-collection-list-item:first-child').find('.defensemen-filter-statistics-content-right').addClass('active');
                
            } else if ( clickedButton == 'ASSISTS' ) {    

                jQuery('.defensemen-filter-collection-list').find('.player-points').hide();
                jQuery('.defensemen-filter-collection-list').find('.player-goals').hide();
                jQuery('.defensemen-filter-collection-list').find('.player-assists').show();
                

                jQuery('.defensemen-filter-collection-list .players-collection-list-item').each(function() {
                    jQuery(this).find('.defensemen-filter-statistics-content-left').hide();
                    jQuery(this).find('.defensemen-filter-statistics-content-right').removeClass('active');
                });

                jQuery('.defensemen-filter-collection-list .defensemen-filter-collection-list-item:first-child').find('.defensemen-filter-statistics-content-left').show();
                jQuery('.defensemen-filter-collection-list .defensemen-filter-collection-list-item:first-child').find('.defensemen-filter-statistics-content-right').addClass('active');
            
            }
    
      });
    });
    
    jQuery('.player-statistics-content-right').each(function() {
      
        jQuery(this).click(function() {
              
          if ( !jQuery(this).hasClass('active') ) {
              
            jQuery('.player-statistics-content-right').each(function() {
                jQuery(this).removeClass('active');
            });
            
            jQuery('.player-statistics-content-left').each(function() {
                jQuery(this).hide();
            });
            
            jQuery(this).prev().show();
            jQuery(this).addClass('active');
          
          } 
       
      });
      
    }); 
	
    jQuery('.defensemen-statistics-content-right').each(function() {
      
        jQuery(this).click(function() {
              
          if ( !jQuery(this).hasClass('active') ) {
              
            jQuery('.defensemen-statistics-content-right').each(function() {
                jQuery(this).removeClass('active');
            });
            
            jQuery('.defensemen-statistics-content-left').each(function() {
                jQuery(this).hide();
            });
            
            jQuery(this).prev().show();
            jQuery(this).addClass('active');
          
          } 
       
      });
      
    }); 
}
