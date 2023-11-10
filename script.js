function linkedList (name) {
    let headNode = null;
    let length = 0;

    const append = (value) => {
        const newNode = node(value);
        length++;
        if (headNode === null) {
            return (headNode = newNode);
        }
        let pointer = headNode;
        while (pointer.nextNode !== null) {
            pointer = pointer.nextNode;
        }
        pointer.nextNode = newNode;
    }

    const prePend = (value) => {
        const newNode = node(value);
        length++;
        if (headNode === null) {
            return (headNode = newNode);
        }
        
        newNode.nextNode = headNode;
        headNode = newNode;
    }

    const size = () => length;

    const head = () => headNode.value;

    const tail = () => {
        let pointer = headNode;
        while (pointer.nextNode !== null) {
            pointer = pointer.nextNode;
        }
        return pointer.value;
    }

    const at = (index) => {
        let pointer = headNode;
        for (let i = 0; i < index; i++) {
            pointer = pointer.nextNode;
        }
        return pointer;
    }

    const pop = () => {
        if (HEAD.nextNode === null) {
            HEAD = null;
        }
        at(size() - 2).nextNode = null;
        length--;
    }

    const contains = (value) => {
        let pointer = headNode;
        while (pointer.nextNode !== null) {
            if (pointer.value === value) {
            return true;
            }
            pointer = pointer.nextNode;
        }
        if (pointer.value === value) {
            return true;
        }
    }

    const finds = (value) => {
        let pointer = headNode;
        let index = 0;
        while (pointer.nextNode !== null) {
            if (pointer.value === value) {
            return index;
            }
            pointer = pointer.nextNode;
            index++;
        }
        if (pointer.value === value) {
            return index;
        }
    }

    const toString = (value) => {
        let pointer = headNode;
        let linkedListString = '';
        while (pointer.nextNode !== null) {
            linkedListString += `(${pointer.value}) -> `;
            pointer = pointer.nextNode;
        }
        linkedListString += `(${pointer.value}) -> null`;
        return linkedListString;
    }

    return { name, append, prePend, size, head, tail, at, pop, contains, finds, toString };
}
  
  
function node (value) {
    const value = value || null;
    const nextNode = null;

    return { value, nextNode };
}