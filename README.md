# _Mr Roboger's Neighborhood_

#### By _**Jeff Lai**_

#### _Web Application allows users to_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_

## Description

_This browser application allows users to input a number which will output a phrase Mr. Roboger will say. If a number contains 1 it will return with a "beep!". If a number contains 2 it will return with a "boop!". If a number contains 3 it will return with a "Won't you be my neighbor?"._

## Setup/Installation Requirements

* _Open terminal and enter "https://github.com/popoyuyu/mr-robogers-neighborhood.git"._
* _Next, enter "cd mr-robogers-neighborhood" to navigate into project directory._
* _Open index.html in your browser._
* _Enter "code ." top open project file in VSCode._



## Known Bugs

* _No known issues._

## License

_Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE._


Copyright (c) _October 29th 2021_ _Jeff Lai_

## TDD

# Describe: beepBoop()

_Test: "It should return an array with a 0 if the number 0 is inputted"_
_Code: beepBoop(0);_
_Epected Output: [0]_

_Test: "It should return an array from 0 to 5"_
_Code: beepBoop(5);_
_Epected Output: [0, 1, 2, 3, 4, 5]_

_Test: "It should return "Won't you be my neighbor?" for 3 while all other numbers return as is."_
_Code: beepBoop(5);_
_Epected Output: [0, 1, 2, "Won't you be my neighbor?", 4, 5]_

_Test: "It should return "Boop!" for 2 while all other numbers return as is."_
_Code: beepBoop(5);_
_Epected Output: [0, 1, "Boop!", 3, 4, 5]_

_Test: "It should return "Beep!" for 1 while all other numbers return as is."_
_Code: beepBoop(5);_
_Epected Output: [0, "Beep!", 2, 3, 4, 5]_

_Test: "It should return "Beep!" for 1, "Boop!" for 2, and "Won't you be my neighbor?" for 3 while all other numbers return as is."_
_Code: beepBoop(5);_
_Epected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]_

