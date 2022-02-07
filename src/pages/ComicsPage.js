import { Helmet } from 'react-helmet';

import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";
import ComicsList from "../components/comicsList/ComicsList";
import AppBaner from "../components/appBanner/AppBanner";

const ComicsPage = () => {
  return (
    <>
     <Helmet>
        <meta 
            name="description"
            content="Marvel information portal"
            />
        <title>Comics Page</title>
      </Helmet>
      <AppBaner/>
      <ErrorBoundary>
        <ComicsList/>
      </ErrorBoundary>
    </>
  )
}
export default ComicsPage;