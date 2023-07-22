import { useNavigate, useParams } from 'react-router-dom';

export const withRouter = Component => props => {
  const navigate = useNavigate();
  const params = useParams(); 
  return (
    <Component
      navigate={navigate}
      params={params}
      {...props}
      />
  );
};