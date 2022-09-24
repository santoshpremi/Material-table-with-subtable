// Passing Data from Child to Parent
// Passing the data from the child to parent component is a bit trickier. 
// In order to do this, you need to do the following steps:

// Create a callback function in the parent component. 
// This callback function will get the data from the child component.
// Pass the callback function in the parent as a prop to the child component.
// The child component calls the parent callback function using props.
// Let’s see how these steps are implemented using an example. 
// You have two class components, Parent and Child. 
// The Child component has a form that can be submitted in order to send its data up to the Parent component. 
// It would look something like this:

