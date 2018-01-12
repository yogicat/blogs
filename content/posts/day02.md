---
title: "Day 02"
date: 2018-01-11T18:46:30+09:00
draft: true
---

# day 02
#fastcamp


### Markdown  
readme.md 
[Markdown Cheatsheet · adam-p/markdown-here Wiki · GitHub](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
[Mastering Markdown · GitHub Guides](https://guides.github.com/features/mastering-markdown/)

- - - -


## 의사코드 . 알고리즘 . 자료구조
> Pseudocode / Algorithm / Data Structure  


- - - -

### Pseudocode 
> like coding ideation , sketch  
[Pseudocode - Wikipedia](https://en.wikipedia.org/wiki/Pseudocode)

- no guide line
- but your own  guide line is needed (i think) 


```js
1. 올드폰 == true
2. 폰이 망가졌다면,
    1. 100만원 이상 있을 때,
        1. 애플을 좋아한다면, 아이폰을 산다.
        2. 애플을 좋아하지 않는다면, 갤럭시를 산다.
    2. 100만원 미만 있을 때, 저가폰을 산다.
3. 폰이 망가지지 않았다면,
    1. 사용한지 2년 이상, 
        1. 100만원 이상 있을 때, 아이폰을 산다.
        2. 100만원 미만 일때, 저가폰을 산다.
    2. 사용한지 2년 미만, 기다린다.

//try to use ENGLISH
```


![](DACE8810-97E2-4750-8F9C-7E3D4F5D25C8.png)



#### FizzBuzz Challenge
#later
[hackerrank:fizzbuzz](https://www.hackerrank.com/challenges/fizzbuzz/problem)


```js
for 1 to n
    if number / 3 is 0 (3의 배수)
        if number / 5 is 0  3과 5의 배수
            print "fizzbuzz"
        else 
            print "fizz"
    else if number / 5 is 0
        print "buzz"
    else 
        print number

//15 = 3과 5의 배수

for (var i = 1; i <= 100; i ++){
    var string = '';
    if ( i % 3 == 0 ) 
}
```

#### Calculating Tax

**Sketch version**
1. 제품 가격 입력 **받는다**
2. 구매 나라 입력 **받는다**
	1. 나라 = 한국, 가격 + 가격*0.1 를 **출력**한다. 
	2. 나라 = 일본, 가격 + 가격*0.08 를 **출력**한다. 
	3. 나라 = 미국, "주 마다 다름"을 **출력**한다. 
	4. 나라 = 영국, 가격 + 가격*0.2 를 **출력**한다. 
	5. 나라 = 알수없음 "알 수 없는 나라"를 **출력**한다.

**Solution**
1. **get** price of item ==> item_price
2. **set** tax rate (kor = 0.1, jap = 0.08, usa = "depend on state", uk = 0.2)
3. **get** contry code(example: kor, jap, usa, uk) ==> country_code
4. tax_rate is matched price with country_code
5. sales tax is item_price **times** tax rate
6. total price is item_price **plus** sales tax

- - - -

## Algorithm
> is a series of contained steps which you follow in order to achieve some goal, or to produce some output.  

- input
- output ( result )
- clarity
- finite trial 
- simplicity


### Time Complexity  & Big O Notation
[wikipedia : time complexity](https://en.wikipedia.org/wiki/Time_complexity)
[what is Big  O  notation](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)
[Big-O Algorithm Complexity Cheat Sheet](http://bigocheatsheet.com/)

> **Time Complexity** is the computational complexity that measures or estimates the time taken for running an algorithm.  

![](4FBD8E21-C067-459C-A277-A9F553648D1F.png)

> time complexity is commonly expressed using **big O notation**  

- constant time / O(1)
- linear time / O(n)
- quasilinear time / O(n log n)
- quadratic time / O(n2)
- factorial time / O(n!)


```
	for ~
 		for ~

loop nasting within loop is really bad!!
```



### Sorting Algorithms
[wikipedia](https://en.wikipedia.org/wiki/Sorting_algorithm)
[sorting-algorithms](https://brilliant.org/wiki/sorting-algorithms/)
[Sorting Algorithms - GeeksforGeeks](https://www.geeksforgeeks.org/sorting-algorithms/)

> arrange systematically in groups;  
> separate according to type, class, etc.  
> is an algorithm that puts elements of a list in a **certain order**  

A sorted array is an array that is in a **particular order**. 
*[a, b, c, d]* is sorted alphabetically,  *[1, 2, 3, 4, 5]* is a list of integers sorted in increasing order, and *[5, 4, 3, 2, 1]* is a list of integers sorted in decreasing order.

> There are two broad types of sorting algorithms: integer sorts and comparison sorts.  
> Comparison sorts are usually more straightforward to implement than integer sorts, but comparison sorts are limited by a lower bound of , meaning that, on average, comparison sorts cannot be faster than . A lower bound for an algorithm is the worst-case running time of the best possible algorithm for a given problem. The "on average" part here is important: there are many algorithms that run in very fast time if the inputted list is already sorted, or has some very particular (and overall unlikely) property. There is only one permutation of a list that is sorted, but  possible lists, the chances that the input is already sorted is very unlikely, and on average, the list will not be very sorted.  

### Common Sorting Algorithms
(정렬알고리즘)

- Bubble Sort
**Obama** 
comparison-based / simple but slow 
(book example : one book at a time 순서대로 하나씩)
```
-> 6 5 3 1 / 6과 5를 비교
-> 5 6 3 1 / 5가 앞으로 이동 & 6과 3 비교
-> 5 3 6 1 / 6 과 1비교
-> 5 3 1 6
-> 3 5 1 6
-> 3 1 5 6
-> 1 3 5 6
```


- Insertion Sort
comparison-based algorithm
builds a final sorted array one element at a time
(앞에서 부터 순서대로 비교해 나감)
```
-> 6 5 3 1 / 6과 5를 비교
-> 5 6 3 1 / 5가 앞으로 이동 & 56과 3 비교
-> 3 5 6 1 / 356 과 1비교
-> 1 3 5 6
```

- MergeSort
comparison-based algorithm
**Divide and Conquer algorithm**
focuses on how to merge together two pre-sorted arrays such that the resulting array is also sorted.



- Quicksort
comparison-based algorithm
**Divide and Conquer algorithm**
**pivot element**

- Heapsort

- Counting Sort
integer sorting algorithm

- - - -

### Data Structure

- stack  - LIFO
- queue - FIFO
- linked list
- binary trees 
- heaps

- - - -

# TL;DR
- What is computer?
	computer is a “savable calculator”
- difference between computer & calculator
- computational thinking
- pseudo code
- algorithm
- data structure
- [HackerRank](http://www.hackerrank.com)
- sort algorithm : quick sort 
- data structure : stack / queue
- [한국 오픈소스 개발자 커뮤니티 - ranked.in](http://rankedin.kr/users)
- [Mastering Markdown · GitHub Guides](https://guides.github.com/features/mastering-markdown/)


- - - -

# Self Study
- what is LOG?
![](Screen%20Shot%202018-01-10%20at%2009.49.37.png)



### Algorithms to live by

