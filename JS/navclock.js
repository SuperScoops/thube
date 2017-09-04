({
    init: function(){
        $('#nav-collapsible').append('<div class="navbar-text pull-right" id="utcClock"></div>');
        this.clock = $('#utcClock');
        this.tick();
    },
    tick: function(){
        this.now = new Date;
        this.clock.html(String().concat( this.now.getUTCHours(), ":",
            this.now.getUTCMinutes() > 9 ? this.now.getUTCMinutes() : "0" + this.now.getUTCMinutes(), ":",
            this.now.getUTCSeconds() > 9 ? this.now.getUTCSeconds() : "0" + this.now.getUTCSeconds(), " UTC"
            ));
        setTimeout(this.tick.bind(this), 1000);
    }

}).init();
