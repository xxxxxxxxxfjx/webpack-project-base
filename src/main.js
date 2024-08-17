import "./css/index.css";
import '@/less/index.less'
import "./sass/index.scss";
import "./sass/index.sass";
import "./styl/index.styl";

// var a = 10;
const a = ()=>{
    console.log('b');
}
a()

// 添加promise代码
const promise = Promise.resolve();
promise.then(() => {
  console.log("hello promise");
});