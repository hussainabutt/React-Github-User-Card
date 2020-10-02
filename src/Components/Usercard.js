import React from "react";

function UserCard(props) {
  return (
    <div>
      <img key={props.id} alt="avatar" src={props.props.avatar_url}></img>
      <h5>{props.props.login}</h5>
    </div>
  );
}
export default UserCard;
