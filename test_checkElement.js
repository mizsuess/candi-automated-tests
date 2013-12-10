/*
chloe + isabel
1) check if the promo banner element exists on the homepage
*/

casper.test.begin('the promo banner exists', 1, function suite(test) {
    casper.start('https://www.chloeandisabel.com/', function() {
        test.assertExists('.promo-text');
    }).run(function() {
        test.done();
    });
});
