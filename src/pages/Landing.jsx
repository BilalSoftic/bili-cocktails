import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  return 'something';
};

function Landing() {
  const data = useLoaderData();
  return <div>Landing</div>;
}
export default Landing;
