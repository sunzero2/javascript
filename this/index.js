var a = 10;
console.log(this);

var obj = {
  a: 30,
  func: function() {
    console.log(this.a);
  }
}

obj.func();

var func_clone = obj.func;
function func_clone() {
  console.log(this.a);
}
func_clone();

func_clone.bind(obj).call();
func_clone.call(obj);
func_clone.apply(obj);

function Person(nickname, age) {
  this.nickname = nickname;
  this.age = age;

  this.intro = function() {
    console.log(this);
    
    const inner = () => {
      console.log('실행 컨텍스트는?: ', this);
    }

    inner();
  }
}

Person('hyeyeong', 25);
console.log(this);

const ryan = new Person('ryan', 25);
ryan.intro();
