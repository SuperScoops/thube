/*
**
**  Pokémon Village Banners
**
*/


// -- Channel Namespace --
if(!window[CHANNEL.name])
    window[CHANNEL.name] = {};


// -- Banners Object
window[CHANNEL.name]["banners"] = ({

    target: $("div#pollwrap"),
    timeout: 60 * 1000,
    banners: [
/* "https://i.imgur.com/Dwev1KH.png",
"https://i.imgur.com/I60rkLX.png",
"https://i.imgur.com/F4YXaYc.png",
"https://i.imgur.com/F4YXaYc.png",
"https://i.imgur.com/G7j7lzr.png",
"https://i.imgur.com/NdHr6RY.png",
"https://i.imgur.com/Y2wfMyS.png",
"https://i.imgur.com/XU3BFpo.png",
"http://i.imgur.com/LMoxQd9.gif",
"http://i.imgur.com/Y4fT3oV.gif",
"http://i.imgur.com/jt9lcf8.gif",
"http://i.imgur.com/0GvBSvG.gif",
"http://i.imgur.com/e9FohLF.gif",
"http://i.imgur.com/dotI1UY.gif",
"http://i.imgur.com/uNZWhwx.gif",
"http://i.imgur.com/DCwNtZz.gif",
"http://i.imgur.com/APy8PAs.gif",
"http://i.imgur.com/T1EaRm6.gif",
"http://i.imgur.com/HEvb9Nb.gif",
"http://i.imgur.com/bLMEI9Y.gif",
"http://i.imgur.com/ePcKlO2.jpg",
"https://i.imgur.com/uNZWhwx.gif",
"https://i.imgur.com/0ynkp9v.png",
"https://i.imgur.com/NYMNtoq.png",
"https://i.imgur.com/1RRqoc0.png",
"https://i.imgur.com/HebuoXP.gif",
"https://i.imgur.com/5qAhGu1.png" */
"http://i.imgur.com/4AD07pJ.gif?1",
"http://i.imgur.com/K3ulxJr.png?1"
],
    currentBanner: null,
    deployBanner: function() {
        this.target.css({ "background-image": String().concat('url(',this.currentBanner,')') });    
    },
    chooseBanner: function() {
        var newBanner = this.banners.splice( Math.floor( Math.random() * this.banners.length ), 1 ).shift();
        this.banners.unshift(this.currentBanner);
        this.currentBanner = newBanner;
    },
    nextTick: null,
    cycle: function(){
        this.chooseBanner();
        this.deployBanner();
        this.nextTick = setTimeout(this.cycle.bind(this),this.timeout)
    },
    init: function(){
        this.currentBanner = this.banners.pop();
        this.cycle();
        return this;
    }

}).init()