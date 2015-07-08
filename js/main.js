'use strict';

var swipr = function (parentElement, opts) {

    var translate = require('./translate');
    var clamp = require('./clamp');
    var Hammer = require("hammerjs");
    var touchOffset;
    var delta;
    var isScrolling;

    /**
     * onPanstart function: called when panning kicks off
     */    
    var onPanstart = function (event) {

        resetSlider()

        /* if no slides here, maybe the dom didn't reload, e.g. client side routing */
        if(!config.domElements.slides.length){
          config.domElements.slides = Array.prototype.slice.call(config.domElements.slideContainer.children);
        }

        touchOffset = { x: event.pointers[0].pageX, y: event.pointers[0].pageY };
        isScrolling = undefined;
        delta = {};

        /* on panning */
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
                translate(config.position.x + delta.x, 0, config.options.ease, config.domElements.slideContainer.style);
            }
        });

        /* panning ends */
        mc.off("panend");
        mc.on("panend",function (event) {

            resetSlider()
            var direction = delta.x < 0;
            slide(direction)

        });
    };


    /**
     * config function: options stored for the swipr instance
     */
    var config = function (slider) {

        this.domElements = {
          frame: undefined,
          slideContainer: undefined,
          prevCtrl: undefined,
          nextCtrl: undefined,
          slidesWidth: undefined,
          frameWidth: undefined,
          slides: undefined
        };

        this.domElements.frame = slider.querySelector('.swipr');
        this.domElements.slideContainer = this.domElements.frame.querySelector('.swipr_slides');
        this.domElements.prevCtrl = slider.querySelector('.swipr_prev');
        this.domElements.nextCtrl = slider.querySelector('.swipr_next');
        this.domElements.slides = Array.prototype.slice.call(this.domElements.slideContainer.children);

        this.position = {};
        this.position.x = this.domElements.slideContainer.offsetLeft;
        this.position.y = this.domElements.slideContainer.offsetTop;

        this.options = {
          slidesToScroll: 1,
          slideSpeed: 600,
          rewindSpeed: 600,
          snapBackSpeed: 600,
          ease: 'ease',
          rewind: true,
          index: 0,
          nextIndex: 1,
        };
    }

    var config = new config(parentElement);


    /**
     * findAncestor: find an ancestor
     */     
    var findAncestor = function (el, cls) {
        while ((el = el.parentElement) && !el.classList.contains(cls));
        return el;
    }


    /**
     * resetSlider function: reset the slide container elements, slide elements, slide and frame width
     */
    var resetSlider = function () {
        config.domElements.slideContainer = config.domElements.frame.querySelector('.swipr_slides');
        config.domElements.slides = Array.prototype.slice.call(config.domElements.slideContainer.children);
        config.domElements.slidesWidth = config.domElements.slideContainer.getBoundingClientRect().width || config.domElements.slideContainer.offsetWidth;
        config.domElements.frameWidth = config.domElements.frame.getBoundingClientRect().width || config.domElements.frame.offsetWidth;
    };


    /* initially reset the slider */
    resetSlider();


    /* initialize hammerjs on the slider element */
    var mc = new Hammer(config.domElements.slideContainer);    
    mc.on("panstart", onPanstart);


    /**
     * next function: called on clickhandler
     */     
    var next = function (event) {

        resetSlider()
        var direction = true
        slide(direction)

    };


    /**
     * prev function: called on clickhandler
     */
    var prev = function () {

        resetSlider()
        var direction = false
        slide(direction)

    };


    /**
     * slide function: slides the elements forward or backwards based on direction
     */
    var slide = function (direction) {

        var maxOffset   = (config.domElements.slidesWidth - config.domElements.frameWidth);
        var limitOffset = clamp(maxOffset * -1, 0);
        var limitIndex  = clamp(0, config.domElements.slides.length - 1);
        var duration    = config.options.slideSpeed;

        /* update the index */
        if (direction) {
            config.options.nextIndex = config.options.index + config.options.slidesToScroll;
        } else {
            config.options.nextIndex = config.options.index - config.options.slidesToScroll;
        }
        config.options.nextIndex = limitIndex(config.options.nextIndex);

        var nextOffset = limitOffset(config.domElements.slides[config.options.nextIndex].offsetLeft * -1);

        /* on rewind */
        if (config.options.rewind && Math.abs(config.position.x) === maxOffset) {
            nextOffset = 0;
            config.options.nextIndex  = 0;
            duration = config.options.rewindSpeed;
        }

        /* translate to the nextOffset by a defined duration and ease function */
        translate((nextOffset), duration, config.options.ease, config.domElements.slideContainer.style);

        /* update the position with the next position */
        config.position.x = nextOffset;

        /* update the index with the nextIndex if offset of the nextIndex is in the range of the maxOffset */
        if (config.domElements.slides[config.options.nextIndex].offsetLeft <= maxOffset) {
            config.options.index = config.options.nextIndex;
            config.options.nextIndex++;
        }
    };


    /* fire off click events for next / prev controls */
    if (config.domElements.prevCtrl && config.domElements.nextCtrl) {
        config.domElements.nextCtrl.addEventListener('click', next);
        config.domElements.prevCtrl.addEventListener('click', prev);
    }


    return {
        next: next,
        prev: prev
    };
};

module.exports = swipr;