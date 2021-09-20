# 웹 게임을 만들며 배우는 React

## 1장. 구구단

<br>

### 1-1 리액트를 왜 쓰는가

<br>
리액트는 SPA(Single Page Application), 즉 앱같은 페이지를 웹에서도 구현하기 쉽게 하기 위해 사용한다. 또한 데이터와 화면을 자동으로 일치 시키는데도 유용하며, 중복되는 함수, 템플릿 등 중복 요소들을 컴포넌트화 해서 컨텐츠만 변경시키며 중복을 최소화 시킬 수 있다.
<br><br>

1. 사용자 경험
2. 재사용 컴포넌트
3. 데이터 화면 일치
   <br><br>

### 1-2 첫 리액트 컴포넌트

<br>

리액트는 기본적으로 자바스크립트로 이루어져 있기 때문에, js 파일로 생성한다. 여기서 리액트를 자바스크립트 파일로 만들어 주기 위해서 `웹팩(webpack)`이란 것을 사용한다.
<br><br>

```html
<html>
  <head></head>
  <body>
    <script src="xxx.js"></script>
    <!-- xxx.js 가 리액트가 됨 -->
  </body>
</html>
```

<br>
그럼, 첫 리액트 컴포넌트를 생성해 보자.
<br><br>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <!-- 리액트가 동작하는 핵심적인 코드 -->
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <!-- 리액트를 웹에다 붙여주는 역할 -->
    <!-- 리액트를 실행할 때 우선적으로 설치해주어야 함 -->
    <!-- 실제 배포할땐 production.js로 배포함-->
  </head>
  <body>
    <div id="root"></div>
    <!-- <div id="root"><button>Like</button></div> -->
    <script>
      const e = React.createElement; // HTML 태그 생성

      // class 로 컴포넌트를 만듬. React 안에 Component 가 들어있고 그것을 상속(extends)을 받음
      // Component를 상속 받으면 LikeButton 라는 클래스를 만들어 컴포넌트로써 사용
      class LikeButton extends React.Component {
        // class 는 기본적으로 constructor 가 있다고 생각.
        // 컴포넌트가 실행될때 제일 먼저 실행되는 부분.
        constructor(props) {
          super(props);
        }

        // LikeButton 안에 render는 좋아요 버튼을 '어떻게 화면에 표시할 것인지를 결정'해 주는 메서드
        render() {
          return e("button", null, "Like"); // <button>Like</button> 이런 태그를 만들려함
        }
      }
    </script>

    <script>
      // ReactDOM 리액트로 컴포넌트룰 만들겠다 해놓은 것을 돔에다가 붙이겠다 | 랜더링을 해준다
      ReactDOM.render(e(LikeButton), document.querySelector("#root"));
    </script>
  </body>
</html>
```
