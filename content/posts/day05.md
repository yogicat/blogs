---
title: "Day 05"
date: 2018-01-11T18:46:30+09:00
draft: true
---

# day 05

## tl;dr : week summary
- Quicksort
- Stack / Queue
- TCP / UDP (가래떡)
- OSI 7 Layers
- Coockie
    + 브라우저상에 남는 것
- Session
    + 몇분동안 유지해서 정보를 잡아두는 것
    + 연속적인 정보를 쌓기위해 쓰는 것
- Client vs Server
- URI / URL / URN 
- RESTFul : URI + Method 
    + 주소로 요청을 할 수 있다.
    + 표준이 없고 method 4개뿐



---

## Teacher says
>Hand Coding!
>Brain Compile!
>Eye Debugging!


## Web Programming
**Static vs Dynamic**
- Static : Each contents have to have an each page
- Dynamic : Display different content from the same source code.Interaction 

### Transformation of Web Development Pattern
Static -> Static Client + Dynamic Server -> Dynamic Client & Server **(now)**

```html
    <html>
    <head>
    <script src="https://unpkg.com/vue"></script>
    </head>
    <body>
    <h1>{{ header }}</h1>   //interaction with server
    <div id="app">
    {{ message }}
    </div>
    <script>
    var app = new Vue({
    el: '#app',
    data: {
        message: '안녕하세요 Vue!'
    }
    })
    </script>
    </body>
    </html>
```

--- 
## Web Browser

+ parsing : reading / processing the HTML
+ rendering : parses HTML, CSS and displays the content on the screen

Mosaic / Netscape / Internet Explorer/ FireFox / Chrome(2008)

parsing 과 rendering => 연산 => 연산은 엔진이 중요! Chrome에 내장된 v8 Enging이 역사적으로 중요한 역할(js를 한단계 업하는 역할을 함)



**PWA : Progressive Web Apps**
notification, offline available (via service tools)
Aliexpress mobile site homescreen add - works just like an app

**AMP : [The Accelerated Mobile Pages Project](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages)**
 is an open-source website publishing technology designed to improve the performance of web content and advertisements. The AMP Project led by Google is a competitor to Facebook's Instant Articles,[1] and includes several other large search, social and web publishing platforms around the world.

## Web Architecture
+ Client 
+ Server  
+ Business Layer
+ Data Layer

---
### Framework
복잡한 절차를 하나의 기능으로 함축시켜 자동화 시켜주는 역할

+ AngularJS
+ React.js
+ Vue.js 

---
## Database
+ [RDBMS](https://en.wikipedia.org/wiki/Relational_database_management_system) : MySQL,..
+ noSQL : MongoDB,...

---
## URI, URL, URN

    http://www.google.com/post/how-to
    프로토콜       도메인       패쓰 파일명

- uri : information (file path + info)
- url : locator (file path)
- urn : (통신 정보 없음)
- github과 연결된 public폴더 는 root page -> 주소를 무조건 public에 index.html 을 참조. 없으면 에러!

---
## API
- 하드웨어랑 어플리케이션의 소통을 도와주는 도구
- **WebAPI** 웹서버,브라우저를 위한 API

---
## xml
- 느리고 불안정 , archive에는 유용
- podcast, soundcloud

---
### REST API
- HTTP URI + HTTP method
- **스펙없이** 기존의 HTTP이용해 요정 처리가능
- xml의 단점을 보안할 수 있음
- Get, Put, Post, Delete / Read, Create, Update, Delete
- **표준이 없다** soon to be gone.... 
  
```  

  https://finance.yahoo.com/lookup?s=GOOGLE
                                    쿼리 
```
---
### GraphQL
- send queries to get exactly the data you’re looking for in one request
- legacy를 살려서 작업할 수 있다.

---
#### +++
+ **A legacy platform**, also called a legacy operating system, is an operating system (OS) no longer in widespread use, or that has been supplanted by an updated version of earlier technology.
+ **[uikit](https://getuikit.com/)** : Webpack Css Framework
+ **[Purecss](https://purecss.io/)** : Css Framework made by Yahoo
+ Node를 사용해보고 deploy까지 해보면 좋은 경험
+ 이 세상 역사상 모든 OS와 언어들을 박물관으로 만들면 어떤 모습일까 굉장히 궁금하다.(Black Mirror의 Black Museum 같은 모습일까?)
+ **[marp](https://yhatt.github.io/marp/)** : Markdown presentation
+ **1970-01-01** 
