// 문제 정의:
// 주어진 문자열 배열에서 가장 긴 팰린드롬을 찾아 반환하라. 만약 팰린드롬이 없다면 빈 문자열을 반환한다.

// 조건:
// 팰린드롬은 앞에서부터 읽었을 때와 뒤에서부터 읽었을 때 동일한 문자열을 의미한다.
// 대소문자를 구분하지 않으며, 공백과 특수 문자는 무시한다.
// reverse 함수를 사용하지 않는다.

// 예시:

// 입력: ["abc","car","ada","racecar","cool"]
// 출력: "racecar" (길이가 같은 팰린드롬이 여러 개라면 사전 순서대로 가장 앞에 있는 것을 선택)

// 입력: ["notapalindrome","racecar"]
// 출력: "racecar"

// 입력: ["def","ghi"]
// 출력: "" (팰린드롬이 없으므로 빈 문자열 반환)

function findLongestPalindrome(words) {
  // 문제를 풀어주세요
  // 힌트..! 팰린드롬 인지 체크하는 함수를 내부에 선언하고 사용을 하면 더 효율적입니다.!
  // e.g) function isPalindrome(str) {}

  // 펠린드룸을 담은 배열 반환
  function isPalindrome(str) {
    let wordsArray = [];
    for (let j = 0; j < Math.floor(str.length / 2); j++) {
      if (str[j] === str[str.length - 1 - j]) {
        wordsArray.push(str);
      } else wordsArray.push("");
    }
    // console.log("wordsArray => ", wordsArray);
    return wordsArray[0];
  }

  // 팰린드룸 요소를 넣어줄 새로운 배열 선언
  let arr = [];
  // words 배열을 순회하면서 각각의 요소가 펠린드룸인지 확인
  for (let i = 0; i < words.length; i++) {
    // 특수문자 제거 및 모두 소문자 변환
    const word = words[i].toLowerCase().replace(/[^a-zA-Z0-9,]/g, " ");

    // console.log("word => ", word);
    const test = isPalindrome(word);
    if (test && arr.sort((a, b) => b.length - a.length)) {
      arr.push(test);
    }
  }
  // console.log("arr => ", arr);

  // 펠린드룸 확인 -> 문자열 길이 비교 -> 문자열 길이 긴 순서대로 배열에 넣기
  // 펠린드룸이 없다면 빈 문자열 반환, 펠린드룸이 있다면 해당 요소 반환
  // 펠린드룸끼리 문자열 길이 비교 -> length 메서드
  // const newArr = arr.sort((a, b) => b.length - a.length);
  // console.log("newArr => ", newArr);
  if (arr.length > 0) {
    return arr[0];
  } else {
    return "";
  }
}

// 테스트 코드
function testFindLongestPalindrome() {
  const testCases = [
    { input: ["abc", "car", "ada", "racecar", "cool"], expected: "racecar" },
    { input: ["notapalindrome", "racecar"], expected: "racecar" },
    { input: ["def", "ghi"], expected: "" },
    // { input: ["level", "noon", "radar", "12321", "abcde"], expected: "12321" },
    { input: ["ab", "ba", "abc", "aba"], expected: "aba" },
    {
      input: ["A man, a plan, a canal, Panama", "racecar", "madam"],
      expected: "A man, a plan, a canal, Panama",
    },
    { input: ["", "a", "bb", "ccc", "dddd", "eeeee"], expected: "eeeee" }, // 빈 문자열 포함
    { input: ["madamimadam", "racecar", "a"], expected: "madamimadam" }, // 여러 팰린드롬 중 가장 긴 것
    {
      input: ["aibohphobia", "detartrated", "deified"],
      expected: "aibohphobia",
    },
    { input: ["nope", "not a palindrome", "definitely not"], expected: "" }, // 팰린드롬이 없는 경우
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = findLongestPalindrome(input);
      if (result !== expected)
        throw new Error(`Expected ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출 node week2/time-attack-week-2.js
// node time-attack-week-2.js
testFindLongestPalindrome();
