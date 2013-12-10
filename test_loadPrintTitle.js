/*
chloe + isabel
1) create new Casper instance
2) start it and open https://www.chloeandisabel.com/
3) once page loads, print the title of that webpage (the content of its <title> tag)
4) open another url, https://www.chloeandisabel.com/become-a-merchandiser
5) once page loads, print the title
6) execute the whole process
*/

// reminder to self -- You must not create a new Casper instance in a test file 
// http://docs.casperjs.org/en/latest/testing.html#test-command-args-and-options
// var casper = require('casper').create();

casper.start('https://www.chloeandisabel.com/', function() {
    this.echo(this.getTitle());
});

casper.thenOpen('https://www.chloeandisabel.com/become-a-merchandiser', function() {
    this.echo(this.getTitle());
});

casper.run();
