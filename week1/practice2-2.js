// 두 문자열의 교집합 문자 집합 구하기
// 문제 정의:
// 두 문자열이 주어졌을 때, 두 문자열에 모두 등장하는 문자를 집합으로 반환하라.

// 조건:

// 대소문자를 구분하지 않는다.
// 결과는 집합(Set) 형태로 반환한다.
// 예시:

// 입력: "apple", "pineapple"
// 출력: new Set(['p', 'l', 'e'])

function commonCharacters(s1, s2) {
  // 대소문자 구분 x -> 문자열 모두 소문자로 변경
  // 소문자 문자열 두 가지 모두 새로운 배열에 담아주기
  // filter 메서드로 배열을 순회하며 겹치는 값 제거한 새로운 배열 반환
  // 새로운 배열 new Set() 에 담아서 return
  const strArr = [...s1.toLowerCase(), ...s2.toLowerCase()];
  //   console.log(strArr);
  const newStrArr = strArr.filter(
    (item, index, self) => self.indexOf(item) !== index
  );
  const answer = new Set(newStrArr);
  //   console.log(answer);
  return answer;
}

// 테스트 코드
function testCommonCharacters() {
  const testCases = [
    { input: ["apple", "pineapple"], expected: new Set(["a", "p", "l", "e"]) },
    { input: ["hello", "world"], expected: new Set(["o", "l"]) },
    { input: ["abc", "def"], expected: new Set() },
    {
      input: ["abcdef", "fedcba"],
      expected: new Set(["a", "b", "c", "d", "e", "f"]),
    },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = new Set(commonCharacters(input[0], input[1]));
      const isEqual =
        expected.size === result.size &&
        [...expected].every((value) => result.has(value));
      if (!isEqual)
        throw new Error(`Expected ${[...expected]}, but got ${[...result]}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출 터미널에 node practice2-2.js 실행
testCommonCharacters();
