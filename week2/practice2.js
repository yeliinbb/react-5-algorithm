// 문제 정의:
// 주어진 문자열에서 각 단어를 반전시키시오. 단어의 순서는 그대로 유지되어야 합니다.

// 예시:

// 입력: "the sky is blue"
// 출력: "eht yks si eulb"

// 입력: "hello world"
// 출력: "olleh dlrow"

function reverseEachWord(s) {
  // 주어진 문자열을 공백 단위로 끊어 새로운 배열에 저장한다.
  const words = s.split(" ");
  // console.log(words);

  let reversedArr = [];
  // 배열을 순회하면서 각 요소의 문자열을 체크
  for (let i = 0; i < words.length; i++) {
    let word = words[i].split("").reverse().join("");
    // console.log(word);
    reversedArr.push(word);
  }
  // console.log(reversedArr);
  return reversedArr.join(" ");
}

function testReverseEachWord() {
  const testCases = [
    { input: "the sky is blue", expected: "eht yks si eulb" },
    { input: "hello world", expected: "olleh dlrow" },
    { input: "a b c d", expected: "a b c d" },
    { input: "Palindrome", expected: "emordnilaP" },
    { input: "I love coding", expected: "I evol gnidoc" },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = reverseEachWord(input);
      if (result !== expected)
        throw new Error(`Expected ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출
testReverseEachWord();
