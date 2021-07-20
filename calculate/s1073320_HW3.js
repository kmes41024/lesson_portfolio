function start(){
	var button = document.getElementById( "border" );
	button.addEventListener( "click", progress, false );
}
function progress(){
	var txt = document.form.txt.value;
	var seq = txt.split("\n");

	var output = "";
	for (var i = 0; i < seq.length; i++)
	{
	    var result = calc(seq[i]); //第i筆測資
		output = output + "<br>" + result;
	}
    document.getElementById('out').innerHTML = output;
}

function calc(str)
{
    /* 
       str : first sequence
    */
    var len = str.length;
	var answer = 0;
    /*----------------- Your Code Start-------------*/

    /* Hint: 
       var s = str.substr(x,1) // the character s in the position x of str
    */
	var list = getBackExpre(str);
	var result = new Stack();
	result.Init();
	var answer = getResult(list, result);

    /*----------------- Your Code End --------------*/
	return answer;
}

var Stack = function(){}          
Stack.prototype = {
	Init:function(){
		this.STACKMAX = 100;
		this.stack = new Array(this.STACKMACK);
		this.top = -1;
		return this.stack;
	},
	isEmpty:function(){
		if(this.top == -1){
			return true;
		}
		else{
			return false;
		}
	},
	push:function(elem){
		if(this.top == this.STACKMAX-1){
			return "";
		}
		else{
			this.top++;
			this.stack[this.top] = elem;
		}
	},
	pop:function(){
		if(this.top == -1){
			return "";
		}
		else{
			var x = this.stack[this.top];
			this.top--;
			return x;
		}
	},
	peek:function(){
		if(this.top != -1){
			return this.stack[this.top];
		}
		else{
			return "";
		}
	},
	Clear:function(){
		this.top =- 1;
	},
	Length:function(){
		return this.top + 1;
	}
}

function getBackExpre(s){
	var list = new Array();
	var op = new Stack();
	op.Init();
	var i = 0;
	while(i < s.length){
		var c = s.charAt(i);
		if(('0' <= c) && (c <= '9')){
			var s1 = s.substr(i);
			var m = s1.match(/\d+(\.\d+)?/g);
			if (m.length > 0){
				s1 = m[0];
				list.push(s1);
			}
			i = i + s1.length;
			continue;
		}else if(c == '('){
			op.push(c);
		}else if(c == ')'){
			var p = op.pop();
			while(p != '('){
				list.push(p);
				p = op.pop();
			}
		}else if((c == '+') || (c == '-')){
			if ((s.charAt(i-1) == '(') || ( s.charAt(i-1) == '' ))
				list.push('0');
			while(!op.isEmpty() && (op.peek() == '+'||op.peek() == '-'||op.peek() == '*'||op.peek() == '/'||op.peek() == '^')){
				var pre = op.pop();
				list.push(pre);
			}
			op.push(c);
		}else if(c == '^'){
			op.push(c);
		}
		else if((c == '*') || (c == '/')){
			while(!op.isEmpty() && (op.peek() == '*'||op.peek() == '/'||op.peek() == '^')){
				var pre = op.pop();
				list.push(pre);
			}
			op.push(c);
		}
		i++;
	}

	while(!op.isEmpty()){
		list.push(op.pop());
	}
	return list;
}

function g(a,b,c){
	var v = 0;
	a = parseFloat(a);
	b = parseFloat(b);
	
	switch (c)
    {
    case '+':
        v = a + b;
        break;
    case '-':
        v = a - b;
        break;
    case '*':
        v = a * b;
        break;
    case '/':
        v = a / b;
        break;
	case '^':
		v = Math.pow(a,b);
		break;
    }	
    return v;
	
}
function getResult(list,result){
	for (var i = 0; i < list.length; i++){
	
		if(!isNaN(list[i])){
			result.push(list[i]);
		}else{
			var b = result.pop();
			var a = result.pop();
			var v = g(a,b,list[i]);
			result.push(v);	
		}
		var msg = "";
		for (var j = 0; j < result.Length(); j++)
			msg += result.stack[j]+",";
	}
	return result.pop();
}
