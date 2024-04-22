// How and what we need to run setTimeout type function

// setTimeout is don't go to call stack like other function it comes in call stack after a process

//***  process steps are

// if we don't give any delay  to bhi it not runs like other function it also follow these steps at
// any cost

// 1. first step--> firstly it comes in (** web api **) (if we passed any delay time in it,so it spent that time
// here and after completion of delay go to step 2

// 2. second step--> web api sent it to (** Callback queue **)

// 3. third step--> (** Event Loop **)  (it is like mediator between call stack and callback queue )
// if callback queue has value and call stack empty then it sent callback data to call stack
// after that these type function runs

// So this is the process
