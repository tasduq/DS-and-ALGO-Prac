class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }
    insert(val){
        var newNode = new Node(val)
       
        if(this.root === null){
            this.root = newNode
            return
        
        }else{
            var current = this.root
           
            while(true){
                if(val === current.val) return undefined
                if(val<current.val){
                    if(current.left === null){
                        current.left = newNode
                        return this
                    }else{
                        current = current.left
                    }
                }else{
                    if(current.right === null){
                        current.right = newNode
                        return this
                    }else{
                        current = current.right
                    }
                }
            }
        }
        
    }
    find(val){
        if(this.root === null) return undefined
        let current = this.root
        let found = false
        while(current && !found){
            if(val<current.val){
                current = current.left
            }else if(val>current.val){
                current = current.right
            }else{
                return true
            }
        }
        return false
    }
    BFS(){
        var node = this.root
        var data = []
        var queueu = []

        queueu.push(node)
        while(queueu.length){
            node = queueu.shift()
            data.push(node.val)
            if(node.left) queueu.push(node.left)
            if(node.right) queueu.push(node.right)
        }
        return data
    }
    DFSPreorder(){
            var data = []
            function treverse(node){
                data.push(node.val)
                if(node.left)  treverse(node.left)
                if(node.right)  treverse(node.right)
               
                return
            }
            treverse(this.root)

            return data
    }
    DFSPostorder(){
        var data = []
        function treverse(node){
          
            if(node.left)  treverse(node.left)
            if(node.right)  treverse(node.right)
            data.push(node.val)
            return
        }
        treverse(this.root)

        return data
    }
    DFSInorder(){
        var data = []
        function treverse(node){
      
            if(node.left)  treverse(node.left)
            data.push(node.val)
            if(node.right)  treverse(node.right)
           
            return
        }
        treverse(this.root)

        return data
    }
}

let bst = new BST()
let arr = [10,6,15,3,8,20]
arr.map((val) => bst.insert(val))

// let treversedTree = bst.BFS()
let treversedTree = bst.DFSPreorder()
console.log(treversedTree)