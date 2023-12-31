# [Front] Mini Project

## Pokemon-Docs

<img width={200} src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' alt='pokemon' />

> 📌 **사용 API**: https://pokeapi.co/ <br>
> 📌 **GitHub**: https://github.com/my8za <br>
> 📌 **Velog**: https://velog.io/@my8za

<br/>

## [DEMO](https://pokemon-doc.web.app/)

링크 클릭시 배포된 데모 페이지로 이동합니다.

![pokemon](https://github.com/my8za/Pokemon-Docs/assets/93106858/8d0bf0bc-d551-4b72-9101-386907433fb1)





<br/>

## 서비스 내용

> 로그인 및 회원가입(localStorage) <br/>
> 전체 포켓몬 조회 <br/>
> 포켓몬 검색 <br/>
> 포켓몬 즐겨찾기 (위시리스트) <br/>
> 포켓몬 속성별 필터링 <br/>

<br />

## 프로젝트 실행 방법

### 1. GNB 버튼을 클릭하여 포켓몬도감(메인)/로그인/즐겨찾기 버튼을 통하여 원하는 페이지로 이동할 수 있습니다.

- Route
  - createBrowserRouter
- **Redirect 처리**
  - 로그아웃 상태로 /like 페이지에 접속한다면 /login 경로로 리다이렉트

<br>

### 2. 로그인 페이지에서 회원가입 페이지로 이동할 수 있습니다.

- 로그인 이후에는 로그아웃 버튼, 로그아웃 이후에는 로그인 버튼이 보입니다.
- 로그아웃 버튼을 클릭하면 다시 로그인 페이지로 이동합니다.

<br />

### 3. 계정이 없는 경우, 회원가입 절차가 필요합니다

- **이메일과 비밀번호의 유효성 검사**
  - 이메일 조건: @ 포함
  - 비밀번호 조건: 8자 이상

: 조건에 부합하지 않다면 회원가입 버튼은 활성화되지 않습니다. <br/>
: 회원가입이 완료되면 자동으로 로그인 페이지로 이동됩니다.

<br>

### 4. 즐겨찾기 페이지에서 좋아요 누른 포켓몬 리스트를 볼 수 있습니다.

( 즐겨찾기 페이지를 이용하기 위해서는 회원가입이 필요합니다. )

- **Private Route**
  - 로그인 상태 -> 즐겨찾기 페이지
  - 로그아웃 상태 -> 로그인 페이지로 이동

<br>

### 5. 잘 못된 URL 접근시, 에러페이지가 출력됩니다.

<br>

### 6. 검색바에서 포켓몬 이름을 검색할 수 있습니다.

<br>

### 7. 도감번호를 설정하여 원하는 api 데이터의 개수를 지정할 수 있습니다.

<br>
