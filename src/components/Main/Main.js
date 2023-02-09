import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';

export default function Main() {
  const { user } = useUser();

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return <h1>Content</h1>;
}
