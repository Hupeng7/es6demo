"use strict";

/*
特性
1. WeakMap 只接受对象作为键名
 */
const map1 = new WeakMap();
//map1.set(1, 2);
//TypeError: Invalid value used as weak map key
//map1.set(null, 2);
//TypeError: Invalid value used as weak map key

/*
2. WeakMap 的键名所引用的对象是弱引用
这句话其实让我非常费解，我个人觉得这句话真正想表达的意思应该是：

WeakMaps hold "weak" references to key objects,

翻译过来应该是 WeakMaps 保持了对键名所引用的对象的弱引用。

我们先聊聊弱引用：

在计算机程序设计中，弱引用与强引用相对，是指不能确保其引用的对象不会被垃圾回收器回收的引用。 一个对象若只被弱引用所引用，则被认为是不可访问（或弱可访问）的，并因此可能在任何时刻被回收。

在 JavaScript 中，一般我们创建一个对象，都是建立一个强引用：

var obj = new Object();
只有当我们手动设置 obj = null 的时候，才有可能回收 obj 所引用的对象。

而如果我们能创建一个弱引用的对象：

// 假设可以这样创建一个
var obj = new WeakObject();
我们什么都不用做，只用静静的等待垃圾回收机制执行，obj 所引用的对象就会被回收。

我们再来看看这句：

WeakMaps 保持了对键名所引用的对象的弱引用

正常情况下，我们举个例子：

const key = new Array(5 * 1024 * 1024);
const arr = [
  [key, 1]
];
使用这种方式，我们其实建立了 arr 对 key 所引用的对象(我们假设这个真正的对象叫 Obj)的强引用。

所以当你设置 key = null 时，只是去掉了 key 对 Obj 的强引用，并没有去除 arr 对 Obj 的强引用，所以 Obj 还是不会被回收掉。

Map 类型也是类似：
 */
let map2 = new Map();
let key = new Array(5 * 1024 * 1024);
// 建立了map 对key所引用对象的强引用
map2.set(key, 1);
// key = null 不会导致 key 的原引用对象被回收
// 如果你想要让 Obj 被回收掉，你需要先 delete(key) 然后再 key = null:
map2.delete(key);
key = null;

/*
所以 WeakMap 可以帮你省掉手动删除对象关联数据的步骤，所以当你不能或者不想控制关联数据的生命周期时就可以考虑使用 WeakMap。

总结这个弱引用的特性，就是 WeakMaps 保持了对键名所引用的对象的弱引用，即垃圾回收机制不将该引用考虑在内。
只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。也就是说，一旦不再需要，
WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。

也正是因为这样的特性，WeakMap 内部有多少个成员，取决于垃圾回收机制有没有运行，运行前后很可能成员个数是不一样的，
而垃圾回收机制何时运行是不可预测的，因此 ES6 规定 WeakMap 不可遍历。

所以 WeakMap 不像 Map，一是没有遍历操作（即没有keys()、values()和entries()方法），也没有 size 属性，
也不支持 clear 方法，所以 WeakMap只有四个方法可用：get()、set()、has()、delete()。
 */















