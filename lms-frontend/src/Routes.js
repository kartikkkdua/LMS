import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';
import CreateZoomMeeting from './components/CreateZoomMeeting';
import QuizList from './components/Quizzes/QuizList';
import CreateQuiz from './components/Quizzes/CreateQuiz';
import { useHistory } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/create-quiz" element={<CreateQuiz />} />
      <Route path="/quizzes" element={<QuizList />} />
      <Route path="/create-zoom-meeting" element={<CreateZoomMeeting />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <YourComponentUsingHistory />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRoutes;
