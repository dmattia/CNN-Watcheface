Pebble.addEventListener('ready', function() {
  console.log("Pebble JS is ready!");
  getQuote();
});

var getQuote = function() {
  var request = new XMLHttpRequest();
  request.open('GET',
               'https://www.kimonolabs.com/api/5uvo27va?apikey=FS663r7fk01mUFMbpVQbEshFrX90B5N7',
               true);
  request.onload = sendQuote;
  request.send();
};

var sendQuote = function() {
  var response = JSON.parse(this.responseText);
  var quote = response.results.collection1[0].property1.text;
  if(quote.length > 50) {
    quote = quote.substring(0,50) + "...";
  }
  console.log(quote);
  Pebble.sendAppMessage({
    'quote': quote
  });
};