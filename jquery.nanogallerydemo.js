/**!
 * @preserve nanoGALLERY - Demo Panel
 * Plugin for jQuery by Christophe Brisbois
 * Demo: http://nanogallery.brisbois.fr
 * Sources: https://github.com/Kris-B/nanoGALLERY
 */

 
// ##################################
// ##### nanoGALLERY DEMO PANEL #####
// ##################################
 
  
// jQuery plugin - nanoGALLERY DEMO PANEL
(function( $ ) {
  jQuery.fn.nanoGalleryDemo = function(options) {
    var g_containerDemo=null,
    g_containerDemoPanel=null,
    g_containerNew=null,
    g_save=null;
    
    var settings = $.extend(true, {
      // default settings
      userID:'',
      kind:'',
      album:'',
      photoset:'',
      blackList:'scrapbook|profil',
      whiteList:'',
      albumList:'',
      galleryToolbarWidthAligned:true,
      displayBreadcrumb:false,
      theme:'default',
      colorScheme:'none',
      colorSchemeViewer:'none',
      items:null,
      itemsBaseURL:'',
      maxItemsPerLine:0,
      paginationMaxItemsPerPage:0,
      paginationMaxLinesPerPage:0,
      maxWidth:0,
      imageTitle:'',
      viewer:'internal',
      viewerDisplayLogo:true,
      viewerToolbar:{position:'bottom', style:'innerImage'},
      thumbnailWidth:230,
      thumbnailHeight:154,
      thumbnailHoverEffect:null,
      thumbnailLabel:{position:'overImageOnBottom',display:true,displayDescription:false},
      thumbnailDisplayInterval:30,
      thumbnailDisplayTransition:true,
      thumbnailLazyLoad:false,
      thumbnailLazyLoadTreshold:100,
      touchAnimation:true,
      useTags:false,
      preset:'none',
      locationHash:false,
      slideshowDelay:3000,
      thumbnailGlobalImageTitle:'',
      thumbnailGlobalAlbumTitle:''
    }, options );


    return this.each(function(index) {
      g_save=jQuery(this)[0].outerHTML;
      g_containerDemo =jQuery('<div class="nanoGalleryDemo" style="padding:5px;"></div>').replaceAll(this);
    
      var sHoverEffects='<option style="color:#000">none</option>';
      sHoverEffects+='<option style="color:#000">slideUp</option>';
      sHoverEffects+='<option style="color:#000">slideDown</option>';
      sHoverEffects+='<option style="color:#000">slideLeft</option>';
      sHoverEffects+='<option style="color:#000">slideRight</option>';
      sHoverEffects+='<option style="color:#000">imageSlideUp</option>';
      sHoverEffects+='<option style="color:#000">imageSlideDown</option>';
      sHoverEffects+='<option style="color:#000">imageSlideLeft</option>';
      sHoverEffects+='<option style="color:#000">imageSlideRight</option>';
      sHoverEffects+='<option style="color:#000">imageSplitVert</option>';
      sHoverEffects+='<option style="color:#000">imageSplit4</option>';
      sHoverEffects+='<option style="color:#000">labelAppear</option>';
      sHoverEffects+='<option style="color:#000">labelAppear75</option>';
      sHoverEffects+='<option style="color:#000">labelSlideDown</option>';
      sHoverEffects+='<option style="color:#000">labelSlideUp</option>';
      sHoverEffects+='<option style="color:#000">labelSplitVert</option>';
      sHoverEffects+='<option style="color:#000">labelSplit4</option>';
      sHoverEffects+='<option style="color:#000">labelAppearSplitVert</option>';
      sHoverEffects+='<option style="color:#000">labelAppearSplit4</option>';
      sHoverEffects+='<option style="color:#000">labelOpacity50</option>';
      sHoverEffects+='<option style="color:#000">imageOpacity50</option>';
      sHoverEffects+='<option style="color:#000">descriptionSlideUp</option>';
      sHoverEffects+='<option style="color:#000">borderLighter</option>';
      sHoverEffects+='<option style="color:#000">borderDarker</option>';
      sHoverEffects+='<option style="color:#000">imageInvisible</option>';

      sHoverEffects+='<option style="color:#000"></option>';
      sHoverEffects+='<option style="color:#000">imageScale150*</option>';
      sHoverEffects+='<option style="color:#000">imageScale150Outside*</option>';
      sHoverEffects+='<option style="color:#000">scale120*</option>';
      sHoverEffects+='<option style="color:#000">overScale*</option>';
      sHoverEffects+='<option style="color:#000">overScaleOutside*</option>';
      sHoverEffects+='<option style="color:#000">scaleLabelOverImage*</option>';
      sHoverEffects+='<option style="color:#000">imageFlipHorizontal*</option>';
      sHoverEffects+='<option style="color:#000">imageFlipVertical*</option>';
      sHoverEffects+='<option style="color:#000">rotateCornerBR*</option>';
      sHoverEffects+='<option style="color:#000">rotateCornerBL*</option>';
      sHoverEffects+='<option style="color:#000">imageRotateCornerBR*</option>';
      sHoverEffects+='<option style="color:#000">imageRotateCornerBL*</option>';

      var sThumbnailLabelPosition='<option style="color:#000">overImageOnBottom</option>';
      sThumbnailLabelPosition+='<option style="color:#000">overImageOnMiddle</option>';
      sThumbnailLabelPosition+='<option style="color:#000">overImageOnTop</option>';
      sThumbnailLabelPosition+='<option style="color:#000">onBottom</option>';

      var sGalleryColorScheme='<option style="color:#000">none</option>';
      sGalleryColorScheme+='<option style="color:#000">default</option>';
      sGalleryColorScheme+='<option style="color:#000">dark</option>';
      sGalleryColorScheme+='<option style="color:#000">darkRed</option>';
      sGalleryColorScheme+='<option style="color:#000">darkGreen</option>';
      sGalleryColorScheme+='<option style="color:#000">darkBlue</option>';
      sGalleryColorScheme+='<option style="color:#000">darkOrange</option>';
      sGalleryColorScheme+='<option style="color:#000">light</option>';
      sGalleryColorScheme+='<option style="color:#000">lightBackground</option>';
      
      var sViewerColorScheme='<option style="color:#000">none</option>';
      sViewerColorScheme+='<option style="color:#000">default</option>';
      sViewerColorScheme+='<option style="color:#000">darkRed</option>';
      sViewerColorScheme+='<option style="color:#000">darkGreen</option>';
      sViewerColorScheme+='<option style="color:#000">darkBlue</option>';
      sViewerColorScheme+='<option style="color:#000">darkOrange</option>';
      sViewerColorScheme+='<option style="color:#000">light</option>';

      var sCSS='<option style="color:#000">default</option>';
      sCSS+='<option style="color:#000">clean</option>';
      sCSS+='<option style="color:#000">light</option>';

      var sBColor='<option style="color:#000">light</option>';
      sBColor+='<option style="color:#000">dark</option>';
      
      var sPanel='<div style="line-height:normal;margin:10px auto 30px auto;text-align:center;border:1px solid #555;background:#000;padding:5px;font-size:1.2em;"><span style="color:#d3d3d3;">nano</span><span style="color:#6e6;">GALLERY</span><span style="color:#d3d3d3;"> - demonstration panel</span></div>';

      sTRStyle=' style="padding:0px !important;" ';
      sTDStyle=' style="padding:0px !important;" ';
      
      sPanel+='<table>';
      sPanel+='<tbody>';
      sPanel+='<tr'+sTRStyle+'>';
        sPanel+='<td'+sTDStyle+'>';
          sPanel+='<b>Thumbnail hover effects:</b>&nbsp;';
        sPanel+='</td>';
        sPanel+='<td'+sTDStyle+'>';
          sPanel+='<select name="lHoverEffect1" style="color:#000">'+sHoverEffects+'</select>';
        sPanel+='</td>';
        sPanel+='<td'+sTDStyle+'>';
          sPanel+='<select name="lHoverEffect2" style="color:#000">'+sHoverEffects+'</select>';
        sPanel+='</td>';
        sPanel+='<td'+sTDStyle+'>';
          sPanel+='<select name="lHoverEffect3" style="color:#000">'+sHoverEffects+'</select></div>';
        sPanel+='</td>';
      sPanel+='</tr'+sTRStyle+'>';
      sPanel+='<tr>';
        sPanel+='<td'+sTDStyle+'>';
          sPanel+='&nbsp;&nbsp;&nbsp;*: requires Transit plugin';
        sPanel+='</td>';
        sPanel+='<td'+sTDStyle+'>';
        sPanel+='</td>';
        sPanel+='<td'+sTDStyle+'>';
        sPanel+='</td>';
        sPanel+='<td>';
        sPanel+='</td'+sTDStyle+'>';
      sPanel+='</tr>';
      sPanel+='<tr'+sTRStyle+'>';
        sPanel+='<td'+sTDStyle+'>';
          sPanel+='<b>Thumbnail size (w/h):</b>';
        sPanel+='</td>';
        sPanel+='<td'+sTDStyle+'>';
          sPanel+='<input type="text" name="thumbWidth" value="120" style="width:50px;color:#000">';
        sPanel+='</td>';
        sPanel+='<td'+sTDStyle+'>';
          sPanel+='<input type="text" name="thumbHeight" value="120" style="width:50px;color:#000">';
        sPanel+='</td>';
        sPanel+='<td'+sTDStyle+'>';
        sPanel+='</td>';
      sPanel+='</tr>';
      sPanel+='<tr'+sTRStyle+'>';
        sPanel+='<td'+sTDStyle+'>';
          sPanel+='<b>Thumbnail label: </b>';
        sPanel+='</td>';
        sPanel+='<td'+sTDStyle+'>';
          sPanel+='<select name="lThumbnailLabelPosition" style="color:#000">'+sThumbnailLabelPosition+'</select>';
        sPanel+='</td>';
        sPanel+='<td'+sTDStyle+'>';
          sPanel+='<input type="checkbox" name="thumbnailLabelDisplay" value="true" checked style="margin:0"> Display label';
        sPanel+='</td>';
        sPanel+='<td'+sTDStyle+'>';
          sPanel+='<input type="checkbox" name="thumbnailLabelDisplayDescription" value="true" style="margin:0"> Display description';
        sPanel+='</td>';
      sPanel+='</tr>';
      sPanel+='<tr'+sTRStyle+'>';
        sPanel+='<td'+sTDStyle+'>';
          sPanel+='<b>Gallery color scheme:</b>';
        sPanel+='</td>';
        sPanel+='<td'+sTDStyle+'>';
          sPanel+='<select name="lGalleryColorScheme" style="color:#000">'+sGalleryColorScheme+'</select>';
        sPanel+='</td>';
        sPanel+='<td'+sTDStyle+'>';
          sPanel+='<b>Image color scheme:</b> ';
        sPanel+='</td>';
        sPanel+='<td'+sTDStyle+'>';
          sPanel+='<select name="lViewerColorScheme" style="color:#000">'+sViewerColorScheme+'</select>';
        sPanel+='</td>';
      sPanel+='</tr>';
      sPanel+='<tr'+sTRStyle+'>';
        sPanel+='<td'+sTDStyle+'>';
          sPanel+='<b>Theme:</b> ';
        sPanel+='</td>';
        sPanel+='<td'+sTDStyle+'>';
          sPanel+='<select name="lCSS" style="color:#000">'+sCSS+'</select>';
        sPanel+='</td>';
        sPanel+='<td'+sTDStyle+'>';
          sPanel+='<b>Background color</b>:';
        sPanel+='</td>';
        sPanel+='<td'+sTDStyle+'>';
          sPanel+='<select name="lBColor" style="color:#000">'+sBColor+'</select>';
        sPanel+='</td>';
      sPanel+='</tr>';
      sPanel+='</tbody>';
      sPanel+='</table>';
      

      sPanel+='<div style="display:table;margin:auto;"><button name="bGo" "type="button" style="color:#000;padding:5px 15px;margin:5px;">--> Launch</button></div>';

      sPanel+='<hr style="margin:0px;"><div style="display:table;margin:15px auto;text-align:center;">';
      sPanel+='<button name="bPreset1" "type="button" style="color:#000;padding:4px;">&nbsp; Preset 1 &nbsp;</button>';
      sPanel+='<button name="bPreset2" type="button" style="color:#000;padding:4px;">&nbsp; Preset 2 &nbsp;</button>';
      sPanel+='<button name="bPreset3" type="button" style="color:#000;padding:4px;">&nbsp; Preset 3 &nbsp;</button>';
      sPanel+='<button name="bPreset4" type="button" style="color:#000;padding:4px;">&nbsp; Preset 4 &nbsp;</button>';
      sPanel+='<button name="bPreset5" type="button" style="color:#000;padding:4px;">&nbsp; Preset 5 &nbsp;</button></div>';
      g_containerDemoPanel=jQuery(g_containerDemo).append('<div class="nanoGalleryDemoPanel" style="display:table;border:2px solid #666;background:#ccc;margin:10px auto;padding:5px;font-size:0.8em;">'+sPanel+'</div>');

      g_containerNew=jQuery(g_save).appendTo(g_containerDemo);
      jQuery(g_containerDemoPanel).find('[name=lHoverEffect1]').val('labelAppear75');


      var nanoGALLERY_obj = new nanoGALLERY();
      settings.thumbnailHoverEffect='labelAppear75',
      nanoGALLERY_obj.Initiate(g_containerNew,settings);

      jQuery(g_containerDemoPanel).find('button[name=bGo]').on("click",function(){
        runDemo();
      });
      
      jQuery(g_containerDemoPanel).find('button[name=bPreset1]').on("click",function(){
        setPreset('borderLighter','imageSlideRight','none','overImageOnBottom',true,true,'dark');
      });
      jQuery(g_containerDemoPanel).find('button[name=bPreset2]').on("click",function(){
        setPreset('labelAppear75','imageScale150*','borderLighter','overImageOnBottom',true,true,'dark');
      });
      jQuery(g_containerDemoPanel).find('button[name=bPreset3]').on("click",function(){
        setPreset('imageScale150*','labelSlideUp','none','overImageOnBottom',true,false,'dark');
      });
      jQuery(g_containerDemoPanel).find('button[name=bPreset4]').on("click",function(){
        setPreset('imageSplitVert','none','none','overImageOnBottom',true,false,'light');
      });
      jQuery(g_containerDemoPanel).find('button[name=bPreset5]').on("click",function(){
        setPreset('descriptionSlideUp','borderLighter','none','overImageOnBottom',true,true,'dark');
      });
    });

    function setPreset(hoverEffect1,hoverEffect2,hoverEffect3,thumbnailLabelPosition,thumbnailLabelDisplay,thumbnailLabelDisplayDescription,backgroundColor) {
      jQuery(g_containerDemoPanel).find('[name=lHoverEffect1]').val(hoverEffect1);
      jQuery(g_containerDemoPanel).find('[name=lHoverEffect2]').val(hoverEffect2);
      jQuery(g_containerDemoPanel).find('[name=lHoverEffect3]').val(hoverEffect3);
      jQuery(g_containerDemoPanel).find('input:radio[name=thumbnailLabelPosition]').val([thumbnailLabelPosition]);
      jQuery(g_containerDemoPanel).find('[name=thumbnailLabelDisplay]').prop('checked',thumbnailLabelDisplay);
      jQuery(g_containerDemoPanel).find('[name=thumbnailLabelDisplayDescription]').prop('checked',thumbnailLabelDisplayDescription);
      jQuery(g_containerDemoPanel).find('input:radio[name=backgroundColor]').val([backgroundColor]);
      runDemo();
    }
    
    function runDemo() {
      settings.thumbnailHoverEffect=[];
      var sTHE=jQuery(g_containerDemoPanel).find('[name=lHoverEffect1] option:selected').text();
      if( sTHE != 'none' && sTHE != '' ) {
        sTHE=sTHE.replace('*', '');
        settings.thumbnailHoverEffect.push({'name':sTHE,'duration':200,'durationBack':200,'easing':'swing','easingBack':'swing'});
      }
      sTHE=jQuery(g_containerDemoPanel).find('[name=lHoverEffect2] option:selected').text();
      if( sTHE != 'none' && sTHE != '' ) {
        sTHE=sTHE.replace('*', '');
        settings.thumbnailHoverEffect.push({'name':sTHE,'duration':200,'durationBack':200,'easing':'swing','easingBack':'swing'});
      }
      sTHE=jQuery(g_containerDemoPanel).find('[name=lHoverEffect3] option:selected').text();
      if( sTHE != 'none' && sTHE != '' ) {
        sTHE=sTHE.replace('*', '');
        settings.thumbnailHoverEffect.push({'name':sTHE,'duration':200,'durationBack':200,'easing':'swing','easingBack':'swing'});
      }
      var tW=+parseInt(jQuery(g_containerDemoPanel).find('[name=thumbWidth]').val(),10);
      if( tW >= 10 && tW <= 500) {
        jQuery(g_containerDemoPanel).find('[name=thumbWidth]').val(tW);  
        settings.thumbnailWidth=tW;
      }
      var tH=parseInt(jQuery(g_containerDemoPanel).find('[name=thumbHeight]').val(),10);
      if( tH>= 10 && tH <=500) {
        jQuery(g_containerDemoPanel).find('[name=thumbHeight]').val(tH);
        settings.thumbnailHeight=tH;
      }
      //var tMIPL=parseInt(jQuery(g_containerDemoPanel).find('[name=thumbMaxItemsPerLine]').val(),10);
      //if( tMIPL>= 0 ) {
      //  jQuery(g_containerDemoPanel).find('[name=thumbMaxItemsPerLine]').val(tMIPL);
      //  settings.maxItemsPerLine=tMIPL;
      //}
      //var tMW=parseInt(jQuery(g_containerDemoPanel).find('[name=thumbMaxWidth]').val(),10);
      //if( tMW>= 50 ) {
      //  jQuery(g_containerDemoPanel).find('[name=thumbMaxWidth]').val(tMW);
      //  settings.maxWidth=tMW;
      //}

      //settings.thumbnailLabel.position=jQuery(g_containerDemoPanel).find('input[name=thumbnailLabelPosition]:checked',g_containerDemoPanel).val();
      settings.thumbnailLabel.position=jQuery(g_containerDemoPanel).find('[name=lThumbnailLabelPosition] option:selected').text();

      settings.thumbnailLabel.display=jQuery(g_containerDemoPanel).find('[name=thumbnailLabelDisplay]').prop('checked');
      settings.thumbnailLabel.displayDescription=jQuery(g_containerDemoPanel).find('[name=thumbnailLabelDisplayDescription]').prop('checked');

      settings.colorScheme=jQuery(g_containerDemoPanel).find('[name=lGalleryColorScheme] option:selected').text();
      settings.colorSchemeViewer=jQuery(g_containerDemoPanel).find('[name=lViewerColorScheme] option:selected').text();

      settings.theme=jQuery(g_containerDemoPanel).find('[name=lCSS] option:selected').text();
      
      if( jQuery(g_containerDemoPanel).find('[name=lBColor] option:selected').text() == 'dark' ) {
        jQuery(g_containerDemoPanel).css('background','#222');
      }
      else {
        jQuery(g_containerDemoPanel).css('background','#eee');
      }
      
      jQuery(g_containerNew).animate({opacity: 0,height:0},200).promise().done(function(){
      jQuery(g_containerNew).remove();
        g_containerNew=jQuery(g_save).appendTo(g_containerDemo);
        var nanoGALLERY_obj = new nanoGALLERY();
        nanoGALLERY_obj.Initiate(g_containerNew,settings);
        //jQuery(elt).css('opacity','1');
      });
    }
  };

}( jQuery ));
  
  
