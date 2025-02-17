import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import getRecipientEmail from "../utils/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

import { useRouter } from "next/router";

function Chat({ id, users }) {
  const router = useRouter();

  const [user] = useAuthState(auth);
  const recipientEamil = getRecipientEmail(users, user);
  const [recipientSnapshot] = useCollection(
    db.collection("users").where("email", "==", getRecipientEmail(users, user))
  );

  const enterChat = () => {
    router.push(`/chat/${id}`);
  };
  const recipient = recipientSnapshot?.docs?.[0]?.data();
  return (
    <Container onClick={enterChat}>
      {recipient ? (
        <UserAvatar src={recipient?.photoURL} />
      ) : (
        <UserAvatar>{recipientEamil[0]}</UserAvatar>
      )}

      <p>{recipientEamil}</p>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 1px 15px;
  word-break: break-word;

  &:hover {
    background-color: #e9eaeb;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
