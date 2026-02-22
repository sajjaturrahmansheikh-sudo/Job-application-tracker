
## Question 1 - What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans - With getElemetById() selcted one Element by its Id and it returns a single Element object .
     Can only search by Id .  No Css selector support . 

    And using getElementsByClassName() it selected Element by ClassName it can contain multiple Elements.cannot use full Css Selector it must convert to Array. 
    
    And using querySelector() it returns first maching Elemet or nun also support full Css Syntax And more flexible than getElemetById();

    By using querySelectorAll() method it selected all element that match a Css selector and it returns a static nodeList.
    can use forEach() directly.



## Question 2 - How do i create and insert a new element into the DOM?

Ans - First of all Create the Element with createElement() method .
      and added contents of attribute with textcontent , classList.add , setAttribute
      and then insert at a specific position with appendChlid(),
      append(), prepend(), before() or after()


    
## Question 3 - What is Event Bubbling? And how does it work?

Ans - Event Bubbling is concept in the DOM .  DOM means (document object model).
      Event Bubbling means events move from child -> parent -> up the DOM.
      It hapends after the target phase.
      It enables event delegation.
      It can stop with using event.stopPropagation().



## Question 4 - What is Event Delegation in JavaScript? Why is it useful?

Ans - Event Delegation handle child elemet events using a listener on their parent.
      In the DOM when click a child element the event run on the child .
      Then it bubbles up to its parent and catch that event on the parent using event.target  .
      
      Event Delegation is very usefull for better performance .
      It works for Dynamically Added Elemetns. and 
      its Easier to Maintance
    


## Question 5 - What is the difference between preventDefault() and stopPropagation() methods?

Ans - Both methods are used in event handling , but they solve different problems.
      
      With using preventDefault() method it stops the default browser behavior for and event,
      It does't stop the event from bubbling .

      And using stopPropagation() method it stops the event from bubbling up(or capturing down) the DOM,
      it does't stop the default browser behavior