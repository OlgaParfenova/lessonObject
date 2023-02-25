// task 1

// let obj = {
//     1: 'Monday',
//     2: 'Tuesday',
//     3: 'Wednesday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Saturday',
//     7: 'Sunday',
// };
//
// console.log(obj[1]);
// console.log(obj[2]);
// console.log(obj[3]);
// console.log(obj[4]);
// console.log(obj[5]);
// console.log(obj[6]);
// console.log(obj[7]);

// task 2

// let obj = {
//     1: 'Jan',
//     2: 'Feb',
//     3: 'Mar',
//     4: 'Apr',
//     5: 'May',
//     6: 'Jun',
//     7: 'Jul',
//     8: 'Aug',
//     9: 'Sep',
//     10: 'Oct',
//     11: 'Nov',
//     12: 'Dec',
// }
//
// console.log(obj);

// task 3

// let user = {
//     name: 'Peter',
//     surname: 'Parker',
//     patronymic: 'Parkovich',
// }
//
// const {name, surname, patronymic} = user;
// console.log(`${name} ${surname} ${patronymic}`);

// task 4

// const date = {
//     year: 2023,
//     month: 'February',
//     day: 20,
// }
//
// const {year, month, day} = date;
//
// console.log(`${year}-${month}-${day}`);

// task 5

// let obj = {
//     '1a': 1,
//     'b2': 2,
//     'c-c': 3,
//     'd 4': 4,
//     'e5': 5
// };
//
// console.log(obj['c-c']);

// task 6

// let obj = {x: 1, y: 2, z: 3};
//
// console.log(obj.x * obj.x);
// console.log(obj.y * obj.y);
// console.log(obj.z * obj.z);

// task 7

// let obj = {};
//
// obj['1'] = 'd';
// obj['2'] = 'fgegt';
// obj['3'] = 18;
// obj['4'] = true;
//
// console.log(obj);

// task 8

// let obj = {x: 1, y: 2, z: 3};
// const keys = Object.keys(obj);
// console.log(keys);

// task 9

// let obj = {x: 1, y: 2, z: 3};
// const length = Object.keys(obj).length;
// console.log(length);

// task 10

// let obj = {x: 1, y: 2, z: 3};
// const key = 'y';
// console.log(obj[key]);

// task 11

// let obj = {x: 1, y: 2, z: 3};
// console.log(obj['x']);

// task 12

// let obj = {x: 1, y: 2, z: 3};
// let key = 'x';
// console.log(obj[key]);

// task 13

// let obj = {x: 1, y: 2, z: 3};
// let prop = 'x';
// console.log(obj[prop]);

// task 14

// let obj = {x: 1, y: 2, z: 3};
// let prop = 'x';
// console.log(obj[prop]);

// task 15

// let key = 'x';
//
// let obj = {
//     [key]: 1,
//     y: 2,
//     z: 3
// };
//
// console.log(obj[key]);

// task 16

// let key1 = 'x';
// let key2 = 'y';
// let key3 = 'z';
//
// let obj = {
//     [key1]: 1,
//     [key2]: 2,
//     [key3]: 3
// };
//
// console.log(obj[key1] === obj['x']);

// task 17

// let obj = {x: 1, y: 2, z: 3};
// console.log(obj['x']);

// task 18

// let obj = {x: 1, y: 2, z: 3};
// let key = 'x';
//
// console.log(obj[key]);

// task 19

// let obj = {x: 1, y: 2, z: 3};
// let sum = obj['x'] + obj['y'] + obj['z'];
//
// console.log(sum);

// task 20

// let obj = {x: 1, y: 2, z: 3};
// console.log(Object.keys(obj).length);

// task 21

// let test = 7;
//
// if (test > 10) {
//     console.log('test is bigger than 10');
// } else {
//     console.log('test is smaller than 10');
// }

// task 22

// let v1 = 4;
// let v2 = 8;
//
// if (v1 > v2) {
//     console.log('v1 is bigger than v2');
// } else {
//     console.log('v2 is bigger than v1');
// }

// task 23

// let v1 = 5;
// let v2 = 8;
//
// if (v1 == v2) {
//     console.log('v1 equals v2');
// } else {
//     console.log("v1 and v2 aren't equal");
// }

// task 24

// let test1 = 'abc';
// let test2 = 'abc';
//
// if (test1 === test2) {
//     console.log('test1 equals test2')
// } else {
//     console.log("test1 and test2 aren't equal");
// }

// task 25

// let test1 = 3;
// let test2 = 2;
//
// if (test1 !== test2) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// task 26

// if ( !(num1 >= 0 || num2 <= 10) ) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// task 27

// let obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }
//
// console.log(obj["key1"]["key1"] + obj["key1"]['key2'] + obj['key1']['key3'] + obj['key2']['key1'] + obj['key2']['key2']
//     + obj['key2']['key3'] + obj['key3']['key1'] + obj['key3']['key2'] + obj['key3']['key3']);

// task 28

// let obj = {
//     1: {
//         1: 'a1',
//         2: 'a2',
//         3: 'a3',
//     },
//     2: {
//         1: 'b1',
//         2: 'b2',
//         3: 'b3',
//     },
//     3: {
//         1: 'c1',
//         2: 'c2',
//         3: 'c3',
//     },
// }
//
// console.log(obj['2']['2']);
// console.log(obj['3']['1']);

// task 29

// let obj = {
//     key1: {
//         a: 1,
//         b: 2,
//         c: {
//             d: 3,
//             e: 4,
//         },
//         f: 5,
//     },
//     key2: {
//         g: 6,
//         h: 7,
//     },
// }
//
// console.log(obj['key1']['a'] + obj['key1']['b'] + obj['key1']['c']['d'] + obj['key1']['c']['e']
//     + obj['key1']['f'] + obj['key2']['g'] + obj['key2']['h']);

// task 30

// let obj = {
//     1: {
//         1: 11,
//         2: 12,
//         3: 13,
//     },
//     2: {
//         1: 21,
//         2: 22,
//         3: 23,
//     },
//     3: {
//         1: 24,
//         2: 25,
//         3: 26,
//     },
// }
//
// let sum = 0;
//
// for (let key in obj) {
//     let subObj = obj[key];
//
//     for (let subKey in subObj) {
//         sum += subObj[subKey];
//     }
// }
//
// console.log(sum);

// task 31

// let obj = {
//     1: {
//         1: {
//             1: 111,
//             2: 112,
//             3: 113,
//         },
//         2: {
//             1: 121,
//             2: 122,
//             3: 123,
//         },
//     },
//     2: {
//         1: {
//             1: 211,
//             2: 212,
//             3: 213,
//         },
//         2: {
//             1: 221,
//             2: 222,
//             3: 223,
//         },
//     },
//     3: {
//         1: {
//             1: 311,
//             2: 312,
//             3: 313,
//         },
//         2: {
//             1: 321,
//             2: 322,
//             3: 323,
//         },
//     },
// }
//
// let sum = 0;
//
// for (let key in obj) {
//     let subObj = obj[key];
//
//     for (let subKey in subObj) {
//         let subSubObj = subObj[subKey];
//
//         for (let subSubKey in subSubObj) {
//             sum += subSubObj[subSubKey];
//         }
//     }
// }
//
// console.log(sum);

// task 32

// let students = {
//     'group1': ['name11', 'name12', 'name13'],
//     'group2': ['name21', 'name22', 'name23'],
//     'group3': ['name31', 'name32', 'name33'],
// };
//
// console.log(students['group3'][0]);

// task 33

// let data = {
//     1: [
//         'data11',
//         'data12',
//         'data13',
//     ],
//     2: [
//         'data21',
//         'data22',
//         'data23',
//     ],
//     3: [
//         'data31',
//         'data32',
//         'data33',
//     ],
//     4: [
//         'data41',
//         'data42',
//         'data43',
//     ],
// };
//
// for (let num in data) {
//     for (let str of data[num]) {
//         console.log(str);
//     }
// }

// task 34

// let data = [
//     {
//         1: 'data11',
//         2: 'data12',
//         3: 'data13',
//     },
//     {
//         1: 'data21',
//         2: 'data22',
//         3: 'data33',
//     },
//     {
//         1: 'data31',
//         2: 'data32',
//         3: 'data33',
//     },
// ];
//
// for (let obj of data) {
//     for (let key in obj) {
//         console.log(obj[key]);
//     }
// }

// task 35

// let data = [
//     {
//         1: [
//             'data111',
//             'data112',
//             'data113',
//         ],
//         2: [
//             'data121',
//             'data122',
//             'data123',
//         ],
//     },
//     {
//         1: [
//             'data211',
//             'data212',
//             'data213',
//         ],
//         2: [
//             'data221',
//             'data222',
//             'data223',
//         ],
//     },
//     {
//         1: [
//             'data411',
//             'data412',
//             'data413',
//         ],
//         2: [
//             'data421',
//             'data422',
//             'data423',
//         ],
//     },
// ];
//
// for (let obj of data) {
//     for (let key in obj) {
//         for (let elem of obj[key]) {
//             console.log(elem);
//         }
//     }
// }

// task 36

// let employees = [
//     {
//         name: 'name1',
//         salary: 300,
//     },
//     {
//         name: 'name2',
//         salary: 400,
//     },
//     {
//         name: 'name3',
//         salary: 500,
//     },
// ];
//
// for (let elem of employees) {
//     console.log(elem.name + '-' + elem.salary);
// }

// task 37

// let employees = [
//     {
//         name: 'name1',
//         salary: 300,
//     },
//     {
//         name: 'name2',
//         salary: 400,
//     },
//     {
//         name: 'name3',
//         salary: 500,
//     },
// ];
//
// let sum = 0;
//
// for (let elem of employees) {
//     sum += elem.salary;
// }
//
// console.log(sum);

// task 38

// let employees = [
//     {
//         name: 'name1',
//         salary: 300,
//         age: 28,
//     },
//     {
//         name: 'name2',
//         salary: 400,
//         age: 29,
//     },
//     {
//         name: 'name3',
//         salary: 500,
//         age: 30,
//     },
//     {
//         name: 'name4',
//         salary: 600,
//         age: 31,
//     },
//     {
//         name: 'name5',
//         salary: 700,
//         age: 32,
//     },
// ];
//
// let sum = 0;
//
// for (let elem of employees) {
//     if (elem.age >= 30) {
//         sum += elem.salary;
//     }
// }
//
// console.log(sum);

// task 39

// let months = {
//     'ru': [
//         'январь',
//         'февраль',
//         'март',
//         'апрель',
//         'май',
//         'июнь',
//         'июль',
//         'август',
//         'сентябрь',
//         'октябрь',
//         'ноябрь',
//         'декабрь',
//     ],
//     'en': [
//         'january',
//         'february',
//         'march',
//         'april',
//         'may',
//         'june',
//         'july',
//         'august',
//         'september',
//         'october',
//         'november',
//         'december',
//     ],
// };
//
// let lang = 'ru'; // может быть или 'ru' или 'en'
// let month = 5;   // число от 0 до 11
//
// console.log(months[lang][month]);

// task 40

// let affairs = {
//     '2018': {
//         11: {
//             29: ['дело111', 'дело112', 'дело113'],
//             30: ['дело121', 'дело122', 'дело123'],
//         },
//         12: {
//             30: ['дело211', 'дело212', 'дело213'],
//             31: ['дело221', 'дело222', 'дело223'],
//         },
//     },
//     '2019': {
//         12: {
//             29: ['дело311', 'дело312', 'дело313'],
//             30: ['дело321', 'дело322', 'дело323'],
//             31: ['дело331', 'дело332', 'дело333'],
//         }
//     },
// }
//
// let year = 2019;
// let month = 12;
// let day = 30;
//
// console.log(affairs[year][month][day]);

// task 41

// let obj = {
//     key1: {
//         key2: '12',
//         key3: '13',
//     },
//     key2: {
//         key4: '24',
//         key5: '25',
//     },
// }
//
// let key1 = 'key2';
// let key2 = 'key4';
//
// console.log(obj[key1][key2]);

// task 42

// let obj = {
//     key1: {
//         key2: '12',
//         key3: '13',
//     },
//     key2: {
//         key4: '24',
//         key5: '25',
//     },
// }
//
// let key1 = 'key2';
// let key2 = 'key4';
//
// console.log(obj[key1][key2]);

// task 43

// let obj = {
//     key1: {
//         key2: '12',
//         key3: '13',
//     },
//     key2: {
//         key4: '24',
//         key5: '25',
//     },
// }
//
// let key1 = 'key2';
// let key2 = 'key4';
//
// console.log(obj[key1][key2]);

// task 44

// let obj = {
//     key1: {
//         key2: '12',
//         key3: '13',
//     },
//     key2: {
//         key4: '24',
//         key5: '25',
//     },
// }
//
// let key1 = 'key2';
//
// console.log(obj[key1]['key4']);

//task 45

// let employees = [
//     {
//         name: 'name1',
//         salary: 300,
//         age: 28,
//     },
//     {
//         name: 'name2',
//         salary: 400,
//         age: 29,
//     },
//     {
//         name: 'name3',
//         salary: 500,
//         age: 30,
//     },
// ];
//
// employees.push({
//     name: 'name4',
//     salary: 300,
//     age: 27,
// })
//
// console.log(employees);

// task 46

// let affairs = {
//     '2019-12-28': ['data11', 'data12', 'data13'],
//     '2019-12-29': ['data21', 'data22', 'data23'],
//     '2019-12-30': ['data31', 'data32', 'data33'],
// };
//
// affairs['2019-12-29'].push('data24');
//
// affairs['2019-12-31'] = [];
//
// affairs['2019-12-31'].push('data41', 'data42');
//
// console.log(affairs);

// task 47

// let students = {
//     'group1': {
//         'subgroup11': ['student111', 'student112', 'student113'],
//         'subgroup12': ['student121', 'student122', 'student123'],
//     },
//     'group2': {
//         'subgroup21': ['student211', 'student212', 'student213'],
//         'subgroup22': ['student221', 'student222', 'student223'],
//     },
//     'group3': {
//         'subgroup31': ['student311', 'student312', 'student313'],
//         'subgroup32': ['student321', 'student322', 'student323'],
//     },
// };
//
// students.group1.subgroup11.push('student114');
//
// students.group1.subgroup13 = [];
//
// students.group4 = {};
//
// students.group4.subgroup41 = [];
//
// students.group4.subgroup41.push('student411', 'student412');
//
// console.log(students);
