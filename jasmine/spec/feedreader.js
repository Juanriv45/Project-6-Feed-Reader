/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('urls are defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url.length).not.toBe(0);
            })
        });

        /* TODO: This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name.length).not.toBe(0);
            })
        });
    });


    /* TODO: New test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: This test ensures the menu element is
         * hidden by default.
         */
        it('is hidden', function() {

            expect($('body').hasClass('menu-hidden')).toBe(true);;
        });
         /* TODO:This test ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should has two expectations: the menu displays when
          * clicked and hides when clicked again.
          */
        it('changes visibility', function() {

            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })
    });

    /* TODO: New test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('include a single .entry element within .feed container', function() {
            expect($('.entry').length).toBeGreaterThan(0);
        });
    });
    /* TODO: New test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
        /* TODO: This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
        */

         var firstFeed;
         var secondFeed;

        beforeEach(function(done) {
            $('.feed').empty();
            loadFeed(0, function() {
                firstFeed = $('.entry-link').attr('href');
                loadFeed(1,function() {
                    secondFeed = $('.entry-link').attr('href');
                    done();
                })
            });
        });

        it('is loaded', function(done) {
            expect(secondFeed).not.toBe(firstFeed);
            done();
        })
    });
}());
