

// 'use strict';
// var a = 5;

// var a
// a = 5;


// var a = 2, //  -->  var, a, =, 2, ,

// program {
//     keyword --> var ,
//     "varibleDeclaration" {
//         "declarations": [
//             {
//                 "type": "varibleDeclaration",
//                 "id": {
//                     "type": "identifier",
//                     "name": a,
//                 }
//             },"init" {
//                 "type": "Literal",
//                 "value": 2,
//             }
//         ]
//     }
// }
// ========================================================================================
// [
//     {
//         "type": "keyword",
//         "value": "var",
//     }

//     {
//         "type": "identifier",
//         "name": "a",
//     }

//     {
//         "type": "punctuator", (operator)
//         "value": "=",
//     }

//     {
//         "type": "Numeric", (Litaral)
//         "value": "2",
//     }

//     {
//         "type": "punctuator", (operator)
//         "value": ",",
//     }
// ]




// var a,
// a = 2

// program {
//     keyword --> var ,
//     {
//         type: "varibleDeclaration ",

//         "declarations": [
//             {
//                 "type": varibleDeclaration,
//                 "id": {
//                     type: "identifier",
//                     name: a,
//                 }
//             },"init" : null,
//         ]
//     },

//     {
//         "type": "ExpressionStatement", (выражение)
//             expression: [
//                 "type": "AssignmentExpression", (приввивание)
//                 "operator": "=",
//                 "left": {
//                     "type": "Identifier",
//                     "name": "a"
//                 },
//                 "right": {
//                     "type": "Literal",
//                     "value": 2,
//                     "raw": "2"
//                 }
//             ]
//     }
        
// }

