import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';
import './List.css';

class MyLists extends React.Component {
  // constructor() {
  //   super()

  //   this.state = {
  //     likesCount: {
  //       "39": 1
  //     }
  //   }
  // }

  // incrementLikes = (id) => {
  //   const prevLikes = this.state.likesCount[id]
  //   if(prevLikes) {
  //     this.setState({
  //       likesCount: {...this.state.likesCount, [id]: prevLikes + 1 }
  //     })
  //   } else {
  //     this.setState({
  //       likesCount: {...this.state.likesCount, [id]: 1}
  //     })
  //   }
  // }

  /* <List divided relaxed>
                    <List.Item>
                      <List.Icon
                        name="github"
                        size="large"
                        verticalAlign="middle"
                      />
                      <List.Content>
                        <List.Header as="a">
                          Semantic-Org/Semantic-UI
                        </List.Header>
                        <List.Description as="a">
                          Updated 10 mins ago
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon
                        name="github"
                        size="large"
                        verticalAlign="middle"
                      />
                      <List.Content>
                        <List.Header as="a">
                          Semantic-Org/Semantic-UI-Docs
                        </List.Header>
                        <List.Description as="a">
                          Updated 22 mins ago
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon
                        name="github"
                        size="large"
                        verticalAlign="middle"
                      />
                      <List.Content>
                        <List.Header as="a">
                          Semantic-Org/Semantic-UI-Meteor
                        </List.Header>
                        <List.Description as="a">
                          Updated 34 mins ago
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List> */

  render() {
    const listCards =
      this.props.lists.length > 0 ? (
        this.props.lists.map((l) => (
          <List.Item className="item" key={l.id}>
            {/* <i className="large list icon"></i> */}
            <List.Icon size="massive" verticalAlign="middle">
              <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-list-shopping-and-commerce-flatart-icons-lineal-color-flatarticons.png" />
            </List.Icon>
            <List.Content>
              <List.Header as="a">
                <h5>
                  <Link to={`/lists/${l.id}`}>{l.attributes.name}</Link>
                </h5>
              </List.Header>
              <List.Description as="a">
                {l.attributes.description}
              </List.Description>
              {/* <button className="likes" onClick={() => this.incrementLikes(l.id)}>{this.state.likesCount[l.id]} Likes</button> */}
            </List.Content>
          </List.Item>
        ))
      ) : (
        <h2>Create lists to start adding restaurants and recipes!</h2>
      );

    return (
      <div className="list-content ">
        <h3>These are your lists:</h3>

        <List divided relaxed animated celled size="massive">
          {listCards}
        </List>
        <Link className="ui button primary" to="/lists/new">
          Create New List
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({ myLists }) => {
  return {
    lists: myLists,
  };
};

export default connect(mapStateToProps)(MyLists);
