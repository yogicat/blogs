---
author: "yogicat"
date: 2018-01-12
linktitle: Day 04
menu:
  main:
    parent: post
title: Day 04
description: Front-End Dev School
weight: 10
---

## NetWork


## 802.11 != wifi
- 802.11 는 와이파이가 아니다.
- 와이파이는 802 기술을 사용한 상품
 
normal wifi is 2.4hz
2.4g hz -> 2.4g per 1second
주파수 높을수록 거리는 짧고 FM
주파수 짧을수록 거리는 넓고 품질은 저하 AM

wifi/블루투스 잘 안될때 서로 엉켜서 그럴 수 있어
그럴때는 wifi 채널을 바꿔봐라 
192.168.

wifi 요즘은 ac(공유기 안테나 보통 4개..)
여러사람 쓸수록 나눠서 써야하죠


Lifi : light 빛으로 무선통신!!! awesome
Power line Networking : 기존 전력선을 가지고 네트워킹 해보자 
    -> 망함 (더힘듬)


submarine cale map
대륙간 연결 해저 테이블. 
/많은 회사들이 개발해 (구글, 페이스북, 아마존)


how ethernet works.
//유선인터넷이 어떻게 작동하는가 중요!!
//ethernet = ethe에테스 
//최적의 경로를 알아서 계산해준다

**OSI 7 Layer**
표준과 접근성은 웹에서 항상 중요하다.
IOS에서 만든 것

Packet = 데이터 1492바이트
1492 bytes / 옥텟이라고 함(octet)

bit / byte
2진수 / 8 = 1byte 문자를 표현하는 최소 단위


7. application layer
인터페이스를 제공 (웹브라우저)
사용자에게 보여지는 유일한!!

6. presentation layer
주소를 쳤을 때 -> 그 정보를 os에게 전달 -> 인코딩
UTF-8 에 맞게 www.google.com 을 인코딩 (표준을 맞추기 위해)
암호화와 복호화 1번 (7~1까지 총 2번 일어남)

5. session layer
연결이 되어있는지 상태를 확인
세션 : 사용자의 연결 상태 / 서버에서 체크하는 로그
쿠키 : 웹브라우저가 갖고 있으면 쿠키 (welcome back!)
-> 서버가 가지고 있으면 세션 , 웹이 가지고 있으면 쿠키
ex) 로그인 되었던 사이트 창을 닫고 나중에 켜도 로그인 되어있음 
    -> 해당 사이트 서버 세션에서 내세션을 열고 있어서.

**4. transport layer**
데이트를 전송할 수 있게 나가는 쪽에서는 자르고 받는 쪽에서는 자른조각을 붙여.
오류관리
방화벽 여기에서 동작.(블랙리스트, 화이트리스트)

3. network layer
어디로 와서 어디로 가는지 계산
최적의 경로를 계산하는 곳

2. datalink layer
케이블과 케이블 사이를 연결

1. physical layer
실제 데이터가 왔다 갔다하는 물리적인 케이블 
집

## TCP/IP Protocol (웹 환경은 TCP / IP )
- Application layer
'어떤 타입의 자료를 전송할것인가' 로 구분  **어떤자료를**
하이퍼텍스트를 전송하기 위한 프로토콜 => http
파일을 전송하기 위한 프로토콜 => ftp
 
 하이퍼텍스트, 파일, 메일

- Transport **어떻게 전송할까**
TCP , UDP 

- Internet
IP , ARP , ...
주소체계를 규정 / 나를 규정  **어떤주소 체계로**
(구주소 or 새주소 - 새주소인데 구주소로 읽을 수 없게 되는 경우)


##http
- http method : Get, Post, Put, Delete (create, read, update, delete = crud web service)
- 정보(하이퍼텍스트)


##실습
python
`$python3` //python 실행

```py
 from urllib.request import urlopen
 //url lib라이브러리 에서 urlopen만 사용하려구
```
response.status
400 할 수 없는것 client error
500 서버 죽었을때 server error

http: -> https: 보안이 강화


##ftp
file transfer protocol 파일전송
보안에 매우 취약!!!
현재는 frps, sftp, ssh(+putty)

## TCP/IP

### TCP
안정적 . 순서대로 . 에러없이

패킷의 종류 - stream, datagram 소켓
stream : TCP에서 쓰이는 소켓 /데이터의 연속적인 흐름
    조각이 합쳐져야 볼 수 있어
    안정적
    비어있거나 에러있으면 다시 요청할 수 있다

datagram : UDP에서 쓰이는 소켓
    조각이 독립적으로 작용
    빠르게

## IP

|127.0.0.0/8|	
    루프백(loopback) 즉, 자기자신

|192.168.0.0/16|
    사설 네트워크

두가지 차이 중요 127 / 192


## IPv4(현재)) -> IPv6(앞으로 쓸것)
                2의 128승 = 340간


## Internet IP



## MAC
- 내가 쓰는 컴퓨터의 고유 주소. top secret

## ARP


## UDP (vs TCP)
- 게임처럼 시간이 중요할 때 !!
- 무조건 빨리 보내는게 중요

온라인 게임
- TCP로 가고 UDP로 받아.


## socket
1:1통신 / 악수하는거 
가상의 끝점 

연결해 주는 과정 (전화교환수)