class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first  = null
        this.last = null
        this.size = 0
    }
    push(val)
    {
        var newNode = new Node(val)
        if(this.size === 0){
            this.first = newNode
            this.last = newNode
        }else{
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size

    }
    pop(){ 
        if(this.size === 0) return undefined
        let poppedNode = this.first
        if(this.first === this.last){
            this.first = null
            this.last = null
        }else{
            this.first = poppedNode.next
            poppedNode.next = null
        }
      
        this.size--
        return poppedNode
        
    }
}

const stack = new Stack()
stack.push("1")
stack.push(2)
stack.push(3)
console.log(stack)
stack.pop()
console.log(stack)