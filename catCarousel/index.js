/* eslint-disable indent */
'use strict';
/*
In this challenge, you need to write JavaScript that provides the following experience:
 when a user selects one of the thumbnail images using the mouse or keyboard, that image
  should be displayed in the full-size image container at the top. Updating the image should
  so update its alt attribute. To test keyboard interactivity, you can Tab to one of
   the thumbnails and press the Enter key.

Some of the methods we discussed in the previous assignment might be helpful here, 
but you should also use the jQuery docs and Google if you're not sure what to do here.
 Researching on your own is a key skill, and it'll get easier with practice.

Updating the alt attributes of our images is not enough to make a carousel accessible!
 A robust, accessible carousel has a lot of requirements beyond the scope of this drill.
  Your aim is to practice simple DOM interactivity for now.
*/

//on click, change class from thumbnail to replace current hero

// function handleBulbClicks() {
//     $('.js-lightbulb').on('click', event => {
//       // save reference to this bulb,
//       const targetBulb = $(event.currentTarget);
//       // and ref$erence to all other bulbs
//       const otherBulbs = $('.js-lightbulb').not(targetBulb);
      
//       // Remove 'bulb-on' class from other bulbs
//       otherBulbs.removeClass('bulb-on');
//       // toggle the presence of 'bulb-on' on this bulb; 
//       targetBulb.toggleClass('bulb-on');
//     });  
//   }
  
  //$(handleBulbClicks);
  //$('.img1 img').attr('src');


  
  function handleThumbnailClicks(){
    console.log('clicked');
    $('.thumbnail').on('click', event => {
    const thumbImg = $(event.currentTarget).find('img').attr('src');
    const thumbAlt = $(event.currentTarget).find('img').attr('alt');
    //const otherCats = $('.thumbnail').not(currentHero);
    console.log(thumbAlt);
   // otherCats.removeClass('hero');
   // currentHero.toggleClass('hero');
   $('.hero img').attr('src', thumbImg);
   $('.hero img').attr('alt', thumbAlt);
    })
  };

$(handleThumbnailClicks);