<!-- What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? -->

When we use JavaScript to work with a webpage, we often need to select elements from the HTML document. For this purpose, JavaScript provides different methods. The most common ones are getElementById, getElementsByClassName, querySelector, and querySelectorAll. They all help us select elements, but they are not the same. Each has its own way of working.

The method getElementById is used to select an element by its id. In HTML, an id should be unique, so this method always returns only one element. For example, if a heading has id="title", then document.getElementById("title") will select that specific heading.

The method getElementsByClassName is used to select all elements that share the same class name. It does not return just one element, but a group of elements. For example, if there are many boxes with the class "card", then document.getElementsByClassName("card") will return all of them together.

The method querySelector is more flexible because it uses CSS-style selectors. With this method, we can select elements by id, by class, or even by tag names. However, it only returns the first element that matches. For example, if there are three elements with the class "card", document.querySelector(".card") will only return the first one.

Finally, the method querySelectorAll also uses CSS-style selectors, but it returns all matching elements instead of just the first one. For example, document.querySelectorAll(".card") will select every element that has the class "card".



<!-- How do you create and insert a new element into the DOM? -->

In JavaScript, we can create and insert new elements into a webpage using the Document Object Model (DOM). The process is very simple. First, a new element is created with a specific tag name. After creating the element, we can add text, attributes, or other content to it. However, the element will not be visible on the webpage until it is inserted into the DOM.

To insert the element, we use different DOM methods. The most common method is adding it as a child to an existing element. By doing this, the new element becomes part of the webpage and is displayed to the user.

In short, the main steps are: creating the element, adding content to it, and finally inserting it into the webpage. This is how JavaScript makes it possible to add new elements dynamically and make webpages more interactive.



<!-- What is Event Bubbling and how does it work? -->

Event Bubbling means that when an event happens on an element, it first runs on that element and then passes upward to its parent elements, one by one, until it reaches the top of the document. It is called “bubbling” because the event moves upward like a bubble. This makes it easier to manage events from parent elements instead of adding events to every child.



<!-- What is Event Delegation in JavaScript? Why is it useful? -->

Event Delegation in JavaScript is a technique where we add an event listener to a parent element instead of adding it to many child elements individually. When an event happens on a child element, it bubbles up to the parent, and the parent’s event listener can handle it.

This is useful because it saves time and memory. Instead of attaching the same event to many elements, we only attach one to the parent. It also helps when new child elements are added later, because the parent’s event listener will still work for them without needing extra code.

In short, event delegation makes code simpler, faster, and more efficient when dealing with many similar elements.



<!-- What is the difference between preventDefault() and stopPropagation() methods? -->

In JavaScript, preventDefault() and stopPropagation() are two ways to control what happens when an event occurs.

The preventDefault() method is used to stop the browser’s normal action. For example, it can stop a link from opening a new page or stop a form from being submitted.

The stopPropagation() method is used to stop the event from moving up to parent elements. This means the event will only happen on the element where it was triggered and will not affect its parent elements.

In simple words, preventDefault() stops the default browser action, while stopPropagation() stops the event from spreading to other elements.