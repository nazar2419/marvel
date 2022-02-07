import ErrorMessage from '../components/errorMessage/ErrorMessage';
import {Link} from 'react-router-dom';
import { Helmet } from "react-helmet";
const Page404 = () => {
  <Helmet>
    <meta
      name="description"
      content="This page is not found"
     />
    <title>This page is not found</title>
    </Helmet>
  return (
    <div>
      <ErrorMessage/>
      <p style={{'display' : 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px',
      }}>Page doesn't exist</p>
      <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px',
        'marginTop': '30px'}} to="/">Back to main page</Link>
    </div>
  )
}

export default Page404;