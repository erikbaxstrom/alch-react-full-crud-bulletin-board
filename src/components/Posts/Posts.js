import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';

export default function Posts() {
  const { user } = useUser();

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return <h1>Woo!</h1>;
}
