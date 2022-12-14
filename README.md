# Google Calendar Clone

구글 주별 캘린더 클론

## 실행 방법

```
npm install
npm start

http://localhost:3000
```

## 기술 스택

- React
- Typescript
- Scss
- Redux
- React DayPicker

## 구현 목록

- [x] Header
  - [x] UI
  - [x] Today 버튼 로직
  - [x] Date
  - [x] 주차 이동
- [ ] 좌측 date-picker
  - [x] 날짜 클릭시 선택된 날짜 변경
  - [x] 클릭시 주별 날짜 가져오기
  - [ ] 일정 있는 날짜 보여주기
- [ ] 주별 달력 보기
  - [ ] UI
  - [ ] 일정이 있는 시간에 일정, 시간 보여주기
- [x] 일정 추가 모달
  - [x] UI
  - [x] save 클릭시 redux store에 추가
  - [ ] 이벤트 삭제

## 트러블 슈팅

### 화살표 버튼 클릭시 맞는 주별 날짜 구하기에서 각 날짜별로 1주일 후만 보여지는 에러

- 원인: 클릭시 이동하는 주 수가 1이니 1을 매개변수로 넘겼는데 결과적으로 하드코딩한게 되어버림

- 해결: clickCount변수를 전역변수로 처리해 사용

### 서로 방향이 다른 화살표 클릭시 주 수가 제대로 바뀌지 않는 현상

- 원인: clickCount 변수를 전역변수로 처리해 변수가 초기화 되지 않아 더 많은 수가 더해짐
- 해결: 전역변수 사용 전 변수에 0을 할당해 초기화하여 사용 (더 좋은 방법이 있을 것 같은데 시간이 부족해 부득이하게 전역변수를 활용)

## 리팩토링 필요 부분

- `getPrevWeek`, `getNextWeek`내 공통 함수를 커스텀 훅으로 빼기
- scss 공통부분 mixin으로 정의하여 사용
- 타입을 한 파일에서 관리

## 과제 회고

#### 목표

- 주별 캘린더 클론 완성

#### 결과

- 캘린더 50% 완성
  - 구현하지 못한 부분
    - 시간 테이블 구현
    - 생성 일정을 시간 테이블에 표기
    - 달력에 일정이 있는 날짜 표기
    - 일정 삭제

#### 차이와 원인

- 과제 설명 및 구현 범위를 훑어본 후 바로 구현을 시작해 프로그램 설계에 대한 정리가 되지 않은 상태에서 불필요한 시간 소요
- 리덕스를 처음 사용하여 사용법을 익히는데 예상보다 많은 시간 소요
- 예기치 못한 개인적인 일정으로 인해 구현 가능한 시간 축소

#### 적용할 점

- 구현 해야할 기능이 생겼을 때는 문제 정의, 설계부터 하기
- 기능에 대해 배워야할 때는 영상이 도움이 많이 되니 아예 모르는 부분이 나오면 영상을 먼저 찾아보기
