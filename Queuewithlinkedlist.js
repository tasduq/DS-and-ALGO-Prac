class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}


class Queue{
    constructor(){
        this.first = null
        this.last = null

        this.size = 0
    }
    enqueue(val){
        var newNode = new Node(val)
        if(this.size === 0){
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next = newNode
            this.last = newNode
        }
        this.size++
        return true
    }
    dequeue(){
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