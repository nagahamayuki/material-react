import React from 'react'
import Paper from 'material-ui/Paper'

const messenger = {
  root: {
    display: 'flex',
    height: 'calc(100vh - 64px)'
  },
  menu: {
    flex: '0 0 25%',
    maxWidth: 420,
    minWidth: 240,
    borderRight: '1px solid rgba(0, 0, 0, .10)'
  },
  rightComponent: {
    display: 'flex',
    flex: '1 1 0%',
    flexDirection: 'row-reverse'
  },
  right1: {
    flex: '2 0 0%',
    borderRight: '1px solid rgba(0, 0, 0, .10)',
    height: '100%',
    overflow: 'auto'
  },
  right2: {
    flex: '0 2 33.33%',
    maxWidth: 420,
    minWidth: 200,
    height: '100%',
    overflow: 'auto'
  }
}

export default class IndexComponent extends React.Component{
  render(){
    return(
      <div>
        <div style={messenger.root}>
          <div style={messenger.menu}>
            <ListComponent />
          </div>
          <div style={messenger.rightComponent}>
            <div style={messenger.right2}>b-2</div>
            <div style={messenger.right1}>
              <ChatComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import {List, ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import ActionInfo from 'material-ui/svg-icons/action/info'
import FileFolder from 'material-ui/svg-icons/file/folder'

const listStyle = {
  list: {
    padding: 0,
    height: '100%',
    overflow: 'auto'
  }
}
const listDatas = [
  {id: 0, primaryText: 'photos', secondaryText: 'Jan, 9 2016'},
  {id: 1, primaryText: 'photos', secondaryText: 'Jan, 9 2016'},
  {id: 2, primaryText: 'photos', secondaryText: 'Jan, 9 2016'},
  {id: 3, primaryText: 'photos', secondaryText: 'Jan, 9 2016'},
  {id: 4, primaryText: 'photos', secondaryText: 'Jan, 9 2016'},
  {id: 5, primaryText: 'photos', secondaryText: 'Jan, 9 2016'},
  {id: 6, primaryText: 'photos', secondaryText: 'Jan, 9 2016'},
  {id: 7, primaryText: 'photos', secondaryText: 'Jan, 9 2016'},
  {id: 8, primaryText: 'photos', secondaryText: 'Jan, 9 2016'},
  {id: 9, primaryText: 'photos', secondaryText: 'Jan, 9 2016'},
  {id: 10, primaryText: 'photos', secondaryText: 'Jan, 9 2016'},
  {id: 11, primaryText: 'photos', secondaryText: 'Jan, 9 2016'},
  {id: 12, primaryText: 'photos', secondaryText: 'Jan, 9 2016'},
  {id: 13, primaryText: 'photos', secondaryText: 'Jan, 9 2016'},
  {id: 14, primaryText: 'photos', secondaryText: 'Jan, 9 2016'},
  {id: 15, primaryText: 'photos', secondaryText: 'Jan, 9 2016'},
  {id: 16, primaryText: 'photos', secondaryText: 'Jan, 9 2016'},
  {id: 17, primaryText: 'photos', secondaryText: 'Jan, 9 2016'}
]
class ListComponent extends React.Component{
  render(){
    return(
      <List style={listStyle.list}>
        {
          listDatas.map((list) =>
            <ListItem
              key={list.id}
              leftAvatar={<Avatar icon={<FileFolder />} />}
              rightIcon={<ActionInfo />}
              primaryText={list.primaryText}
              secondaryText={list.secondaryText}
            />
          )
        }
      </List>
    );
  }
}

/* chat */
class ChatComponent extends React.Component{
  render(){
    return(
      <div>hello</div>
    );
  }
}
