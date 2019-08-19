
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
const foreignerMultiplier = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1];

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
      // return { result: false, msg: '驗證失敗' };
    }
  }

  return {result: true};
};

/**
 * studIdNumberIdentify
 *
 * 第一個字元代表地區，轉換方式為：A轉換成1,0兩個字元，B轉換成1,1……但是Z、I、O分別轉換為33、34、35
 * 第二個字元代表性別，1代表男性，2代表女性
 * 第三個字元到第九個字元為流水號碼
 * 第十個字元為檢查號碼
 * 每個相對應的數字相乘，如A123456789代表1、0、1、2、3、4、5、6、7、8，相對應乘上1987654321，再相加
 * 相加後的值除以模數，也就是10，取餘數再以模數10減去餘數，若等於檢查碼，則驗證通過
 * @param {boolean} nationality - 是否為本國人
 * @param {string} idNumber - 身分證字號 or 居留證號
 */
const studIdNumberIdentify = (nationality, idNumber) => {
  let studIdNumber = idNumber.toUpperCase();

  // 本國人
  if (nationality) {
    // 驗證填入身分證字號長度及格式
    if (studIdNumber.length !== 10) {
      // alert("長度不足");
      return false;
    }

    // 格式，用正則表示式比對第一個字母是否為英文字母
    if (
      isNaN(studIdNumber.substr(1, 9))
      || (!/^[A-Z]$/.test(studIdNumber.substr(0, 1)))
    ) {
      // alert("格式錯誤");
      return false;
    }

    // 按照轉換後權數的大小進行排序
    const idHeader = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';

    // 這邊把身分證字號轉換成準備要對應的
    studIdNumber = (idHeader.indexOf(studIdNumber.substring(0, 1)) + 10) + '' + studIdNumber.substr(1, 9);

    // 開始進行身分證數字的相乘與累加，依照順序乘上1987654321
    const s = parseInt(studIdNumber.substr(0, 1))
      + parseInt(studIdNumber.substr(1, 1)) * 9
      + parseInt(studIdNumber.substr(2, 1)) * 8
      + parseInt(studIdNumber.substr(3, 1)) * 7
      + parseInt(studIdNumber.substr(4, 1)) * 6
      + parseInt(studIdNumber.substr(5, 1)) * 5
      + parseInt(studIdNumber.substr(6, 1)) * 4
      + parseInt(studIdNumber.substr(7, 1)) * 3
      + parseInt(studIdNumber.substr(8, 1)) * 2
      + parseInt(studIdNumber.substr(9, 1));

    const checkNum = parseInt(studIdNumber.substr(10, 1));

    // 模數 - 總和/模數(10)之餘數若等於第九碼的檢查碼，則驗證成功
    // 若餘數為0，檢查碼就是0
    // if ((s % 10) === 0 || (10 - s % 10) === checkNum) {
    if (((10 - (s % 10)) % 10) === checkNum) {
      return true;
    } else {
      return false;
    }
  } else {
    // 外籍生，居留證號規則跟身分證號差不多，只是第二碼也是英文字母代表性別，跟第一碼轉換二位數字規則相同，但只取餘數
    // 驗證填入身分證字號長度及格式
    if (studIdNumber.length !== 10) {
      // alert("長度不足");
      return false;
    }

    // 格式，用正則表示式比對第一個字母是否為英文字母
    if (
      isNaN(studIdNumber.substr(2, 8))
      || (!/^[A-Z]$/.test(studIdNumber.substr(0, 1)))
      || (!/^[A-Z]$/.test(studIdNumber.substr(1, 1)))
    ) {
      // alert("格式錯誤");
      return false;
    }

    // 按照轉換後權數的大小進行排序
    const idHeader = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';

    // 這邊把身分證字號轉換成準備要對應的
    studIdNumber = (idHeader.indexOf(studIdNumber.substring(0, 1)) + 10) + '' + ((idHeader.indexOf(studIdNumber.substr(1, 1)) + 10) % 10) + '' + studIdNumber.substr(2, 8);

    // 開始進行身分證數字的相乘與累加，依照順序乘上1987654321
    const s = parseInt(studIdNumber.substr(0, 1))
      + parseInt(studIdNumber.substr(1, 1)) * 9
      + parseInt(studIdNumber.substr(2, 1)) * 8
      + parseInt(studIdNumber.substr(3, 1)) * 7
      + parseInt(studIdNumber.substr(4, 1)) * 6
      + parseInt(studIdNumber.substr(5, 1)) * 5
      + parseInt(studIdNumber.substr(6, 1)) * 4
      + parseInt(studIdNumber.substr(7, 1)) * 3
      + parseInt(studIdNumber.substr(8, 1)) * 2
      + parseInt(studIdNumber.substr(9, 1));

    // 檢查號碼 = 10 - 相乘後個位數相加總和之尾數
    const checkNum = parseInt(studIdNumber.substr(10, 1));

    // 模數 - 總和/模數(10)之餘數若等於第九碼的檢查碼，則驗證成功
    // 若餘數為0，檢查碼就是0
    // if ((s % 10) === 0 || (10 - s % 10) === checkNum) {
    
    if (((10 - (s % 10)) % 10) === checkNum) {
      return true;
    } else {
      return false;
    }
  }
};

const keys = [...letterMapping.keys()];

// 身分證
const genders = [1, 2]; // 身分證字號 第二碼
const nums = [...Array(10).keys()];
const times = [...Array(8).keys()];

// 居留證
const secondLetter = ['A', 'B', 'C', 'D']; // 居留證號第二碼

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
  const result = studIdNumberIdentify(true, id);
  return result ? id : generateCitizenId();
};

/** 
 * generateForeignerId
 * 產生居留證號
 * 
 */
export const generateForeignerId = () => {
  // 取得第一碼
  const firstkey = keys[Math.floor(Math.random() * keys.length)];

  // 取得第二碼
  const secKey = secondLetter[Math.floor(Math.random() * secondLetter.length)];

  const id = `${firstkey}${secKey}${genRestNums()}`;

  const result = studIdNumberIdentify(false, id);
  return result ? id : generateForeignerId();
}
