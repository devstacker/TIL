### 개요

- 리액트코드를 자바스크립트로 바꿔는 툴이 필요한데 그것이 트랜스파일
- webpack(트랜스파일러)

  - 리액트 코드를 브라우저가 이해할 수 있는 코드로 변경해주는 툴 (모든 브라우저가 다 이해하지는 못한다고함)

리액트로 작업하려면 웹팩과 같은 모듈번들러가 필요함

하지만 이 강의에서는 모듈번들러 사용하지 않고 페이스북이 제공해주는 create react app(CRA)을 사용해서

리액트 앱을 손쉽게 만들거라 함 (한번에 인스톨해서 바로 코딩 시작할수 있음)

모듈번들러는 풀스택 강의에서 다룸



### 1. 시작하기

```shell
npm install -g create-react-app

create-react-app movie_app
cd movie_app
yarn start
```

> npm, yarn 설치 되어 있어야 한다

코드를 수정하고 저장하면 동시에 configuration된다.

yarn이 컴파일을 시작하고 컴파일이 끝나면 새로고침이 자동으로 된다.



### 2. Component 그리고 Props



#### 2-1. Creating React Components with JSX

리액트는 컴포넌트 기반이다.

모든 컴포넌트는 render function을 갖고있다

'이 컴포넌트가 나에게 보여주는 것이 무엇인가'가 render 기능이다.

> react.js는 일반 Javascript 문법이 아닌 JSX문법을 사용해 UI를 템플릿화 한다.

##### JSX

- 리액트 컴포넌트를 만들때 사용하는 언어
- javascript 안에 html code

##### app component

- 각기 다른 functions와 methods를 갖고있다

##### react 와 reactDOM

- react는 UI library.


- reactDOM은 react를 웹사이트에 출력(render)하는 것을 도와주는 model.


- react를 웹사이트에 올릴때는 reactDOM.
- 모바일앱에 올릴떄는 reactNative를 쓴다

> DOM (Document Object Model)



##### Sample code : Movie App 

**public > index.html**

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">

    <title>Movie App</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
  </body>
</html>

```

**src > index.js**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
```

**src > app.js**

```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        hello!
      </div>
    );
  }
}

export default App;
```



App component 안에 여러개의 component를 만들수 있다.

app.js에서 component들을 만들면 된다

니콜라스는 각각의 컴포넌트를 각각의 파일로 만드는걸 선호한다고 함



**src > movie.js**

```javascript
import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePoster />
        <h1> this is a movie poster</h1>
      </div>
    )
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img src="https://assets.mubi.com/images/notebook/post_images/22267/images-w1400.jpg?1474980339" width="200"/>
    )
  }
}

export default Movie
```



#### 2-2. Dataflow with Props

리액트에는 state와 props 이 두가지 주요 컨셉이 있다.

`state`는 유동적인 데이터를 다룰때 사용하고,

`props`는 component에서 사용할 데이터 중 변동되지 않는 데이터를 다룰때 사용된다.

props를 통해 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달한다.



메인 component가 데이터를 다 가지고 있다.

title, poster정보를 메인에 다 넣고 그걸 각각 component에 props를 이용해 출력한다.

**App.js**

```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Moonlight",
  "LALALAND",
  "Her",
  "Interstella"
]

const movieImages = [
  "https://assets.mubi.com/images/notebook/post_images/22267/images-w1400.jpg?1474980339",
  "https://i.pinimg.com/736x/48/c4/1d/48c41db9c83c6b8e9b745385c9faa0b9--poster-design-inspiration-poster-designs.jpg",
  "http://geeksoulbrother.com/wp-content/uploads/2013/11/her-movie-poster.jpg",
  "http://www.tinymixtapes.com/sites/default/files/1411/93adf4cc94ee6641c38e9cb64706abf5cf528229.jpg"
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;

```

**Movie.js**

```javascript
import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePoster poster={this.props.poster}/>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img src={this.props.poster} width="200"/>
    )
  }
}

export default Movie

```



#### 2-3. Lists with .map 

map기능으로 새로운 array를 생성해 출력해보자

**App.js**

```javascript
const movies = [
  {
    title: "Moonlight",
    poster: "https://assets.mubi.com/images/notebook/post_images/22267/images-w1400.jpg?1474980339"
  },
  {
    title: "LALALAND",
    poster: "https://i.pinimg.com/736x/48/c4/1d/48c41db9c83c6b8e9b745385c9faa0b9--poster-design-inspiration-poster-designs.jpg",
  },
  {
    title: "Her",
    poster: "http://geeksoulbrother.com/wp-content/uploads/2013/11/her-movie-poster.jpg"
  },
  {
    title: "Interstella",
    poster: "http://www.tinymixtapes.com/sites/default/files/1411/93adf4cc94ee6641c38e9cb64706abf5cf528229.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster} />
        })}
      </div>
    );
  }
}
```



console창을 확인해보면

Each child in an array or iterator should have a unique "key" prop. 이라고 뜨는데

react는 엘리먼트가 많을경우 key를 줘야한다고 한다.

key는 unique해야한다.



#### 2-4. Validating Props with PropTypes

```javascript
class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}
```

이렇게 key값을 추가해주면 에러가 사라진다.



**Props에 내가 원하는 값을 출력하고 싶다면?**

Movie Component에 `Proptypes` 를 추가하면 된다

`isRequired` 을 붙이면 title, poster prop을 제공하는 것이 필수요건으로 지정되어 만약 데이터가 주어지지 않았을 경우 오류메시지가 뜨게된다. 

```javascript
static propTypes = {
    title: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired
  }
```



### 3. Component Lifecycle



#### 3-1. Lifecycle Events on React

##### Render

render할때 (컴포넌트를 띄울때), 컴포넌트는 여러 기능들을 정해진 순서대로 실행한다. 그 순서는 아래와 같다.

(1)`WillMount`, (2) `render`, (3) `DidMount`

##### Update

update할때는 5단계를 거친다.

(1)`WillReceiveProps` (2) `Update`, (3) `WillUpdate`, (4) `render`, (5) `DidUpdate`





### 4. State



#### 4-1. Thinking in React: Component State

State는 리액트 컴포넌트 안에 있는 오브젝트이다.

규칙은 아래와같다.

**state를 변경하면, 컴포넌트는 새로운 state와 함께 다시 render한다.**

```javascript
  state = {
    greeting: 'Hello'
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({
          greeting: 'Hello again'
        })
    }, 5000) //5초후 greeting update
  }

```

컴포넌트가 mount할 때마다, greeting을 Hello에서 Hello again으로 변경한다는 뜻

state를 변경할때는 `setState`를 써야한다.



#### 4-2. Practicing this.setState()

기존 영화리스트에 새로운 영화를 추가해보자.

```javascript
componentDidMount() {
      setTimeout(() => {
        this.setState({
          movies: [
            ...this.state.movies,
            {
              title: "mad max",
              poster: "https://www.movieposter.com/posters/archive/main/201/MPW-100532"
            }
          ]
        })
      }, 3000)
  }
```

3초 후 기존 영화 리스트 아래에 매드맥스 포스터가 나타난다

`...this.state.movies` 를 없애면?

3초후 모든 영화 리스트가 사라지고 내가 추가한 영화만 남을 것.

`...this.state.movies`	 위치를 바꾸면?

3초후 모든 영화 리스트 상단에 내가 새로추가한 영화 포스터가 나타난다.

이를 활용하면 **infinite scroll**을 구현 할수 있다.



#### 4-3. Loading States

API콜을 timeout 기능으로 구현해보기

새로운 function 생성 (리액트는 자체 기능이 많기 때문에 구분하기 위해 내가 작성한 function 코드는 _를 붙이기로 함)

```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {
    }

  componentDidMount() {
      setTimeout(() => {
        this.setState({
          movies: [
            {
              title: "Moonlight",
              poster: "https://assets.mubi.com/images/notebook/post_images/22267/images-w1400.jpg?1474980339"
            },
            {
              title: "LALALAND",
              poster: "https://i.pinimg.com/736x/48/c4/1d/48c41db9c83c6b8e9b745385c9faa0b9--poster-design-inspiration-poster-designs.jpg",
            },
            {
              title: "Her",
              poster: "http://geeksoulbrother.com/wp-content/uploads/2013/11/her-movie-poster.jpg"
            },
            {
              title: "Interstella",
              poster: "http://www.tinymixtapes.com/sites/default/files/1411/93adf4cc94ee6641c38e9cb64706abf5cf528229.jpg"
            },
            {
              title: "mad max",
              poster: "https://www.movieposter.com/posters/archive/main/201/MPW-100532"
            }
          ]
        })
      }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;

```

> 데이터가 없을때 로딩을 띄우고, 있으면 영화정보가 보이도록 함



### 

#### 5-1. Smart vs Dumb Components

모든 컴포넌트가 state이 있는것은 아니다.

state이 없고 props밖에 없을때는 클래스 컴포넌트를 쓰는 대신에 functional component을 쓸수있다.

```javascript
function Movie({title, poster}) {
  return (
    <div>
        <MoviePoster poster={poster} />
        <h1>{title}</h1>
    </div>
  )
}

function MoviePoster({poster}) {
  return (
      <img src={poster} alt="Movie Poster" width="200"/>
  )
}


Movie.propTypes = {
  title: Proptypes.string.isRequired,
  poster: Proptypes.string.isRequired
}
MoviePoster.propTypes = {
  poster: Proptypes.string.isRequired
}

```

> functional component는 클래스가 아니기 때문에 poster만 남김. 

이 컴포넌트는 componentWillMount, function, update state, ..다 필요없고 하나의 props만 있으면 된다.

function render 없고 lifecyle도 없다!



### 6. AJAX

#### 6-1. Ajax in React

ajax는 오브젝트를 자바스크립트로 작성하는 기법이다.

뭔가를 불러올때마다 비동기라서 페이지 새로고침을 안해도 됨

react에 적용하는 방법은 fetch를 이용해 사용한다.

이 강의에서는 get에 대해서만 다룬다고 한다.

API - YTS 토렌트 영화 데이터베이스에서 영화DB 가져올것임

```javascript
componentDidMount() {
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
  }
```

> state = {} 을 없앴더니 에러가 났다.



#### 6-2. Promises

- Javascript(ES6) concept
- Asynchronous programming



```javascript
componentDidMount() {
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
fetch('hello')
}
```

> Synchronous - 2번째 fetch('hello')는 첫번째 fetch가 끝나지 않으면 실행되지 않는다 - 

첫번째 fetch에 해당하는 서버가 느릴경우 두번째 fetch는 계속 기다려야 하는 일이 생길수 있으므로 좋지 않다.

(또 내가 영화를 불러오고 싶고, 동시에 set state, call component 등을 하고싶을때)

이럴 경우 promise를 사용한다.

이게 좋은 이유는 계속 다른 작업을 스케줄 해놓을수 있기 때문이다. 그리고 모든 작업들은 다른 작업 수행이랑 관계없이 진행된다.

##### Promise 적용하기 (then을 쓰면됨)

```js
componentDidMount() {
 
 fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
 .then(response => console.log(response))
 .catch(err => console.log(err))
}
```

> fetch 작업이 완료되면(성공적 수행이 아닌) then을 해라
>
> 만약 에러가 있으면 err를 잡아서 보여줘.

then function은  fetch의 결과물 1개의 attribute(object)만 준다. 그 이름을 response라고 정함(다른 변수이름을 써도 무방).



response를 통해서 여러정보를 알수있다.

첫번째 response object, 이걸 우리가 확인할 수 있는 json으로 바꾸고 콘솔로그에서 확인해보자.

```js
componentDidMount() {
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
}
```



#### 6-3. Async Await in React

##### 영화리스트들을 state에 올리기

```js
componentDidMount() {
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json =>{
      this.setState({
        movies: json.data.movies
      })
      .then(() => .then())
      CALLBACK HELL!
    })
    .catch(err => console.log(err))
}
```

> 애플리케이션이 큰 경우, 이런식으로 then 안에 then으로 연결하면(then 이 많아져서 길을 잃어버리는)
>
> call back hell에 빠질수있다고 한다.



##### sync, await 사용하기

새로운 Function 생성하고 불러오자

```js
componentDidMount() {
    this._getMovies();
  }

  _getMovies = () => {

  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  }
```

그다음 async 와 await를 사용한다

```js
_getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }
```

> call api기능이 끝나기를 기다리고(성공적 수행이 아닌) callApi의 retun value 를 movies에 set 한다.



```js
_callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
}
```

> =>(arrow function)은 return 작성할 필요없다. 내재되어 있기 때문에



마지막으로 movie 오브젝트가 변경됬기 때문에 poster 부분을 수정해준다

```js
_renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} />
    })
    return movies
}
```

>movie 오브젝트 안에 title은 있었기 때문에 에러가 안났다.
>
>그리고, key는 index일 필요가 없어서 영화 id로 수정했다.
>
>왜냐하면 컴포넌트의 key는 인덱스를 사용하면 느리기 때문이라고 한다. 



##### localhost:3000으로 가보면 영화 목록이 쨘👏🏻

이제 이쁘게 꾸며서 배포해보자



###### LINKS

- [Async Await vs Promises](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9#.8dv1y7ilu)



##### 

### 7. Finishing Up

#### 7-1. Updating Component

console에서 컴포넌트에 사용 할만한 값들 찾아서 추가하기

```js
function Movie({title, poster, genres, synopsis}) {
  return (
    <div className="Movie">
      <div className="Movie-Columns">
        <MoviePoster poster={poster} alt={title}/>
      </div>
      <div className="Movie-Columns">
        <h1>{title}</h1>
        <div className="Movie-Genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <p className="Movie-Synopsis">
          {synopsis}
        </p>
      </div>
    </div>
  )
}

function MoviePoster({poster, alt}) {
  return (
      <img src={poster} alt={alt} title={alt} className="Movie-Poster" />
  )
}
function MovieGenre({genre}) {
  return (
    <span className="Movie-Genres">{genre} </span>
  )
}

Movie.propTypes = {
  title: Proptypes.string.isRequired,
  poster: Proptypes.string.isRequired,
  genres: Proptypes.array.isRequired,
  synopsis: Proptypes.string.isRequired
}
MoviePoster.propTypes = {
  poster: Proptypes.string.isRequired,
  alt: Proptypes.string.isRequired
}
MovieGenre.propTypes = {
  genre: Proptypes.array.isRequired
}

export default Movie;
```

> 모든걸 컴포넌트로 쪼개고, 작게 만드는것이 더 세련된 코딩기법 이라고 하셨다.



#### 7-2. Giving some CSS to

이제 css로 꾸미기만 하면 진짜 끝!

일단 `yarn add react-lines-ellipsis` 이 명령어로 Lines Ellipsis 라는 컴포넌트를 다운받는다.

니콜라스도 구글링해서 찾았다고 함

왜 필요하냐면 synopsis가 너무 길어서 일정 텍스트 길이만 보여주게 하려고!



평점을 별로 표현하기!

https://github.com/NdYAG/react-rater





### 8. Building for Production

- [Deploying a Create React App to Github pages](https://medium.freecodecamp.org/surge-vs-github-pages-deploying-a-create-react-app-project-c0ecbf317089)



gh-pages 브랜치 만들어서 깃헙 페이지에 올릴것이다!

`yarn build` :  최적화, 압축

완료되면 build 폴더가 생성된다.

package.json파일로 가서 "homepage" 부분을 추가한 후

다시 `yarn build` 실행!

그다음 `yarn add --dev gh-pages` 하고

package.json에 다시 script 추가!

그리고 마지막으로 `yarn run deploy`하면 끝!
