import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from './config/routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import store from './redux/store'
import { Provider } from 'react-redux'
import AuthChecker from './auth/AuthChecker'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Provider store={store}>
        <Routes>
          { routes.map((route: any, index: any) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.protected ? (
                <AuthChecker>
                  <route.component />
                </AuthChecker>
                ) : (
                  <route.component />
                )
              }
              />
          )) }
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
