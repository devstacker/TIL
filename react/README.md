### React

- facebook에서 만듬

- 지속해서 데이터가 변화하는 대규모 어플리케이션을 구축하기 위해 리액트를 만들었다고 함

mutation(변화) 하지 말고 대신 데이터가 바뀌면, 그냥 뷰를 날려버리고 새로 만들어 버리자!

하지만 브라우저는 돔기반 엔진으로 작동하기 때문에 페이지가 그때그때 새로운 페이지를 만들어 버리면 성능측면에서 안좋을 것이다. 

그래서 존재하는 것이 **Virtual DOM**

변화가 일어나면 실제로 새로운 돔에 새로운 것을 넣는것이 아니라 자바스크립트로 이루어진 가상의 돔에 한번 렌더링하고 기존의 돔과 비교를 한 후, 변화가 필요한 곳에만 업데이트를 해줌.



#### React and the Virtual DOM 

 ![virtual-dom](/react/jpg/virtual-dom1.jpg)

![virtual-dom](/react/jpg/virtual-dom2.jpg)



virtual dom을 사용하는 라이브러리는 꽤 많다. vue, marko, maquetee, mithril등등

그렇다면, 다른 라이브러리와 다른 리액트의 장점은?

- 어마어마한 생태계
- 사용하는곳이 많다 (airbnb, bbc, eBay, facebook, ...)





##### 

  ```react
function foo() {
    var a = 'hello';
    if (true) {
        var a = 'bye';
        console.log(a); // bye
    }
    console.log(a) // bye
}

//이유: scope가 함수단위

function foo() {
    let a = 'hello';
    if (true) {
        let a = 'bye';
        console.log(a); // bye
    }
    console.log(a) // hello
}

// let, const는 scope가 블록단위
  ```



### Props



### States





### LifeCycle API



1. 나타날 때(Mounting)
2. 업데이트 될 때(Updating)
3. 사라질 때(Unmounting)



![LifeCycleAPI](/react/jpg/LifeCycle-API.jpg)





### 작업환경 설정하기

- nodejs (webpack, babel이 노드를 사용하기 때문)
  - npm, yarn 둘중 하나 사용
- 에디터
  - VSCode



#### create-react-app

```shell
npx create-react-app contact-app
//contact-app은 프로젝트 이름
cd contact-app
yarn start
```



### 자식 컴포넌트가 부모한테 값 전달하기

![handleCreate](/react/jpg/handleCreate.jpg)







```react
state = {
    information: [],
}
//기존에 있던 배열은 수정하지 않고 data를 information에 넣어야한다
handleCreate = (data) => {
    this.setState({
        information: this.state.information.concat(data)
    })
}
```













##### cf) 확장 프로그램 

- reactjs code snippet
  - rcc - 클래스 형태로 만들어진 컴포넌트 자동생성
  - rsc - 함수형 컴포넌트

