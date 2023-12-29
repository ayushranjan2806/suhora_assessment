import LoginForm from './components/LoginForm';
import './App.css';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import SignupForm from './components/SignupForm';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
       <Provider store={store}>
                <BrowserRouter>
                    
                    <Routes>
                        <Route path="/" element={<LoginForm />}></Route>
                        {/* <Route path="/s" element={<SignupForm/>}></Route> */}
                    </Routes>
                </BrowserRouter>
                </Provider>

    </div>
  );
}

export default App;
