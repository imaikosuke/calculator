let result = document.getElementById("inputText");

let calculate = (num) => {
  result.value += num;

}

let Result = () => {
  try {
    result.value = eval(result.value)
  }
  catch(err) {
    alert("入力し直してください。")
  }
}

function cler() {
  result.value = " ";
}

function del() {
  result.value = result.value.slice(0, -1)
}