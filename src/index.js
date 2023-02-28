import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// scroll bar
import 'simplebar/src/simplebar.css';

// third-party
import { Provider as ReduxProvider } from 'react-redux';

// apex-chart
import 'assets/third-party/apex-chart.css';

// project import
import App from './App';
import { store } from 'store';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
// ==============================|| MAIN - REACT DOM RENDER  ||============================== //
ReactDOM.render(
    <RecoilRoot>
        <StrictMode>
            <ReduxProvider store={store}>
                <BrowserRouter basename="/">
                    <App />
                </BrowserRouter>
            </ReduxProvider>
        </StrictMode>
    </RecoilRoot>,
    document.getElementById('root')
);
reportWebVitals();
