import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
//MainComponentで使用
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

//読み込むコンポーネント
import IndexComponent from './components/IndexComponent.js'
import SectionA from './components/SectionA.js'
import SectionB from './components/SectionB.js'

injectTapEventPlugin();


/* redux */
//action
const onMenuOpen = {
  type: 'MENU_OPEN'
}
//reducer
let menuState = {
  onMenues: false
}
const Reducer = (state = menuState, action) => {
  switch (action.type) {
    case 'MENU_OPEN':
      return{
        onMenues: !state.onMenues
      }
    default:
      return state;
  }
}
//store
const store = createStore(Reducer)




/* react-redux */
/* MainComponentがもとも大きなコンポーネント */
class MainComponent extends React.Component{
  render(){
    const { onMenu, MenuOpenClick } = this.props;
    return (
      <div>
        <AppBar
          title="Logistics"
          onLeftIconButtonTouchTap={this.props.MenuOpenClick}
        />

        <Drawer open={this.props.onMenu} openSecondary={true}>
          <Link to="/" onClick={this.props.MenuOpenClick}><MenuItem>index</MenuItem></Link>
          <Link to="/a" onClick={this.props.MenuOpenClick}><MenuItem>page A</MenuItem></Link>
          <Link to="/b" onClick={this.props.MenuOpenClick}><MenuItem>page B</MenuItem></Link>
        </Drawer>

        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    onMenu: state.onMenues
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    MenuOpenClick:() => {dispatch(onMenuOpen)}
  }
}
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent)


ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={IndexComponent} />
          <Route path="a" component={SectionA} />
          <Route path="b" component={SectionB} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
)
