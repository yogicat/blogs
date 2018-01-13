---
author: "yogicat"
date: 2018-01-11
linktitle: Day 03
menu:
  main:
    parent: post
title: Day 03
description: Front-End Dev School
weight: 10
---

# day 03
#fastcamp

#### CLI : Command line interface

- - - -

### terminal
[Getting to Know the Command Line | David Baumgold](https://www.davidbaumgold.com/tutorials/command-line/)

$ : ready to shell 쉘커맨드 입력 준비 됬음
$ npm install ~~~~ : shell을 이용해서 nom install~~입력해라
~$ : login user’s top priority folder (최상위폴더)
**root@~~~ : super user / 갓 역할 / 다 해치울 수 있어**

	- up arrow  : go through past lines.
	- ls : List -> show all the files and folders.
	- cd : Change Directory 
	- cd .. : go up 상위폴더 
	- touch : make file -> touch text.txt
	- mkdir : make directory -> mkdir folder
	- rm : delete individual files -> rm blue.txt (delete blue.txt)
	- rm -rf : delete directory(folder)
	- rm -rf/ : delete entire workspace
	- cp : copy -> cp hello.txt ..(or folder) // .. means 상위
	**-** dash means add options
	- ls -l : 한줄씩 보여줘(리스트로)
	- touch .hello.py -> 파일명 앞에 쩜 붙이면 숨긴파일
	- ls -al : 모든 파일 보여줘(숨긴파일 포함)
	- mv .hello.py dev -> hello.py 를 dev 로 이동
	- mv ./.hello.py ./hello.py -> ./ 현재폴더
	- exit : 쉘 종료 (터미널 종료)
	- cat : 안에 텍스트 볼때 사용 -> cat hello.text


**bash / git bash 는 다양한 권한이 없음**

/ windows는 bash가 없었는데 windows10부터는 생겨서
이제 putty 를 유용하게 할 수 있다고 함.

### chmod : change mode

read write execute

```
drwxr-xr-x   5 ohbbung  staff       160 Jan 10 10:11 Code

d + r w x r - x r - x  
     1 1 1 1 0 1 1 0 1

나 그룹 others

```

`$ chmod [옵션] (8진수) (파일명)`

```
0: 000
1: 001
2: 010
3: 011
4: 100
5: 101
6: 110
7: 111

750 : 
760 : 나(rwx) + 그룹(rw-) + others(---)
```


### VIM
> vim은 리눅스메모장 같은 개념인데 적응하기 어려움/   
> 리눅스 계열 텍스트 에디터 (vim, emacs)  
> shell에서(터미널, 커멘드) 가능  

```
(연결프로그램) (열고싶은 파일명)
(program) (filename)
python hello.py   //python을 이용해서 hello.py를 열자
vi hello.txt
```

> vim 에는 3가지 모드  
> 수정모드(insert mode) / 명령모드(normal mode) / visual mode  

`i`  -> insert mode 로 변경 -> text 입력가능
`[esc키]` -> insert mode 끌 수 있음 back to normal mode
`y` -> yank 복사
`d` -> delete
`dd` -> 잘라내기
`p` -> paste
`:wq` -> 저장하고 나가기
`:q` -> 나가기 (저장안해서 경고창!)
`:q!` -> 저장안하고 나가기(했던거 무시)


### git 
> **VCS : Version Control System**  
> source code management   

- fast 
- simple structure
- 분산형 저장소 지원
- 비선형적 개발(수천개의  branch)가능 / 각각 브랜치로 작업하고 합칠 수 있어
- 인터넷 연결 업을 때도 작업할 수 있다. (얼마나 어떻게 했는지 나중에 wifi 연결시 나타남)


![](Screen%20Shot%202018-01-10%20at%2021.12.55.png)



- - - -
#### inside git 

1. Blob : 파일을 blob이라고 부름
2. Tree : 파일을 모아놓은 것
3. Commit : 파일에 대한 정보들 (라벨,커맨트)

- - - -
#### process 

> 작업한다 ->   
> -> index 에 수정한 모든 파일 올리고(동작가능해야함) ->   
> -> commit메세지 달아서 local repository 에 올리고 ->   
> -> 서버에 올린다 (remote repository)  

- - - -
#### git test

![](Screen%20Shot%202018-01-10%20at%2012.28.09.png)
new repo 만들고 주소 복사
`https://github.com/username/first-repo.git`

`dev/first-repo` -> 여기에 git 실행
**github repo 이름과 로컬 폴더(first-repo) 이름이 같아야 편리**

`git init` -> 로컬에 생성 (로컬에 index , local repo생성)

`git status` -> 현재 git 상태 체크 (항상 자주 사용할것)

![](Screen%20Shot%202018-01-10%20at%2012.33.59.png)
// git이 처음 보는 파일이다!! git add 하세요
`git add hello.txt`
`git commit -`

```
git commit -m “add hello.txt”
-> 현재창에서 입력할 수 있어
``` 
> add / edit / delete 현재형으로 사용  

```
//작성자 인포 
git config —global user.name “ohdayoda”
git config —global user.email “ohdayoda@gmail.com”

```

`git config --list` -> 여기에 user.name  , user.email 제대로 입력됬는지 확인

```
//받는사람
//origin 은 url을 부를 이름
git remote add origin https://github.com/ohdayoda/first-repo.git

```

`git push origin master` 
> origin 에 master branch로 보내라.  
> my origin(내 저장소) / remote origin(중앙저장소)  

![](Screen%20Shot%202018-01-10%20at%2012.41.01.png)

![](Screen%20Shot%202018-01-10%20at%2012.36.08.png)

- - - -

### git in short

Git Setting with Github
1. GitHub에서 new repo 만들고 주소 기억해놓는다
2. local에서 경로 만들고 파일 만들고
3. `git init` 으로 git 실행
4. `git add thisfile.txt`  git에 파일을 올린다(로컬)
5. `git commit --m "add new file"` git에 레이블링을 하고 저장(로컬)
6. `git config —global user.name "username"` -> 처음의 경우 아이디 세팅
`git config —global user.email “username@gmail.com”`
7. `git remote add origin https://github.com/<username>/first-repo.git`
-> github 서버와 연결
8. `git push origin master` -> git을 올린다.  


- git add / 임시 공간에 올려놓는다
- git commit —m “커밋내용”/ 라벨링을 하고 로컬에 저장
- git push master origin/ 저장소에 올린다

![](Screen%20Shot%202018-01-10%20at%2014.14.19.png)

### git 삭제하기
1. `rm -rf .git` -> git을 삭제
2. `rm -rf 로컬폴더` -> git로컬 폴더 삭제
3. GitHub 에서 삭제

### git repo 빠르게 사용하기 (이미 존재하는 git repo 사용하기)

#### github repo 만들기
1. repo 만들때 read me 추가 라이센스 추가 gitignore추가
![](Screen%20Shot%202018-01-10%20at%2014.40.11.png)
> 다양한 파일 추가된 것 확인 할 수 있다.  
> 주소 복사해서 로컬에서 연결  

2. GitHub repo 가져오기
![](Screen%20Shot%202018-01-10%20at%2014.42.12.png)
![](Screen%20Shot%202018-01-10%20at%2014.42.52.png)
3. what is .gitignore?

4. change default editor setting
`git config --global core.editor "vim"` -> 빔으로 세팅
`git config --list` -> 각종 세팅값 확인 가능
5. `git commit` -> vim 열린다

![](Screen%20Shot%202018-01-10%20at%2014.55.06.png)
첫번째 줄 : 타이틀(중요)
띄고 띄고 내용 입력

6. `git push origin master` 
-> 로그인 없이도 자동으로 올라감 ( github에서 가져왔기때문에)

7. github 에서 확인 가능
![](Screen%20Shot%202018-01-10%20at%2014.58.53.png)


- - - -
### GitHub blog 만들기
1. repo name : <username>.github.io
2. <username>.github.io

( jekyll, hexo, hugo 다른 툴 이용해서 블로그 쉽게 만들 수 있음)


- - - -

###  branch
- master branch -> 프로젝트 매니저들이 여기 
- hot fixed -> master 에 문제 해결 (패치)
- release branch  -> 프로젝트 마스터들이 여기
- develop branch   -> 개발자는 여기에서 작업 -> branch를 엮어서 **기능** 별로 개발
- pull ->  develop변경사항을 땡겨온다.

### git branch
`git branch`
`git branch -r` ->
`git branch -a` -> 
`git branch develop` -> develop 만들어라
`git checkout develop`
`git checkout -b stem`  -> 이렇게 할때 develop 에서 만들면 develop 아래 귀속 / master로 와서 만들어야 develop - stem 같은 레벨

::*있는 곳이 나의 위치::



### non linear 개발
> git-flow strategy  

![](Screen%20Shot%202018-01-10%20at%2015.48.25.png)
develop에서 작업 후 git add , git commit 하게되면 한 시점 앞어감
따라서 master에서는 brandnewbranch.md 확인할 수 없음 

-> master 로 돌아와서,`git merge develop` 로 master와 develop 합체
-> always develop에서 작업.


-> `git pull origin master` -> 깃허브에서 끌어오기
-> `git remote add remoteorigin 주소`
 
- - - -
-> `rm -rf dev` 지우기

