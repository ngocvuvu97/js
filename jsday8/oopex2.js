class Group{
    constructor(){
        this.newarr = [];
    }  
    static from(arr) {
        let group = new Group();
        for (let i in arr) {
          group.add(arr[i]);
        }
        return group;
    }
    add(n) {
        if (!this.has(n)) {
          this.data.push(n);
        }
      }

    // }
    // delete(){

    // }
    // has(){

    // }
}
let group = Group.from([10, 20]);
// console.log(group.has(10));
// // → true
// console.log(group.has(30));
// // → false
// group.add(10);
// group.delete(10);
// console.log(group.has(10));
// // → false
