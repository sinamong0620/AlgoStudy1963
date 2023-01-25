const minAddToMakeValid = function (s) {
  const stack = [];
  let count = 0;
  let result = 0;
  for (let i in s) {
    //"(" 왼쪽 괄호를 만났을때에는 이걸 스택에 푸쉬함
    if (s[i] !== "(") {
      // 오른쪽 괄호를 만났을 때에는 스택에서 "(" 이걸 팝함. 근데 팝할 대상이 없으면
      // 그냥 count를 올림
      if (stack.length === 0) {
        count += 1;
      } else {
        stack.pop();
      }
    } else {
      stack.push(s[i]);
    }
  }

  return count + stack.length;
};

console.log(minAddToMakeValid("()))(("));
