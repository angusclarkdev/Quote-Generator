(function() {

  // object containing an array of authorAndTitle and Quotes

  const data = {
    books: [
      {
        authorAndTitle: "― Jordan B. Peterson, 12 Rules for Life: An Antidote to Chaos",
        quote: '"Compare yourself to who you were yesterday, not to who someone else is today."'
      }, {
        authorAndTitle: "― Jordan B. Peterson, 12 Rules for Life: An Antidote to Chaos",
        quote: '"Order is not enough. You can’t just be stable, and secure, and unchanging, because there are still vital and important new things to be learned. Nonetheless, chaos can be too much. You can’t long tolerate being swamped and overwhelmed beyond your capacity to cope while you are learning what you still need to know. Thus, you need to place one foot in what you have mastered and understood and the other in what you are currently exploring and mastering. Then you have positioned yourself where the terror of existence is under control and you are secure, but where you are also alert and engaged. That is where there is something new to master and some way that you can be improved. That is where meaning is to be found."'
      }, {
        authorAndTitle: "― Khaled Hosseini, The Kite Runner",
        quote: '"There are a lot of children in Afghanistan, but little childhood."'
      }, {
        authorAndTitle: "― Khaled Hosseini, The Kite Runner",
        quote: '"The problem, of course, was that he saw the world in black and white. And he got to decide what was black and what was white. You cant love a person who lives that way without fearing him too. Maybe even hating him a little."'
      }, {
        authorAndTitle: "― Sam Harris, Waking Up: A Guide to Spirituality without Religion",
        quote: '"There is now little question that how one uses one’s attention, moment to moment, largely determines what kind of person one becomes. Our minds—and lives—are largely shaped by how we use them."'
      }, {
        authorAndTitle: "― Sam Harris, Waking Up: A Guide to Spirituality without Religion",
        quote: '"How we pay attention to the present moment largely determines the character of our experience and, therefore, the quality of our lives."'
      }, {
        authorAndTitle: "― Robert M. Pirsig, Zen and the Art of Motorcycle  Maintenance: An Inquiry Into Values",
        quote: '"The place to improve the world is first in one\'s own heart and head and hands, and then work outward from there."'
      }, {
        authorAndTitle: "― Robert M. Pirsig, Zen and the Art of Motorcycle  Maintenance: An Inquiry Into Values",
        quote: '"When one person suffers from a delusion, it is called insanity. When many people suffer from a delusion it is called a Religion."'
      }, {
        authorAndTitle: "― Robert M. Pirsig, Zen and the Art of Motorcycle  Maintenance: An Inquiry Into Values",
        quote: '"When analytic thought, the knife, is applied to experience, something is always killed in the process."'
      }, {
        authorAndTitle: "― Elizabeth Kolbert, The Sixth Extinction: An Unnatural History",
        quote: '"Though it might be nice to imagine there once was a time when man lived in harmony with nature, it’s not clear that he ever really did."'
      }, {
        authorAndTitle: "― Elizabeth Kolbert, The Sixth Extinction: An Unnatural History",
        quote: '"Having freed ourselves from the constraints of evolution, humans nevertheless remain dependent on the earth’s biological and geochemical systems. By disrupting these systems—cutting down tropical rainforests, altering the composition of the atmosphere, acidifying the oceans—we’re putting our own survival in danger."'
      }
    ]
  };

  // Choose array object (Book & Quote) at random. assign results to vars.
  function randomize() {
    var array = data.books;
    var random = array[Math.floor(Math.random() * array.length)];
    var authorAndTitle = random.authorAndTitle;
    var quote = random.quote;

    function printData() {
      var quoteEl = document.getElementById('quote'); // Grab DOM element with ID quote and assign to var.
      var newQuote = quoteEl.children[0]; // Grab location for new Quote
      newQuote.innerText = quote; // print new Quote in correct position
      var bookEl = document.getElementById('book');
      var newBook = bookEl.children[0];
      newBook.innerText = authorAndTitle;
    }

    printData();
  };

  // Upon click event, call randomize(), then call printData()
  let button = document.getElementById('button');
  button.addEventListener('click', function() {

    randomize();
  });

  // Call randomize() on window load.
  window.onload = randomize();

})();
