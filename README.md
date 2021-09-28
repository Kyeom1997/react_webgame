# 웹 게임을 만들며 배우는 React

## 1장. 구구단

<br>

### 리액트를 왜 쓰는가

<br>
리액트는 SPA(Single Page Application), 즉 앱같은 페이지를 웹에서도 구현하기 쉽게 하기 위해 사용한다. 또한 데이터와 화면을 자동으로 일치 시키는데도 유용하며, 중복되는 함수, 템플릿 등 중복 요소들을 컴포넌트화 해서 컨텐츠만 변경시키며 중복을 최소화 시킬 수 있다.
<br><br>

1. 사용자 경험
2. 재사용 컴포넌트
3. 데이터 화면 일치
   <br><br>

### 첫 리액트 컴포넌트

<br>

리액트는 기본적으로 자바스크립트로 이루어져 있기 때문에, js 파일로 생성한다. 여기서 쪼개진 자바스크립트를 하나의 파일로 만들어 주기 위해서 `웹팩(webpack)`이란 것을 사용한다.
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

<br>

### HTML 속성과 상태(state)

<br>
리액트에서 Component는 기본적으로 Root가 필요하다. 또한, 컴포넌트에서 바뀔 여지가 있는 부분을 상태, 즉 State라고 한다. 예를 들어, 사전에 만들어진 Like 버튼을 클릭했을 때 버튼의 텍스트가 Liked로 바뀐다면 이 텍스트가 State라고 할 수 있다. 
<br><br>

```js
constructor(props) {
    super(props);
    this.state = {
        liked: false,
    };
}
```

<br>
state는 constructor의 this.state에 넣어준다. 
<br><br>

```js
return e(
  "button",
  {
    onClick: () => {
      this.setState({ liked: true });
    },
    type: "submit",
  },
  this.state.liked === true ? "Liked" : "Like"
);
```

<br>
여기서 리액트의 속성은 camel case로 작성해 준다. (onclick -> onClick)
<br><br>

### JSX와 바벨(babel)

<br>
리액트 개발자들은 좋지 않은 가독성 때문에 Tag를 사용해 더 가독성이 좋은 코드로 발전시켰다. 
<br><br>

```js
return e(
  "button",
  {
    onClick: () => {
      this.setState({ liked: true });
    },
    type: "submit",
  },
  this.state.liked === true ? "Liked" : "Like"
);

ReactDOM.render(e(LikeButton), document.querySelector("#root"));
```

<br>

```js
return (
  <button
    type="submit"
    onClick={() => {
      this.setState({ liked: true });
    }}
  >
    Like
  </button>
);

ReactDOM.render(<LikeButton />, document.querySelector("#root"));
```

<br> 이런식으로 보다 간편하고 가독성이 좋은 코드를 작성할 수 있다.
<br><br>

### Fragment와 기타 팁들

<br>

이전에는 리액트를 사용할 때 반드시 컴포넌트를 `<div>`태그로 감싸주어야 해서 CSS를 적용하거나 할때 불편한 점이 많았는데, 지금은 이것이 개선이 되었다. 바로 빈 태그인 `<>`나 `<React.Fragment>`, 즉 Fragment를 사용하는 것이다. 이렇게 하면 불필요한 div 태그는 사라지고 필요한 div 태그만 사용할 수 있다. <br><br>

```js
            return (
                    <>
                        <div>{this.state.first} 곱하기 {this.state.second}는?</div>
                        <form onSubmit={this.onSubmit}>
                            <input type="number" value={this.state.value}
                            onChange={this.onChange} />
                            <button>입력!</button>
                        </form>
                        <div>{this.state.result}</div>
                    </>
                );
            }
        }
```

<br>

여기서 return 값을 감싸주는 `()`는, 그룹 연산자이다. 우선 순위를 둘 때를 제외하고는 보기 좋게 하는 용도로 사용되는, 큰 의미가 없는 연산자이다. 또한, onChange나 onSubmit 함수를 class 함수의 하위 함수로 빼낼 경우에는 function 태그를 사용할 경우 this의 값이 달라질 수 있기 때문에 무조건 화살표 함수로 구현해야 한다.
<br><br>

```js
onSubmit = (e) => {
  e.preventDefault();
  if (parseInt(this.state.value) === this.state.first * this.state.second) {
    this.setState({
      result: this.state.first * this.state.second + " 정답!",
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: "",
    });
  } else {
    this.setState({
      result: "땡",
      value: "",
    });
  }
};

onChange = (e) => this.setState({ value: e.target.value });
```

<br>

### 함수형 setState

<br>

setState 안에 `this.state.(...)` 값이 들어간다면 함수형 setState를 사용하는 것이 좋다. 이를 사용하면 prevState, 이전 상태값을 다음 상태값에 활용할 수 있게 된다. 만일 Counter 예제를 예로 든다면, this.setState를 객체로 3번 반복하게 된다면 비동기이기 때문에 value 값이 3 증가하는 것이 아니라, 1이 증가하게 될 수 있다.
<br><br>

```js
this.setState({
  value: this.state.value + 1,
});
this.setState({
  value: this.state.value + 1,
});
this.setState({
  value: this.state.value + 1,
});
// value 값이 1 증가할 수 있음

this.setState((prevState) => {
  return {
    value: prevState.value + 1,
  };
});
```
