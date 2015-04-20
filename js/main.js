/* globals jQuery */
/* exported lory */

'use strict';


var swipr = function (slider, opts) {

    /**
     * slider DOM elements
     */

    var options = require('./options');
    var translate = require('./translate');
    var slide = require('./slide');
    var Hammer = require("hammerjs");

    var touchOffset;
    var delta;
    var isScrolling;

    var domElements = require('./domElements');
    domElements.frame = slider.querySelector('.js_frame');
    domElements.slideContainer = domElements.frame.querySelector('.swipr_slides');
    domElements.prevCtrl = slider.querySelector('.js_prev');
    domElements.nextCtrl = slider.querySelector('.js_next');

    var position = require('./position');
    

    var onPanstart = function (event) {

        touchOffset = {
            x: event.pointers[0].pageX,
            y: event.pointers[0].pageY,
            time: Date.now()
        };

        isScrolling = undefined;

        delta = {};

        mc.off("panmove");
        mc.on("panmove",function (event) {

            var touches = event.changedPointers[0];

            delta = {
                x: touches.pageX - touchOffset.x,
                y: touches.pageY - touchOffset.y
            };

            if (typeof isScrolling === 'undefined') {
                isScrolling = !!(isScrolling || Math.abs(delta.x) < Math.abs(delta.y));
            }

            if (!isScrolling) {
                translate(position.x + delta.x, 0, null);
            }
        });

        mc.off("panend");
        mc.on("panend",function() {
            var direction = delta.x < 0;
            slide(false, direction);
        });

    };


    var mc = new Hammer(domElements.slideContainer);    
    mc.on("panstart", onPanstart);

    /**
     * public
     * resetSlider function: called on resize
     */
    var resetSlider = function () {
        domElements.slidesWidth = domElements.slideContainer.getBoundingClientRect().width || domElements.slideContainer.offsetWidth;
        domElements.frameWidth  = domElements.frame.getBoundingClientRect().width || domElements.frame.offsetWidth;
        options.index = 0;
        translate(options.index, options.rewindSpeed, options.ease);
    };

    resetSlider();

    var onResize = function () {
        resetSlider();
    };

    /**
     * prev function: called on clickhandler
     */
    var prev = function () {
        slide(false, false);
    };

    /**
     * next function: called on clickhandler
     */     
    var next = function () {
        slide(false, true);
    };

    if (domElements.prevCtrl && domElements.nextCtrl) {
        domElements.prevCtrl.addEventListener('click', prev);
        domElements.nextCtrl.addEventListener('click', next);
    }

    window.addEventListener('resize', onResize);


    options.slides = Array.prototype.slice.call(domElements.slideContainer.children);


    /**
     * if object is jQuery convert to native DOM element
     */
    if (typeof jQuery !== 'undefined' && slider instanceof jQuery) {
        slider = slider[0];
    }


    return {

        reset: function () {
            resetSlider();
        },

        slideTo: function (index) {
            slide(index);
        },

        prev: prev,

        next: next
    };
};

module.exports = swipr;
