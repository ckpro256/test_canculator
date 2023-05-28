// function func(e) {
//     document.form.textview.value = document.form.textview.value + e
// console.log("isisi");
// }
// function eqaul() {
//     let exp = document.form.textview.value
//     if (exp) {
//         document.form.textview.value = eval(exp)
//     }
// }
// function clean() {
//     document.form.textview.value = ''
// }
// function Del() {
//     let exp = document.form.textview.value
//     document.form.textview.value = exp.substring(0, exp.length, -1)
// }

function insert(num){
    document.form.result.value = document.form.result.value + num;
  }
  function clean(){
    document.form.result.value = '';
  }
  function equal(){
    let exp = document.form.result.value;
    if(exp){
      document.form.result.value = eval(exp);
    }
  }
  function del(){
    let exp = document.form.result.value;
    document.form.result.value = exp.substring(0, exp.length-1);
  }