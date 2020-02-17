# Random Quote Machine

The page shows random quotes from the Hitch Hikers Guide to the Galaxy series by Douglas Adams.
The page was made as a project as part of the Free Code Camp course on Front End Libraries.  It uses React and obtains the quote information from another webpage using a fetch request:

## Random Quote Machine Tests

### Content

1. I can see a wrapper element with a corresponding id="quote-box".
2. Within #quote-box, I can see an element with corresponding id="text".
3. Within #quote-box, I can see an element with corresponding id="author".
4. Within #quote-box, I can see a clickable element with corresponding id="new-quote".
5. Within #quote-box, I can see a clickable <a> element with corresponding id="tweet-quote".
6. On first load, my quote machine displays a random quote in the element with id="text".
7. On first load, my quote machine displays the random quote's author in the element with id="author".
8. When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.
9. My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.
10. I can tweet the current quote by clicking on the #tweet-quote <a> element. This <a> element should include the "twitter.com/intent/tweet" path in it's href attribute to tweet the current quote.

### Layout

1. The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.
