
// 身分證字號英文字首, 拘留證號 編號規則
const letterMapping = new Map([
  ['A', '10'],
  ['B', '11'],
  ['C', '12'],
  ['D', '13'],
  ['E', '14'],
  ['F', '15'],
  ['G', '16'],
  ['H', '17'],
  ['I', '34'],
  ['J', '18'],
  ['K', '19'],
  ['M', '21'],
  ['N', '22'],
  ['O', '35'],
  ['P', '23'],
  ['Q', '24'],
  ['T', '27'],
  ['U', '28'],
  ['V', '29'],
  ['W', '32'],
  ['X', '30'],
  ['Z', '33'],
  ['L', '20'],
  ['R', '25'],
  ['S', '26'],
  ['Y', '31']
]);

// 本國人 - 驗證規則相乘的數
const citizenMultiplier = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1];

// 外國人 - 驗證規則相乘的數
const foreignerMultiplier = 1987654321;

/**
 * checkPid
 * 檢查號碼是否正確
 * 
 * @param {string} pid - id
 * @param {number} type - 0: 身分證, 1: 居留證
 */
const checkPid = (pid, type) => {
  // 長度要為10
  // if (pid.length !== 10) return {result: false, msg: '身分證字號長度不正確'};

  // 開頭第一個為英文字母, 後為9個阿拉伯數字, 第一個數字拿來區分性別，男性為1、女性為2
  // const re = /^[A-Za-z][12]\d{8}/;
  // if (!re.test(pid)) return {result: false, msg: '身分證格式錯誤'};

  // 驗證規則
  const [first, ...nums] = [...pid];

  if (type === 0) {
    const source = [...letterMapping.get(first.toUpperCase()), ...nums]
      .map((value, i) => value * citizenMultiplier[i])
      .reduce((a, b) => a + b, 0);
  
    if (source % 10 !== 0) {
      return { result: false, msg: '驗證失敗' };
    };
  } else {
    const source = pid * foreignerMultiplier;
    const tmp = (""+source).split("");
    const result = tmp.reduce((prev, element) => {
      return (prev * 1) + (element * 1);
    }, 0);

    let checkNumber = 10 - (1 * result.toString().substring(result.toString().length, 1));
    if (checkNumber.toString().length === 2) {
      checkNumber = 1 * checkNumber.toString().substring(checkNumber.toString().length, 1);
    }
    if (1 * pid.toString().substring(10) !== checkNumber) {
      return { result: false, msg: '驗證失敗' };
    }
  }

  return {result: true};
};

const keys = [...letterMapping.keys()];

// 身分證
const genders = [1, 2]; // 身分證字號 第二碼
const nums = [...Array(10).keys()];
const times = [...Array(8).keys()];

// 居留證
const secondLetter = [0, 1, 2, 3]; // 居留證號第二碼 A, B ,C , D => 0, 1, 2, 3

const genRestNums = () => {
  let restNum = [];
  times.forEach(v => {
    restNum.push(nums[Math.floor(Math.random() * nums.length)]); 
  });

  return restNum.reduce((a, b) => a.toString() + b.toString(), '');
};

/**
 * generateCitizenId
 * 產生身分證字號
 * 
 */
export const generateCitizenId = () => {
  // 取得第一碼
  const key = keys[Math.floor(Math.random() * keys.length)];

  // 取得第二碼
  const firstNum = genders[Math.floor(Math.random() * genders.length)];

  const id = `${key}${firstNum}${genRestNums()}`;
  // console.log('id', id);
  const { result } = checkPid(id, 0);
  return result ? id : generateCitizenId();
};

/** 
 * generateForeignerId
 * 產生居留證號
 * 
 */
export const generateForeignerId = () => {
  // 取得第一碼
  const key = keys[Math.floor(Math.random() * keys.length)];

  // 第一碼轉數字
  const keyNumber = letterMapping.get(key.toUpperCase());

  // 取得第二碼
  const firstNum = secondLetter[Math.floor(Math.random() * secondLetter.length)];

  const restNums = genRestNums();

  const id = `${key}${firstNum}${restNums}`;
  const checkId = `${keyNumber}${firstNum}${restNums}`;

  // console.log(id, checkId);
  const { result } = checkPid(checkId, 1);
  return result ? id : generateForeignerId();
  // return id;
}
