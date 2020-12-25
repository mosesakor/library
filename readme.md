After-Project thoughts

In this project i put my knowledge of javascript construtors into practice and learned more about organising my code.

I also learned more about the Document object model.

I struggled with coming up with a way of displaying the books on browser. The issue was with having duplicates of a book displayed as when the display function was called, It would loop through my library of objects and then create new dom (book) objects on the dom tree. However I soon realised I could just empty out the book's container and reconstrust them.

I also learned that js makes updates to the dom very fast as the items would render instantaneously as though they weren't even been re-rendered.
