// import {mount, ReactWrapper} from 'enzyme';
// import React from 'react';
// import {act} from 'react-dom/test-utils';
// import {MovieList} from './MovieList';
// import {IAuthContext, useAuth} from '../../context/AuthContext';
// import {BrowserRouter as Router} from 'react-router-dom';
// import {getMovie, getPopular} from '../../api/api';
// import {ThemeProvider} from 'styled-components';
// import {theme} from '../../themes';

// jest.mock('../../api/api');
// jest.mock('../../context/AuthContext');

// const setup = () =>
//   mount(
//     <ThemeProvider theme={theme}>
//       <Router>
//         <MovieList />
//       </Router>
//     </ThemeProvider>
//   );

// describe('Movie List', () => {
//   let wrapper: ReactWrapper;

//   beforeEach(async () => {
//     await act(async () => {
//       wrapper = setup();
//     });
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('Should render the component', () => {
//     expect(wrapper.exists()).toBeTruthy();
//     wrapper.update();
//     console.log(wrapper.debug());
//   });

//   it('should call getPopular without crashing', () => {
//     console.log(wrapper.debug());

//     expect(getPopular).toHaveBeenCalled();
//   });
// });

// describe('Non-auth user', () => {
//   let wrapper: ReactWrapper;

//   beforeEach(async () => {
//     (useAuth as jest.Mock<
//       Partial<IAuthContext & {isAuthenticated: boolean}>
//     >).mockReturnValue({
//       token: '',
//       userId: 'testID',
//       login: jest.fn(),
//       logout: jest.fn(),
//       isAuthenticated: false,
//     });

//     wrapper = await setup();
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('Should not render getMovie if token is false', async () => {
//     wrapper.update();
//     expect(getMovie).toHaveBeenCalledTimes(0);
//   });
// });
