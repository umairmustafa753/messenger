function LinkedList() { 
    let length = 0; 
    let head = null; 
  
    let Node = function(item){
      this.item = item; 
      this.next = null; 
    }; 

    this.head = function(){
      return head;
    };
  
    this.add = function(item){
      let node = new Node(item);
      if(head === null){
          head = node;
      } else {
          let currentNode = head;
  
          while(currentNode.next){
              currentNode  = currentNode.next;
          }
          currentNode.next = node;
      }
      length++;
    }; 
  
    this.indexOf = function(_id) {
      let currentNode = head;
      let index = -1;
  
      while(currentNode){
          index++;
          if(currentNode.item._id === _id){
              return index;
          }
          currentNode = currentNode.next;
      }
  
      return -1;
    };

    this.findById = function(_id) {
      let currentNode = head;
  
      while(currentNode){
          if(currentNode.item._id === _id){
              return currentNode.item;
          }
          currentNode = currentNode.next;
      }
  
      return -1;
    };  
    
    this.removeAt = function(_id) {
      let index = this.indexOf(_id)
      let currentNode = head;
      let previousNode;
      let currentIndex = 0;
      if (index < 0 || index >= length){
          return null
      }
      if(index === 0){
          head = currentNode.next;
      } else {
          while(currentIndex < index) {
              currentIndex ++;
              previousNode = currentNode;
              currentNode = currentNode.next;
          }
          previousNode.next = currentNode.next
      }
      length--;
      return currentNode.item._id;
    }
  } 

export default LinkedList;
