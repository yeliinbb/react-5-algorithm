// 문자열에서 가장 많이 등장한 문자 찾기
// 문제 정의:
// 주어진 문자열에서 가장 많이 등장하는 문자를 반환하라. 만약 여러 개라면 그 중 아무거나 반환하라.

// 조건:

// 대소문자를 구분한다.
// 공백도 하나의 문자로 간주한다.
// 예시:

// 입력: "banana"
// 출력: 'a' (혹은 'n')

function mostFrequentChar(s) {
  // 문자열을 순회하면서 각 문자가 등장한 횟수를 카운트한다.
  const obj = {};
  //   const arr = [...s].map((item) => {
  //     return obj[item] ? (obj[item] += 1) : (obj[item] = 1);
  //   });
  //   const arr = [...s];
  //   for (let i = 0; i < arr.length; i++) {
  //     const char = arr[i];
  //     if (!obj[char]) {
  //       obj[char] = 1;
  //     } else {
  //       obj[char] += 1;
  //     }
  for (let item of s) {
    obj[item] ? (obj[item] += 1) : (obj[item] = 1);
  }

  // [문자, 문자등장한 횟수] 형태의 배열로 이루어진 새로운 배열을 만들어줌.
  // 새로운 배열을 순회하면서 배열 순서를 새롭게 정렬
  const newArr = Object.entries(obj);
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j][1] < newArr[j + 1][1]) {
      newArr[j] = newArr[j + 1];
    }
    return newArr[0][0];
  }
}

// 테스트 코드
function testMostFrequentChar() {
  const testCases = [
    { input: "banana", expected: ["a", "n"] },
    { input: "apple", expected: ["p"] },
    { input: "mississippi", expected: ["i", "s"] },
    { input: "aabbcc", expected: ["a", "b", "c"] },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = mostFrequentChar(input);
      if (!expected.includes(result))
        throw new Error(`Expected one of ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출 : 터미널에 node practice2-1.js 실행
testMostFrequentChar();
